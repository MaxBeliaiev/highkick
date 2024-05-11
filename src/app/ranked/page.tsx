import { Header } from "@/components/common/Header/Header"
import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { Ranked } from "@/components/index/Ranked/Ranked"
import { getStatistics } from "@/api/fetch-statistics"
import {
    getFormattedStatistics,
    getFormattedStatsWithWinRate,
} from "@/lib/utils"
import { getCompetitors } from "@/api/fetch-competitors"

export default async function RankedPage() {
    // const ongoingTournament = await getTour
    const competitors = await getCompetitors()
    const data = await getStatistics("tournamentId=110")
    const competitorsStats = getFormattedStatsWithWinRate(
        getFormattedStatistics(data)
    ).sort((a, b) => b.rate - a.rate)

    return (
        <body>
            <Header />
            <main>
                <Preview heading={"Ranked"} />
                <Ranked data={competitorsStats} competitors={competitors} />
            </main>
            <Footer displayText={false} displayImage={true} />
        </body>
    )
}
