"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException {
    constructor() { Error.apply(this, arguments); }
}
exports.BaseException = BaseException;
class Exc extends BaseException {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}
exports.Exc = Exc;
class IntExc extends BaseException {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}
exports.IntExc = IntExc;
class Exception {
}
Exception.API_KEY_THROTTLE = new Exc(3669, "Key throttle!");
Exception.API_KEY_INVALID = new Exc(3112, "Invalid API key!");
Exception.BODY_UNDEFINED = new Exc(8086, "The request responded with a undefined body!");
Exception.GUILD_NOT_FOUND = new Exc(9648, "This player has no guild!");
Exception.NO_BOOSTERSTATE = new Exc(9635, "The the respond did not contain any boosterstate!");
Exception.CANT_PARSE_TO_UUID = new Exc(1234, "The given value can't be parsed to a uuid!");
Exception.INTERNAL = new IntExc(8424, "Internal Error!");
Exception.NULL_POINTER = new IntExc(8290, "Null Pointer!");
Exception.INDEX_OUT_OF_RANGE = new IntExc(4060, "Index out of range!");
exports.default = Exception;
