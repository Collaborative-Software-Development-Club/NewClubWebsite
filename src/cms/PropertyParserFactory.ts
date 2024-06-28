import {
    NotionDateParser,
    NotionNumberParser,
    NotionParsingError,
    NotionPropertyParser,
    NotionRichTextParser,
    NotionTitleParser,
} from './notionParsing';

export default class NotionPropertyParserFactory {
    constructor() {}
    public getPropertyParser(property: any): NotionPropertyParser {
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
            default:
                throw new NotionParsingError(property, 'Unknown property type');
        }
    }
}
