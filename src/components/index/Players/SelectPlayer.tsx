"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { SelectItemText } from "@radix-ui/react-select";
import player from "@/assets/images/player.png";
import Image from "next/image";

export function SelectPlayer({
  color,
  id,
  setPlayer,
}: {
  color: string;
  id: number;
  setPlayer: (username: string) => void;
}) {
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

        <Select onValueChange={setPlayer}>
          <SelectTrigger className="h-[56px] rounded-[8px] border-none bg-[#CDE6F2] py-[15px] pl-[130px] pr-[22px] font-serif text-[20px] text-[#000] sm:text-[18px]">
            <SelectValue placeholder="Select Player" />
          </SelectTrigger>
          <SelectContent className="w-[350px] border-none shadow-none outline-none sm:max-w-[350px]">
            <SelectItem
              value="Scalpel"
              className="flex w-full gap-[17px] rounded-[8px] bg-[#FACFE0] py-[12px] pl-[70px]"
            >
              <span className="h-[35px] w-[35px] rounded-[50%] bg-[#000]"></span>
              <SelectItemText className=" font-sans text-[20px] text-[#000]">
                Scalpel
              </SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex w-full flex-col items-center gap-[40px] sm:gap-[10px]">
        <div className="flex w-full flex-col items-center gap-[16px] sm:gap-[8px]">
          <Image
            src={player}
            alt="Image"
            width={358}
            height={536}
            className="w-full"
          />
          <div className="w-full text-center font-sans text-[#000]">
            <p className="text-[30px] sm:text-[26px]">"NickName"</p>
            <p className="text-[26px] sm:text-[24px] ">Full Name</p>
          </div>
        </div>

        <div className="w-full text-center text-[#000]">
          <p className="font-sans text-[26px] sm:text-[24px]">Age: 25</p>
          <p className="font-serif text-[20px] text-[#8E8E8E] sm:text-[16px]">
            Playing from <span className="font-bold">12.12.2012</span>
          </p>
        </div>
      </div>
    </div>
  );
}
