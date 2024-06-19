'use client'
import React from "react"

interface Props {
    title: string;
}

export const TitleLabel: React.FC<Props> = ({ title}) => {
    return (
        <div className="bg-no-repeat max-w-[540px] min-w-[400px] min-h-[38px] max-h-[48px] items-center flex bg-[url('../assets/icons/heading-label.svg')]">
            <h3 className="z-[1] pl-[50px] font-sans text-[36px] sm:leading-8 uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">{title}</h3>
        </div>
    )
}
