export interface Match {
    id: number
    startedAt: string
    endedAt: null
    status: string
    streamChannel: "1" | "2"
    format: string
    numberOfGames: number
    competitors: MatchCompetitor[]
    tournament: {
        name: string
    }
}

export interface MatchCompetitor {
    order: number
    score: number
    competitorId: number
    competitor: Competitor
}

export interface Competitor {
    id: number
    name: string
    surname: string
    nickname: string
    image: string
    imageSmall: string
}

export const STREAM_LINKS = {
    "1": "https://www.twitch.tv/highkick_1",
    "2": "https://www.twitch.tv/highkick_2",
}
