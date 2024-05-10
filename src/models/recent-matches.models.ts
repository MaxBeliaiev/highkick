import { Competitor, ICompetitor } from "@/models/matches.models";

export interface IRecentMatch {
  id: number;
  startedAt: string;
  endedAt: string;
  status: string;
  streamChannel: "1" | "2";
  format: string;
  numberOfGames: number;
  winnerId: number | null;
  competitors: ICompetitor[];
  tournament: {
    name: string;
  };
  winner?: {
    nickname: string;
  };
  games: Game[];
}

export interface Game {
  id: number;
  startedAt: string;
  endedAt: string;
  ufcResultDetails: Array<IufcResultDetails>;
  match: IRecentMatch;
  winner?: Competitor;
}

export interface IufcResultDetails {
  id: number;
  gameId: number;
  endMethod: string;
  round: number;
  endTime: string;
  isDraw: boolean;
  createdAt: string;
}
