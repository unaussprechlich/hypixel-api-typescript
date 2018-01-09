import AbstractResponse from "./AbstractResponse";

export interface GuildResponse extends AbstractResponse{
    guild: Guild;
}

/**
 * This is what you need ;)
 */
export interface Guild {
    _id: string;
    name: string;
    coins: number;
    memberSizeLevel: number;
    bankSizeLevel: number;
    coinsEver: number;
    created: number;
    members: (Member)[];
    canParty: boolean;
    canTag: boolean;
    tag?: string;
    banner?: Banner;
    canMotd?: boolean;
    vipCount?: number;
    mvpCount?: number;
    tagColor?: string;
}

export interface Member {
    uuid: string;
    rank: string;
    joined: number;
}

export interface Banner {
    Base?: string;
    Patterns?: (Pattern)[];
}

export interface Pattern {
    Pattern?: string;
    Color?: string | number;
}
