import { Header } from "@/components/common/Header/Header"
import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { Players } from "@/components/index/Players/Players"
import { getCompetitors } from "@/api/fetch-competitors"

export default async function PlayersPage() {
    const competitors = await getCompetitors("status=ACTIVE")

    return (
        <body>
            <Header />

            <main>
                <Preview heading={"Players"} />
                <Players competitors={competitors} />
            </main>

            <Footer displayText={false} displayImage={true} />
        </body>
    )
}
