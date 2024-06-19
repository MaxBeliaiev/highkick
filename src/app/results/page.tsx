import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { Results } from "@/components/index/Results/Results"
import { getRecentMatches } from "@/api/fetch-recent-matches"

export default async function ResultsPage() {
    const data = await getRecentMatches(
        "status=finished&sortBy=startedAt&sort=desc&page=1&results=true&external=true"
    )

    return (
        <>
            <main>
                <Preview heading={"Results"} />
                <Results data={data} />
            </main>

            <Footer displayText={false} displayImage={true} />
        </>
    )
}

export const revalidate = 0
