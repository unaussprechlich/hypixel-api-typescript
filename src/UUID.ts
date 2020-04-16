import Exceptions from "./Exceptions";

const uuidPattern = RegExp("^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}?").compile();
const uuidShortPattern = RegExp('^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}?').compile();

export default class UUID{

    uuid : string;

    private constructor(value : string){
        this.uuid = value;
    }

    public static fromString(value : string){
        if(!uuidPattern.test(value)) throw Exceptions.CANT_PARSE_TO_UUID;
        return new UUID(value)
    }

    public static fromShortString(value : string){
        if(!uuidShortPattern.test(value)) throw Exceptions.CANT_PARSE_TO_UUID;
        return new UUID(value.substring(0, 8)
            + "-" + value.substring(8, 12)
            + "-" + value.substring(12, 16)
            + "-" + value.substring(16, 20)
            + "-" + value.substring(20, 32));
    }

    public static randomUUID () : UUID {
        let d = new Date().getTime();
        return new UUID('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        }))
    }

    public toString(){
        return this.uuid;
    }

    public toShortString(){
        return this.uuid.replace(/-/g, "")
    }
}
