import AbstractResponse from "./AbstractResponse";
export interface LeaderboardsResponse extends AbstractResponse {
    leaderboards?: Leaderboards;
}
export interface Leaderboards {
    TNTGAMES?: (Board)[] | null;
    WALLS?: (Board)[] | null;
    QUAKECRAFT?: (Board)[] | null;
    SKYWARS?: (Board)[] | null;
    VAMPIREZ?: (Board)[] | null;
    PROTOTYPE?: (null)[] | null;
    WALLS3?: (Board)[] | null;
    SKYCLASH?: (Board)[] | null;
    BEDWARS?: (Board)[] | null;
    UHC?: (Board)[] | null;
    PAINTBALL?: (Board)[] | null;
    SUPER_SMASH?: (Board)[] | null;
    TRUE_COMBAT?: (Board)[] | null;
    MCGO?: (Board)[] | null;
    MURDER_MYSTERY?: (Board)[] | null;
    SURVIVAL_GAMES?: (Board)[] | null;
    BATTLEGROUND?: (Board)[] | null;
    ARCADE?: (Board)[] | null;
    ARENA?: (Board)[] | null;
    SPEED_UHC?: (Board)[] | null;
    GINGERBREAD?: (Board)[] | null;
}
export interface Board {
    path: string;
    prefix: string;
    count: number;
    location: string;
    leaders?: (string | null)[] | null;
    title: string;
}
