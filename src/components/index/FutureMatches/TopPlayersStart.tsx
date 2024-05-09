import JoystickIcon from "@/assets/icons/joystick-icon.svg";
import MedalIcon from "@/assets/icons/medal-icon.svg";
import CrownIcon from "@/assets/icons/crown-icon.svg";
import HeadingLabel from "@/assets/icons/heading-label.svg";
import { IPlayersData } from "@/components/index/FutureMatches/players-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Highest from "@/assets/icons/highest-icon.svg";

export function TopPlayersStart({ data }: { data: IPlayersData[] }) {
  return (
    <div className="float-right flex w-[48%] flex-col gap-[24px] xmd:w-full">
      <div className="relative">
        <HeadingLabel className=" w-[538px] sm:w-full" />
        <h3 className="absolute left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">
          Top Players Start
        </h3>
      </div>

      <div className="flex w-full items-end justify-between gap-[70px] pl-[50px] xmd:justify-around xmd:pl-0 sm:justify-between sm:gap-[20px]">
        {data?.map((player: IPlayersData, index) => (
          <div key={index} className="flex w-[231px] flex-col gap-[10px]">
            <div className="flex items-center gap-[8px] ">
              <Highest className="w-[101px] sm:w-[80px]" />
              <p className="text-[12px] uppercase italic text-[#E81068] sm:text-[11px]">
                Knockout <br /> rate of week
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="h-[270px] w-full bg-[#000] sm:h-[200px]"></div>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <p className="text-center text-[26px] text-[#000] sm:text-[22px]">
                    "{player.nickname}"{" "}
                  </p>
                  <p className="text-center text-[20px] text-[#000] sm:text-[16px]">
                    {player.name}
                  </p>
                </div>

                <Table className="m-0 p-0 text-[22px] sm:text-[16px] ">
                  <TableBody>
                    <TableRow className="border-none">
                      <TableCell className="py-0 sm:px-[3px]">
                        <JoystickIcon className="w-[26px]" />
                      </TableCell>
                      <TableCell className="py-0 sm:px-[3px]">
                        Matches
                      </TableCell>
                      <TableCell className="py-0 sm:px-[3px]">
                        {player.matches}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-spacing-0 border-none">
                      <TableCell className="py-0 sm:px-[3px]">
                        <MedalIcon className="w-[20px]" />
                      </TableCell>
                      <TableCell className="py-0 sm:px-[3px]">Wins</TableCell>
                      <TableCell className="py-0 sm:px-[3px]">
                        {player.wins}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="py-0 sm:px-[3px]">
                        <CrownIcon className="w-[23px]" />
                      </TableCell>
                      <TableCell className="whitespace-nowrap py-0 sm:px-[3px]">
                        Win Rate
                      </TableCell>
                      <TableCell className="py-0 sm:px-[3px]">
                        {player.winRate}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
