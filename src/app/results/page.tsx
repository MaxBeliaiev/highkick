import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { Footer } from "@/components/common/Footer/Footer";
import { Results } from "@/components/index/Results/Results";
import { getRecentMatches } from "@/app/fetch-recent-matches";

export default async function ResultsPage() {
  const data = await getRecentMatches(
    "status=finished&sortBy=startedAt&sort=desc&page=1&results=true&external=true"
  );

  return (
    <body>
      <Header />

      <main>
        <Preview heading={"Results"} />
        <Results data={data} />
      </main>

      <Footer displayText={false} displayImage={true} />
    </body>
  );
}

export const revalidate = 0;
