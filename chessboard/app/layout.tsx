import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChessGameContextProvider from "@/context/chess-game-context";
import BoardContextProvider from "@/context/chess-game-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuraChess",
  description: "A smart chess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-50/90 relative pt-8 sm:pt-16`}
      >
        <div className="bg-[#946263] absolute -top-24 -z-10 right-44 h-125 w-125 rouded-full blur-[10rem] sm:w-275" />
        <div
          className="bg-[#676394] absolute -top-4 -z-10 -left-140 h-125 w-125 rouded-full blur-[10rem] sm:w-275
          md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20"
        />
        <ChessGameContextProvider>
          <BoardContextProvider>{children}</BoardContextProvider>
        </ChessGameContextProvider>
      </body>
    </html>
  );
}
