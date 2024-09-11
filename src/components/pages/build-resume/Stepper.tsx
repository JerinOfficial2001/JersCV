"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BootstrapTooltip } from "./ToolTip";
import { useGlobalContext } from "@/utils/providers";
interface Step {
  label: string;
}
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeStep: number;
  steps: Step[];
};
export default function VerticalLinearStepper({
  isOpen,
  activeStep,
  steps,
}: Props) {
  const { isXs, isSm } = useGlobalContext();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: isOpen ? 300 : "auto" },
        height: {
          xs: !isOpen ? 60 : "auto",
          sm: "100%",
        },
      }}
      className="flex items-center justify-center "
    >
      <Stepper
        sx={{
          "& .MuiStepConnector-line": {
            minHeight: { xs: 0, md: "60px" },
            minWidth: { xs: "10px", md: "0px" },
            marginLeft: { xs: 0, md: 1 },
          },
          "& .MuiStepIcon-root": {
            width: { xs: "20px", md: "40px" },
            height: { xs: "20px", md: "40px" },
          },
          "& .MuiStepLabel-root": {
            flexDirection: {
              xs: "column",
              md: "row",
            },
          },
          "& .MuiStepLabel-iconContainer": {
            paddingRight: { xs: 0, md: "" },
          },
          "& .MuiStepLabel-labelContainer": {
            textAlign: { xs: "center", md: "start" },
            marginLeft: { xs: 0, md: 1 },
            marginTop: { xs: "2px", md: 0 },
          },
        }}
        activeStep={activeStep}
        orientation={isXs || isSm ? "horizontal" : "vertical"}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <BootstrapTooltip title={step.label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    display: isOpen ? "block" : "none",
                    color: "silver",
                    fontSize: { xs: "8px", md: "" },
                  },
                  "& .MuiStepLabel-label.Mui-active": {
                    color: "white",
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </BootstrapTooltip>
            {/* <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent> */}
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
