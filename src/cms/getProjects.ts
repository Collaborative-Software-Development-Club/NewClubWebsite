import { Client } from '@notionhq/client';
import assert from 'assert';
import NotionDatabaseFetcher, { ComparableData } from './NotionDatabaseFetcher';
import {
    NotionDateParser,
    NotionMultiSelectParser,
    NotionRichTextParser,
    NotionTitleParser,
    NotionURLParser,
} from './parsing';
import DataSortedByDescendingDate from './DataSortedByDescendingDate';

export default async function getProjects(): Promise<ProjectData[]> {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.PROJECTS_DATABASE_ID;
    assert(databaseId !== undefined, "PROJECTS_DATABASE_ID can't be undefined");
    return new NotionProjectsFetcher(databaseId, notion).get();
}

export class ProjectData extends DataSortedByDescendingDate {
    constructor(
        public title: string,
        public description: string,
        public tags: string[],
        public url: string,
        public date: Date | [Date, Date],
    ) {
        super();
    }
}

const DATABASE_PROPERTIES = {
    name: 'Name',
    description: 'Description',
    tags: 'Tags',
    link: 'Link',
    date: 'Timeline',
};

class NotionProjectsFetcher extends NotionDatabaseFetcher<ProjectData> {
    constructor(databaseId: string, notionClient: Client) {
        super(databaseId, notionClient);
    }
    protected parsePageProperties(properties: any): ProjectData {
        const parsedProjectName = new NotionTitleParser(
            properties[DATABASE_PROPERTIES.name],
        ).parse();
        this.assertPropertyIsMissing(parsedProjectName, DATABASE_PROPERTIES.name);
        const parsedDescription = new NotionRichTextParser(
            properties[DATABASE_PROPERTIES.description],
        ).parse();
        this.assertPropertyIsMissing(parsedDescription, DATABASE_PROPERTIES.description);
        const parsedTags = new NotionMultiSelectParser(
            properties[DATABASE_PROPERTIES.tags],
        ).parse();
        this.assertPropertyIsMissing(parsedTags, DATABASE_PROPERTIES.tags);
        const parsedLink = new NotionURLParser(properties[DATABASE_PROPERTIES.link]).parse();
        this.assertPropertyIsMissing(parsedLink, DATABASE_PROPERTIES.link);
        const parsedDate = new NotionDateParser(properties[DATABASE_PROPERTIES.date]).parse();
        this.assertPropertyIsMissing(parsedDate, DATABASE_PROPERTIES.date);
        return new ProjectData(
            parsedProjectName,
            parsedDescription,
            parsedTags,
            parsedLink,
            parsedDate,
        );
    }
}
