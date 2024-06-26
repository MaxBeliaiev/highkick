import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Competitor } from "@/models/matches.models"
import PlayerPlaceholderSmall from "@/assets/images/player_placeholder_mini.jpg"
import Silhouette from "@/assets/images/silhouette_1.png"
import { Statistic } from "@/models/recent-matches.models"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const dateTimeFormat = "HH:mm dd.MM.yyyy"
export const dateFormat = "dd.MM.yyyy"

export const getCompetitorImage = (
    competitor?: Competitor,
    size: "small" | "transparent" | "big" = "small"
) => {
    let imageField: "imageSmall" | "imageTransparent" | "image"
    let placeholder =
        size === "transparent" ? Silhouette.src : PlayerPlaceholderSmall.src

    switch (size) {
        case "small":
            imageField = "imageSmall"
            break
        case "transparent":
            imageField = "imageTransparent"
            break
        default:
            imageField = "image"
    }

    return !competitor || !competitor[imageField]
        ? placeholder
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
