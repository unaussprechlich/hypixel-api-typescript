export class BaseException{constructor(){Error.apply(this, arguments as any)}}
export class HypixelException extends BaseException{constructor(public message: string){super()}}
export class MinecrafApiException extends BaseException{constructor(public message: string){super()}}
export class ValidationException extends BaseException{constructor(public message: string){super()}}

export default class Exception{
    public static API_KEY_THROTTLE    = new HypixelException("Key throttle!");
    public static API_KEY_INVALID     = new HypixelException("Invalid API key!");
    public static NOT_FOUND           = new HypixelException("Can't find this!");

    public static NO_UUID_FOR_NAME    = new MinecrafApiException("Can't find this player!");

    public static CANT_PARSE_TO_UUID  = new ValidationException("The given value can't be parsed to a uuid!");
    public static UNDEFINED           = new ValidationException("Undefined!")
}

