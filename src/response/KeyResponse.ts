import AbstractResponse from "./AbstractResponse";

export interface KeyRespond extends AbstractResponse{
    record: KeyInfo;
}

/**
 * This is what you need ;)
 */
export interface KeyInfo {
    ownerUuid: string;
    key: string;
    totalQueries: number;
}

