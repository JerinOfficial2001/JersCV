import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Providers from "@/utils/providers";
import Image from "next/image";
import Box from "@mui/material/Box";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JersCV",
  description:
    "JersCV is a user-friendly resume builder designed to help you create professional, standout resumes effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Providers>
          <div className="w-full flex flex-row justify-center gap-16 font-[family-name:var(--font-geist-sans)] ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
