"use client"
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn'
import { IPlayersData } from "@/components/index/Players/DatePicker"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Competitor } from "@/models/matches.models"
import { getStatistics } from "@/api/fetch-statistics"
import { Statistic } from "@/models/recent-matches.models"
import {
    getFormattedStatistics,
    getFormattedStatsWithWinRate,
} from "@/lib/utils"
import { useWindowWidth } from '@react-hook/window-size'
import { DesktopView } from "@/components/index/Players/DesktopView"
import { MobileView } from "@/components/index/Players/MobileView"

export function Players({ competitors }: { competitors: Competitor[] }) {
    const firstPlayer = competitors[0];
    const secondPlayer = competitors[1];
    const startDate = dayjs().toDate()
    const endDate = dayjs().subtract(7, 'day').toDate()
    const [p1Statistics, setP1Statistics] = useState<Statistic[]>([])
    const [p2Statistics, setP2Statistics] = useState<Statistic[]>([])
    const [hasP1StatsFetched, setHasP1StatsFetched] = useState(false)
    const [hasP2StatsFetched, setHasP2StatsFetched] = useState(false)
    const [p1Data, setP1Data] = useState<Competitor>(firstPlayer as Competitor)
    const [p2Data, setP2Data] = useState<Competitor>(secondPlayer as Competitor)
    const [dateFrom, setDateFrom] = useState<Date | undefined>(endDate)
    const [dateTo, setDateTo] = useState<Date | undefined>(startDate)
    const onlyWidth = useWindowWidth();
    const formattedStatistics = useMemo(
        () =>
            getFormattedStatsWithWinRate(
                getFormattedStatistics([...p1Statistics, ...p2Statistics])
            ),
        [p1Statistics, p2Statistics]
    )

    const getOverallStats = (): Array<IPlayersData> => {
        if (
            !formattedStatistics.length ||
            !(hasP1StatsFetched && hasP2StatsFetched)
        )
            return []

        const p1Stats = formattedStatistics.find(
            (fs) => fs.competitorId === p1Data?.id
        )
        const p2Stats = formattedStatistics.find(
            (fs) => fs.competitorId === p2Data?.id
        )

        return [
            {
                heading: "Games",
                value1: p1Stats?.games,
                value2: p2Stats?.games,
            },
            {
                heading: "Wins",
                value1: p1Stats?.wins,
                value2: p2Stats?.wins,
            },
            {
                heading: "Knockouts",
                value1: p1Stats?.knockouts,
                value2: p2Stats?.knockouts,
            },
            {
                heading: "Win Rate",
                value1: p1Stats && `${p1Stats.rate}%`,
                value2: p2Stats && `${p2Stats.rate}%`,
            },
        ]
    }

    const getPlayersStats = useCallback(
        (id: number) => {
            return getStatistics(
                `competitorId=${id}&startedFrom=${dateFrom?.toISOString()}&startedTo=${dateTo?.toISOString()}`
            )
        },
        [dateFrom, dateTo]
    )

    const fetchFirstPlayerStats = useCallback(async () => {
        const stats = await getPlayersStats(p1Data!.id)
        setP1Statistics(stats)
        setHasP1StatsFetched(true)
    }, [p1Data, getPlayersStats])

    const fetchSecondPlayerStats = useCallback(async () => {
        const stats = await getPlayersStats(p2Data!.id)
        setP2Statistics(stats)
        setHasP2StatsFetched(true)
    }, [getPlayersStats, p2Data])

    useEffect(() => {
        if (dateFrom && dateTo) {
            p1Data && fetchFirstPlayerStats()
            p2Data && fetchSecondPlayerStats()
        }
    }, [
        p1Data,
        p2Data,
        dateFrom,
        dateTo,
        fetchFirstPlayerStats,
        fetchSecondPlayerStats,
    ])

    return (
        onlyWidth <= 768
            ? <MobileView competitors={competitors} statistic={getOverallStats()} setP1Data={setP1Data} p1Data={p1Data} dateTo={dateTo} dateFrom={dateFrom} setDateTo={setDateTo} setDateFrom={setDateFrom} setP2Data={setP2Data} p2Data={p2Data} />
            : <DesktopView competitors={competitors} statistic={getOverallStats()} setP1Data={setP1Data} p1Data={p1Data} dateTo={dateTo} dateFrom={dateFrom} setDateTo={setDateTo} setDateFrom={setDateFrom} setP2Data={setP2Data} p2Data={p2Data} />

    )
}
