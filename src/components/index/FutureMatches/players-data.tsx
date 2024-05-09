export interface IPlayersData {
  nickname: string;
  name: string;
  matches: number;
  wins: number;
  winRate: number;
  photo: string;
}

export const Players_Dummy_Data: IPlayersData[] = [
  {
    nickname: "Frozen26",
    name: "Denis Kozhevnikov",
    matches: 30,
    wins: 26,
    winRate: 87,
    photo: "",
  },
  {
    nickname: "Suruste",
    name: "Artur Bondarenko",
    matches: 30,
    wins: 30,
    winRate: 100,
    photo: "",
  },
];
