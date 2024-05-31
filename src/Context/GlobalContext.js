import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const AllDetails = {
  applicantDetails: {
    fullName: "Shri Krishna",
    shortName: "Krishna",
    occupation: "Software Engineer",
  },
  basicInfo: {
    mainHeadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    basicInfo: [
      { heading: "Full Name", description: "Shri Krishna" },
      { heading: "Age", description: "25" },
      { heading: "Gender", description: "Male" },
      { heading: "Location", description: "London" },
      { heading: "Nationality", description: "Indian" },
      { heading: "Occupation", description: "Software Engineer" },
      {
        heading: "Languages",
        description: "Telugu (Native), Hindi (Fluent), English (Fluent)",
      },
      {
        heading: "Personality Traits",
        description: "Ambitious, Reliable and Empathetic",
      },
    ],
  },
  education: {
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    education: [
      {
        degree: "Masters",
        course: "MSc in Computer Science",
        college: "University of XXX",
        duration: "Jan XXXX - Jan XXXX",
        grade: "Distinction",
      },
      {
        degree: "Bachelors",
        course: "BSc in Computer Science",
        college: "University of XXX",
        duration: "Jan XXXX - Jan XXXX",
        grade: "Distinction",
      },
      {
        degree: "A Levels",
        course: "XXXX Course",
        college: "XXXX College",
        duration: "Jan XXXX - Jan XXXX",
        grade: "A*",
      },
      {
        degree: "GCSE",
        course: "XXXX Course",
        college: "XXXX School",
        duration: "Jan XXXX - Jan XXXX",
        grade: "A",
      },
    ],
  },
  companyDetails: {
    companyName: "Google",
  },
  roleDetails: {
    role: "Software Developer",
    location: "London",
    whyThisRole:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    whyThisRolePoints: [
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    gainFromThisRole:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gainFromThisRolePoints: [
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  howBestFit: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descriptionPoints: [
      {
        heading: "Key Factor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        heading: "Key Factor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        heading: "Key Factor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    experienceOutline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    experienceOutlinePoints: [
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        point: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    experienceHeadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: [
      {
        role: "Software Developer",
        company: "Company, Location",
        duration: "Jan XXXX - Jan XXXX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [{ text: "Skill 1" }, { text: "Skill 2" }, { text: "Skill 3" }],
      },
      {
        role: "Software Developer",
        company: "Company, Location",
        duration: "Jan XXXX - Jan XXXX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [{ text: "Skill 1" }, { text: "Skill 2" }, { text: "Skill 3" }],
      },
      {
        role: "Software Developer",
        company: "Company, Location",
        duration: "Jan XXXX - Jan XXXX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [{ text: "Skill 1" }, { text: "Skill 2" }, { text: "Skill 3" }],
      },
      {
        role: "Software Developer",
        company: "Company, Location",
        duration: "Jan XXXX - Jan XXXX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [{ text: "Skill 1" }, { text: "Skill 2" }, { text: "Skill 3" }],
      },
    ],
  },
  values: {
    headlineDesc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    headlineDesc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    myValues: [
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
    companyValues: [
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        heading: "Value",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  expectations: {
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    expectationsArray: [
      {
        qus: "What is my Salary expectation ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "Is the Salary range negotiable ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "Do I Need Visa Sponsorship ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "Do I Need Any Benefits ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  preferences: {
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    preferencesArray: [
      {
        qus: "When am I available to start ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "What type of job am I seeking ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "My kind of workplace environment:",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        qus: "Relocate or commute for the job ?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
};

// Create Context
export const GlobalContext = createContext(AllDetails);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AllDetails);

  //Actions if any

  return (
    <GlobalContext.Provider
      value={{
        AllDetails: state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
