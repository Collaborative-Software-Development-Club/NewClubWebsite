import { Client, isFullPageOrDatabase } from '@notionhq/client';
import assert from 'assert';
import NotionDatabaseFetcher, { ComparableData } from './NotionFetcher';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import {
    NotionImageParser,
    NotionNumberParser,
    NotionRichTextParser,
    NotionTitleParser,
} from './notionParsing';

export default async function getOfficers(): Promise<MemberData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.MEMBERS_DATABASE_ID;
    assert(databaseId !== undefined, "MEMBERS_DATABASE_ID can't be undefined");
    return new NotionMembersFetcher(databaseId, notion).get();
}

export class MemberData implements ComparableData {
    constructor(
        public name: string,
        public description: string,
        public position: string,
        public photoUrl: string,
        private order?: number,
    ) {}

    compare(other: MemberData): number {
        let value: number;
        if (!this.order && !other.order) {
            value = 0;
        } else if (!other.order) {
            value = -1;
        } else if (!this.order) {
            value = 1;
        } else {
            value = this.order - other.order;
        }
        console.log('value', value);
        return value;
    }
}

const DATABASE_PROPERTIES = {
    name: 'Name',
    description: 'Description',
    position: 'Position',
    photoUrl: 'Photo',
    order: 'Order',
};

class NotionMembersFetcher extends NotionDatabaseFetcher<MemberData> {
    constructor(databaseId: string, notionClient: Client) {
        super(databaseId, notionClient);
    }
    protected parsePageProperties(properties: any): MemberData {
        const parsedMemberName = new NotionTitleParser(
            properties[DATABASE_PROPERTIES.name],
        ).parse();
        this.assertPropertyIsMissing(parsedMemberName, DATABASE_PROPERTIES.name);
        const parsedDescription = new NotionRichTextParser(
            properties[DATABASE_PROPERTIES.description],
        ).parse();
        this.assertPropertyIsMissing(parsedDescription, DATABASE_PROPERTIES.description);
        const parsedPosition = new NotionRichTextParser(
            properties[DATABASE_PROPERTIES.position],
        ).parse();
        this.assertPropertyIsMissing(parsedPosition, DATABASE_PROPERTIES.position);
        const parsedPhotoUrl = new NotionImageParser(
            properties[DATABASE_PROPERTIES.photoUrl],
        ).parse();
        this.assertPropertyIsMissing(parsedPhotoUrl, DATABASE_PROPERTIES.photoUrl);
        const parsedOrder = new NotionNumberParser(properties[DATABASE_PROPERTIES.order]).parse();
        return new MemberData(
            parsedMemberName,
            parsedDescription,
            parsedPosition,
            parsedPhotoUrl,
            parsedOrder,
        );
    }
}
