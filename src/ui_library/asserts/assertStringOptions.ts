import assert from 'assert';

export default function assertStringOptions(
    value: any,
    possibleValues: string[],
    name: string,
): void {
    assert(
        possibleValues.includes(value),
        `${name} must be one of ${possibleValues.join(', ')}, got: ${value}`,
    );
}
