import { Client, isFullPage } from '@notionhq/client';
import {
    DatabaseObjectResponse,
    PageObjectResponse,
    PartialDatabaseObjectResponse,
    PartialPageObjectResponse,
    QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import NotionPropertyParserFactory from './parsing/NotionPropertyParserFactory';
import MissingPropertyValueError from './errors/MissingPropertyValueError';
import MissingPropertyError from './errors/MissingPropertyError';

type NotionDBMapping<T> = Record<keyof T, string | { name: string; mandatory: boolean }>;

export default class NotionDBFetcher<T> {
    private propertyParserFactory: NotionPropertyParserFactory = new NotionPropertyParserFactory();
    constructor(
        private databaseId: string,
        private notionClient: Client,
        private mapping: NotionDBMapping<T>,
    ) {}
    public async get(): Promise<T[]> {
        const response = await this.fetch();
        return this.parseResponse(response);
    }
    private async fetch(): Promise<QueryDatabaseResponse> {
        try {
            const response = await this.notionClient.databases.query({
                database_id: this.databaseId,
            });
            return response;
        } catch (error: any) {
            throw new NotionAPIError(error.toString());
        }
    }
    // TODO: refactor this method
    private parsePageProperties(properties: any): T {
        console.log(properties);
        const values: Record<string, unknown> = {};
        for (const key in this.mapping) {
            const value = this.mapping[key];
            let propertyName;
            let mandatory = true;
            if (typeof value === 'string') {
                propertyName = value;
            } else {
                propertyName = value.name;
                mandatory = value.mandatory;
            }
            if (!(propertyName in properties)) {
                throw new MissingPropertyError(propertyName);
            } else {
                const propertyValue = this.propertyParserFactory
                    .getPropertyParser(properties[propertyName])
                    .parse();
                if (mandatory) {
                    this.assertPropertyValueIsMissing(propertyValue, propertyName);
                }
                values[key] = propertyValue;
            }
        }
        return values as T;
    }
    public parseResponse(response: QueryDatabaseResponse): T[] {
        const results = response.results;
        this.assertResultsAreFullPages(results);
        const items = results.map((result) => {
            const properties = result.properties;
            return this.parsePageProperties(properties);
        });
        return items;
    }
    private assertResultsAreFullPages(
        results: (
            | PageObjectResponse
            | PartialPageObjectResponse
            | PartialDatabaseObjectResponse
            | DatabaseObjectResponse
        )[],
    ): asserts results is PageObjectResponse[] {
        results.forEach((result) => {
            if (!isFullPage(result)) {
                throw new NotionAPIError(
                    `Result ${JSON.stringify(result)} is not a full page object`,
                );
            }
        });
    }
    private assertPropertyValueIsMissing<T>(
        parsedProperty: T,
        propertyName: string,
    ): asserts parsedProperty is NonNullable<T> {
        if (parsedProperty === undefined) {
            throw new MissingPropertyValueError(propertyName);
        }
    }
}

class NotionAPIError extends Error {}
