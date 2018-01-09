export declare class BaseException {
    constructor();
}
export declare class Exc extends BaseException {
    code: number;
    message: string;
    constructor(code: number, message: string);
}
export declare class IntExc extends BaseException {
    code: number;
    message: string;
    constructor(code: number, message: string);
}
export default class Exception {
    static API_KEY_THROTTLE: Exc;
    static API_KEY_INVALID: Exc;
    static BODY_UNDEFINED: Exc;
    static GUILD_NOT_FOUND: Exc;
    static NO_BOOSTERSTATE: Exc;
    static CANT_PARSE_TO_UUID: Exc;
    static INTERNAL: IntExc;
    static NULL_POINTER: IntExc;
    static INDEX_OUT_OF_RANGE: IntExc;
}
