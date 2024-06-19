import { TitleLabel } from "@/components/ui/titleLabel/title-label"

export function BestMoments() {
  return (
    <div className="flex w-[48%] flex-col gap-[10px] xmd:w-full">
      <div className="relative">
          <TitleLabel title={'Best Moments'}/>
      </div>

      <div className="flex w-full h-full">
        <div className="w-[12px] bg-[#E81068]"></div>
          <div className="w-full bg-[#000]">
              <iframe src="https://clips.twitch.tv/embed?clip=MuddyWrongLouseFrankerZ-W9SMgxWA4LwdpXHh&parent=highkick.gg"
                      className="w-full h-full"
                      allowFullScreen></iframe>
          </div>
          <div className="w-[12px] bg-[#0580C0]"></div>
      </div>
    </div>
  );
}

//h-[365px] xmd:h-[450px] md:h-[350px] sm:h-[300px]
