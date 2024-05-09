import Link from "next/link";
import Community from "@/assets/icons/community-icon.svg";

export function About() {
  return (
    <section className="container mx-auto flex w-full flex-col items-center gap-[220px] pb-[170px] pt-[100px] sm:gap-[100px] sm:pb-[70px] sm:pt-[50px]">
      <p className="max-[860px] text-start font-serif text-[24px] text-[#000] md:text-[16px]">
        Highkick.gg - created by gamers for gamers. Gathering all our experience
        and passion for cybersport we have created a league primarily for
        players and spectators. Our league will be to the liking of fighting
        fans, as we have not found an analogue where to watch selected quality
        matches in between real fights.
        <br /> <br />
        Every day in the Round Robin format our players fight for the right to
        be the best according to the results of the monthly ranked, which brings
        them a nice monetary reward.
        <br /> <br />
        You can read the rules of the league{" "}
        <Link href="/" className="text-[#E81068]">
          here
        </Link>
      </p>

      <Community className="max-w-[758px]" />
    </section>
  );
}
