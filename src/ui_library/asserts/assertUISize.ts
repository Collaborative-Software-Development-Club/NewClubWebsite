import assert from 'assert';

const possibleSizes: UISize[] = ['sm', 'md', 'lg', 'none'] as const;
export default function assertUISize(value: UISize, name: string): void {
    assert(possibleSizes.includes(value), `${name} must be one of ${possibleSizes.join(', ')}`);
}
