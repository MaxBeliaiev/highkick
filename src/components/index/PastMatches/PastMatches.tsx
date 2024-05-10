import { RecentMatches } from "@/components/index/PastMatches/RecentMatches";
import { BestMoments } from "@/components/index/PastMatches/BestMoments";
import { Game } from "@/models/recent-matches.models";

export function PastMatches({ matches }: { matches: Game[] }) {
  return (
    <section className="container mx-auto flex w-full items-stretch justify-between pb-[30px] pt-[40px] xmd:flex-col xmd:gap-[40px] ">
      <RecentMatches data={matches} />
      <BestMoments />
    </section>
  );
}
