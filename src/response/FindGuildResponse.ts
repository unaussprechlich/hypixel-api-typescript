import AbstractResponse from "./AbstractResponse";

/**
 * FindGuild will just return a string!
 */


export interface FindGuildResponse extends AbstractResponse{
    guild? : string
}