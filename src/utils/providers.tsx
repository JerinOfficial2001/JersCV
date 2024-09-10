"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { createContext, useContext } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
  children: any;
};
const GlobalContext = createContext<any>({});
export const useGlobalContext = () => {
  const states = useContext(GlobalContext);
  return states;
};
export default function Providers({ children }: Props) {
  const resumeData = {
    _id: Math.random().toString(36).substr(2, 8),
    isVisible: false,
    name: "John",
    role: "Frondend Developer",
    mail: "abc@gmail.com",
    portfolio_link: "http://example.com",
    linkedIn: "johnLinkedInAcc",
    phone: "9876732846",
    git: "Johnny",
    state: "Tamilnadu",
    district: "Coimbatore",
    country: "India",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ad iure accusamus accusantium veritatis, ab est aut excepturi facilis sunt ipsam et nulla eos tempora possimus quae eum aliquam",
    education: [
      {
        from: "2019",
        to: "2023",
        institution: "abc college of Technology",
        department: "Degree-Department",
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
      technical: ["Mern stack", "NextJs"],
      soft: ["skill1"],
      language: ["English", "Tamil", "Hindi"],
    },
    experience: [
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
  };
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <GlobalContext.Provider value={{ resumeData, isSm, isXs }}>
      <Toaster position="top-center" />

      {children}
    </GlobalContext.Provider>
  );
}
