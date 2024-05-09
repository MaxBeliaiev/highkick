import Image from "next/image";
import backgroundImage from "@/assets/images/home-page-background-image.jpeg";
import { MatchTable } from "@/components/index/FutureMatches/MatchTable";
import PreviewLabel from "@/assets/icons/preview-label.svg";

export function Preview({ heading }: { heading: string }) {
  return (
    <section className="relative w-full">
      <div className="container mx-auto flex w-full flex-col  items-center pt-[534px] lg:pt-[500px] xmd:pt-[370px] md:pt-[310px] sm:pt-[260px] ">
        <div className="relative flex w-full flex-col items-center overflow-hidden">
          <PreviewLabel className=" w-[1260px] xmd:w-[1100px] " />
          <h1 className="absolute left-[50%] top-[50%] z-[1] translate-x-[-50%] translate-y-[-50%] font-sans text-[50px] uppercase italic text-[#FFF] xmd:text-[40px]">
            {heading}
          </h1>
        </div>
      </div>

      <Image
        width={1920}
        height={990}
        src={backgroundImage}
        alt="Image"
        className="absolute left-0 top-0 z-[-1] w-full overflow-x-hidden object-cover lg:h-[900px] lg:w-auto xmd:h-[700px] md:h-[600px] sm:h-[500px]"
      />
    </section>
  );
}
