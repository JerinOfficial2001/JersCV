import { Box, IconButton, Modal, Portal } from "@mui/material";
import React from "react";
import { getTemplateByID } from "./ResumeTemplates";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  handleClose: any;
  id: any;
};

export default function PreviewModal({ open, handleClose, id }: Props) {
  return (
    <Portal>
      <Modal open={open} onClose={handleClose}>
        <div className="w-full flex justify-center items-center h-screen overflow-y-auto pt-20 pb-20">
          <Box
            sx={{
              width: {
                xs: "95%",
                md: "55%",
              },
            }}
            className="flex flex-col items-center bg-white rounded-md relative pt-10 m-auto"
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 1,
                right: 1,
              }}
            >
              <X />
            </IconButton>
            <div
              style={{ borderRadius: "6px 6px 0 0" }}
              className="w-full flex flex-col items-center gap-2 p-7"
            >
              <h1 className="text-[35px] font-extrabold leading-normal ">
                Preview Resume
              </h1>
              <div className="font-bold text-blue-500 cursor-pointer ">
                Change template
              </div>
            </div>
            <div
              style={{
                borderRadius: "0 0 6px 6px ",
              }}
              className="bg-[#383838] w-full p-10 flex flex-col items-center"
            >
              {getTemplateByID(id, "", true)}
            </div>
          </Box>
        </div>
      </Modal>
    </Portal>
  );
}
