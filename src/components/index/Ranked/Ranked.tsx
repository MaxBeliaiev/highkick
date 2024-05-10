import HeadingLabel from "@/assets/icons/heading-label.svg";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import JoystickIcon from "@/assets/icons/joystick-icon.svg";
import MedalIcon from "@/assets/icons/medal-icon.svg";
import CrownIcon from "@/assets/icons/crown-icon.svg";
import player from "@/assets/images/player.png";
import Image from "next/image";
import { IRankedData } from "@/components/index/Ranked/ranked-data";

export function Ranked({ data }: { data: IRankedData[] }) {
  return (
    <section className="container mx-auto flex w-full flex-col items-center pb-[90px] pt-[20px]">
      <div className="flex w-full items-end justify-between xmd:flex-col-reverse xmd:items-start">
        <div className="relative pb-[15px] xmd:w-full">
          <HeadingLabel className=" w-[538px] sm:w-full" />
          <h3 className="absolute left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">
            All Players
          </h3>
        </div>

        <div className="flex items-end">
          <div className="flex flex-col items-start gap-[35px] pb-[20px]">
            <div className="text-[40px] uppercase italic xmd:text-[26px]">
              P2P
            </div>

            <Table className="m-0 p-0 text-[22px] sm:text-[16px] ">
              <TableBody>
                <TableRow className="border-none">
                  <TableCell className="py-0 sm:px-[3px]">
                    <JoystickIcon className="w-[26px] text-[#EB1068]" />
                  </TableCell>
                  <TableCell className="py-0 sm:px-[3px]">Matches</TableCell>
                  <TableCell className="py-0 sm:px-[3px]">10</TableCell>
                </TableRow>
                <TableRow className="border-spacing-0 border-none">
                  <TableCell className="py-0 sm:px-[3px]">
                    <MedalIcon className="w-[20px] text-[#EB1068]" />
                  </TableCell>
                  <TableCell className="py-0 sm:px-[3px]">Wins</TableCell>
                  <TableCell className="py-0 sm:px-[3px]">10</TableCell>
                </TableRow>
                <TableRow className="border-none">
                  <TableCell className="py-0 sm:px-[3px]">
                    <CrownIcon className="w-[23px] text-[#EB1068]" />
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-0 sm:px-[3px]">
                    Win Rate
                  </TableCell>
                  <TableCell className="py-0 sm:px-[3px]">10%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Image
            src={player}
            alt="Image"
            width={263}
            height={394}
            className="w-[263px] xmd:w-[200px] sm:w-[150px]"
          />
        </div>
      </div>
      <Table>
        <TableHeader className="border-b-[4px] border-[#FFF]">
          <TableRow className="h-[35px] rounded-[8x] bg-[#E81068] py-[7px] text-center font-sans text-[20px] uppercase italic text-[#FFF] xmd:text-[16px]">
            <TableHead className="min-w-[70px] rounded-l-[6px] text-center xmd:min-w-[60px]"></TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Matches</TableHead>
            <TableHead className="text-center">Wins</TableHead>
            <TableHead className="text-center">Loss</TableHead>
            <TableHead className="text-center">Win Rate</TableHead>
            <TableHead className="rounded-r-[6px] text-center">Prize</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#CDE6F2] py-[14px] text-center font-serif text-[14px] text-[#000] xmd:text-[11px]"
            >
              <TableCell className="rounded-l-[8px] py-[10px] xmd:py-[8px]">
                <item.medal className="w-[39px] sm:w-[25px] " />
              </TableCell>
              <TableCell className="whitespace-nowrap py-[10px] xmd:py-[8px]">
                <div className="flex items-center gap-[17px]">
                  <div className="h-[35px] w-[35px] rounded-[50%] bg-[#000] xmd:h-[20px] xmd:w-[20px]"></div>
                  {item.name}
                </div>
              </TableCell>
              <TableCell className="py-[10px] xmd:py-[8px]">
                {item.matches}
              </TableCell>
              <TableCell className="py-[10px] xmd:py-[8px]">
                {item.wins}
              </TableCell>
              <TableCell className="py-[10px] xmd:py-[8px]">
                {item.loss}
              </TableCell>
              <TableCell className="py-[10px] xmd:py-[8px]">
                {item.winRate}%
              </TableCell>
              <TableCell className="rounded-r-[8px] py-[10px] xmd:py-[8px]">
                ${item.prize}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
