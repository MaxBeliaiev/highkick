import ComingSoonLabel from "@/assets/icons/coming-soon-label.svg"
import Versus from "@/assets/icons/versus.svg"
import Link from "next/link"
import { Match, STREAM_LINKS } from "@/models/matches.models"
import { format } from "date-fns"
import { getCompetitorImage } from "@/lib/utils"

export function ComingSoon({ data }: { data: Match[] }) {
    return (
        <section className="container mx-auto flex items-center justify-between py-[40px] xmd:gap-[20px] md:flex-col md:gap-[40px] sm:py-[20px]">
            {data.slice(0, 2)?.map((match: Match, index) => (
                <div key={index} className="relative w-[49%] xmd:w-full ">
                    <Link
                        className="mb-1.5"
                        href={STREAM_LINKS[match.streamChannel]}
                        target="_blank"
                    >
                        <ComingSoonLabel className="z-[-1] w-full" />
                        <div className="absolute left-[50%] top-[50%] z-[0] flex translate-x-[-50%] translate-y-[-50%] items-end gap-[40px] xmd:gap-[60px] md:gap-[40px] ">
                            <div className="flex flex-col items-center">
                                <div className="w-[150px] overflow-hidden xmd:w-[100px] md:w-[120px] sm:w-[80px]">
                                    <img
                                        className="h-auto w-full"
                                        src={getCompetitorImage(
                                            match.competitors[0].competitor,
                                            "transparent"
                                        )}
                                        alt=""
                                    />
                                </div>

                                <div className="whitespace-nowrap text-center font-sans text-[#000]">
                                    <p className="text-[32px] xmd:text-[28px] sm:text-[24px]">
                                        {
                                            match.competitors[0].competitor
                                                .nickname
                                        }
                                    </p>
                                    <p className="text-[20px] sm:text-[16px]">
                                        {match.competitors[0].competitor.name}{" "}
                                        {
                                            match.competitors[0].competitor
                                                .surname
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-[40px] xmd:gap-[30px] md:gap-[40px]">
                                <Versus className="w-[99px] xmd:w-[80px] md:w-[80px] sm:w-[50px]" />

                                <div className="flex flex-col items-center">
                                    <div className="flex h-auto items-center justify-center rounded-lg bg-[#eb1068] px-2">
                                        {data.length === 0 ? (
                                            <span className="h-[34px] text-[26px] text-white">
                                                ● Live
                                            </span>
                                        ) : (
                                            <span className="h-[34px] text-[26px] text-white">
                                                Soon
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[24px] sm:text-[18px]">
                                        {format(
                                            new Date(match.startedAt),
                                            "dd.MM.yyyy"
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-[150px] overflow-hidden xmd:w-[100px] md:w-[120px] sm:w-[80px]">
                                    <img
                                        className="h-auto w-full"
                                        src={getCompetitorImage(
                                            match.competitors[1].competitor,
                                            "transparent"
                                        )}
                                        alt=""
                                    />
                                </div>

                                <div className="whitespace-nowrap text-center font-sans text-[#000]">
                                    <p className="text-[32px] xmd:text-[28px] sm:text-[24px]">
                                        {
                                            match.competitors[1].competitor
                                                .nickname
                                        }
                                    </p>
                                    <p className="text-[20px] sm:text-[16px]">
                                        {match.competitors[1].competitor.name}{" "}
                                        {
                                            match.competitors[1].competitor
                                                .surname
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}
