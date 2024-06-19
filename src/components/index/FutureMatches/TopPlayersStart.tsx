import JoystickIcon from "@/assets/icons/joystick-icon.svg"
import MedalIcon from "@/assets/icons/medal-icon.svg"
import CrownIcon from "@/assets/icons/crown-icon.svg"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Highest from "@/assets/icons/highest-icon.svg"
import { Statistic } from "@/models/recent-matches.models"
import { Competitor } from "@/models/matches.models"
import {
    getCompetitorImage,
    getFormattedStatistics,
    getFormattedStatsWithWinRate,
} from "@/lib/utils"
import { TitleLabel } from "@/components/ui/titleLabel/title-label"

export function TopPlayersStart({
    statistics,
    competitors,
}: {
    statistics: Statistic[]
    competitors: Competitor[]
}) {
    const competitorsStats = getFormattedStatistics(statistics)

    const topWinRatePlayerData = getFormattedStatsWithWinRate(
        competitorsStats
    ).sort((a, b) => b.rate - a.rate)[0]
    const topWinRatePlayer = competitors.find(
        (competitor) => competitor.id === topWinRatePlayerData.competitorId
    )
    const topKoRatePlayerData = Object.values(competitorsStats)
        .map((stat: any) => ({
            ...stat,
            rate: Number(((stat.knockouts / stat.wins) * 100).toFixed()),
        }))
        .sort((a, b) => b.rate - a.rate)[0]
    const topKoRatePlayer = competitors.find(
        (competitor) => competitor.id === topKoRatePlayerData.competitorId
    )

    return (
        <div className="float-right flex w-[48%] flex-col gap-[24px] xmd:w-full">
            <div className="relative">
                <TitleLabel title={'Top Players'}/>
            </div>

            <div className="flex w-full items-end justify-between gap-[70px] pl-[50px] xmd:justify-around xmd:pl-0 sm:justify-between sm:gap-[20px]">
                <div
                    key={topWinRatePlayer?.id}
                    className="flex w-[231px] flex-col gap-[10px]"
                >
                    <div className="flex items-center gap-[8px] ">
                        <Highest className="w-[101px] sm:w-[80px]" />
                        <p className="text-[12px] uppercase italic text-[#E81068] sm:text-[11px]">
                            Win <br /> rate of week
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <div className="h-[270px] w-full bg-[#000] sm:h-[200px]">
                            <img
                                src={getCompetitorImage(topWinRatePlayer)}
                                alt={topWinRatePlayer?.nickname}
                            />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div>
                                <p className="text-center text-[26px] text-[#000] sm:text-[22px]">
                                    {topWinRatePlayer?.nickname}{" "}
                                </p>
                                <p className="text-center text-[20px] text-[#000] sm:text-[16px]">
                                    {topWinRatePlayer?.name}{" "}
                                    {topWinRatePlayer?.surname}
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
                                            {topWinRatePlayerData?.games}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-spacing-0 border-none">
                                        <TableCell className="py-0 sm:px-[3px]">
                                            <MedalIcon className="w-[20px]" />
                                        </TableCell>
                                        <TableCell className="py-0 sm:px-[3px]">
                                            Wins
                                        </TableCell>
                                        <TableCell className="py-0 sm:px-[3px]">
                                            {topWinRatePlayerData.wins}
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
                                            {topWinRatePlayerData.rate}%
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div
                    key={topWinRatePlayer?.id}
                    className="flex w-[231px] flex-col gap-[10px]"
                >
                    <div className="flex items-center gap-[8px] ">
                        <Highest className="w-[101px] sm:w-[80px]" />
                        <p className="text-[12px] uppercase italic text-[#E81068] sm:text-[11px]">
                            KNOCKOUT <br /> rate of week
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <div className="h-[270px] w-full bg-[#000] sm:h-[200px]">
                            <img
                                src={getCompetitorImage(topKoRatePlayer)}
                                alt={topKoRatePlayer?.nickname}
                            />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div>
                                <p className="text-center text-[26px] text-[#000] sm:text-[22px]">
                                    {topKoRatePlayer?.nickname}{" "}
                                </p>
                                <p className="text-center text-[20px] text-[#000] sm:text-[16px]">
                                    {topKoRatePlayer?.name}{" "}
                                    {topKoRatePlayer?.surname}
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
                                            {topKoRatePlayerData.games}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-spacing-0 border-none">
                                        <TableCell className="py-0 sm:px-[3px]">
                                            <MedalIcon className="w-[20px]" />
                                        </TableCell>
                                        <TableCell className="py-0 sm:px-[3px]">
                                            Wins
                                        </TableCell>
                                        <TableCell className="py-0 sm:px-[3px]">
                                            {topKoRatePlayerData.wins}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-none">
                                        <TableCell className="py-0 sm:px-[3px]">
                                            <CrownIcon className="w-[23px]" />
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap py-0 sm:px-[3px]">
                                            KO Rate
                                        </TableCell>
                                        <TableCell className="py-0 sm:px-[3px]">
                                            {topKoRatePlayerData.rate}%
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
