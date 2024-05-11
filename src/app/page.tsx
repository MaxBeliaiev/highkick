import { Header } from "@/components/common/Header/Header"
import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { FutureMatches } from "@/components/index/FutureMatches/FutureMatches"
import { ComingSoon } from "@/components/index/ComingSoon/ComingSoon"
import { PastMatches } from "@/components/index/PastMatches/PastMatches"
import { getMatches } from "@/api/fetch-matches"
import { getCompetitors } from "@/api/fetch-competitors"
import { getGames } from "@/api/fetch-games"
import { getStatistics } from "@/api/fetch-statistics"
import moment from "moment/moment"

export default async function Home() {
    const futureMatches = await getMatches("status=upcoming&page=1")
    const competitors = await getCompetitors()
    const recentGames = await getGames(
        "status=finished&sortBy=endedAt&sort=desc&page=1"
    )

    const statsStart = moment()
        .utc()
        .subtract(7, "days")
        .startOf("day")
        .toDate()
        .toISOString()
    const statsEnd = moment().utc().startOf("day").toDate().toISOString()
    const statistics = await getStatistics(
        `startedFrom=${statsStart}&startedTo=${statsEnd}`
    )
    let ongoingMatches = await getMatches("status=ongoing&page=1")

    if (!ongoingMatches.length) {
        ongoingMatches = futureMatches.slice(0, 2)
    }

    return (
        <body>
            <Header />

            <main>
                <Preview heading="Coming Soon" />
                <ComingSoon data={ongoingMatches} />
                <FutureMatches
                    matches={futureMatches}
                    statistics={statistics}
                    competitors={competitors}
                />
                <PastMatches matches={recentGames} />
            </main>

            <Footer displayText={true} displayImage={true} />
        </body>
    )
}

export const revalidate = 0
