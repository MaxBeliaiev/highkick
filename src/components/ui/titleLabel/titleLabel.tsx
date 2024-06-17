'use client'
import React from "react"
import { twMerge } from 'tailwind-merge'
import "./titleLabel.css"

interface Props {
    title: string;
}

export const TitleLabel: React.FC<Props> = ({ title}) => {
    return (
        <div className="bg-no-repeat w-[540px] h-[48px] bg-[url('../assets/icons/heading-label.svg')]">
            <h3 className="my-0 leading-snug left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">{title}</h3>
        </div>
    )
}
