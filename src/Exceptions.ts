export class BaseException{constructor(){Error.apply(this, arguments)}}
export class Exc extends BaseException{constructor(public code: number, public message: string){super()}}
export class IntExc extends BaseException{constructor(public code: number, public message: string){super()}}

export default class Exception{
    public static API_KEY_THROTTLE    = new Exc(3669, "Key throttle!");
    public static API_KEY_INVALID    = new Exc(3112, "Invalid API key!");
    public static BODY_UNDEFINED      = new Exc(8086 ,"The request responded with a undefined body!");
    public static GUILD_NOT_FOUND     = new Exc(9648, "This player has no guild!");
    public static NO_BOOSTERSTATE     = new Exc(9635, "The the respond did not contain any boosterstate!");
    public static CANT_PARSE_TO_UUID  = new Exc(1234, "The given value can't be parsed to a uuid!");

    //INTERNAL
    public static INTERNAL                  = new IntExc(8424 ,"Internal Error!");
    public static NULL_POINTER              = new IntExc(8290 ,"Null Pointer!");
    public static INDEX_OUT_OF_RANGE        = new IntExc(4060, "Index out of range!")
}

