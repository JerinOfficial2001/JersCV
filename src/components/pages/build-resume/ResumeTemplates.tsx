"use client";
import { useGlobalContext } from "@/utils/providers";
import styles from "./resume.module.css";
import { Box, Divider } from "@mui/material";
import {
  extractGitHubUsername,
  extractLinkedInUsername,
} from "@/utils/methods";
import React, { useEffect, useRef, useState } from "react";
import {
  Email,
  GitHub,
  KeyboardArrowRight,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const SkillsComponent = (arr: [], isResponsive: boolean) => {
  return (
    <>
      {arr.map((elem, index) => {
        const isLastItem = index === arr.length - 1;
        return (
          <p
            key={index}
            className={`${isResponsive ? styles.smallText : styles.text}`}
          >
            {elem} {!isLastItem && ", "}
          </p>
        );
      })}
    </>
  );
};
const RowCard = ({
  first,
  second,
  isResponsive,
  link,
}: {
  first: any;
  second: any;
  isResponsive: boolean;
  link?: string;
}) => {
  const { color } = useGlobalContext();
  return (
    <div className="flex flex-row items-center gap-1">
      <div
        className={`p-[2px] h-[auto] w-[auto] flex items-center justify-center rounded-full`}
        style={{ background: color }}
      >
        {first}
      </div>
      {link ? (
        <a
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-semibold`}
          href={link}
          target="_blank"
        >
          {second}
        </a>
      ) : (
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-semibold`}
        >
          {second}
        </p>
      )}
    </div>
  );
};
const ListContainer = ({
  data,
  isResponsive,
}: {
  data: any;
  isResponsive: boolean;
}) => {
  const { color } = useGlobalContext();
  return (
    <div className="flex flex-row items-start gap-1 ">
      <div
        className={` p-[1px] h-[auto] w-[auto] flex items-center justify-center rounded-full`}
        style={{ background: color, marginTop: isResponsive ? "1px" : "4px" }}
      >
        <KeyboardArrowRight
          style={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
        />
      </div>
      {data}
    </div>
  );
};
const ListStepContainer = ({
  data,
  isResponsive,
  header,
  bullets,
  xs,
}: {
  data: any;
  isResponsive: boolean;
  bullets?: boolean;
  xs?: boolean;
  header: any;
}) => {
  const { color } = useGlobalContext();
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row items-center gap-1">
        <Box
          className={`mt-[1px] p-[1px] h-[auto] w-[auto] flex items-center justify-center rounded-full`}
          style={{ background: color }}
          {...(bullets && {
            sx: {
              width: xs ? "1px" : isResponsive ? "3px" : "8px",
              height: xs ? "1px" : isResponsive ? "3px" : "8px",
            },
          })}
        >
          {!bullets && (
            <KeyboardArrowRight
              style={{
                color: "white",
                fontSize: isResponsive ? "5px" : "13px",
              }}
            />
          )}
        </Box>
        {header}
      </div>
      <div className="flex flex-row gap-1 ">
        <Divider
          orientation="vertical"
          sx={{
            height: "auto",
            borderColor: color,
            margin: bullets
              ? xs
                ? "-3px 0 -4px 0.5px"
                : isResponsive
                ? "-2px 0 -3px 1px "
                : "-5px 0 -6px 4px"
              : isResponsive
              ? "3px 0 0 3px "
              : "3px 0 0 7px",
          }}
        />
        {data}
      </div>
    </div>
  );
};
const RightColCardLayout = ({
  isResponsive,
  isHighlighted,
  name,
  arr,
  isExpanded,
  xs,
  bullets,
}: {
  isResponsive: boolean;
  isHighlighted: boolean;
  isExpanded?: boolean;
  xs?: boolean;
  bullets?: boolean;
  name: string;
  arr: [];
}) => {
  const { color, activeStage } = useGlobalContext();

  return (
    <div
      {...(activeStage == name && isHighlighted
        ? {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
              gap: xs ? 1 : isExpanded ? 10 : isResponsive ? 25 : 30,
            },
          }
        : {
            style: {
              gap: xs ? 1 : 10,
            },
          })}
      className={`w-full flex items-start justify-center flex-col mt-2 h-[auto]`}
    >
      <p
        className={`${
          isResponsive ? styles.smallText : styles.title
        } font-bold uppercase text-[15px] `}
        style={{
          color: color,
        }}
      >
        {name}
      </p>
      <div className="h-[-webkit-fill-available] flex flex-col justify-between items-center">
        {arr.map((elem: any, index: number) => {
          return (
            <ListStepContainer
              bullets={bullets}
              key={index}
              xs={xs}
              data={
                <div
                  className={`w-full mb-${
                    isResponsive ? 0 : 3
                  } flex flex-col gap-1 `}
                  style={{
                    alignItems: bullets || xs ? "" : "baseline",
                  }}
                >
                  <div className="w-full flex flex-row items-center justify-between">
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      {elem.company_name}
                    </p>
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                    </p>
                  </div>
                  <div className="w-full flex flex-row items-center justify-start gap-1">
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      }`}
                    >
                      {elem.place}
                    </p>
                    <span className={`${isResponsive ? styles.smallText : ""}`}>
                      ,
                    </span>
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      }`}
                    >
                      {elem.state}{" "}
                    </p>
                  </div>
                  <ul
                    className={`list-disc ${
                      isResponsive ? styles.smallText : ""
                    }`}
                    style={{
                      marginLeft: xs ? 15 : isResponsive ? 20 : 30,
                    }}
                  >
                    <li>
                      <p
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        }`}
                      >
                        {elem.description}
                      </p>
                    </li>
                    <li>
                      <div
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        } w-full flex gap-1`}
                      >
                        <span
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-bold`}
                        >
                          Learned Skill :
                        </span>
                        {SkillsComponent(elem.skills, isResponsive)}
                      </div>
                    </li>
                  </ul>
                </div>
              }
              isResponsive={isResponsive}
              header={
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.role}
                </p>
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export const TemplateOne = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();

  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  return (
    <div
      ref={ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: xs ? "1px" : isResponsive ? "20px" : "70px",
        minHeight: isResponsive || xs ? "100%" : "1100px",
      }}
    >
      <div
        {...(activeStage == "headers" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
        className="w-full flex flex-col items-center justify-center"
      >
        <h1
          style={{
            color: color,
          }}
          className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
        >
          {data?.name} {data?.last_name}
        </h1>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            {data?.role}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            Porfolio
          </p>
          <a
            className={`${isResponsive ? styles.smallText : styles.link}`}
            href="/"
          >
            {data?.portfolio_link}
          </a>
        </div>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            Mail :
          </p>
          <a
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
            href="/"
          >
            {data?.mail}
          </a>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            +91 {data?.phone}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            LinkedIn :
          </p>
          <a
            href="/"
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
          >
            {extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
          </a>
        </div>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            GitHub :
          </p>
          <a
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
            href="/"
          >
            {extractGitHubUsername(data?.git) || "JohnnyOfficial"}
          </a>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.district}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.state}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.country}
          </p>
        </div>
      </div>
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "summary" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase `}
          style={{
            color: color,
          }}
        >
          Career objective
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.about}
        </p>
      </div>
      {/* //*Education */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "education" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Education
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        {data?.education.map((elem: any, index: number) => {
          return (
            <div className={`w-full mb-${isResponsive ? 0 : 2}`} key={index}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.department}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.institution}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.percentage.includes(".") ? "CGPA" : "Percentage"}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  -
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.percentage.includes(".")
                    ? elem.percentage + "/10"
                    : elem.percentage + "%"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* //*Skills */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "skills" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Skills
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />

        <ul
          className={`list-disc ml-5 ${isResponsive ? styles.smallText : ""}`}
        >
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Technical Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.technical, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Soft Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.soft, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Languages
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.language, isResponsive)}
            </div>
          </li>
        </ul>
      </div>
      {/* //*Experience */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "experience" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Experience
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        {data.experience.map((elem: any, index: number) => {
          return (
            <div key={index} className={`w-full mb-${isResponsive ? 0 : 3}`}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.role}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-1">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.company_name}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.place}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.state}{" "}
                </p>
              </div>
              <ul
                className={`list-disc ml-5 ${
                  isResponsive ? styles.smallText : ""
                }`}
              >
                <li>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {elem.description}
                  </p>
                </li>
                <li>
                  <div
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    } w-full flex gap-1`}
                  >
                    <span
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      Learned Skill :
                    </span>
                    {SkillsComponent(elem.skills, isResponsive)}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const TemplateTwo = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();
  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  // Threshold height
  const heightThreshold = isResponsive ? 400 : 1100; // Adjust this value as needed

  useEffect(() => {
    const checkHeight = () => {
      if (componentRef.current) {
        const { height } = componentRef.current.getBoundingClientRect();
        setIsHeightExceeded(height > heightThreshold);
      }
    };

    checkHeight();

    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, [isOpen]);
  const experiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(0, 4)
      : data.experience;
  const projects =
    isHeightExceeded && experiences.length == 4
      ? []
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(0, 1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(0, 2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(0, 3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(0, 4)
      : experiences.length == 4
      ? []
      : data.experience;
  const excessExperiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(4)
      : [];
  const excessProjects =
    isHeightExceeded && experiences.length == 4
      ? data.experience
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(4)
      : experiences.length == 4
      ? data.experience
      : [];

  return (
    <div
      ref={componentRef || ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? (xs ? 0 : "20px") : "70px",
        minHeight: isResponsive ? "100%" : "1100px",
      }}
    >
      <div
        {...(activeStage == "headers" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
        className="w-full flex flex-row items-center justify-around"
      >
        <div className={`flex flex-col items-start justify-center`}>
          <h1
            style={{
              color: color,
            }}
            className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
          >
            {data?.name} {data?.last_name}
          </h1>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold ml-1`}
          >
            {data?.role}
          </p>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-semibold ml-1 text-justify w-[90%]`}
          >
            {data?.about}
          </p>
        </div>
        <div className={`flex flex-col items-start justify-center gap-1`}>
          <RowCard
            first={
              <Phone
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={"+91 " + data?.phone}
            isResponsive={isResponsive}
          />
          <RowCard
            first={
              <Email
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={data?.mail}
            isResponsive={isResponsive}
            link={`mailto:${data?.mail}`}
          />
          <RowCard
            first={
              <GitHub
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={extractGitHubUsername(data?.git) || "JohnnyOfficial"}
            isResponsive={isResponsive}
            link={data?.git}
          />
          <RowCard
            first={
              <LinkedIn
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
            isResponsive={isResponsive}
            link={data?.linkedIn}
          />
          <RowCard
            first={
              <LocationOn
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={
              <div className={`flex items-center justify-center gap-[1px]`}>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {data?.district}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {data?.state}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {data?.country}
                </p>
              </div>
            }
            isResponsive={isResponsive}
          />
        </div>
      </div>
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-1`}
      >
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
      </div>
      <div
        style={{
          height: isResponsive ? "80%" : "800px",
        }}
        className="w-full flex flex-row justify-between items-start gap-3"
      >
        {/* //*LeftCol */}
        <div
          className="flex flex-col items-start w-[40%] justify-between h-full"
          // style={{ gap: isResponsive ? "0px" : "25px" }}
        >
          {/* //*Skills */}
          <div
            {...(activeStage == "skills" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 10 : 15 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: color,
              }}
            >
              Skills
            </p>
            <div className="flex flex-row gap-1">
              <Divider
                orientation="vertical"
                sx={{ height: "auto", borderColor: color }}
              />
              <ul
                className={`list-none ${isResponsive ? styles.smallText : ""}`}
              >
                <li>
                  <ListContainer
                    isResponsive={isResponsive}
                    data={
                      <div className="w-full flex flex-col items-start ">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          Technical Skills
                        </p>
                        <div className="flex flex-row items-center">
                          {SkillsComponent(
                            data?.skills?.technical,
                            isResponsive
                          )}
                        </div>
                      </div>
                    }
                  />
                </li>
                <li>
                  <ListContainer
                    isResponsive={isResponsive}
                    data={
                      <div className="w-full flex flex-col items-start ">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          Soft Skills
                        </p>
                        <div className="flex flex-row items-center">
                          {SkillsComponent(data?.skills?.soft, isResponsive)}
                        </div>
                      </div>
                    }
                  />
                </li>
                <li>
                  <ListContainer
                    isResponsive={isResponsive}
                    data={
                      <div className="w-full flex flex-col items-start ">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          Languages
                        </p>
                        <div className="flex flex-row items-center">
                          {SkillsComponent(
                            data?.skills?.language,
                            isResponsive
                          )}
                        </div>
                      </div>
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{
              width: "-webkit-fill-available",
              borderColor: color,
              marginTop: 1,
            }}
          />
          {/* //*Education */}
          <div
            {...(activeStage == "education" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            className={`w-full flex items-start justify-center gap-1 flex-col mt-1`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: color,
              }}
            >
              Education
            </p>
            <div className="flex flex-row gap-1 w-full">
              <Divider
                orientation="vertical"
                sx={{ height: "auto", borderColor: color }}
              />
              <div className="w-full">
                {data?.education.map((elem: any, index: number) => {
                  return (
                    <ListContainer
                      key={index}
                      data={
                        <div
                          style={{ width: "100%" }}
                          className={`mb-${isResponsive ? 0 : 2}`}
                        >
                          <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-0.5">
                              <p
                                className={`${
                                  isResponsive ? styles.smallText : styles.text
                                } font-bold`}
                              >
                                {elem.department}
                              </p>
                              <span
                                className={`${
                                  isResponsive ? styles.smallText : ""
                                }`}
                              >
                                |
                              </span>
                              <p
                                className={`${
                                  isResponsive ? styles.smallText : styles.text
                                }`}
                              >
                                {elem.percentage.includes(".")
                                  ? elem.percentage + "/10"
                                  : elem.percentage + "%"}
                              </p>
                            </div>
                            <p
                              className={`${
                                isResponsive ? styles.smallText : styles.text
                              } font-bold`}
                            >
                              {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                            </p>
                          </div>
                          <div className="w-full flex flex-row items-center justify-start gap-1">
                            <p
                              className={`${
                                isResponsive ? styles.smallText : styles.text
                              }`}
                            >
                              {elem.institution}
                            </p>
                          </div>
                        </div>
                      }
                      isResponsive={isResponsive}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{
              width: "-webkit-fill-available",
              borderColor: color,
              marginTop: 1,
            }}
          />
          {/* //*Tools */}
          <div
            {...(activeStage == "tools" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 10 : 15 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: color,
              }}
            >
              Tools
            </p>
            <div className="flex flex-row gap-1">
              <Divider
                orientation="vertical"
                sx={{ height: "auto", borderColor: color }}
              />
              <ul
                className={`list-none ${
                  isResponsive ? styles.smallText : ""
                } flex flex-col`}
                style={{
                  gap: isResponsive ? "4px" : "10px",
                }}
              >
                {data?.tools.map((elem: any, index: number) => {
                  return (
                    <li key={index}>
                      <ListContainer
                        key={index}
                        isResponsive={isResponsive}
                        data={
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            } font-semibold`}
                          >
                            {elem}
                          </p>
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{
              width: "-webkit-fill-available",
              borderColor: color,
              marginTop: 1,
            }}
          />
          {/* //*Certifications */}
          <div
            {...(activeStage == "certifications" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 10 : 15 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: color,
              }}
            >
              Certifications
            </p>
            <div className="flex flex-row gap-1">
              <Divider
                orientation="vertical"
                sx={{ height: "auto", borderColor: color }}
              />
              <ul
                className={`list-none ${isResponsive ? styles.smallText : ""}`}
              >
                {data?.certifications.map((elem: any, index: number) => {
                  return (
                    <li key={index}>
                      <ListContainer
                        isResponsive={isResponsive}
                        data={
                          <div className="w-full flex flex-col items-start ">
                            <p
                              className={`${
                                isResponsive ? styles.smallText : styles.text
                              } font-semibold`}
                            >
                              {elem.certificate_for}
                            </p>
                            <div className="flex flex-row items-center">
                              <p
                                className={`${
                                  isResponsive ? styles.smallText : styles.text
                                } font-semibold`}
                              >
                                {elem.issued_by}
                              </p>
                            </div>
                          </div>
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* //*RightCol */}
        <div className="flex flex-col items-start gap-1 justify-between w-[60%] h-full">
          {/* //*Experience */}
          {experiences.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="experience"
              arr={experiences}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
            />
          )}
          {/* //*Projects */}
          {projects.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="projects"
              arr={projects}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
            />
          )}
        </div>
      </div>
      <div
        style={{ marginTop: isResponsive ? "10px" : "100px" }}
        className="flex flex-col items-start gap-1 justify-start w-full "
      >
        {/* //*Experience */}
        {excessExperiences.length > 0 && (
          <RightColCardLayout
            name="experience"
            arr={excessExperiences}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
          />
        )}
        {/* //*Projects */}
        {excessProjects.length > 0 && (
          <RightColCardLayout
            name="projects"
            arr={excessProjects}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
          />
        )}
      </div>
    </div>
  );
};
export const TemplateThree = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();
  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  // Threshold height
  const heightThreshold = isResponsive ? 400 : 1100; // Adjust this value as needed

  useEffect(() => {
    const checkHeight = () => {
      if (componentRef.current) {
        const { height } = componentRef.current.getBoundingClientRect();
        setIsHeightExceeded(height > heightThreshold);
      }
    };

    checkHeight();

    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, [isOpen]);
  const experiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(0, 4)
      : data.experience;
  const projects =
    isHeightExceeded && experiences.length == 4
      ? []
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(0, 1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(0, 2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(0, 3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(0, 4)
      : experiences.length == 4
      ? []
      : data.experience;
  const excessExperiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(4)
      : [];
  const excessProjects =
    isHeightExceeded && experiences.length == 4
      ? data.experience
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(4)
      : experiences.length == 4
      ? data.experience
      : [];

  return (
    <div
      ref={componentRef || ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        minHeight: isResponsive ? "100%" : "1100px",
      }}
    >
      <div
        style={{
          height: "100%",
          gap: xs ? 1 : 3,
        }}
        className="w-full flex flex-row justify-between items-start "
      >
        {/* //*LeftCol */}
        <div
          className="flex flex-col items-start w-[40%] justify-between "
          style={{
            padding: xs ? 0 : isResponsive ? "5px" : 40,
            background: color,
            color: "white",
            height: isResponsive || xs ? "100%" : 1055,
          }}
        >
          <div
            className={`flex flex-row items-start justify-center gap-1 w-full `}
          >
            <Box
              component={"img"}
              src={
                data?.image
                  ? URL.createObjectURL(data?.image)
                  : "/maleAvatar.jpg"
              }
              sx={{
                borderRadius: "50%",
                border: "4px solid white",
                height: xs ? "50px" : isResponsive ? "70px" : "200px",
                width: xs ? "50px" : isResponsive ? "70px" : "200px",
              }}
            />
          </div>
          {/* //*Details */}
          <div
            className={`flex flex-col items-start justify-center gap-1 mt-1`}
            {...(activeStage == "headers" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Contact
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <RowCard
              first={
                <Phone
                  sx={{
                    color: "white",
                    fontSize: isResponsive ? "5px" : "13px",
                  }}
                />
              }
              second={"+91 " + data?.phone}
              isResponsive={isResponsive}
            />
            <RowCard
              first={
                <Email
                  sx={{
                    color: "white",
                    fontSize: isResponsive ? "5px" : "13px",
                  }}
                />
              }
              second={data?.mail}
              isResponsive={isResponsive}
              link={`mailto:${data?.mail}`}
            />
            <RowCard
              first={
                <GitHub
                  sx={{
                    color: "white",
                    fontSize: isResponsive ? "5px" : "13px",
                  }}
                />
              }
              second={extractGitHubUsername(data?.git) || "JohnnyOfficial"}
              isResponsive={isResponsive}
              link={data?.git}
            />
            <RowCard
              first={
                <LinkedIn
                  sx={{
                    color: "white",
                    fontSize: isResponsive ? "5px" : "13px",
                  }}
                />
              }
              second={extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
              isResponsive={isResponsive}
              link={data?.linkedIn}
            />
            <RowCard
              first={
                <LocationOn
                  sx={{
                    color: "white",
                    fontSize: isResponsive ? "5px" : "13px",
                  }}
                />
              }
              second={
                <div className={`flex items-center justify-center gap-[1px]`}>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {data?.district}
                  </p>
                  <span className={`${isResponsive ? styles.smallText : ""}`}>
                    ,
                  </span>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {data?.state}
                  </p>
                  <span className={`${isResponsive ? styles.smallText : ""}`}>
                    ,
                  </span>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {data?.country}
                  </p>
                </div>
              }
              isResponsive={isResponsive}
            />
          </div>

          {/* //*Skills */}
          <Box
            {...(activeStage == "skills" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            sx={{ gap: isResponsive ? "5px" : "10px" }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Skills
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <div className="flex flex-row gap-1">
              <ul
                className={`list-disc ${isResponsive ? styles.smallText : ""}`}
              >
                <li className="ml-2">
                  <div className="w-full flex flex-col items-start ">
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-semibold`}
                    >
                      Technical Skills
                    </p>
                    <div className="flex flex-row items-center">
                      {SkillsComponent(data?.skills?.technical, isResponsive)}
                    </div>
                  </div>
                </li>
                <li className="ml-2">
                  <div className="w-full flex flex-col items-start ">
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-semibold`}
                    >
                      Soft Skills
                    </p>
                    <div className="flex flex-row items-center">
                      {SkillsComponent(data?.skills?.soft, isResponsive)}
                    </div>
                  </div>
                </li>
                <li className="ml-2">
                  <div className="w-full flex flex-col items-start ">
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-semibold`}
                    >
                      Languages
                    </p>
                    <div className="flex flex-row items-center">
                      {SkillsComponent(data?.skills?.language, isResponsive)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Box>

          {/* //*Education */}
          <div
            {...(activeStage == "education" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Education
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <div className="flex flex-row gap-1 w-full">
              <ul
                className={`list-disc ${isResponsive ? styles.smallText : ""}`}
              >
                {data?.education.map((elem: any, index: number) => {
                  return (
                    <li
                      key={index}
                      style={{ width: "100%" }}
                      className={`mb-${isResponsive ? 0 : 2} ml-2`}
                    >
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-0.5">
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            } font-bold`}
                          >
                            {elem.department}
                          </p>
                          <span
                            className={`${
                              isResponsive ? styles.smallText : ""
                            }`}
                          >
                            |
                          </span>
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            }`}
                          >
                            {elem.percentage.includes(".")
                              ? elem.percentage + "/10"
                              : elem.percentage + "%"}
                          </p>
                        </div>
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-bold`}
                        >
                          {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                        </p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-start gap-1">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          }`}
                        >
                          {elem.institution}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* //*Tools */}
          <div
            {...(activeStage == "tools" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 5 : 10 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Tools
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <div className="flex flex-row gap-1">
              <ul
                className={`list-disc ${
                  isResponsive ? styles.smallText : ""
                } flex flex-col`}
                style={{
                  gap: isResponsive ? "4px" : "10px",
                }}
              >
                {data?.tools.map((elem: any, index: number) => {
                  return (
                    <li key={index} className="ml-2">
                      <p
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        } font-semibold`}
                      >
                        {elem}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* //*Certifications */}
          {/* <div
            {...(activeStage == "certifications" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 5 : 10 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Certifications
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <div className="flex flex-row gap-1">
              <ul
                className={`list-disc ${isResponsive ? styles.smallText : ""}`}
              >
                {data?.certifications.map((elem: any, index: number) => {
                  return (
                    <li key={index} className="ml-2">
                      <div className="w-full flex flex-col items-start ">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          {elem.certificate_for}
                        </p>
                        <div className="flex flex-row items-center">
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            } font-semibold`}
                          >
                            {elem.issued_by}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
        </div>
        {/* //*RightCol */}
        <div
          style={{
            padding: isResponsive ? "" : 20,
            gap: xs ? 0 : 20,
          }}
          className="flex flex-col items-start  justify-between w-[60%] h-full"
        >
          {/* //*Profile */}

          <div className="w-full flex flex-row items-center justify-around">
            <div className={`flex flex-col items-start justify-center`}>
              <Box
                {...(activeStage == "headers" &&
                  isHighlighted && {
                    style: {
                      border: `2px solid #ffa5004f`,
                      background: "#ffa5001a",
                      padding: 5,
                      borderRadius: 10,
                    },
                  })}
                sx={{
                  height: xs ? "50px" : isResponsive ? "70px" : "200px",
                }}
                className={`flex flex-col items-center justify-center w-full`}
              >
                <div className="flex items-center gap-1">
                  <h1
                    style={{
                      color: "black",
                    }}
                    className={`font-[800]  text-[${
                      isResponsive ? "10px" : "25px"
                    }]`}
                  >
                    {data?.name}
                  </h1>
                  <h1
                    style={{
                      color: color,
                    }}
                    className={` text-[${isResponsive ? "10px" : "25px"}]`}
                  >
                    {data?.last_name}
                  </h1>
                </div>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold ml-1`}
                  style={{
                    color: color,
                  }}
                >
                  {data?.role}
                </p>
              </Box>
              <div
                {...(activeStage == "summary" &&
                  isHighlighted && {
                    style: {
                      border: `2px solid #ffa5004f`,
                      background: "#ffa5001a",
                      padding: 5,
                      borderRadius: 10,
                    },
                  })}
              >
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.title
                  } font-bold uppercase text-[15px] `}
                  style={{
                    color: color,
                  }}
                >
                  Profile
                </p>

                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-semibold ml-1 text-justify w-[90%]`}
                >
                  {data?.about}
                </p>
              </div>
            </div>
          </div>
          {/* //*Experience */}
          {experiences.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="experience"
              arr={experiences}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
              bullets={true}
            />
          )}
          {/* //*Projects */}
          {projects.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="projects"
              arr={projects}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
              bullets={true}
            />
          )}
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          padding: isResponsive ? "" : 20,
        }}
        className="flex flex-col items-start gap-1 justify-start w-full "
      >
        {/* //*Experience */}
        {excessExperiences.length > 0 && (
          <RightColCardLayout
            name="experience"
            arr={excessExperiences}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
            bullets={true}
          />
        )}
        {/* //*Projects */}
        {excessProjects.length > 0 && (
          <RightColCardLayout
            name="projects"
            arr={excessProjects}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
            bullets={true}
          />
        )}
      </div>
    </div>
  );
};
export const TemplateFour = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();
  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  // Threshold height
  const heightThreshold = isResponsive ? 400 : 1100; // Adjust this value as needed

  useEffect(() => {
    const checkHeight = () => {
      if (componentRef.current) {
        const { height } = componentRef.current.getBoundingClientRect();
        setIsHeightExceeded(height > heightThreshold);
      }
    };

    checkHeight();

    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, [isOpen]);
  const experiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(0, 4)
      : data.experience;
  const projects =
    isHeightExceeded && experiences.length == 4
      ? []
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(0, 1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(0, 2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(0, 3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(0, 4)
      : experiences.length == 4
      ? []
      : data.experience;
  const excessExperiences =
    isHeightExceeded && data.experience.length >= 4
      ? data.experience.slice(4)
      : [];
  const excessProjects =
    isHeightExceeded && experiences.length == 4
      ? data.experience
      : experiences.length == 3 && data.experience.length > 2
      ? data.experience.slice(1)
      : experiences.length == 2 && data.experience.length > 3
      ? data.experience.slice(2)
      : experiences.length == 1 && data.experience.length > 4
      ? data.experience.slice(3)
      : experiences.length == 0 && data.experience.length > 5
      ? data.experience.slice(4)
      : experiences.length == 4
      ? data.experience
      : [];

  return (
    <div
      ref={componentRef || ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        minHeight: isResponsive ? "100%" : "1100px",
      }}
    >
      <div
        style={{
          height: "100%",
          gap: xs ? 1 : 3,
        }}
        className="w-full flex flex-row justify-between items-start "
      >
        {/* //*LeftCol */}
        <div
          className="flex flex-col items-center w-[40%] justify-between "
          style={{
            color: "white",
            height: xs ? 310 : isResponsive ? "100%" : 1055,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              top: isResponsive ? 0 : 9,
            }}
            className={`flex flex-row items-start justify-center gap-1 w-full `}
          >
            <Box
              component={"img"}
              src={
                data?.image
                  ? URL.createObjectURL(data?.image)
                  : "/maleAvatar.jpg"
              }
              sx={{
                borderRadius: "50%",
                border: `4px solid ${color}`,
                height: xs ? "50px" : isResponsive ? "100px" : "280px",
                width: xs ? "50px" : isResponsive ? "100px" : "280px",
              }}
            />
          </div>
          <div
            style={{
              background: color,
              padding: xs ? 0 : isResponsive ? "5px" : 40,
              height: "100%",
              position: "relative",
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              borderRadius: isResponsive ? "50px 50px 0 0" : "140px 140px 0 0",
            }}
          >
            {/* //*Details */}
            <Box
              sx={{
                gap: xs ? "1px" : 1,
              }}
              className={`flex flex-col items-start justify-center mt-1`}
              {...(activeStage == "headers" &&
                isHighlighted && {
                  style: {
                    border: `2px solid #ffa5004f`,
                    background: "#ffa5001a",
                    padding: 5,
                    borderRadius: 10,
                  },
                })}
            >
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.title
                } font-bold uppercase text-[15px] `}
                style={{
                  color: "white",
                }}
              >
                Contact
              </p>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "100%",
                  borderColor: "white",
                }}
              />
              <RowCard
                first={
                  <Phone
                    sx={{
                      color: "white",
                      fontSize: isResponsive ? "5px" : "13px",
                    }}
                  />
                }
                second={"+91 " + data?.phone}
                isResponsive={isResponsive}
              />
              <RowCard
                first={
                  <Email
                    sx={{
                      color: "white",
                      fontSize: isResponsive ? "5px" : "13px",
                    }}
                  />
                }
                second={data?.mail}
                isResponsive={isResponsive}
                link={`mailto:${data?.mail}`}
              />
              <RowCard
                first={
                  <GitHub
                    sx={{
                      color: "white",
                      fontSize: isResponsive ? "5px" : "13px",
                    }}
                  />
                }
                second={extractGitHubUsername(data?.git) || "JohnnyOfficial"}
                isResponsive={isResponsive}
                link={data?.git}
              />
              <RowCard
                first={
                  <LinkedIn
                    sx={{
                      color: "white",
                      fontSize: isResponsive ? "5px" : "13px",
                    }}
                  />
                }
                second={extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
                isResponsive={isResponsive}
                link={data?.linkedIn}
              />
              <RowCard
                first={
                  <LocationOn
                    sx={{
                      color: "white",
                      fontSize: isResponsive ? "5px" : "13px",
                    }}
                  />
                }
                second={
                  <div className={`flex items-center justify-center gap-[1px]`}>
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      }`}
                    >
                      {data?.district}
                    </p>
                    <span className={`${isResponsive ? styles.smallText : ""}`}>
                      ,
                    </span>
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      }`}
                    >
                      {data?.state}
                    </p>
                    <span className={`${isResponsive ? styles.smallText : ""}`}>
                      ,
                    </span>
                    <p
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      }`}
                    >
                      {data?.country}
                    </p>
                  </div>
                }
                isResponsive={isResponsive}
              />
            </Box>

            {/* //*Skills */}
            <Box
              {...(activeStage == "skills" &&
                isHighlighted && {
                  style: {
                    border: `2px solid #ffa5004f`,
                    background: "#ffa5001a",
                    padding: 5,
                    borderRadius: 10,
                  },
                })}
              sx={{ gap: isResponsive ? "5px" : "10px" }}
              className={`w-full flex items-start justify-center flex-col mt-2`}
            >
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.title
                } font-bold uppercase text-[15px] `}
                style={{
                  color: "white",
                }}
              >
                Skills
              </p>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "100%",
                  borderColor: "white",
                }}
              />
              <div className="flex flex-row gap-1">
                <ul
                  className={`list-disc ${
                    isResponsive ? styles.smallText : ""
                  }`}
                >
                  <li className="ml-2">
                    <div className="w-full flex flex-col items-start ">
                      <p
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        } font-semibold`}
                      >
                        Technical Skills
                      </p>
                      <div className="flex flex-row items-center">
                        {SkillsComponent(data?.skills?.technical, isResponsive)}
                      </div>
                    </div>
                  </li>
                  <li className="ml-2">
                    <div className="w-full flex flex-col items-start ">
                      <p
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        } font-semibold`}
                      >
                        Soft Skills
                      </p>
                      <div className="flex flex-row items-center">
                        {SkillsComponent(data?.skills?.soft, isResponsive)}
                      </div>
                    </div>
                  </li>
                  <li className="ml-2">
                    <div className="w-full flex flex-col items-start ">
                      <p
                        className={`${
                          isResponsive ? styles.smallText : styles.text
                        } font-semibold`}
                      >
                        Languages
                      </p>
                      <div className="flex flex-row items-center">
                        {SkillsComponent(data?.skills?.language, isResponsive)}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Box>

            {/* //*Education */}
            <div
              {...(activeStage == "education" &&
                isHighlighted && {
                  style: {
                    border: `2px solid #ffa5004f`,
                    background: "#ffa5001a",
                    padding: 5,
                    borderRadius: 10,
                  },
                })}
              className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
            >
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.title
                } font-bold uppercase text-[15px] `}
                style={{
                  color: "white",
                }}
              >
                Education
              </p>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "100%",
                  borderColor: "white",
                }}
              />
              <div className="flex flex-row gap-1 w-full">
                <ul
                  className={`list-disc ${
                    isResponsive ? styles.smallText : ""
                  }`}
                >
                  {data?.education.map((elem: any, index: number) => {
                    return (
                      <li
                        key={index}
                        style={{ width: "100%" }}
                        className={`mb-${isResponsive ? 0 : 2} ml-2`}
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-0.5">
                            <p
                              className={`${
                                isResponsive ? styles.smallText : styles.text
                              } font-bold`}
                            >
                              {elem.department}
                            </p>
                            <span
                              className={`${
                                isResponsive ? styles.smallText : ""
                              }`}
                            >
                              |
                            </span>
                            <p
                              className={`${
                                isResponsive ? styles.smallText : styles.text
                              }`}
                            >
                              {elem.percentage.includes(".")
                                ? elem.percentage + "/10"
                                : elem.percentage + "%"}
                            </p>
                          </div>
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            } font-bold`}
                          >
                            {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                          </p>
                        </div>
                        <div className="w-full flex flex-row items-center justify-start gap-1">
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            }`}
                          >
                            {elem.institution}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* //*Tools */}
            <div
              {...(activeStage == "tools" &&
                isHighlighted && {
                  style: {
                    border: `2px solid #ffa5004f`,
                    background: "#ffa5001a",
                    padding: 5,
                    borderRadius: 10,
                  },
                })}
              style={{ gap: isResponsive ? 5 : 10 }}
              className={`w-full flex items-start justify-center flex-col mt-2`}
            >
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.title
                } font-bold uppercase text-[15px] `}
                style={{
                  color: "white",
                }}
              >
                Tools
              </p>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "100%",
                  borderColor: "white",
                }}
              />
              <div className="flex flex-row gap-1">
                <ul
                  className={`list-disc ${
                    isResponsive ? styles.smallText : ""
                  } flex flex-col`}
                  style={{
                    gap: isResponsive ? "4px" : "10px",
                  }}
                >
                  {data?.tools.map((elem: any, index: number) => {
                    return (
                      <li key={index} className="ml-2">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          {elem}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* //*Certifications */}
            {/* <div
            {...(activeStage == "certifications" &&
              isHighlighted && {
                style: {
                  border: `2px solid #ffa5004f`,
                  background: "#ffa5001a",
                  padding: 5,
                  borderRadius: 10,
                },
              })}
            style={{ gap: isResponsive ? 5 : 10 }}
            className={`w-full flex items-start justify-center flex-col mt-2`}
          >
            <p
              className={`${
                isResponsive ? styles.smallText : styles.title
              } font-bold uppercase text-[15px] `}
              style={{
                color: "white",
              }}
            >
              Certifications
            </p>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                borderColor: "white",
              }}
            />
            <div className="flex flex-row gap-1">
              <ul
                className={`list-disc ${isResponsive ? styles.smallText : ""}`}
              >
                {data?.certifications.map((elem: any, index: number) => {
                  return (
                    <li key={index} className="ml-2">
                      <div className="w-full flex flex-col items-start ">
                        <p
                          className={`${
                            isResponsive ? styles.smallText : styles.text
                          } font-semibold`}
                        >
                          {elem.certificate_for}
                        </p>
                        <div className="flex flex-row items-center">
                          <p
                            className={`${
                              isResponsive ? styles.smallText : styles.text
                            } font-semibold`}
                          >
                            {elem.issued_by}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
          </div>
        </div>
        {/* //*RightCol */}
        <div
          style={{
            padding: isResponsive || xs ? "" : 20,
            gap: xs ? 0 : 20,
          }}
          className="flex flex-col items-start  justify-between w-[60%] h-full"
        >
          {/* //*Profile */}

          <div className="w-full flex flex-row items-center justify-around">
            <div className={`flex flex-col items-start justify-center`}>
              <Box
                {...(activeStage == "headers" &&
                  isHighlighted && {
                    style: {
                      border: `2px solid #ffa5004f`,
                      background: "#ffa5001a",
                      padding: 5,
                      borderRadius: 10,
                    },
                  })}
                sx={{
                  height: xs ? "50px" : isResponsive ? "70px" : "200px",
                }}
                className={`flex flex-col items-center justify-center w-full`}
              >
                <div className="flex items-center gap-1">
                  <h1
                    style={{
                      color: "black",
                    }}
                    className={`font-[800]  text-[${
                      isResponsive ? "10px" : "25px"
                    }]`}
                  >
                    {data?.name}
                  </h1>
                  <h1
                    style={{
                      color: color,
                    }}
                    className={` text-[${isResponsive ? "10px" : "25px"}]`}
                  >
                    {data?.last_name}
                  </h1>
                </div>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold ml-1`}
                  style={{
                    color: color,
                  }}
                >
                  {data?.role}
                </p>
              </Box>
              <div
                {...(activeStage == "summary" &&
                  isHighlighted && {
                    style: {
                      border: `2px solid #ffa5004f`,
                      background: "#ffa5001a",
                      padding: 5,
                      borderRadius: 10,
                    },
                  })}
              >
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.title
                  } font-bold uppercase text-[15px] `}
                  style={{
                    color: color,
                  }}
                >
                  Profile
                </p>

                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-semibold ml-1 text-justify w-[90%]`}
                >
                  {data?.about}
                </p>
              </div>
            </div>
          </div>
          {/* //*Experience */}
          {experiences.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="experience"
              arr={experiences}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
              bullets={true}
            />
          )}
          {/* //*Projects */}
          {projects.length > 0 && (
            <RightColCardLayout
              xs={xs}
              name="projects"
              arr={projects}
              isHighlighted={isHighlighted}
              isResponsive={isResponsive}
              bullets={true}
            />
          )}
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          padding: isResponsive ? "" : 20,
        }}
        className="flex flex-col items-start gap-1 justify-start w-full "
      >
        {/* //*Experience */}
        {excessExperiences.length > 0 && (
          <RightColCardLayout
            name="experience"
            arr={excessExperiences}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
            bullets={true}
          />
        )}
        {/* //*Projects */}
        {excessProjects.length > 0 && (
          <RightColCardLayout
            name="projects"
            arr={excessProjects}
            isHighlighted={isHighlighted}
            isResponsive={isResponsive}
            isExpanded={true}
            bullets={true}
          />
        )}
      </div>
    </div>
  );
};
export const TemplateFive = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();

  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  return (
    <div
      ref={ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: xs ? "1px" : isResponsive ? "20px" : "70px",
        minHeight: isResponsive || xs ? "100%" : "1100px",
      }}
    >
      <div
        {...(activeStage == "headers" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
        className="w-full flex flex-row items-center justify-between"
      >
        <div className={` flex flex-row items-start justify-center gap-1  `}>
          <Box
            component={"img"}
            src={
              data?.image ? URL.createObjectURL(data?.image) : "/maleAvatar.jpg"
            }
            sx={{
              borderRadius: "50%",
              border: `4px solid ${color}`,
              height: xs ? "50px" : isResponsive ? "70px" : "200px",
              width: xs ? "50px" : isResponsive ? "70px" : "200px",
            }}
          />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1
            style={{
              color: color,
            }}
            className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
          >
            {data?.name} {data?.last_name}
          </h1>
          <div className={`w-full flex items-center justify-center gap-1`}>
            <p
              className={`${
                isResponsive ? styles.smallText : styles.text
              } font-bold`}
            >
              {data?.role}
            </p>
            <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
            <p
              className={`${
                isResponsive ? styles.smallText : styles.text
              } font-bold`}
            >
              Porfolio
            </p>
            <a
              className={`${isResponsive ? styles.smallText : styles.link}`}
              href="/"
            >
              {data?.portfolio_link}
            </a>
          </div>
          <div className={`w-full flex items-center justify-center gap-1`}>
            <p
              className={`${
                isResponsive ? styles.smallText : styles.text
              } font-bold`}
            >
              Mail :
            </p>
            <a
              className={`${
                isResponsive ? styles.smallText : styles.link
              } font-semibold`}
              href="/"
            >
              {data?.mail}
            </a>
            <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
            <p className={`${isResponsive ? styles.smallText : styles.text}`}>
              +91 {data?.phone}
            </p>
            <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
            <p
              className={`${
                isResponsive ? styles.smallText : styles.text
              } font-bold`}
            >
              LinkedIn :
            </p>
            <a
              href="/"
              className={`${
                isResponsive ? styles.smallText : styles.link
              } font-semibold`}
            >
              {extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
            </a>
          </div>
          <div className={`w-full flex items-center justify-center gap-1`}>
            <p
              className={`${
                isResponsive ? styles.smallText : styles.text
              } font-bold`}
            >
              GitHub :
            </p>
            <a
              className={`${
                isResponsive ? styles.smallText : styles.link
              } font-semibold`}
              href="/"
            >
              {extractGitHubUsername(data?.git) || "JohnnyOfficial"}
            </a>
            <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
            <p className={`${isResponsive ? styles.smallText : styles.text}`}>
              {data?.district}
            </p>
            <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
            <p className={`${isResponsive ? styles.smallText : styles.text}`}>
              {data?.state}
            </p>
            <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
            <p className={`${isResponsive ? styles.smallText : styles.text}`}>
              {data?.country}
            </p>
          </div>
        </div>
      </div>
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "summary" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase `}
          style={{
            color: color,
          }}
        >
          Career objective
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.about}
        </p>
      </div>
      {/* //*Education */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "education" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Education
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        {data?.education.map((elem: any, index: number) => {
          return (
            <div className={`w-full mb-${isResponsive ? 0 : 2}`} key={index}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.department}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.institution}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.percentage.includes(".") ? "CGPA" : "Percentage"}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  -
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.percentage.includes(".")
                    ? elem.percentage + "/10"
                    : elem.percentage + "%"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* //*Skills */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "skills" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Skills
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />

        <ul
          className={`list-disc ml-5 ${isResponsive ? styles.smallText : ""}`}
        >
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Technical Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.technical, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Soft Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.soft, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Languages
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.language, isResponsive)}
            </div>
          </li>
        </ul>
      </div>
      {/* //*Experience */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "experience" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: color,
          }}
        >
          Experience
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        />
        {data.experience.map((elem: any, index: number) => {
          return (
            <div key={index} className={`w-full mb-${isResponsive ? 0 : 3}`}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.role}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-1">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.company_name}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.place}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.state}{" "}
                </p>
              </div>
              <ul
                className={`list-disc ml-5 ${
                  isResponsive ? styles.smallText : ""
                }`}
              >
                <li>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {elem.description}
                  </p>
                </li>
                <li>
                  <div
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    } w-full flex gap-1`}
                  >
                    <span
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      Learned Skill :
                    </span>
                    {SkillsComponent(elem.skills, isResponsive)}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const TemplateSix = ({ size, notRes, isNotMarked, ref, xs }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();

  const data = resumeData;
  const isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;

  return (
    <div
      ref={ref}
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: xs ? "1px" : isResponsive ? "20px" : "70px",
        minHeight: isResponsive || xs ? "100%" : "1100px",
      }}
    >
      <div
        {...(activeStage == "headers" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
        className="w-full flex flex-col items-center justify-center"
      >
        <h1
          style={{
            color: color,
          }}
          className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
        >
          {data?.name} {data?.last_name}
        </h1>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            {data?.role}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            Porfolio
          </p>
          <a
            className={`${isResponsive ? styles.smallText : styles.link}`}
            href="/"
          >
            {data?.portfolio_link}
          </a>
        </div>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            Mail :
          </p>
          <a
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
            href="/"
          >
            {data?.mail}
          </a>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            +91 {data?.phone}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            LinkedIn :
          </p>
          <a
            href="/"
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
          >
            {extractLinkedInUsername(data?.linkedIn) || "Johnny_25"}
          </a>
        </div>
        <div className={`w-full flex items-center justify-center gap-1`}>
          <p
            className={`${
              isResponsive ? styles.smallText : styles.text
            } font-bold`}
          >
            GitHub :
          </p>
          <a
            className={`${
              isResponsive ? styles.smallText : styles.link
            } font-semibold`}
            href="/"
          >
            {extractGitHubUsername(data?.git) || "JohnnyOfficial"}
          </a>
          <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.district}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.state}
          </p>
          <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
          <p className={`${isResponsive ? styles.smallText : styles.text}`}>
            {data?.country}
          </p>
        </div>
      </div>
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "summary" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase `}
          style={{
            color: "white",
            width: "100%",
            background: color,
            padding: 1,
            paddingLeft: 10,
          }}
        >
          Career objective
        </p>
        {/* <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: color }}
        /> */}
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.about}
        </p>
      </div>
      {/* //*Education */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "education" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: "white",
            width: "100%",
            background: color,
            padding: 1,
            paddingLeft: 10,
          }}
        >
          Education
        </p>

        {data?.education.map((elem: any, index: number) => {
          return (
            <div className={`w-full mb-${isResponsive ? 0 : 2}`} key={index}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.department}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.institution}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.percentage.includes(".") ? "CGPA" : "Percentage"}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  -
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.percentage.includes(".")
                    ? elem.percentage + "/10"
                    : elem.percentage + "%"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* //*Skills */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "skills" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: "white",
            width: "100%",
            background: color,
            padding: 1,
            paddingLeft: 10,
          }}
        >
          Skills
        </p>

        <ul
          className={`list-disc ml-5 ${isResponsive ? styles.smallText : ""}`}
        >
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Technical Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.technical, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Soft Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.soft, isResponsive)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Languages
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.language, isResponsive)}
            </div>
          </li>
        </ul>
      </div>
      {/* //*Experience */}
      <div
        className={`w-full flex items-start justify-center gap-${
          xs ? 0 : 1
        } flex-col mt-${xs ? 0 : 2}`}
        {...(activeStage == "experience" &&
          isHighlighted && {
            style: {
              border: `2px solid #ffa5004f`,
              background: "#ffa5001a",
              padding: 5,
              borderRadius: 10,
            },
          })}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px] `}
          style={{
            color: "white",
            width: "100%",
            background: color,
            padding: 1,
            paddingLeft: 10,
          }}
        >
          Experience
        </p>

        {data.experience.map((elem: any, index: number) => {
          return (
            <div key={index} className={`w-full mb-${isResponsive ? 0 : 3}`}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.role}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-1">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.company_name}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.place}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.state}{" "}
                </p>
              </div>
              <ul
                className={`list-disc ml-5 ${
                  isResponsive ? styles.smallText : ""
                }`}
              >
                <li>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {elem.description}
                  </p>
                </li>
                <li>
                  <div
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    } w-full flex gap-1`}
                  >
                    <span
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      Learned Skill :
                    </span>
                    {SkillsComponent(elem.skills, isResponsive)}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Templates = [
  {
    id: 1,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateOne size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "one_column",
    isPhoto: "no_photo",
  },
  {
    id: 2,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateTwo size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "two_column",
    isPhoto: "no_photo",
  },
  {
    id: 3,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateThree size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "two_column",
    isPhoto: "photo",
  },
  {
    id: 4,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateFour size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "two_column",
    isPhoto: "photo",
  },
  {
    id: 5,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateFive size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "one_column",
    isPhoto: "photo",
  },
  {
    id: 6,
    resume_template: (
      size: string | null,
      isNotMarked?: boolean,
      ref?: HTMLDivElement | null,
      xs?: boolean
    ) => (
      <TemplateSix size={size} isNotMarked={isNotMarked} ref={ref} xs={xs} />
    ),
    type: "one_column",
    isPhoto: "no_photo",
  },
];
export const getTemplateByID = (
  id: any,
  size: string,
  isNotMarked?: boolean,
  ref?: HTMLDivElement | null,
  xs?: boolean
) => {
  const resume = Templates.find((i) => i.id == id);
  return resume?.resume_template(size, isNotMarked, ref, xs);
};
export const getResumeByID = (id: any) => {
  const resume = Templates.find((i) => i.id == id);
  return resume;
};
