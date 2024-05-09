import HeadingLabel from "@/assets/icons/heading-label.svg";

export function BestMoments() {
  return (
    <div className="flex w-[48%] flex-col gap-[10px] xmd:w-full">
      <div className="relative">
        <HeadingLabel className=" w-[538px] sm:w-full" />
        <h3 className="absolute left-0 top-0 z-[1] pl-[50px] font-sans text-[40px] uppercase italic text-[#FFF] sm:h-[30px] sm:pl-[30px] sm:text-[26px]">
          Best Moments
        </h3>
      </div>

      <div className="flex w-full grow">
        <div className=" w-[12px] bg-[#E81068]"></div>
        <div className="w-full  bg-[#000]"></div>
        <div className="w-[12px] bg-[#0580C0]"></div>
      </div>
    </div>
  );
}

//h-[365px] xmd:h-[450px] md:h-[350px] sm:h-[300px]
