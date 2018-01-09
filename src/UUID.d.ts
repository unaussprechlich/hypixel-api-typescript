export default class UUID {
    uuid: string;
    private constructor();
    static fromString(value: string): UUID;
    static fromShortString(value: string): UUID;
    static randomUUID(): UUID;
    toString(): string;
    toShortString(): string;
}
