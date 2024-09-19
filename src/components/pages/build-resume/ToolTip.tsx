import { useGlobalContext } from "@/utils/providers";
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import React from "react";

export const BootstrapTooltip = styled(
  ({ className, ...props }: TooltipProps) => {
    const { isXs, isSm } = useGlobalContext();
    return (
      <Tooltip
        {...props}
        arrow
        classes={{ popper: className }}
        placement={isXs || isSm ? "bottom" : "right"}
      />
    );
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
