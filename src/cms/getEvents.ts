import { Client, isFullDatabase, isFullPageOrDatabase } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import assert from 'assert';
import NotionDatabaseFetcher, { ComparableData } from './NotionFetcher';
import {
    NotionDateParser,
    NotionRichTextParser,
    NotionTitleParser,
    PropertyValue,
} from './notionParsing';
import NotionPropertyParserFactory from './PropertyParserFactory';

export default async function getEvents(): Promise<EventData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.EVENTS_DATABASE_ID;
    assert(databaseId !== undefined, "EVENTS_DATABASE_ID can't be undefined");
    return new NotionEventesFetcher(databaseId, notion).get();
}

const desiredProperties = ['Title', 'Description', 'Location', 'Date'];

class NotionEventesFetcher extends NotionDatabaseFetcher<EventData> {
    constructor(databaseId: string, notionClient: Client) {
        super(databaseId, notionClient);
    }
    protected parsePageProperties(properties: any): EventData {
        console.log(properties);
        const parserFactory = new NotionPropertyParserFactory();
        const parsedProperties = desiredProperties.map((propertyName) => {
            const parser = parserFactory.getPropertyParser(properties[propertyName]);
            const parsedProperty = parser.parse();
            this.assertPropertyIsMissing(parsedProperty, propertyName);
            return parsedProperty;
        });
        return new EventData(
            parsedProperties[0] as string,
            parsedProperties[1] as string,
            parsedProperties[3] as Date | [Date, Date],
            parsedProperties[2] as string,
        );
    }
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
