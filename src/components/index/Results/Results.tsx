"use client";
import HeadingLabel from "@/assets/icons/heading-label.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Results_Dummy_Data } from "@/components/index/Results/results-data";
import { ResultRow } from "@/components/index/Results/ResultRow";
import { IRecentMatch } from "@/models/recent-matches.models";

export function Results({ data }: { data: IRecentMatch[] }) {
  console.log(data[0]);
  return (
    <section className="container mx-auto flex flex-col gap-[10px] py-[100px] xmd:py-[50px]">
      <div className="relative">
        <HeadingLabel className=" w-[538px] sm:w-full" />
        <h3 className="absolute left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">
          Match Table
        </h3>
      </div>

      <Table>
        <TableHeader className="border-b-[4px] border-[#FFF]">
          <TableRow className="h-[35px] rounded-[8x] bg-[#E81068] py-[7px] text-center font-sans text-[20px] uppercase italic text-[#FFF] xmd:text-[16px]">
            <TableHead className="min-w-[70px] rounded-l-[6px] text-center xmd:min-w-[60px]"></TableHead>
            <TableHead className="text-center">Competitors</TableHead>
            <TableHead className="text-center">Week</TableHead>
            <TableHead className="text-center">Start Time</TableHead>
            <TableHead className="text-center">Winner</TableHead>
            <TableHead className="text-center">Score</TableHead>
            <TableHead className="rounded-r-[6px] text-center">
              Details
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((data, index) => <ResultRow data={data} key={index} />)}
        </TableBody>
      </Table>
    </section>
  );
}
