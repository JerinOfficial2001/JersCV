"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CVButton from "@/components/CVButton";
import { useRouter } from "next/navigation";
import Stepper from "@/components/pages/build-resume/Stepper";
import InputContainer from "@/components/pages/build-resume/InputContainer";
import { InputData } from "@/types/model";
type Props = { resumeData?: InputData | undefined };
interface Step {
  label: string;
}
export default function BuildResume({ resumeData }: Props) {
  const router = useRouter();
  const [activeStage, setactiveStage] = useState("headers");
  const [isOpen, setIsOpen] = useState(false);
  const [inputDatas, setinputDatas] = useState<any>({
    _id: "",
    name: "",
    last_name: "",
    role: "",
    mail: "",
    portfolio_link: "",
    linkedIn: "",
    phone: "",
    git: "",
    state: "",
    district: "",
    country: "",
    about: "",
    education: [],
    skills: {
      technical: [],
      soft: [],
      language: [],
    },
    experience: [],
    isVisible: false,
  });

  useEffect(() => {
    if (resumeData) {
      setinputDatas({
        _id: resumeData?._id,
        name: resumeData?.name,
        last_name: resumeData?.last_name,
        role: resumeData?.role,
        mail: resumeData?.mail,
        portfolio_link: resumeData?.portfolio_link,
        linkedIn: resumeData?.linkedIn,
        phone: resumeData?.phone,
        git: resumeData?.git,
        state: resumeData?.state,
        district: resumeData?.district,
        country: resumeData?.country,
        about: resumeData?.about,
        education: resumeData?.education,
        skills: resumeData?.skills,
        experience: resumeData?.experience,
        isVisible: false,
      });
    }
  }, []);
  const [activeStep, setActiveStep] = React.useState(0);
  console.log(activeStage);

  const handleActiveStage = () => {
    if (!isOpen && !isComplete) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    switch (activeStage) {
      case "headers":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("experience");
          } else {
            setIsOpen(true);
          }
        }
        break;
      case "experience":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("education");
          } else {
            setIsOpen(true);
          }
        }
        break;
      case "education":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("skills");
          } else {
            setIsOpen(true);
          }
        }
        break;
      case "skills":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("summary");
          } else {
            setIsOpen(true);
          }
        }
        break;
      case "summary":
        {
          if (!isComplete) {
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }
        }
        break;
      default:
        setactiveStage("headers");
    }
  };
  const handleBack = () => {
    if (isOpen) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    switch (activeStage) {
      case "headers":
        {
          if (!isOpen) {
            router.push("/choose-template");
          } else {
            setIsOpen(false);
          }
        }
        break;
      case "experience":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("experience");
          } else {
            setactiveStage("headers");
            setIsOpen(true);
          }
        }
        break;
      case "education":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("education");
          } else {
            setactiveStage("experience");
            setIsOpen(true);
          }
        }
        break;
      case "skills":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("skills");
          } else {
            setactiveStage("education");
            setIsOpen(true);
          }
        }
        break;
      case "summary":
        {
          setactiveStage("skills");
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }
        break;
      default:
        setactiveStage("headers");
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const steps: Step[] = [
    {
      label: "Headers",
    },
    {
      label: "Experience",
    },
    {
      label: "Education",
    },
    {
      label: "Skills",
    },
    {
      label: "Summary",
    },
  ];
  const isComplete = steps.length == activeStep + 1;

  const contents: any = {
    headers: {
      title: "Let’s start with your header",
      description:
        "Include your full name and at least one way for employers to reach you.",
    },
    activeheaders: {
      description: "Great progress! Next up → Experience",
      title: "Add details about your work experience",
    },
    experience: {
      title: "Let’s work on your experience",
      description: "Start with your most recent job first.",
    },
    activeexperience: {
      description: "Keep going! Next up → Education",
      title: "Let your education shine through",
    },
    education: {
      title: "Tell us about your education",
      description:
        "Whether on-going, completed or paused, every education journey is unique.",
    },
    activeeducation: {
      description: "Great progress! Next up → Skills",
      title: "Time to showcase your skills",
    },
    skills: {
      title: "We recommend including 6-8 skills",
      description:
        "Choose skills that align with the job requirements. Show employers you're confident of the work you do!",
    },
    activeskills: {
      description: "Almost there! Next up → Summary",
      title: "Let’s craft your professional summary",
    },
    summary: {
      title:
        "Finish strong with a clear summary of 2-3 sentences that showcase your abilities",
      description:
        "Seal the deal with a powerful statement. Write your own, or select from the prompts below.",
    },
    activesummary: {
      description: "",
      title: "",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        position: "relative",
        width: "100%",
        background: isOpen
          ? "radial-gradient(50% 50% at 50% 50%, #b1e4fe 0%, #fff 100%)"
          : "",
      }}
      className="items-start justify-between"
    >
      <Box
        sx={{
          height: { xs: "auto", md: "100dvh" },
          width: {
            xs: "100%",
            md: "auto",
          },
          transition: "all .3s",
        }}
        className="sticky top-0 bg-[#383838] p-2 "
      >
        <Stepper
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeStep={activeStep}
          steps={steps}
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "62%",
          },
          padding: {
            xs: 2,
            md: "60px",
          },
          display: "flex",
          flexDirection: "column",
        }}
        className="h-[auto] "
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isOpen ? "column-reverse" : "column",
            height: isOpen ? "300px" : "auto",
            gap: isOpen ? 3 : 0,
            marginBottom: isOpen ? 10 : 0,
            background: isOpen ? "" : "white",
          }}
          className="sticky p-3 top-0 text-sm text-center sm:text-left "
          style={{ zIndex: 2 }}
        >
          <h1 className="text-[35px] font-extrabold leading-normal">
            {isOpen
              ? contents["active" + activeStage]?.title
              : contents[activeStage]?.title}
          </h1>

          <p className="mt-2 font-[family-name:var(--font-geist-mono)]">
            {isOpen
              ? contents["active" + activeStage]?.description
              : contents[activeStage]?.description}
          </p>
        </Box>
        {!isOpen && (
          <InputContainer
            activeStage={activeStage}
            inputDatas={inputDatas}
            setinputDatas={setinputDatas}
          />
        )}

        <div className="sticky bottom-0 flex flex-row justify-between items-center p-3">
          <CVButton
            customStyle="bg-white text-[gray] border-[gray]"
            name={activeStage == "headers" && !isOpen ? "Cancel" : "Back"}
            onClick={handleBack}
          />
          <CVButton
            name={isOpen ? "Continue" : isComplete ? "Submit" : "Next"}
            onClick={handleActiveStage}
          />
        </div>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
          },
          height: { xs: "auto", md: "100dvh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 1,
        }}
        className="sticky top-0"
      >
        <Box
          className="rounded-xl"
          sx={{
            height: {
              xs: "400px",
              sm: "500px",
              md: "400px",
            },
            width: {
              xs: "300px",
              sm: "400px",
              md: "300px",
            },
            boxShadow: "0px 0px 3px silver ",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
