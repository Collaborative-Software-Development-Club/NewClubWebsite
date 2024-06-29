import { Client } from '@notionhq/client';
import assert from 'assert';
import { NotionDBFetcher } from './notion-db-fetcher';
import compareNotionDatesDescending from './compareNotionDatesDescending';

export default async function getProjects(): Promise<ProjectData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.PROJECTS_DATABASE_ID;
    assert(databaseId !== undefined, "PROJECTS_DATABASE_ID can't be undefined");
    const databaseFetcher = new NotionDBFetcher<ProjectData>(databaseId, notion, mapping);
    return (await databaseFetcher.get()).sort(compareNotionDatesDescending);
}

export interface ProjectData {
    title: string;
    description: string;
    tags: string[];
    url: string;
    date: Date | [Date, Date];
}

const mapping = {
    title: 'Name',
    description: 'Description',
    tags: 'Tags',
    url: 'Link',
    date: 'Timeline',
};
