"use client";
import { SelectPlayer } from "@/components/index/Players/SelectPlayer";
import { DatePicker } from "@/components/index/Players/DatePicker";
import { useEffect, useState } from "react";

export function Players() {
  const [firstPlayerData, setFirstPlayerData] = useState("");
  const [secondPlayerData, setSecondPlayerData] = useState("");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  useEffect(() => {
    console.log(firstPlayerData, secondPlayerData, dateFrom, dateTo);
  }, [firstPlayerData, secondPlayerData, dateFrom, dateTo]);

  return (
    <section className="container mx-auto flex w-auto flex-wrap items-start justify-between gap-[50px] pb-[50px] pt-[160px] xmd:items-center xmd:justify-around xmd:pt-[120px] sm:gap-[40px] sm:pt-[40px] ">
      <SelectPlayer
        color="bg-[#E81068]"
        id={1}
        setPlayer={setFirstPlayerData}
      />
      <div className="xmd:order-first xmd:w-full">
        <DatePicker
          dateTo={dateTo}
          dateFrom={dateFrom}
          setDateTo={setDateTo}
          setDateFrom={setDateFrom}
        />
      </div>
      <SelectPlayer
        color="bg-[#0580C3]"
        id={2}
        setPlayer={setSecondPlayerData}
      />
    </section>
  );
}
