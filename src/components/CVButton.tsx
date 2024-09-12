import { Box } from "@mui/material";
import React from "react";

type Props = {
  onClick: (() => void) | undefined;
  name: string;
  customStyle?: string;
  disable?: boolean;
  changeHoverBg?: boolean;
};

export default function CVButton({
  onClick,
  name,
  customStyle,
  disable,
  changeHoverBg,
}: Props) {
  return (
    <Box
      {...(changeHoverBg && {
        sx: {
          "&:hover": {
            background: "silver",
            color: "black",
          },
          transition: "all .3s",
        },
      })}
      onClick={disable ? undefined : onClick}
      className={
        changeHoverBg
          ? `${customStyle} font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer`
          : `${customStyle} font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer`
      }
    >
      {name}
    </Box>
  );
}
