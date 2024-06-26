import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import CrownIcon from "@/assets/icons/crown-icon.svg"
import { SelectPlayer } from "@/components/index/Players/SelectPlayer"
import { DatePicker, IPlayersData } from "@/components/index/Players/DatePicker"
import { Competitor } from "@/models/matches.models"
import { Dispatch, SetStateAction } from "react"

interface DesktopViewProps {
    dateFrom?: Date,
    dateTo?: Date,
    setDateFrom: (date?: Date) => void,
    setDateTo: (date?: Date) => void,
    competitors: Competitor[],
    setP1Data: Dispatch<SetStateAction<Competitor>>,
    p1Data: Competitor,
    setP2Data: Dispatch<SetStateAction<Competitor>>,
    p2Data: Competitor,
    statistic?: Array<IPlayersData>
}

export function DesktopView({
                                competitors,
                                setP1Data,
                                p1Data,
                                dateTo,
                                setDateTo,
                                setDateFrom,
                                dateFrom,
                                statistic,
                                setP2Data,
                                p2Data,
                            }: DesktopViewProps) {
    return (
        <section
            className="container mx-auto flex flex-row w-auto items-start justify-between gap-[50px] pb-[50px] pt-[160px] xmd:items-start xmd:justify-between xmd:pt-[120px] sm:gap-[40px] sm:pt-[40px] ">
            <SelectPlayer
                competitors={competitors}
                color="bg-[#E81068]"
                id={1}
                setPlayer={setP1Data}
                selectedCompetitor={p1Data}
            />
            <div className="flex flex-col md:max-w-[220px] gap-[50px]">
                <div className="xmd:order-first xmd:w-full">
                    <DatePicker
                        dateTo={dateTo}
                        dateFrom={dateFrom}
                        setDateTo={setDateTo}
                        setDateFrom={setDateFrom}
                    />
                </div>
                <div
                    className="flex flex-col items-center xmd:mx-auto sm:max-w-[350px] sm:gap-[20px]">
                    <Table className="m-0 w-full p-0 text-[22px] sm:text-[16px] md:text-[18px]">
                        <TableBody>
                            {statistic?.map((data, index) => (
                                <TableRow key={index} className="w-full border-none">
                                    <TableCell className="pl-0 w-[80px]">
                                        {data.value1 || "N/A"}
                                    </TableCell>
                                    <TableCell className="w-[40px] pr-[10px] sm:pr-[3px]">
                                        <CrownIcon className="w-[32px] text-[#E81068]" />
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap pl-[10px] sm:pl-[3px]">
                                        {data.heading}
                                    </TableCell>
                                    <TableCell className="pr-0 text-right">
                                        {data.value2 || "N/A"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <SelectPlayer
                competitors={competitors}
                color="bg-[#0580C3]"
                id={2}
                setPlayer={setP2Data}
                selectedCompetitor={p2Data}
            />
        </section>
    )
}
