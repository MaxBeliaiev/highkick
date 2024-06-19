import { Header } from "@/components/common/Header/Header"
import { Preview } from "@/components/common/Preview/Preview"
import { Footer } from "@/components/common/Footer/Footer"
import { LiveNow } from "@/components/index/LiveNow/LiveNow"

export default function LivePage() {
    return (
        <>
            <main>
                <Preview heading={"Live Now"} />
                <LiveNow />
            </main>

            <Footer displayText={false} />
        </>
    )
}
