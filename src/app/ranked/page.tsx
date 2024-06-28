import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { Ranked } from "@/components/index/Ranked/Ranked"
import { getStatistics } from "@/api/fetch-statistics"
import {
    getFormattedStatistics,
    getFormattedStatsWithWinRate,
} from "@/lib/utils"
import { getCompetitors } from "@/api/fetch-competitors"
import { getTournaments } from "@/api/fetch-tournaments"

export default async function RankedPage() {
    const ongoingTournaments = await getTournaments("status=ONGOING&size=1")
    const competitors = await getCompetitors()
    let tournamentId, data, competitorsStats

    if (ongoingTournaments.length) {
        tournamentId = ongoingTournaments[0].id
    } else {
        const finishedTournaments = await getTournaments(
            "status=FINISHED&size=1"
        )
        tournamentId = finishedTournaments[0].id
    }

    data = await getStatistics(`tournamentId=${tournamentId}`)
    competitorsStats = getFormattedStatsWithWinRate(
        getFormattedStatistics(data)
    ).sort((a, b) => b.rate - a.rate)

    return (
        <>
            <main>
                <>
                    <Preview heading={"Ranked"} />
                    <Ranked data={competitorsStats} competitors={competitors} />
                </>
            </main>
            <Footer displayText={false} displayImage={true} />
        </>
    )
}

export const revalidate = 0
