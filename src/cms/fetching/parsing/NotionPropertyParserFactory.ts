import {
    NotionDateParser,
    NotionImageParser,
    NotionMultiSelectParser,
    NotionNumberParser,
    NotionRichTextParser,
    NotionTitleParser,
    NotionURLParser,
} from '.';

import NotionParsingError from './ParsingError';
import NotionPropertyParser from './NotionPropertyParser';

export default class NotionPropertyParserFactory {
    constructor() {}
    public getPropertyParser(property: any): NotionPropertyParser<unknown> {
        console.log(property);
        switch (property.type) {
            case 'title':
                return new NotionTitleParser(property);
            case 'rich_text':
                return new NotionRichTextParser(property);
            case 'number':
                return new NotionNumberParser(property);
            case 'date':
                return new NotionDateParser(property);
            case 'multi_select':
                return new NotionMultiSelectParser(property);
            case 'url':
                return new NotionURLParser(property);
            case 'files':
                return new NotionImageParser(property);
            default:
                throw new NotionParsingError(property, 'Unknown property type');
        }
    }
}
