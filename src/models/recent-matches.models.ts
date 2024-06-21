import { Competitor, MatchCompetitor } from "@/models/matches.models"

export interface Match {
    id: number
    startedAt: string
    endedAt: string
    status: string
    streamChannel: "1" | "2"
    format: string
    numberOfGames: number
    winnerId: number | null
    competitors: MatchCompetitor[]
    tournament: {
        name: string
    }
    winner?: {
        nickname: string
    }
    games: Game[]
}

export interface Game {
    id: number
    startedAt: string
    endedAt: string
    ufcResultDetails: Array<UfcResultDetails>
    match: Match
    winner?: Competitor
    status: "CANCELED" | "ONGOING" | "UPCOMING" | "FINISHED"
}

export interface UfcResultDetails {
    id: number
    gameId: number
    endMethod: string
    round: number
    endTime: string
    isDraw: boolean
    createdAt: string
}

export interface Statistic {
    competitorId: number
    games: number
    wins: number
    losses: number
    knockouts: number
    submissions: number
    decisions: number
    splitDecisions: number
    periodStartedAt: string
    tournament: {
        id: number
        name: string
    }
}
