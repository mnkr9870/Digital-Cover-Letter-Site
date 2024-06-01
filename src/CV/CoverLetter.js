import React, { useState, useContext } from "react";
import MyDetails from "./MyDetails";
import MyExperience from "./MyExperience";
import RoleDetails from "./RoleDetails";
import Values from "./Values";
import Expectations from "./Expectations";
import WorkPlace from "./WorkPlace";
import { GlobalContext } from "../Context/GlobalContext";

const CoverLetter = () => {
  const { AllDetails } = useContext(GlobalContext);

  const [section1, setSection1Visibility] = useState(false);
  const [section2, setSection2Visibility] = useState(false);
  const [section3, setSection3Visibility] = useState(false);
  const [section4, setSection4Visibility] = useState(false);
  const [section5, setSection5Visibility] = useState(false);
  const [section6, setSection6Visibility] = useState(false);

  function section1_Visibility() {
    setSection1Visibility((isOpen) => !isOpen);
  }
  function section2_Visibility() {
    setSection2Visibility((isOpen) => !isOpen);
  }
  function section3_Visibility() {
    setSection3Visibility((isOpen) => !isOpen);
  }
  function section4_Visibility() {
    setSection4Visibility((isOpen) => !isOpen);
  }
  function section5_Visibility() {
    setSection5Visibility((isOpen) => !isOpen);
  }
  function section6_Visibility() {
    setSection6Visibility((isOpen) => !isOpen);
  }

  return (
    <div className="relative max-w-10xl h-screen px-6 py-6 bg-black">
      <div className="h-1/5">
        <h1 className=" text-2xl w-full font-bold tracking-tight text-cyan-400 lg:text-4xl  text-center pt-2 md:pt-10">
          Welcome to My Application
        </h1>
        <h1 className=" text-sm w-full  tracking-tight text-white md:text-md lg:text-lg text-center pt-3">
          I'm excited to share with you how my{" "}
          <span className="text-amber-400">background</span>,
          <span className="text-amber-400"> skills</span>, and
          <span className="text-amber-400"> passions </span>
          align with the opportunities at{" "}
          <span className="text-amber-400 font-bold">
            {" "}
            {AllDetails.companyDetails.companyName}
            {". "}
          </span>
        </h1>
        <h1 className=" text-sm md:text-md w-full font-semibold tracking-tight text-white lg:text-lg  text-center pt-2 md:pt-10 ">
          <span className="text-amber-400">Click </span> on each tab to know
          more
        </h1>
      </div>
      <div className="w-full h-3/5 content-center pt-14 md:pt-10 sm:px-10 md:px-5 ">
        <div className="grid grid-rows-3 grid-cols-2 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-8 min-w-full justify-items-center ">
          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className=" absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section1_Visibility}
              >
                WHO
              </button>

              <button
                className="  absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section1_Visibility}
              >
                Who Am I ?
              </button>
            </div>
          </div>
          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section2_Visibility}
              >
                WHICH
              </button>

              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section2_Visibility}
              >
                Which Role?
              </button>
            </div>
          </div>

          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section3_Visibility}
              >
                HOW
              </button>

              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section3_Visibility}
              >
                How Can I Fit?
              </button>
            </div>
          </div>

          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section4_Visibility}
              >
                WHY
              </button>

              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section4_Visibility}
              >
                Why {AllDetails.companyDetails.companyName}?
              </button>
            </div>
          </div>

          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section5_Visibility}
              >
                WHAT
              </button>

              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section5_Visibility}
              >
                What I Expect?
              </button>
            </div>
          </div>

          <div className="group w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36">
            <div className=" relative shrink w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-white border-cyan-400 [backface-visibility:hidden] rounded-full shadow-lg shadow-cyan-400/60    "
                onClick={section6_Visibility}
              >
                WHEN
              </button>

              <button
                className="absolute inset-0  text-sm md:text-md lg:text-lg w-24 h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 bg-transparent border-double border-4 font-bold text-amber-400 [transform:rotateY(180deg)] [backface-visibility:hidden] border-amber-400/50 rounded-full shadow-lg  shadow-amber-400/60  "
                onClick={section6_Visibility}
              >
                When Can I Start?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/5  flex flex-col items-center justify-center gap-x-6 gap-y-2 pt-5 ">
        <h1 className="rounded-md bg-transparent  px-3.5 py-1 text-sm font-semibold text-white text-center shadow-sm  ">
          Would you like to share something or connect with me?
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fbbf24"
          className="size-10 animate-bounce pt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      {section1 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section1_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <MyDetails />
        </div>
      )}
      {section2 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section2_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <RoleDetails />
        </div>
      )}
      {section3 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section3_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <MyExperience />
        </div>
      )}
      {section4 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section4_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <Values />
        </div>
      )}
      {section5 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section5_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <Expectations />
        </div>
      )}
      {section6 && (
        <div className="absolute inset-0  text-sm md:text-md lg:text-lg bg-black overflow-y-hidden border-t-2 border-cyan-400 max-auto px-2 py-2 shadow-lg shadow-cyan-400  left-5 top-10 right-5 bottom-10 md:left-20 md:right-20 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="cyan"
            className="size-10 ml-6 mt-6 "
            onClick={section6_Visibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <WorkPlace />
        </div>
      )}
    </div>
  );
};

export default CoverLetter;
