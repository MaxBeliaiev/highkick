import Image from "next/image";
import joystick from "@/assets/images/joystick.png";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/twitter-icon.svg";
import WhatsappIcon from "@/assets/icons/whatsapp-icon.svg";
import Link from "next/link";

const iconsList = [InstagramIcon, FacebookIcon, TwitterIcon, WhatsappIcon];

export function Footer({
  displayText,
  displayImage,
}: {
  displayText?: boolean;
  displayImage?: boolean;
}) {
  return (
    <footer className="container mx-auto flex w-full flex-col items-center gap-[27px] pb-[120px] pt-[30px] xmd:pb-[100px] md:pb-[70px]">
      <div className="flex w-full flex-col items-center gap-[40px]">
        <div
          className={
            (displayText ? "" : "hidden ") +
            " flex max-w-[859px] flex-col gap-[20px] text-center font-serif text-[24px] xmd:max-w-[650px] md:max-w-[500px] md:text-[16px]"
          }
        >
          <p>
            Highkick.gg - created by gamers for gamers. Gathering all our
            experience and passion for cybersport we have created a league
            primarily for players and spectators. Our league will be to the
            liking of fighting fans, as we have not found an analogue where to
            watch selected quality matches in between real fights.
          </p>
          <p className="pt-[10px]">
            Every day in the Round Robin format our players fight for the right
            to be the best according to the results of the monthly ranked, which
            brings them a nice monetary reward.
          </p>
          <p>
            You can read the rules of the league{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://main.d1tqew6kbimkdj.amplifyapp.com/about#:~:text=of%20the%20league-,here,-highkick.gg"
            >
              here
            </a>
          </p>
        </div>

        <Image
          src={joystick}
          alt="Joystick"
          width={310}
          height={255}
          className={
            (displayImage ? "" : "hidden ") + " max-w-[310px] xmd:max-w-[210px]"
          }
        />
      </div>

      <div className="flex items-center gap-[16px]">
        {iconsList.map((Icon, index) => (
          <Link href="/" key={index}>
            <Icon className="w-[33px] xmd:w-[25px]" />
          </Link>
        ))}
      </div>
    </footer>
  );
}
