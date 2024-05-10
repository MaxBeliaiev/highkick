import { Statistic } from "@/models/recent-matches.models"

export async function getStatistics(queryParams: string): Promise<Statistic[]> {
    const res = await fetch(
        `https://admin.gamebeats.gg/api/statistics?${queryParams}`
    )
    const data = await res.json()

    return data.data
}
