import { Client } from '@notionhq/client';
import assert from 'assert';
import { NotionDBFetcher } from '../../notion-db-fetcher';
import compareNotionDatesDescending from './compareNotionDatesDescending';

export default async function getEvents(): Promise<EventData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.EVENTS_DATABASE_ID;
    assert(databaseId !== undefined, "EVENTS_DATABASE_ID can't be undefined");
    const dataBaseFetcher = new NotionDBFetcher<EventData>(databaseId, notion, mapping);
    return (await dataBaseFetcher.get()).sort(compareNotionDatesDescending);
}

export interface EventData {
    title: string;
    description: string;
    date: Date | [Date, Date];
    location?: string;
}

const mapping = {
    title: 'Title',
    description: 'Description',
    date: 'Date',
    location: { name: 'Location', mandatory: false },
};
