abstract class NotionPropertyParser<ParsedPropertyType> {
    constructor(private property: any) {}
    protected abstract propertyField: string;
    public parse(): ParsedPropertyType | undefined {
        if (this.propertyIsMissing()) {
            return undefined;
        }
        const propertyFieldObject = this.getPropertyFieldObject();
        try {
            return this.parseProperty();
        } catch (error: any) {
            throw new NotionParsingError(propertyFieldObject, error.toString());
        }
    }
    protected getPropertyFieldObject(): any {
        return this.property[this.propertyField];
    }
    private propertyIsMissing() {
        return this.getPropertyFieldObject() == null;
    }
    protected abstract parseProperty(): ParsedPropertyType;
}

export class NotionRichTextParser extends NotionPropertyParser<string> {
    protected propertyField = 'rich_text';
    protected parseProperty(): string {
        return this.getPropertyFieldObject().reduce(
            (finalText: any, text: any) => finalText + text.plain_text,
            '',
        );
    }
}

export class NotionDateParser extends NotionPropertyParser<Date | [Date, Date]> {
    protected propertyField = 'date';
    protected parseProperty(): Date | [Date, Date] {
        const datePropertyField = this.getPropertyFieldObject();
        if (datePropertyField.end) {
            return [new Date(datePropertyField.start), new Date(datePropertyField.end)];
        }
        return new Date(datePropertyField.start);
    }
}

export class NotionTitleParser extends NotionPropertyParser<string> {
    protected propertyField = 'title';
    protected parseProperty(): string {
        return this.getPropertyFieldObject().reduce(
            (finalText: any, text: any) => finalText + text.plain_text,
            '',
        );
    }
}

export class NotionImageParser extends NotionPropertyParser<string> {
    protected propertyField = 'files';
    protected parseProperty(): string {
        const url = this.getPropertyFieldObject()[0].file.url;
        return url;
    }
}

export class NotionNumberParser extends NotionPropertyParser<number> {
    protected propertyField = 'number';
    protected parseProperty() {
        const number = this.getPropertyFieldObject();
        return number;
    }
}

export class NotionParsingError extends Error {
    constructor(property: any, description: string) {
        super(`Error parsing property: ${JSON.stringify(property)}\, ${description}`);
    }
}