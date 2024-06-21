import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectItemText } from "@radix-ui/react-select"
import { Competitor } from "@/models/matches.models"
import { format } from "date-fns"
import { dateFormat, getCompetitorImage } from "@/lib/utils"

export function SelectPlayer({
    color,
    id,
    setPlayer,
    competitors,
    selectedCompetitor,
}: {
    color: string
    id: number
    setPlayer: (competitor: Competitor) => void
    competitors: Competitor[]
    selectedCompetitor: Competitor | null
}) {
    const handleChange = (id: string) => {
        const competitor = competitors.find((c) => c.id === +id)
        competitor && setPlayer(competitor)
    }

    return (
        <div className=" flex w-[350px] flex-col items-center gap-[50px] sm:max-w-[350px] sm:gap-[20px]">
            <div className="flex w-full flex-col gap-[6px]">
                <p
                    className={
                        color +
                        " w-full rounded-[8px] p-[5px] text-center font-sans text-[30px] uppercase italic text-[#FFF] sm:text-[24px]"
                    }
                >
                    Player {id}
                </p>

                <Select onValueChange={handleChange}>
                    <SelectTrigger className="h-[56px] rounded-[8px] border-none bg-[#CDE6F2] py-[15px] font-serif text-[20px] text-[#000] sm:text-[18px]">
                        {selectedCompetitor?.nickname}
                    </SelectTrigger>
                    <SelectContent className="w-[350px] border-none shadow-none outline-none sm:max-w-[350px]">
                        {competitors.map((competitor) => (
                            <SelectItem
                                key={competitor.id}
                                value={String(competitor.id)}
                                className="flex w-full cursor-pointer gap-[17px] rounded-[8px] bg-[#FACFE0] py-[12px] pl-[70px] hover:bg-gray-400"
                            >
                                <span className="h-[35px] w-[35px] overflow-hidden rounded-[50%]">
                                    <img
                                        className="h-auto w-[100%]"
                                        src={getCompetitorImage(competitor)}
                                        alt=""
                                    />
                                </span>
                                <SelectItemText className=" font-sans text-[20px] text-[#000]">
                                    {competitor.nickname}
                                </SelectItemText>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {selectedCompetitor && (
                <div className="flex w-full flex-col items-center gap-[40px] sm:gap-[10px]">
                    <div className="flex w-full flex-col items-center gap-[16px] sm:gap-[8px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedCompetitor.imageSmall}
                            alt="Image"
                            width={358}
                            height={536}
                            className="w-full"
                        />
                        <div className="w-full text-center font-sans text-[#000]">
                            <p className="text-[30px] sm:text-[26px]">
                                {selectedCompetitor.nickname}
                            </p>
                            <p className="text-[26px] sm:text-[24px] ">
                                {selectedCompetitor.name}{" "}
                                {selectedCompetitor.surname}
                            </p>
                        </div>
                    </div>

                    <div className="w-full text-center text-[#000]">
                        {/*<p className="font-sans text-[26px] sm:text-[24px]">*/}
                        {/*    Age: 25*/}
                        {/*</p>*/}
                        <p className="font-serif text-[20px] text-[#8E8E8E] sm:text-[16px]">
                            Playing from{" "}
                            <span className="font-bold">
                                {format(
                                    new Date(selectedCompetitor.createdAt),
                                    dateFormat
                                )}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
