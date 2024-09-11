"use client";
import { useGlobalContext } from "@/utils/providers";
import styles from "./resume.module.css";
import { Divider } from "@mui/material";
import {
  extractGitHubUsername,
  extractLinkedInUsername,
} from "@/utils/methods";
import React from "react";
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
  link?: boolean;
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
          href="/"
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
    <div className="flex flex-row items-start gap-1">
      <div
        className={`mt-[1px] p-[1px] h-[auto] w-[auto] flex items-center justify-center rounded-full`}
        style={{ background: color }}
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
}: {
  data: any;
  isResponsive: boolean;
  header: any;
}) => {
  const { color } = useGlobalContext();
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row items-start gap-1">
        <div
          className={`mt-[1px] p-[1px] h-[auto] w-[auto] flex items-center justify-center rounded-full`}
          style={{ background: color }}
        >
          <KeyboardArrowRight
            style={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
          />
        </div>
        {header}
      </div>
      <div className="flex flex-row items-start gap-1">
        <Divider
          orientation="vertical"
          sx={{ height: "auto", borderColor: color }}
        />
        {data}
      </div>
    </div>
  );
};
export const TemplateOne = ({ size, notRes, isNotMarked }: any) => {
  const { resumeData, isxs, color, activeStage, isOpen } = useGlobalContext();

  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);
  const isHighlighted = !isNotMarked && !isOpen;
  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <div
        {...(activeStage == "headers" &&
          isHighlighted && {
            style: {
              border: `2px solid red`,
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
        {...(activeStage == "summary" &&
          isHighlighted && {
            style: {
              border: `2px solid red`,
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
        {...(activeStage == "education" &&
          isHighlighted && {
            style: {
              border: `2px solid red`,
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
        {...(activeStage == "skills" &&
          isHighlighted && {
            style: {
              border: `2px solid red`,
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
        {...(activeStage == "experience" &&
          isHighlighted && {
            style: {
              border: `2px solid red`,
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
export const TemplateTwo = ({ size, notRes }: any) => {
  const { resumeData, isxs, color } = useGlobalContext();
  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);

  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <div className="w-full flex flex-row items-center justify-around">
        <div className={`flex flex-col items-start justify-center `}>
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
            link={true}
          />
          <RowCard
            first={
              <GitHub
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={data?.git}
            isResponsive={isResponsive}
            link={true}
          />
          <RowCard
            first={
              <LinkedIn
                sx={{ color: "white", fontSize: isResponsive ? "5px" : "13px" }}
              />
            }
            second={data?.linkedIn}
            isResponsive={isResponsive}
            link={true}
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
      <div className="w-full flex flex-row justify-between items-start gap-3">
        {/* //*LeftCol */}
        <div className="flex flex-col items-start gap-1 justify-start w-[40%]">
          {/* //*Skills */}
          <div
            className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
            <div className="flex flex-row gap-1">
              <Divider
                orientation="vertical"
                sx={{ height: "auto", borderColor: color }}
              />
              <div>
                {data?.education.map((elem: any, index: number) => {
                  return (
                    <ListContainer
                      key={index}
                      data={
                        <div
                          style={{ width: "-webkit-fill-available" }}
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
        </div>
        {/* //*RightCol */}
        <div className="flex flex-col items-start gap-1 justify-start w-[60%] ">
          {/* //*Experience */}
          <div
            className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
            {data.experience.map((elem: any, index: number) => {
              return (
                <ListStepContainer
                  key={index}
                  data={
                    <div className={`w-full mb-${isResponsive ? 0 : 3}`}>
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
                        <span
                          className={`${isResponsive ? styles.smallText : ""}`}
                        >
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
      </div>
    </div>
  );
};
export const TemplateThree = ({ size, notRes }: any) => {
  const { resumeData, isxs, color } = useGlobalContext();
  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);

  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <h1
        style={{
          color: color,
        }}
        className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
      >
        {data?.name}
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
          {data?.linkedIn}
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
          {data?.git}
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
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
export const TemplateFour = ({ size, notRes }: any) => {
  const { resumeData, isxs, color } = useGlobalContext();
  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);

  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <h1
        style={{
          color: color,
        }}
        className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
      >
        {data?.name}
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
          {data?.linkedIn}
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
          {data?.git}
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
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
export const TemplateFive = ({ size, notRes }: any) => {
  const { resumeData, isxs, color } = useGlobalContext();
  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);

  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <h1
        style={{
          color: color,
        }}
        className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
      >
        {data?.name}
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
          {data?.linkedIn}
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
          {data?.git}
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
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
export const TemplateSix = ({ size, notRes }: any) => {
  const { resumeData, isxs, color } = useGlobalContext();
  const data = resumeData;
  let isResponsive = !notRes && (size || isxs);

  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <h1
        style={{
          color: color,
        }}
        className={`font-[800]  text-[${isResponsive ? "10px" : "25px"}]`}
      >
        {data?.name}
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
          {data?.linkedIn}
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
          {data?.git}
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
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
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

export const Templates = [
  {
    id: 1,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateOne size={size} isNotMarked={isNotMarked} />
    ),
  },
  {
    id: 2,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateTwo size={size} isNotMarked={isNotMarked} />
    ),
  },
  {
    id: 3,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateThree size={size} isNotMarked={isNotMarked} />
    ),
  },
  {
    id: 4,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateFour size={size} isNotMarked={isNotMarked} />
    ),
  },
  {
    id: 5,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateFive size={size} isNotMarked={isNotMarked} />
    ),
  },
  {
    id: 6,
    resume_template: (size: string | null, isNotMarked?: boolean) => (
      <TemplateSix size={size} isNotMarked={isNotMarked} />
    ),
  },
];
export const getTemplateByID = (
  id: any,
  size: string,
  isNotMarked?: boolean
) => {
  const resume = Templates.find((i) => i.id == id);
  return resume?.resume_template(size, isNotMarked);
};
