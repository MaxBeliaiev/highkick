export interface IMatch {
  id: number;
  startedAt: string;
  endedAt: null;
  status: string;
  streamChannel: "1" | "2";
  format: string;
  numberOfGames: number;
  competitors: ICompetitor[];
  tournament: {
    name: string;
  };
}

export interface ICompetitor {
  order: number;
  score: number;
  competitorId: number;
  competitor: Competitor;
}

export interface Competitor {
  id: number;
  nickname: string;
}

export const STREAM_LINKS = {
  "1": "https://www.twitch.tv/highkick_1",
  "2": "https://www.twitch.tv/highkick_2",
};
