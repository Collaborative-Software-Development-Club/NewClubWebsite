import { Client } from '@notionhq/client';
import assert from 'assert';
import NotionDatabaseFetcher, { ComparableData } from './NotionFetcher';
import { NotionDateParser, NotionRichTextParser, NotionTitleParser } from './parsing';

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
    //.sort((a, b) => compareNotionDatesDescending(a.date, b.date));
}

export class EventData implements ComparableData {
    constructor(
        public title: string,
        public description: string,
        public date: Date | [Date, Date],
        public location?: string,
    ) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.date = date;
    }
    compare(other: EventData): number {
        if (this.date instanceof Date && other.date instanceof Date) {
            return compareDatesDescending(this.date, other.date);
        } else if (!(this.date instanceof Date) && !(other.date instanceof Date)) {
            return compareDatesDescending(this.date[0], other.date[0]);
        } else if (this.date instanceof Date && !(other.date instanceof Date)) {
            return compareDatesDescending(this.date, other.date[0]);
        } else if (!(this.date instanceof Date) && other.date instanceof Date) {
            return compareDatesDescending(this.date[0], other.date);
        } else {
            throw new Error(`Could not compare ${this.date} and ${other.date}`);
        }
    }
}

function compareDatesDescending(dateA: Date, dateB: Date): number {
    return dateB.getTime() - dateA.getTime();
}

const DATABASE_PROPERTIES = {
    title: 'Title',
    description: 'Description',
    location: 'Location',
    date: 'Date',
};
