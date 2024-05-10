import HeadingLabel from "@/assets/icons/heading-label.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VersusIcon from "@/assets/icons/versus-icon.svg";
import { format } from "date-fns";
import { Game } from "@/models/recent-matches.models";

export function RecentMatches({ data }: { data: Game[] }) {
  return (
    <div className="float-left flex w-[48%] flex-col gap-[10px] xmd:w-full">
      <div className="relative">
        <HeadingLabel className=" w-[538px] sm:w-full" />
        <h3 className="absolute left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">
          Our Recent Matches
        </h3>
      </div>

      <Table>
        <TableHeader className="border-b-[4px] border-[#FFF]">
          <TableRow className="h-[35px] rounded-[8x] bg-[#E81068] py-[7px] text-center font-sans text-[16px] uppercase italic text-[#FFF]">
            <TableHead className="rounded-l-[6px] text-center">
              Competitors
            </TableHead>
            <TableHead className="text-center">Week & day</TableHead>
            <TableHead className="text-center">Score</TableHead>
            <TableHead className="text-center">End Time</TableHead>
            <TableHead className="rounded-r-[6px] text-center">
              Win Method
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ match, endedAt, ufcResultDetails }: Game, index) => {
            return (
              <TableRow
                key={index}
                className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#FACFE0] py-[14px] text-center font-serif text-[11px] text-[#000]"
              >
                <TableCell className="whitespace-nowrap rounded-l-[6px] py-[10px]">
                  <div className=" flex items-center gap-[5px]">
                    <span className="min-w-[50px]">
                      {match.competitors[0].competitor.nickname}
                    </span>
                    <span className="flex items-center gap-[2px]">
                      <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
                      <VersusIcon className="w-[17px]" />
                      <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
                    </span>
                    <span className="min-w-[50px]">
                      {match.competitors[1].competitor.nickname}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap py-[10px]">
                  {match.tournament.name}
                </TableCell>
                <TableCell className="whitespace-nowrap py-[10px]">
                  Score
                </TableCell>
                <TableCell className="py-[10px]">
                  {format(new Date(endedAt), "HH:mm|dd.MM.yyyy")}
                </TableCell>
                <TableCell className="rounded-r-[6px] py-[10px]">
                  {ufcResultDetails[0].endMethod}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
