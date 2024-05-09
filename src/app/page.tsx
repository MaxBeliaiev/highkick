import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { Footer } from "@/components/common/Footer/Footer";
import { FutureMatches } from "@/components/index/FutureMatches/FutureMatches";
import { ComingSoon } from "@/components/index/ComingSoon/ComingSoon";
import { Players_Dummy_Data } from "@/components/index/FutureMatches/players-data";
import { PastMatches } from "@/components/index/PastMatches/PastMatches";
import { getMatches } from "@/app/fetch-matches";
import { getRecentMatches } from "@/app/fetch-recent-matches";

export default async function Home() {
  const futureMatches = await getMatches("status=upcoming&page=1");
  const recentMatches = await getRecentMatches(
    "status=finished&sortBy=startedAt&sort=desc&page=1&results=true"
  );
  const ongoingMatches = await getMatches("status=ongoing&page=1");

  return (
    <body>
      <Header />

      <main>
        <Preview heading={"Coming Soon"} />
        <ComingSoon data={futureMatches} />
        <FutureMatches matches={futureMatches} players={Players_Dummy_Data} />
        <PastMatches matches={recentMatches} />
      </main>

      <Footer displayText={true} displayImage={true} />
    </body>
  );
}
