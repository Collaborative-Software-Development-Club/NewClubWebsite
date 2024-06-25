import { Client } from '@notionhq/client';
import assert from 'assert';
import NotionDatabaseFetcher from './NotionDatabaseFetcher';
import { NotionDateParser, NotionRichTextParser, NotionTitleParser } from './parsing';
import DataSortedByDescendingDate from './DataSortedByDescendingDate';

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
    protected parsePageProperties(properties: any): EventData {
        const parsedTitle = new NotionTitleParser(properties[DATABASE_PROPERTIES.title]).parse();
        this.assertPropertyIsMissing(parsedTitle, DATABASE_PROPERTIES.title);
        const parsedDescription = new NotionRichTextParser(
            properties[DATABASE_PROPERTIES.description],
        ).parse();
        this.assertPropertyIsMissing(parsedDescription, DATABASE_PROPERTIES.description);
        const parsedLocation = new NotionRichTextParser(
            properties[DATABASE_PROPERTIES.location],
        ).parse();
        const parsedDate = new NotionDateParser(properties[DATABASE_PROPERTIES.date]).parse();
        this.assertPropertyIsMissing(parsedDate, DATABASE_PROPERTIES.date);
        return new EventData(parsedTitle, parsedDescription, parsedDate, parsedLocation);
    }
}

export class EventData extends DataSortedByDescendingDate {
    constructor(
        public title: string,
        public description: string,
        public date: Date | [Date, Date],
        public location?: string,
    ) {
        super();
    }
}

const DATABASE_PROPERTIES = {
    title: 'Title',
    description: 'Description',
    location: 'Location',
    date: 'Date',
};
