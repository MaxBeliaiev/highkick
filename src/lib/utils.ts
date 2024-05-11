import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Competitor } from "@/models/matches.models"
import PlayerPlaceholderSmall from "@/assets/images/player_placeholder_mini.jpg"
import { Statistic } from "@/models/recent-matches.models"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const dateTimeFormat = "HH:mm dd.MM.yyyy"

export const getCompetitorImage = (competitor?: Competitor, size = "small") => {
    const imageField = size === "small" ? "imageSmall" : "image"

    return !competitor || !competitor[imageField]
        ? PlayerPlaceholderSmall.src
        : competitor[imageField]
}

export const getFormattedStatistics = (stats: Statistic[]) => {
    return stats.reduce((acc: any, next) => {
        const {
            competitorId,
            wins,
            decisions,
            submissions,
            splitDecisions,
            knockouts,
            games,
            losses,
        } = next
        if (!acc[competitorId]) {
            acc[competitorId] = {
                games,
                wins,
                decisions: decisions + splitDecisions,
                submissions,
                knockouts,
                competitorId,
                losses,
            }
        } else {
            acc[competitorId] = {
                games: acc[competitorId].games + next.games,
                wins: acc[competitorId].wins + next.wins,
                decisions:
                    acc[competitorId].decisions +
                    next.decisions +
                    next.splitDecisions,
                submissions: acc[competitorId].submissions + next.submissions,
                knockouts: acc[competitorId].knockouts + next.knockouts,
                losses: acc[competitorId].losses + next.losses,
                competitorId,
            }
        }

        return acc
    }, {})
}

export const getFormattedStatsWithWinRate = (stats: any) =>
    Object.values(stats).map((stat: any) => ({
        ...stat,
        rate: Number(((stat.wins / stat.games) * 100).toFixed()),
    }))
