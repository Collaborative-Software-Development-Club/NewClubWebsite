import { Client } from '@notionhq/client';
import assert from 'assert';
import { NotionDBFetcher } from '../../notion-db-fetcher';

export default async function getOfficers(): Promise<MemberData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.MEMBERS_DATABASE_ID;
    assert(databaseId !== undefined, "MEMBERS_DATABASE_ID can't be undefined");
    const dbFetcher = new NotionDBFetcher<MemberData>(databaseId, notion, mapping);
    return (await dbFetcher.get()).sort(compareOfficers);
}

export interface MemberData {
    name: string;
    description: string;
    position: string;
    photoUrl: string;
    order?: number;
}
function compareOfficers(a: MemberData, b: MemberData): number {
    let value: number;
    if (!a.order && !b.order) {
        value = 0;
    } else if (!b.order) {
        value = -1;
    } else if (!a.order) {
        value = 1;
    } else {
        value = a.order - b.order;
    }
    return value;
}

const mapping = {
    name: 'Name',
    description: 'Description',
    position: 'Position',
    photoUrl: 'Photo',
    order: { name: 'Order', mandatory: false },
};
