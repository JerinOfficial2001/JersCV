import { useGlobalContext } from "@/utils/providers";
import { Box } from "@mui/material";
import { Check } from "lucide-react";
import React from "react";

type Props = {
  isBig?: boolean;
};

export default function ColorPalatte({ isBig }: Props) {
  const { color, setcolor } = useGlobalContext();
  return (
    <div
      className="flex"
      {...(isBig && {
        style: {
          width: "100%",
          justifyContent: "space-around",
        },
      })}
    >
      {[
        { id: 1, color: "white" },
        { id: 2, color: "#34393e" },
        { id: 3, color: "#af9b94" },
        { id: 4, color: "#144181" },
        { id: 5, color: "#4585dd" },
        { id: 6, color: "#00a4c1" },
        { id: 7, color: "#2c806e" },
        { id: 8, color: "#f6911e" },
        { id: 9, color: "#cb454e" },
      ].map((elem, index) => {
        return (
          <Box
            onClick={() => {
              setcolor(elem.color == "white" ? "silver" : elem.color);
            }}
            key={index}
            className={`rounded-full p-[2px]`}
            sx={{
              "&:hover": {
                border: `2px solid ${
                  elem.color == "white" ? "silver" : elem.color
                }`,
              },
              height: isBig ? "35px" : "30px",
              width: isBig ? "35px" : "30px",
            }}
            // style={{
            //   boxShadow: "0 .3rem .4rem rgba(0,0,0,.2)",
            // }}
          >
            <div
              style={{
                background: elem.color,
                boxShadow: "0 .3rem .4rem rgba(0,0,0,.2)",
              }}
              className={`h-[100%] w-[100%] rounded-full flex items-center justify-center`}
            >
              {color == (elem.color == "white" ? "silver" : elem.color) && (
                <Check />
              )}
            </div>
          </Box>
        );
      })}
    </div>
  );
}
