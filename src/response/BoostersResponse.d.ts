import AbstractResponse from "./AbstractResponse";
export interface BoostersResponse extends AbstractResponse {
    boosters?: (Booster)[] | null;
    boosterState?: BoosterState;
}
export interface Booster {
    _id: string;
    purchaserUuid: string;
    amount: number;
    originalLength: number;
    length: number;
    gameType: number;
    dateActivated: number;
    originalGameType?: number | null;
    purchaser?: string | null;
}
export interface BoosterState {
    decrementing: boolean;
}
