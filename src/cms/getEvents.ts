import { Client, isFullPageOrDatabase } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import assert from 'assert';
import NotionDatabaseFetcher from './NotionFetcher';
import { NotionDateParser, NotionRichTextParser, NotionTitleParser } from './notionParsing';
import compareNotionDatesDescending from './compareNotionDatesDescending';

export default async function getEvents(): Promise<EventData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.EVENTS_DATABASE_ID;
    assert(databaseId !== undefined, "EVENTS_DATABASE_ID can't be undefined");
    return new NotionEventesFetcher(databaseId, notion).get();
}

class NotionEventesFetcher extends NotionDatabaseFetcher<EventData> {
    constructor(databaseId: string, notionClient: Client) {
        super(databaseId, notionClient);
    }
    protected parseResponse(response: QueryDatabaseResponse): EventData[] {
        const results = response.results;
        const items = results
            .filter((result) => isFullPageOrDatabase(result))
            .map((result) => {
                const properties = result.properties;
                const parsedTitle = new NotionTitleParser(
                    properties[DATABASE_PROPERTIES.title],
                ).parse();
                this.assertPropertyIsMissing(parsedTitle, DATABASE_PROPERTIES.title);
                const parsedDescription = new NotionRichTextParser(
                    properties[DATABASE_PROPERTIES.description],
                ).parse();
                this.assertPropertyIsMissing(parsedDescription, DATABASE_PROPERTIES.description);
                const parsedLocation = new NotionRichTextParser(
                    properties[DATABASE_PROPERTIES.location],
                ).parse();
                const parsedDate = new NotionDateParser(
                    properties[DATABASE_PROPERTIES.date],
                ).parse();
                this.assertPropertyIsMissing(parsedDate, DATABASE_PROPERTIES.date);
                return {
                    title: parsedTitle,
                    description: parsedDescription,
                    location: parsedLocation,
                    date: parsedDate,
                };
            })
            .sort((a, b) => compareNotionDatesDescending(a.date, b.date));
        return items;
    }
}

export interface EventData {
    title: string;
    description: string;
    location?: string;
    date: Date | [Date, Date];
}

const DATABASE_PROPERTIES = {
    title: 'Title',
    description: 'Description',
    location: 'Location',
    date: 'Date',
};
