import { ICompetitor } from "@/models/matches.models";

export interface IRecentMatch {
  id: number;
  startedAt: string;
  endedAt: string;
  status: string;
  streamChannel: "1" | "2";
  format: string;
  numberOfGames: number;
  competitors: ICompetitor[];
  tournament: {
    name: string;
  };
  games: Array<{ ufcResultDetails: IufcResultDetails[] }>;
}

export interface IufcResultDetails {
  id: number;
  gameId: number;
  endMethod: string;
  round: number;
  endTime: string;
  isDraw: false;
  createdAt: string;
}
