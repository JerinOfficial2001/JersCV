"use client";
import React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
type Props = {};

export default function ResumeCard({}: Props) {
  const router = useRouter();
  return (
    <Box
      className="w-[100%] h-[390px] relative flex items-center justify-center p-1 rounded-xl"
      sx={{
        "&:hover": {
          border: "4px solid #383838",
        },
        transition: "all .1s",
      }}
    >
      <img
        className="dark:invert w-[100%] h-[100%] rounded-xl"
        src="/Resume.jpg"
        alt="Next.js logo"
        style={{
          boxShadow: "1px 1px 3px gray",
          objectFit: "contain",
        }}
      />
      <div
        onClick={() => {
          router.push("/build-resume");
        }}
        className="w-[70%] absolute bottom-3 font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
      >
        Choose template
      </div>
    </Box>
  );
}
