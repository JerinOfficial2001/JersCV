"use client";
import React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/utils/providers";
type Props = {
  resume: any;
  xs?: boolean;
  resumeID?: string;
  hideoverflow?: boolean;
  handleClose?: any;
};

export default function ResumeCard({
  resume,
  xs,
  hideoverflow,
  handleClose,
  resumeID,
}: Props) {
  const router = useRouter();
  const { setid } = useGlobalContext();
  return (
    <Box
      onClick={
        xs
          ? () => {
              setid(resume.id);
              if (resumeID) {
                handleClose();
              }
            }
          : undefined
      }
      className="w-[100%] relative flex items-center justify-center p-1 rounded-xl bg-white"
      sx={{
        "&:hover": {
          borderLeft: xs ? "2px solid #383838" : "4px solid #383838",
          borderRight: xs ? "2px solid #383838" : "4px solid #383838",
        },
        transition: "all .1s",
        height: xs ? "250px" : "400px",
        padding: 1,
        boxShadow: "0px 0px 1px 1px silver",
        cursor: xs ? "pointer" : "auto",
      }}
      {...((xs || hideoverflow) && {
        style: {
          overflow: "hidden",
          marginTop: 2,
        },
      })}
    >
      {/* <img
        className="dark:invert w-[100%] h-[100%] rounded-xl"
        src="/Resume.jpg"
        alt="Next.js logo"
        style={{
          boxShadow: "1px 1px 3px gray",
          objectFit: "contain",
        }}
      /> */}
      {resume.resume_template("small", true, null, xs)}
      {!xs && (
        <div
          onClick={() => {
            router.push("/build-resume?id=" + resume.id);
            setid(resume.id);
          }}
          className="w-[70%] absolute bottom-3 font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
        >
          Choose template
        </div>
      )}
    </Box>
  );
}
