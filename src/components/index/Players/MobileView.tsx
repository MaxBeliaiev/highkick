import CrownIcon from "@/assets/icons/crown-icon.svg"
import { SelectPlayer } from "@/components/index/Players/SelectPlayer"
import { DatePicker, IPlayersData } from "@/components/index/Players/DatePicker"
import { Competitor } from "@/models/matches.models"
import { Dispatch, SetStateAction } from "react"

interface MobileViewProps {
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

export function MobileView({
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
                            }: MobileViewProps) {
    return <section
        className="container mx-auto flex w-auto flex-wrap items-start justify-between gap-[50px] pb-[50px] pt-[160px] xmd:items-center xmd:justify-around xmd:pt-[120px] sm:gap-[40px] sm:pt-[40px] ">
        <SelectPlayer
            competitors={competitors}
            color="bg-[#E81068]"
            id={1}
            setPlayer={setP1Data}
            selectedCompetitor={p1Data}
        />
        <div className="xmd:order-first xmd:w-full">
            <DatePicker
                dateTo={dateTo}
                dateFrom={dateFrom}
                setDateTo={setDateTo}
                setDateFrom={setDateFrom}
            />
        </div>
        <div
            className="flex lsm:w-[350px] text-[22px] sm:text-[16px] flex-row items-center justify-between gap-[50px] xmd:mx-auto sm:max-w-[350px] sm:gap-[20px]">
            <div className="flex flex-col sm:gap-3">
                {statistic?.map((data, index) => <div key={index}>{data.value1 || "N/A"}</div>)}
            </div>
            <div className="flex flex-col sm:gap-3">
                {statistic?.map((data, index) => <div key={index} className="flex flex-row">
                    <div className="w-[40px] pr-[10px] flex items-center justify-end pb-1">
                        <CrownIcon className="w-[18px] text-[#E81068]" />
                    </div>
                    <div>
                        {data.heading}
                    </div>
                </div>)}
            </div>
            <div className="flex flex-col sm:gap-3">
                {statistic?.map((data, index) => <div key={index}>{data.value2 || "N/A"}</div>)}
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
}
