import { TableCell, TableRow } from "@/components/ui/table";
import VersusIcon from "@/assets/icons/versus-icon.svg";
import Arrow from "@/assets/icons/arrow-icon.svg";
import { useState } from "react";
import { IRecentMatch } from "@/models/recent-matches.models";
import { format } from "date-fns";

export function ResultRow({ data }: { data: IRecentMatch }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <TableRow className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#CDE6F2] py-[14px] text-center font-serif text-[14px] text-[#000] xmd:text-[11px]">
        <TableCell className="min-w-[70px] rounded-l-[8px] text-center font-sans xmd:min-w-[60px]"></TableCell>
        <TableCell className="whitespace-nowrap py-[10px] text-center">
          <div className=" flex items-center gap-[8px] xmd:gap-[5px]">
            <span className="min-w-[70px] md:min-w-[50px]">
              {data.competitors[0].competitor.nickname}
            </span>
            <span className="flex items-center gap-[2px]">
              <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
              <VersusIcon className="w-[17px]" />
              <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
            </span>
            <span className="min-w-[70px] md:min-w-[50px]">
              {data.competitors[1].competitor.nickname}
            </span>
          </div>
        </TableCell>
        <TableCell className="whitespace-nowrap py-[10px] text-center">
          {data.tournament.name}
        </TableCell>
        <TableCell className="whitespace-nowrap py-[10px] text-center">
          {format(new Date(data.startedAt), "hh:mm|dd.MM.yyyy")}
        </TableCell>
        <TableCell className="whitespace-nowrap py-[10px] text-center">
          winner
        </TableCell>
        <TableCell className="whitespace-nowrap py-[10px] text-center">
          {data.competitors[0].score} : {data.competitors[0].score}
        </TableCell>
        <TableCell className="items-center rounded-r-[8px] py-[10px] text-center">
          <Arrow
            onClick={handleOpen}
            className={
              (isOpen ? "rotate-[180deg] " : "") +
              " w-[21px] transition-all xmd:w-[17px]"
            }
          />
        </TableCell>
      </TableRow>

      {data.games?.map((game, index) => (
        <TableRow
          key={index}
          className={
            (isOpen ? " " : "hidden ") +
            " rounded-[8px] border-b-[4px] border-[#FFF] bg-[#FACFE0] text-center font-serif text-[14px] text-[#000] transition-all xmd:text-[11px] "
          }
        >
          <TableCell className="min-w-[70px] whitespace-nowrap rounded-l-[8px] py-[10px] text-center font-sans  text-[16px] xmd:min-w-[60px] xmd:py-[8px] xmd:text-[14px]">
            Game {index + 1}
          </TableCell>
          <TableCell className="whitespace-nowrap py-[10px] text-center xmd:py-[8px]">
            <div className=" flex items-center gap-[8px] xmd:gap-[5px]">
              <span className="min-w-[70px] md:min-w-[50px]">
                {data.competitors[0].competitor.nickname}
              </span>
              <span className="flex items-center gap-[2px]">
                <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
                <VersusIcon className="w-[17px]" />
                <div className="h-[20px] w-[20px] rounded-[50%] bg-[#000]"></div>
              </span>
              <span className="min-w-[70px] md:min-w-[50px]">
                {data.competitors[1].competitor.nickname}
              </span>
            </div>
          </TableCell>
          <TableCell className="whitespace-nowrap py-[10px] text-center xmd:py-[8px]">
            {data.tournament.name}
          </TableCell>
          <TableCell className="whitespace-nowrap py-[10px]  text-center xmd:py-[8px]">
            {/*{game.ufcResultDetails.}*/}
          </TableCell>
          <TableCell className="whitespace-nowrap py-[10px] text-center">
            winner
          </TableCell>
          <TableCell className="whitespace-nowrap py-[10px]  text-center xmd:py-[8px]">
            {/*{details.score}*/}
          </TableCell>
          <TableCell className="rounded-r-[8px] py-[10px]  text-center xmd:py-[8px]"></TableCell>
        </TableRow>
      ))}
    </>
  );
}
