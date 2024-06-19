import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader"
import { Header } from "@/components/common/Header/Header"

export const metadata: Metadata = {
  title: "HIGHKICK",
  description: "Created by gamers for gamers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">
    <body>
      <NextTopLoader showSpinner={false} />
      <Header />
      {children}
    </body>
  </html>;
}
