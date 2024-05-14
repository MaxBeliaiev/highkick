import { ILiveData } from "@/components/index/LiveNow/live-data";

export function LiveNow() {
    const getSrc = (stream: string) => `https://player.twitch.tv/?channel=${stream}&parent=highkick.gg&autoplay=false`

    const data: ILiveData[] = [
        {
            href: getSrc('highkick_1'),
            date: "27 Feb 2024",
        },
        {
            href: getSrc('highkick_2'),
            date: "27 Feb 2024",
        },
    ]

  return (
      <section
          className="container mx-auto flex w-full flex-col gap-[50px] pb-[70px] pt-[40px] sm:gap-[30px] sm:pb-[40px] sm:pt-[20px]">
        {data?.map((live: ILiveData, index) => (
            <div
                key={index}
                className="flex flex-col items-center gap-[30px] sm:gap-[20px]"
            >
                <div className="flex h-[670px] w-full lg:h-[550px] xmd:h-[450px] md:h-[350px] sm:h-[300px]">
                    <div className=" w-[24px] bg-[#E81068] xmd:w-[12px]"></div>
                    <iframe src={live.href} className='w-full'
                            allowFullScreen></iframe>
                    <div className="w-[24px] bg-[#0580C0] xmd:w-[12px]"></div>
                </div>

              {/*  <div className="flex items-center gap-[20px]">*/}
              {/*      <LiveIcon className="w-[70px]" />*/}

              {/*      <p className="text-[32px] uppercase xmd:text-[26px]">{live.date}</p>*/}
              {/*</div>*/}
            </div>
        ))}
      </section>
  );
}
