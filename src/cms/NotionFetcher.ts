import { Client, isFullDatabase, isFullPage } from '@notionhq/client';
import {
    DatabaseObjectResponse,
    PageObjectResponse,
    PartialDatabaseObjectResponse,
    PartialPageObjectResponse,
    QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

export interface ComparableData {
    compare(other: ComparableData): number;
}

export default abstract class NotionDatabaseFetcher<T extends ComparableData> {
    constructor(private databaseId: string, private notionClient: Client) {}
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
    protected abstract parsePageProperties(properties: any): T;
    public parseResponse(response: QueryDatabaseResponse): T[] {
        const results = response.results;
        this.assertResultsAreFullPages(results);
        const items = results
            .map((result) => {
                const properties = result.properties;
                return this.parsePageProperties(properties);
            })
            .sort((a, b) => a.compare(b));
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
    protected assertPropertyIsMissing<T>(
        parsedProperty: T,
        propertyName: string,
    ): asserts parsedProperty is NonNullable<T> {
        if (parsedProperty === undefined) {
            throw new MissingPropertyError(propertyName);
        }
    }
}

class NotionAPIError extends Error {}

class MissingPropertyError extends Error {
    constructor(propertyName: string) {
        super(`Missing property: ${propertyName} on Notion database.`);
    }
}
