"use client";
import LogoIcon from "@/assets/icons/highkick-logo.svg";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/common/Header/Navigation";
import Cross from "@/assets/icons/cross-icon.svg";

export function Header() {
  return (
    <header className="absolute left-0 top-0 z-[10] w-full">
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-between gap-[130px] pt-[50px] xmd:gap-[80px] xmd:pt-[40px] md:items-start">
          <Link href="/">
            <LogoIcon className="w-[146px] lg:w-[120px] xmd:w-[90px]" />
          </Link>

          <nav className="flex w-full max-w-[852px] items-center justify-between gap-[50px] font-sans text-[32px] text-[#FFF] lg:text-[24px] xmd:max-w-full xmd:text-[20px] md:hidden">
            <Navigation />
          </nav>

          <Dialog>
            <DialogTrigger className="hidden pr-[30px] font-sans text-[20px] text-[#FFF] md:flex">
              Menu
            </DialogTrigger>

            <DialogContent className="inset-0 bottom-0 m-0 max-w-full translate-x-0 translate-y-0 justify-center border-none bg-[#000] p-0">
              <DialogClose className="h-[30px] w-full p-[50px] text-end text-[20px] text-[#fff]">
                <Cross className="w-[26px]" />
              </DialogClose>
              <nav className="flex w-full flex-col items-center gap-[50px] pb-[30px] text-[20px]">
                <Navigation />
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
