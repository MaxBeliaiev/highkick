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
    nickname: "Forzen26",
    name: "Denis Kozhevnikov",
    matches: 30,
    wins: 26,
    winRate: 87,
    photo: "",
  },
  {
    nickname: "Saruste",
    name: "Artur Bondarenko",
    matches: 30,
    wins: 30,
    winRate: 100,
    photo: "",
  },
];
