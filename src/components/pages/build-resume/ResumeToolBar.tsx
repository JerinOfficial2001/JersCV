import React from "react";
import ColorPalatte from "../choose-template/ColorPalatte";
import { Grid } from "@mui/material";
import { Templates } from "./ResumeTemplates";
import ResumeCard from "../choose-template/ResumeCard";
import { useGlobalContext } from "@/utils/providers";

type Props = {
  resumeID?: string;
  setresumeID?: any;
  handleClose?: () => void | undefined;
};

export default function ResumeToolBar({
  resumeID,
  setresumeID,
  handleClose,
}: Props) {
  const { id } = useGlobalContext();
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full">
      <ColorPalatte isBig={true} />
      <Grid
        container
        gap={2}
        sx={{
          justifyContent: "center",
          width: "100%",
          paddingBottom: "40px",
          height: { xs: "", md: "480px" },
          overflowY: "scroll",
          boxShadow: resumeID
            ? "inset 0 -10px 10px -10px gray"
            : "inset 0 -10px 10px -10px #ffffff",
          borderRadius: 5,
        }}
      >
        {Templates.map((elem: any, index: number) => {
          return (
            <Grid
              onMouseEnter={
                resumeID
                  ? () => {
                      setresumeID(elem.id);
                    }
                  : undefined
              }
              onMouseLeave={
                resumeID
                  ? () => {
                      setresumeID(id);
                    }
                  : undefined
              }
              key={index}
              xs={12}
              md={5.5}
            >
              <ResumeCard
                resume={elem}
                xs={true}
                handleClose={handleClose}
                resumeID={resumeID}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
