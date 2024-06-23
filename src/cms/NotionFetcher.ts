import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export default abstract class NotionDatabaseFetcher<T> {
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
    protected abstract parseResponse(response: QueryDatabaseResponse): T[];
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
