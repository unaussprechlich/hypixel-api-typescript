"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException {
    constructor() { Error.apply(this, arguments); }
}
exports.BaseException = BaseException;
class HypixelException extends BaseException {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.HypixelException = HypixelException;
class MinecrafApiException extends BaseException {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.MinecrafApiException = MinecrafApiException;
class ValidationException extends BaseException {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.ValidationException = ValidationException;
class Exception {
}
exports.default = Exception;
Exception.API_KEY_THROTTLE = new HypixelException("Key throttle!");
Exception.API_KEY_INVALID = new HypixelException("Invalid API key!");
Exception.NOT_FOUND = new HypixelException("Can't find this!");
Exception.NO_UUID_FOR_NAME = new MinecrafApiException("Can't find this player!");
Exception.CANT_PARSE_TO_UUID = new ValidationException("The given value can't be parsed to a uuid!");
Exception.UNDEFINED = new ValidationException("Undefined!");
//# sourceMappingURL=Exceptions.js.map