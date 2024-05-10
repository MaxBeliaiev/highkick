import { MatchTable } from "@/components/index/FutureMatches/MatchTable"
import { TopPlayersStart } from "@/components/index/FutureMatches/TopPlayersStart"
import { Competitor, Match } from "@/models/matches.models"
import { Statistic } from "@/models/recent-matches.models"

export function FutureMatches({
    matches,
    statistics,
    competitors,
}: {
    matches: Match[]
    statistics: Statistic[]
    competitors: Competitor[]
}) {
    return (
        <section className="container mx-auto flex w-full items-stretch justify-between py-[40px] xmd:flex-col xmd:gap-[30px] ">
            <MatchTable data={matches} />
            <TopPlayersStart
                statistics={statistics}
                competitors={competitors}
            />
        </section>
    )
}
