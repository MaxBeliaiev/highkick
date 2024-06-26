"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import PlayIcon from "@/assets/icons/play-icon.svg"
import VersusIcon from "@/assets/icons/versus-icon.svg"
import { useEffect, useState } from "react"
import { Match, STREAM_LINKS } from "@/models/matches.models"
import { format } from "date-fns"
import { getMatches } from "@/api/fetch-matches"
import { dateTimeFormat, getCompetitorImage } from "@/lib/utils"
import { TitleLabel } from "@/components/ui/title-label"

export function MatchTable({ data }: { data: Match[] }) {
    const pageNumbers = [1, 2, 3]
    const [currentPage, setCurrentPage] = useState(1)
    const [matchList, setMatchList] = useState(data)

    const [isFetched, setIsFetched] = useState(true)

    useEffect(() => {
        if (isFetched) return
        function getNextMatches() {
            return getMatches(`status=upcoming&page=${currentPage}`)
        }

        getNextMatches().then((data) => {
            setMatchList(data)
            setIsFetched(true)
        })
    }, [matchList, currentPage, isFetched])

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        setIsFetched(false)
    }

    return (
        <div className="float-left flex w-[48%] flex-col items-center gap-[30px] xmd:w-full">
            <div className="flex w-full flex-col gap-[10px]">
                <div className="relative">
                    <TitleLabel title={'Match Table'}/>
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
                            <TableHead className="text-center">
                                Start Time
                            </TableHead>
                            <TableHead className="text-center">
                                Status
                            </TableHead>
                            <TableHead className="rounded-r-[6px] text-center">
                                Stream
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {matchList?.map(
                            (
                                {
                                    status,
                                    competitors,
                                    tournament,
                                    startedAt,
                                    streamChannel,
                                },
                                index
                            ) => (
                                <TableRow
                                    key={index}
                                    className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#CDE6F2] py-[14px] text-center font-serif text-[11px] text-[#000]"
                                >
                                    <TableCell className="whitespace-nowrap rounded-l-[6px] py-[10px]">
                                        <div className=" flex items-center gap-[5px]">
                                            <span className="min-w-[50px]">
                                                {
                                                    competitors[0].competitor
                                                        .nickname
                                                }
                                            </span>
                                            <span className="flex items-center gap-[2px]">
                                                <div className="h-[20px] w-[20px] overflow-hidden rounded-[50%]">
                                                    <img
                                                        className="h-auto w-[100%]"
                                                        src={getCompetitorImage(
                                                            competitors[0]
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
                                                            competitors[1]
                                                                .competitor
                                                        )}
                                                        alt=""
                                                    />
                                                </div>
                                            </span>
                                            <span className="min-w-[50px]">
                                                {
                                                    competitors[1].competitor
                                                        .nickname
                                                }
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-[10px]">
                                        {tournament.name}
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-[10px]">
                                        {format(
                                            new Date(startedAt),
                                            dateTimeFormat
                                        )}
                                    </TableCell>
                                    <TableCell className="py-[10px]  capitalize">
                                        {status[0] +
                                            status.slice(1).toLowerCase()}
                                    </TableCell>
                                    <TableCell className="rounded-r-[6px] py-[10px]">
                                        {" "}
                                        <Link
                                            href={STREAM_LINKS[streamChannel]}
                                            target="_blank"
                                        >
                                            <PlayIcon className="w-[25px]" />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
            <nav>
                <ul className="flex gap-[15px]">
                    {pageNumbers?.map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={twMerge(
                                "cursor-pointer",
                                (number == currentPage
                                    ? "outline outline-[4px] outline-[#D3D3D3] "
                                    : "") +
                                    " h-[10px] w-[10px] rounded-[50%] bg-[#000]"
                            )}
                        ></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
