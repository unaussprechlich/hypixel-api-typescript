import AbstractResponse from "./AbstractResponse";
export interface KeyRespond extends AbstractResponse {
    record: KeyInfo;
}
export interface KeyInfo {
    ownerUuid: string;
    key: string;
    totalQueries: number;
}
