"use client";
import React, { Suspense, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CVButton from "@/components/CVButton";
import { useRouter, useSearchParams } from "next/navigation";
import Stepper from "@/components/pages/build-resume/Stepper";
import InputContainer from "@/components/pages/build-resume/InputContainer";
import { useGlobalContext } from "@/utils/providers";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import PreviewModal from "@/components/pages/build-resume/PreviewModal";
import { getTemplateByID } from "@/components/pages/build-resume/ResumeTemplates";
import Loader from "@/components/Loader";
import Cookies from "js-cookie";
import ChangeTemplateModal from "@/components/pages/build-resume/ChangeTemplateModel";

interface Step {
  label: string;
}
export default function BuildResume() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resume_id = searchParams.get("id");
  const {
    setinputDatas,
    activeStage,
    setactiveStage,
    isOpen,
    setIsOpen,
    inputDatas,
    id,
    setid,
  } = useGlobalContext();
  const [openPreviewModal, setopenPreviewModal] = useState(false);
  const [openChangeTemplateModal, setopenChangeTemplateModal] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);
  useEffect(() => {
    if (!id) {
      setid(resume_id);
    }
  }, [openChangeTemplateModal, openPreviewModal, id]);

  const handleClosePreviewModal = () => {
    setopenPreviewModal(false);
  };
  const handleCloseChangeTemplateModal = () => {
    setopenChangeTemplateModal(false);
  };
  const formValidation = (keys?: any) => {
    const requiredFields = keys;
    const isCompleted =
      activeStage == "headers" ||
      activeStage == "summary" ||
      activeStage == "skills"
        ? requiredFields.every((elem: any) =>
            activeStage == "skills"
              ? inputDatas[activeStage][elem].length > 0
              : inputDatas[elem] != ""
          )
        : inputDatas[activeStage]?.length > 0;
    if (isCompleted) {
      Cookies.set("resumeData", JSON.stringify(inputDatas));
      if (activeStage == "summary") {
        router.push("/final-resume?id=" + id);
        Cookies.set("completed", "true");
      } else {
        setIsOpen(true);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        handleClick();
      }
    } else {
      toast.error("Kindly fill all the field");
    }
  };
  const handleActiveStage = () => {
    switch (activeStage) {
      case "headers":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("experience");
          } else {
            formValidation([
              "name",
              "email",
              "last_name",
              "role",
              "email",
              "phone",
              "linkedIn",
              "github",
              "district",
              "state",
              "country",
            ]);
          }
        }
        break;
      case "experience":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("education");
          } else {
            formValidation();
          }
        }
        break;
      case "education":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("skills");
          } else {
            formValidation();
          }
        }
        break;
      case "skills":
        {
          if (isOpen) {
            setIsOpen(false);
            setactiveStage("summary");
          } else {
            formValidation(["technical", "soft", "language"]);
          }
        }
        break;
      case "summary":
        {
          if (isOpen) {
            setIsOpen(false);
          } else {
            formValidation(["about"]);
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
  // const handleReset = () => {
  //   setActiveStep(0);
  // };
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
  const isCompleted = Cookies.get("completed");
  useEffect(() => {
    if (isCompleted) {
      const cachedData = Cookies.get("resumeData");
      const resumeData = cachedData ? JSON.parse(cachedData) : false;
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
          isVisible: resumeData?.isVisible,
          tools: resumeData?.tools,
          certifications: resumeData?.certifications,
        });
      }
      setactiveStage("summary");
      setActiveStep(4);
    }
  }, [isCompleted]);
  const [animationClass, setAnimationClass] = useState("");
  const [bounceAnimationClass, setBounceAnimationClass] = useState("");

  const handleClick = () => {
    setAnimationClass("animate__animated animate__fadeInDown");
    setBounceAnimationClass("animate__animated animate__zoomIn");
    setTimeout(() => {
      setAnimationClass("");
      setBounceAnimationClass("");
    }, 3000);
  };

  return (
    <>
      {isClient ? (
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
              zIndex: 3,
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
                position: { xs: "unset", md: "sticky" },
              }}
              className="p-3 top-0 text-sm text-center sm:text-left "
              style={{ zIndex: 2 }}
            >
              <Suspense>
                <h1
                  className={`${animationClass} animate__delay-1s text-[35px] font-extrabold leading-normal`}
                >
                  {isOpen
                    ? contents["active" + activeStage]?.title
                    : contents[activeStage]?.title}
                </h1>
                <p
                  className={`${animationClass} animate__delay-1.5s mt-2 font-[family-name:var(--font-geist-mono)]`}
                >
                  {isOpen
                    ? contents["active" + activeStage]?.description
                    : contents[activeStage]?.description}
                </p>
              </Suspense>
            </Box>
            {!isOpen && <InputContainer activeStage={activeStage} />}

            <div className="sticky bottom-0 flex flex-row justify-between items-center p-3">
              <CVButton
                // customStyle="bg-white text-[gray] border-[gray]"
                name={activeStage == "headers" && !isOpen ? "Cancel" : "Back"}
                onClick={handleBack}
              />
              <CVButton
                name={isOpen ? "Continue" : isComplete ? "Submit" : "Next"}
                onClick={handleActiveStage}
                // disable={!allowNext}
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
            }}
            className={`${bounceAnimationClass} animate__delay-2s sticky top-0 flex-col gap-2`}
          >
            <Box
              sx={{
                width: {
                  xs: "95%",
                  md: "70%",
                },
              }}
              className="flex flex-row justify-between items-center"
            >
              <Button
                onClick={() => {
                  setopenChangeTemplateModal(true);
                }}
                sx={{ textTransform: "none" }}
                size="large"
              >
                Change template
              </Button>
              <Button
                onClick={() => {
                  setopenPreviewModal(true);
                }}
                sx={{ textTransform: "none" }}
                size="large"
              >
                Preview
              </Button>
            </Box>

            <Box
              className="rounded-xl"
              sx={{
                minHeight: {
                  xs: "400px",
                  sm: "500px",
                  md: "400px",
                },
                width: {
                  xs: "300px",
                  sm: "400px",
                  md: "300px",
                },
                padding: 1,

                boxShadow: "0px 0px 3px silver ",
                overflowY: "auto",
              }}
            >
              {getTemplateByID(id || resume_id, "small")}
            </Box>
          </Box>
          <PreviewModal
            open={openPreviewModal}
            handleClose={handleClosePreviewModal}
          />
          <ChangeTemplateModal
            open={openChangeTemplateModal}
            handleClose={handleCloseChangeTemplateModal}
          />
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
}
