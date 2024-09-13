import { Box, IconButton, Modal, Portal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTemplateByID } from "./ResumeTemplates";
import { X } from "lucide-react";
import ResumeToolBar from "./ResumeToolBar";
import { useGlobalContext } from "@/utils/providers";

type Props = {
  open: boolean;
  handleClose: () => void | undefined;
};

export default function ChangeTemplateModal({ open, handleClose }: Props) {
  const { id } = useGlobalContext();
  const [resumeID, setresumeID] = useState("");
  useEffect(() => {
    setresumeID(id);
  }, [open]);

  return (
    <Portal>
      <Modal open={open} onClose={handleClose}>
        <div className="w-full flex justify-center items-center h-screen pt-10 pb-10">
          <Box
            sx={{
              width: {
                xs: "95%",
                md: "70%",
              },
            }}
            className="flex flex-row items-start bg-white rounded-md relative m-auto h-[100%] "
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: -15,
                right: -15,
                color: "white",
                background: "black",
                "&:hover": {
                  background: "#646464",
                },
              }}
            >
              <X />
            </IconButton>
            <div
              style={{ borderRadius: "6px 6px 0 0" }}
              className="w-[40%] flex flex-col items-center gap-2 p-7"
            >
              <h1 className="text-[35px] font-extrabold leading-normal ">
                Change Template
              </h1>

              <ResumeToolBar
                resumeID={resumeID}
                setresumeID={setresumeID}
                handleClose={handleClose}
              />
            </div>
            <div
              style={{
                borderRadius: "0 0 6px 6px ",
              }}
              className="bg-[#383838] w-[60%] p-10 flex flex-col items-center overflow-hidden h-full"
            >
              {getTemplateByID(resumeID, "", true)}
            </div>
          </Box>
        </div>
      </Modal>
    </Portal>
  );
}
