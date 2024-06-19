import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
} from "@/components/ui/table"
import JoystickIcon from "@/assets/icons/joystick-icon.svg"
import MedalIcon from "@/assets/icons/medal-icon.svg"
import CrownIcon from "@/assets/icons/crown-icon.svg"
import { RankedData } from "@/components/index/Ranked/ranked-data"
import { Competitor } from "@/models/matches.models"
import MedalGold from "@/assets/icons/gold-medal.svg"
import MedalSilver from "@/assets/icons/silver-medal.svg"
import MedalBronze from "@/assets/icons/bronze-medal.svg"
import MedalBlue from "@/assets/icons/blue-medal.svg"
import MedalPink from "@/assets/icons/pink-medal.svg"
import { getCompetitorImage } from "@/lib/utils"
import { TitleLabel } from "@/components/ui/titleLabel/title-label"

export function Ranked({
    data,
    competitors,
}: {
    data: RankedData[]
    competitors: Competitor[]
}) {
    const topPlayerStats = data[0]
    const topPlayer = competitors.find(
        (c) => c.id === topPlayerStats.competitorId
    )

    const prizes = [900, 600, 400, 300, 200, 100]

    return (
        <section className="container mx-auto flex w-full flex-col items-center pb-[90px] pt-[20px]">
            <div className="mb-2 flex w-full items-end justify-between xmd:flex-col-reverse xmd:items-start">
                <div className="relative xmd:w-full">
                    <TitleLabel title={'All Players'}/>
                </div>
                <div className="flex items-end mb-6">
                    <div className="flex flex-col items-start gap-[35px] pb-[20px] mr-6">
                        <div className="text-[40px] uppercase italic xmd:text-[26px]">
                            Pound 4 pound
                        </div>

                        <Table className="m-0 p-0 text-[22px] sm:text-[16px] ">
                            <TableBody>
                                <TableRow className="border-none">
                                    <TableCell className="py-0 sm:px-[3px]">
                                        <JoystickIcon className="w-[26px] text-[#EB1068]" />
                                    </TableCell>
                                    <TableCell className="py-0 sm:px-[3px]">
                                        Games
                                    </TableCell>
                                    <TableCell className="py-0 sm:px-[3px]">
                                        {topPlayerStats.games}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="border-spacing-0 border-none">
                                    <TableCell className="py-0 sm:px-[3px]">
                                        <MedalIcon className="w-[20px] text-[#EB1068]" />
                                    </TableCell>
                                    <TableCell className="py-0 sm:px-[3px]">
                                        Wins
                                    </TableCell>
                                    <TableCell className="py-0 sm:px-[3px]">
                                        {topPlayerStats.wins}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="border-none">
                                    <TableCell className="py-0 sm:px-[3px]">
                                        <CrownIcon className="w-[23px] text-[#EB1068]" />
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap py-0 sm:px-[3px]">
                                        Win Rate
                                    </TableCell>
                                    <TableCell className="py-0 sm:px-[3px]">
                                        {topPlayerStats.rate}%
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <img
                        src={getCompetitorImage(topPlayer, "big")}
                        alt="Image"
                        className="w-[263px] xmd:w-[200px] sm:w-[150px]"
                    />
                </div>
            </div>
            <Table>
                <TableHeader className="border-b-[4px] border-[#FFF]">
                    <TableRow className="h-[35px] rounded-[8x] bg-[#E81068] py-[7px] text-center font-sans text-[20px] uppercase italic text-[#FFF] xmd:text-[16px]">
                        <TableHead className="min-w-[70px] rounded-l-[6px] text-center xmd:min-w-[60px]"></TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Games</TableHead>
                        <TableHead className="text-center">Wins</TableHead>
                        <TableHead className="text-center">Losses</TableHead>
                        <TableHead className="text-center">Win Rate</TableHead>
                        <TableHead className="rounded-r-[6px] text-center">
                            Prize
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, i) => {
                        const competitor = competitors.find(
                            (c) => c.id === item.competitorId
                        )
                        let Medal
                        switch (i) {
                            case 0:
                                Medal = MedalGold
                                break
                            case 1:
                                Medal = MedalSilver
                                break
                            case 2:
                                Medal = MedalBronze
                                break
                            case 3:
                            case 4:
                            case 5:
                                Medal = MedalBlue
                                break
                            default:
                                Medal = MedalPink
                        }

                        return (
                            <TableRow
                                key={competitor?.id}
                                className="rounded-[8px] border-b-[4px] border-[#FFF] bg-[#CDE6F2] py-[14px] text-center font-serif text-[14px] text-[#000] xmd:text-[11px]"
                            >
                                <TableCell
                                    className="rounded-l-[8px] py-[10px] xmd:py-[8px]"
                                    width={30}
                                >
                                    {Medal && (
                                        <Medal className="w-[39px] sm:w-[25px] " />
                                    )}
                                </TableCell>
                                <TableCell className="]whitespace-nowrap py-[10px] xmd:py-[8px]">
                                    <div className="ml-[25%] flex items-center gap-[17px] sm:ml-0">
                                        <div className="h-[35px] w-[35px] overflow-hidden rounded-[50%] xmd:h-[20px] xmd:w-[20px]">
                                            <img
                                                className="h-auto w-full"
                                                src={getCompetitorImage(
                                                    competitor
                                                )}
                                                alt=""
                                            />
                                        </div>
                                        {competitor?.nickname}
                                    </div>
                                </TableCell>
                                <TableCell className="py-[10px] xmd:py-[8px]">
                                    {item.games}
                                </TableCell>
                                <TableCell className="py-[10px] xmd:py-[8px]">
                                    {item.wins}
                                </TableCell>
                                <TableCell className="py-[10px] xmd:py-[8px]">
                                    {item.losses}
                                </TableCell>
                                <TableCell className="py-[10px] xmd:py-[8px]">
                                    {item.rate}%
                                </TableCell>
                                <TableCell className="rounded-r-[8px] py-[10px] xmd:py-[8px]">
                                    {prizes[i]}$
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}
