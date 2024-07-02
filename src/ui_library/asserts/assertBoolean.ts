import assert from 'assert';

export default function assertBoolean(value: any, name: string): void {
    assert(value == undefined || typeof value === 'boolean', `${name} must be a boolean`);
}
