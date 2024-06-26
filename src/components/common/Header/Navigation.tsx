"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathName = usePathname()
    const hoverEffect = "transition ease-in-out hover:scale-110 duration-300"
    return (
        <>
            <Link
                href="/live"
                prefetch={false}
                className="flex items-center gap-[3px]"
            >
                <span
                    className={
                        (pathName === "/live"
                            ? "bg-[#00ADEF] "
                            : `${hoverEffect} bg-[#EB1068] `) +
                        " h-[9px] w-[9px] rounded-[50%] xmd:h-[6px] xmd:w-[6px]"
                    }
                ></span>
                <span
                    className={
                        (pathName === "/live"
                            ? "text-[#00ADEF] "
                            : `${hoverEffect} text-[#EB1068] `) +
                        " font-sans text-[32px] lg:text-[24px] xmd:text-[20px]"
                    }
                >
                    Live
                </span>
            </Link>
            <Link
                href="/players"
                prefetch={false}
                className={
                    pathName === "/players" ? "text-[#00ADEF] " : `${hoverEffect} text-[#FFF]`
                }
            >
                Players
            </Link>
            <Link
                href="/ranked"
                prefetch={false}
                className={
                    pathName === "/ranked" ? "text-[#00ADEF]" : `${hoverEffect} text-[#FFF]`
                }
            >
                Ranked
            </Link>

            <Link
                href="/results"
                prefetch={false}
                className={
                    pathName === "/results" ? "text-[#00ADEF] " : `${hoverEffect} text-[#FFF]`
                }
            >
                Results
            </Link>

            <Link
                href="/about"
                prefetch={false}
                className={
                    pathName === "/about" ? "text-[#00ADEF] " : `${hoverEffect} text-[#FFF]`
                }
            >
                About Us
            </Link>
        </>
    )
}
