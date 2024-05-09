import { MatchTable } from "@/components/index/FutureMatches/MatchTable";
import { TopPlayersStart } from "@/components/index/FutureMatches/TopPlayersStart";
import { IPlayersData } from "@/components/index/FutureMatches/players-data";
import { IMatch } from "@/models/matches.models";

export function FutureMatches({
  players,
  matches,
}: {
  players: IPlayersData[];
  matches: IMatch[];
}) {
  return (
    <section className="container mx-auto flex w-full items-stretch justify-between py-[40px] xmd:flex-col xmd:gap-[30px] ">
      <MatchTable data={matches} />
      <TopPlayersStart data={players} />
    </section>
  );
}
