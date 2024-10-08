"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { isCompleted } from "./methods";
import Loader from "@/components/Loader";

type Props = {
  children: React.ReactNode;
};
const GlobalContext = createContext<any>({});
export const useGlobalContext = () => {
  const states = useContext(GlobalContext);
  return states;
};
export default function Providers({ children }: Props) {
  const [inputDatas, setinputDatas] = useState<any>({
    _id: "",
    name: "",
    image: "",
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
    tools: [],
    certifications: [],
  });
  const resetInputField = () => {
    setinputDatas({
      image: "",
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
      tools: [],
      certifications: [],
    });
  };
  const [education, seteducation] = useState({
    from: "",
    to: "",
    institution: "",
    department: "",
    percentage: "",
  });
  const [skills, setskills] = useState<any>({
    technical: "",
    soft: "",
    language: "",
  });
  const [tools, settools] = useState("");
  const [experience, setexperience] = useState<any>({
    from: "",
    to: "",
    company_name: "",
    role: "",
    description: "",
    skills: [],
    place: "",
    state: "",
  });
  const [learnedSkill, setlearnedSkill] = useState<string>("");

  const resumeData = {
    _id: Math.random().toString(36).substr(2, 8),
    isVisible: false,
    name: inputDatas.name || "John",
    image: inputDatas.image || "",
    last_name: inputDatas.last_name || "Sam",
    role: inputDatas.role || "Frondend Developer",
    mail: inputDatas.mail || "abc@gmail.com",
    portfolio_link: inputDatas.portfolio_link || "http://example.com",
    linkedIn: inputDatas.linkedIn || "johnLinkedInAcc",
    phone: inputDatas.phone || "9876732846",
    git: inputDatas.git || "Johnny",
    state: inputDatas.state || "Tamilnadu",
    district: inputDatas.district || "Coimbatore",
    country: inputDatas.country || "India",
    about:
      inputDatas.about ||
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ad iure accusamus accusantium veritatis, ab est aut excepturi facilis sunt ipsam et nulla eos tempora possimus quae eum aliquam",
    education: (inputDatas.education.length > 0 && inputDatas.education) || [
      {
        from: "2019",
        to: "2023",
        institution: "abc college of Technology",
        department: "BE-MCT",
        percentage: "8.8",
      },
      {
        from: "2018",
        to: "2019",
        institution: "abc matric higher secondary school",
        department: "HSC",
        percentage: "80",
      },
      {
        from: "2016",
        to: "2017",
        institution: "abc matric higher secondary school",
        department: "SSLC",
        percentage: "85",
      },
    ],
    skills: {
      technical: (inputDatas.skills.technical.length > 0 &&
        inputDatas.skills.technical) || ["Mern stack", "NextJs"],
      soft: (inputDatas.skills.soft.length > 0 && inputDatas.skills.soft) || [
        "skill1",
      ],
      language: (inputDatas.skills.language.length > 0 &&
        inputDatas.skills.language) || ["English", "Tamil", "Hindi"],
    },
    experience: (inputDatas.experience.length > 0 && inputDatas.experience) || [
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
    ],
    tools: (inputDatas.tools.length > 0 && inputDatas.tools) || [
      "VS code",
      "Android studio",
      "Eclipse",
    ],
    certifications: (inputDatas.certifications.length > 0 &&
      inputDatas.certifications) || [
      {
        certificate_for: "React",
        issued_by: "HackerRank",
      },
      {
        certificate_for: "MangoDB",
        issued_by: "Udemy",
      },
    ],
  };
  const [color, setcolor] = useState("silver");
  const [activeStage, setactiveStage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [id, setid] = useState("");
  const theme = useTheme();
  const pathname = usePathname();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  useEffect(() => {
    if (!isCompleted()) {
      if (pathname == "/build-resume" && !isOpen) {
        setactiveStage("headers");
      } else {
        setactiveStage("");
      }
    }
  }, [pathname]);
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <GlobalContext.Provider
          value={{
            tools,
            settools,
            resumeData,
            isSm,
            isXs,
            color,
            setcolor,
            inputDatas,
            setinputDatas,
            activeStage,
            setactiveStage,
            isOpen,
            setIsOpen,
            learnedSkill,
            setlearnedSkill,
            experience,
            setexperience,
            skills,
            setskills,
            education,
            seteducation,
            resetInputField,
            id,
            setid,
          }}
        >
          <Toaster position="top-center" />
          {children}
        </GlobalContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  );
}
