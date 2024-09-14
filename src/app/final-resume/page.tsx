"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { getTemplateByID } from "@/components/pages/build-resume/ResumeTemplates";
import { useSearchParams } from "next/navigation";
import SurfaceLayout from "@/components/SurfaceLayout";
import { Download, Email, Print } from "@mui/icons-material";
import CVButton from "@/components/CVButton";
import ReactToPrint from "react-to-print";
import Loader from "@/components/Loader";
import ResumeToolBar from "@/components/pages/build-resume/ResumeToolBar";
import { useGlobalContext } from "@/utils/providers";

export default function FinalResume() {
  const searchParams = useSearchParams();
  const resume_id = searchParams.get("id");
  const { id } = useGlobalContext();

  const printRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);

  return (
    <SurfaceLayout bg="#383838">
      {isClient ? (
        <div className="w-full flex flex-row justify-center items-start bg-[#383838] p-5 relative">
          <div className="w-[25%] h-full sticky top-20">
            <ResumeToolBar />
          </div>
          <div className="w-[50%]">
            <div ref={printRef}>
              {getTemplateByID(id || resume_id, "", true)}
            </div>
          </div>
          <div className="w-[25%] flex flex-col items-center justify-start sticky top-20 gap-5">
            <div className="w-full flex flex-row items-center justify-evenly ">
              {[
                {
                  name: "Download",
                  to: "",
                  icon: <Download />,
                },
                { name: "Print", to: "", icon: <Print /> },
                { name: "Email", to: "", icon: <Email /> },
              ].map((elem: any, index: number) => {
                if (elem.name == "Print") {
                  return (
                    <ReactToPrint
                      key={index}
                      trigger={() => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              "&:hover": {
                                background: "#97eca3",
                              },
                              boxShadow:
                                "0 2px 6px 0 rgba(91,115,139,.1607843137),0 0 2px 0 rgba(91,115,139,.1607843137)",
                              transition: "all .3s",
                              color: "black",
                            }}
                            className="h-[52px] w-[75px] rounded-md bg-white cursor-pointer flex flex-col items-center justify-center gap-1"
                          >
                            {elem.icon}
                            <p className="text-[10px] font-semibold">
                              {elem.name}
                            </p>
                          </Box>
                        );
                      }}
                      content={() => printRef.current}
                    />
                  );
                } else {
                  return (
                    <Box
                      key={index}
                      sx={{
                        "&:hover": {
                          background: "#97eca3",
                        },
                        boxShadow:
                          "0 2px 6px 0 rgba(91,115,139,.1607843137),0 0 2px 0 rgba(91,115,139,.1607843137)",
                        transition: "all .3s",
                        color: "black",
                      }}
                      className="h-[52px] w-[75px] rounded-md bg-white cursor-pointer flex flex-col items-center justify-center gap-1"
                    >
                      {elem.icon}
                      <p className="text-[10px] font-semibold">{elem.name}</p>
                    </Box>
                  );
                }
              })}
            </div>
            <CVButton
              name="Save & Next"
              onClick={() => {}}
              customStyle="w-[80%]"
              changeHoverBg={true}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </SurfaceLayout>
  );
}
