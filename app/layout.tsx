import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Soccer Academy | Premier Youth Soccer for Kids Ages 6–12",
  description:
    "Official website for World Soccer Academy. Fun, licensed coaching, technical mastery, and league matches for U8, U10, and U12 players.",
  keywords: [
    "World Soccer Academy",
    "youth soccer",
    "kids soccer ages 6-12",
    "soccer training",
    "summer soccer camp",
    "U8 soccer",
    "U10 soccer",
    "U12 soccer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
