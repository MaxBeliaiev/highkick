import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Competitor } from "@/models/matches.models"
import PlayerPlaceholderSmall from "@/assets/images/player_placeholder_mini.jpg"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const dateTimeFormat = "HH:mm dd.MM.yyyy"

export const getCompetitorImage = (competitor?: Competitor) =>
    !competitor || !competitor.imageSmall
        ? PlayerPlaceholderSmall.src
        : competitor.imageSmall
