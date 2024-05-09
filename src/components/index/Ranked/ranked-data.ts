import MedalGold from "@/assets/icons/gold-medal.svg";
import MedalSilver from "@/assets/icons/silver-medal.svg";


export interface IRankedData {
    name: string;
    matches: number;
    wins: number;
    loss: number;
    winRate: number;
    prize: number;
    img: string;
    medal: any;
}

export const Ranked_Dummy_Data : IRankedData[] = [
    {
        name: "Scalpel",
        matches: 30,
        wins: 26,
        loss: 4,
        winRate: 87,
        prize: 1500,
        img: "",
        medal: MedalGold,
    },
    {
        name: "Saruste",
        matches: 30,
        wins: 22,
        loss: 8,
        winRate: 73,
        prize: 1000,
        img: "",
        medal: MedalSilver,
    },
]
