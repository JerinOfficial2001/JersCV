"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SelectInput from "@/components/pages/choose-template/SelectInput";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ResumeCard from "@/components/pages/choose-template/ResumeCard";
import SurfaceLayout from "@/components/SurfaceLayout";
import { Templates } from "@/components/pages/build-resume/ResumeTemplates";
import { useGlobalContext } from "@/utils/providers";
import { Check } from "lucide-react";
import Loader from "@/components/Loader";
import Cookies from "js-cookie";
import ColorPalatte from "@/components/pages/choose-template/ColorPalatte";

type Props = {};

export default function ChooseTemplate({}: Props) {
  const { color, setcolor, setinputDatas, resetInputField } =
    useGlobalContext();
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
    resetInputField();
    Cookies.remove("resumeData");
    Cookies.remove("completed");
  }, []);

  return (
    <SurfaceLayout>
      {isClient ? (
        <div className="relative flex gap-8 flex-col w-[100%] items-center">
          <div
            className="fixed flex gap-8 flex-col w-[100%] items-center bg-[white]"
            style={{ zIndex: 2 }}
          >
            <div className="flex items-center flex-col text-sm text-center sm:text-left ">
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    md: 32,
                  },
                  fontWeight: "bold",
                }}
              >
                Templates we recommend for first resumes
              </Typography>

              <p className="mt-2 text-[15px] font-[family-name:var(--font-geist-mono)] ">
                You can always change your template later.
              </p>
            </div>
            <Box
              className="flex items-center justify-around bg-[#f4f5fb] rounded-md p-3"
              style={{
                boxShadow: "0 2px 5px 2px rgba(0,0,0,.1)",
              }}
              sx={{
                width: {
                  xs: "95%",
                  md: "65%",
                },
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                gap: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <p className="text-[15px] font-bold">Fillters:</p>
              <div className="flex flex-row justify-between items-center gap-5">
                <SelectInput
                  label="Headshot"
                  menus={[{ value: "With Photo" }, { value: "Without Photo" }]}
                />
                <SelectInput
                  label="Columns"
                  menus={[{ value: "1 Column" }, { value: "2 Columns" }]}
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-1 ">
                <p className="text-[15px] font-bold">Color:</p>
                <ColorPalatte />
              </div>
            </Box>
          </div>
          <Box
            sx={{
              marginTop: {
                xs: 32,
                md: 23,
              },
            }}
            className="w-[70%] flex flex-col gap-2 "
          >
            <p className="mt-2 text-[13px] font-[family-name:var(--font-geist-mono)]">
              Showing all templates ({Templates.length})
            </p>
            <Grid
              container
              gap={2}
              sx={{
                justifyContent: "center",
                width: "100%",
                paddingBottom: "40px",
              }}
            >
              {Templates.map((elem, index) => {
                return (
                  <Grid key={index} xs={12} md={3.5}>
                    <ResumeCard resume={elem} hideoverflow={true} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      ) : (
        <Loader />
      )}
    </SurfaceLayout>
  );
}
