"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import VersusIcon from "@/assets/icons/versus-icon.svg"
import { format, parseISO } from "date-fns"
import { Game } from "@/models/recent-matches.models"
import { dateTimeFormat, getCompetitorImage } from "@/lib/utils"
import { TitleLabel } from "@/components/ui/titleLabel/titleLabel"

export function RecentMatches({ data }: { data: Game[] }) {
    return (
        <div className="float-left flex w-[48%] flex-col gap-[10px] xmd:w-full">
            <div className="relative">
                <TitleLabel title={'Our Recent Matches'}/>
            </div>

            <Table>
                <TableHeader className="border-b-[4px] border-[#FFF]">
                    <TableRow className="h-[35px] rounded-[8x] bg-[#E81068] py-[7px] text-center font-sans text-[16px] uppercase italic text-[#FFF]">
                        <TableHead className="rounded-l-[6px] text-center">
                            Competitors
                        </TableHead>
                        <TableHead className="text-center">
                            Week & day
                        </TableHead>
                        <TableHead className="text-center">Winner</TableHead>
                        <TableHead className="text-center">End Time</TableHead>
                        <TableHead className="rounded-r-[6px] text-center">
                            Win Method
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(
                        (
                            { match, endedAt, ufcResultDetails, winner }: Game,
                            index
                        ) => {
                            return (
                                <TableRow
                                    key={index}
                                    className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#FACFE0] py-[14px] text-center font-serif text-[11px] text-[#000]"
                                >
                                    <TableCell className="whitespace-nowrap rounded-l-[6px] py-[10px]">
                                        <div className=" flex items-center gap-[5px]">
                                            <span className="min-w-[50px]">
                                                {
                                                    match.competitors[0]
                                                        .competitor.nickname
                                                }
                                            </span>
                                            <span className="flex items-center gap-[2px]">
                                                <div className="h-[20px] w-[20px] overflow-hidden rounded-[50%]">
                                                    <img
                                                        className="h-auto w-[100%]"
                                                        src={getCompetitorImage(
                                                            match.competitors[0]
                                                                .competitor
                                                        )}
                                                        alt=""
                                                    />
                                                </div>
                                                <VersusIcon className="w-[17px]" />
                                                <div className="h-[20px] w-[20px] overflow-hidden rounded-[50%]">
                                                    <img
                                                        className="h-auto w-[100%]"
                                                        src={getCompetitorImage(
                                                            match.competitors[1]
                                                                .competitor
                                                        )}
                                                        alt=""
                                                    />
                                                </div>
                                            </span>
                                            <span className="min-w-[50px]">
                                                {
                                                    match.competitors[1]
                                                        .competitor.nickname
                                                }
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-[10px]">
                                        {match.tournament.name}
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-[10px]">
                                        {winner?.nickname || "Draw"}
                                    </TableCell>
                                    <TableCell className="py-[10px]">
                                        {format(
                                            parseISO(endedAt),
                                            dateTimeFormat
                                        )}
                                    </TableCell>
                                    <TableCell className="rounded-r-[6px] py-[10px]">
                                        {ufcResultDetails[0].endMethod}
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
