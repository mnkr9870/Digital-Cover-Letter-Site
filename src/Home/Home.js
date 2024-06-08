import React, { useContext } from "react";
import hero from "../images/hero.png";
import { GlobalContext } from "../Context/GlobalContext";

const Home = () => {
  const { AllDetails } = useContext(GlobalContext);

  return (
    <div className=" max-w-10xl h-screen px-6 py-6 bg-black">
      <div className="flex flex-col min-w-full min-h-full ">
        <div className="absolute w-max">
          <h1 className="overflow-hidden whitespace-nowrap py-1 pr-5 text-2xl md:text-3xl lg:text-6xl text-white font-bold">
            Beyond
          </h1>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap py-1 pr-5 text-2xl md:text-3xl lg:text-6xl text-cyan-400 font-bold">
            PDFs
          </h1>
          <h1 className="overflow-hidden whitespace-nowrap py-1 pr-5 text-2xl  md:text-3xl lg:text-6xl text-white font-bold">
            and
          </h1>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap py-1 pr-5 text-2xl md:text-3xl lg:text-6xl text-cyan-400 font-bold">
            Docs
          </h1>
        </div>

        <p className="absolute text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-6xl  right-5 bottom-5  lg:max-w-md  text-center md:text-right">
          Crafting Interactive <br />
          <span className=" text-cyan-400">Digital Cover Letters</span>{" "}
        </p>

        <img
          className="absolute z-0  w-full py-10 h-3/4 md:h-3/5 lg:h-4/5 lg:top-0 left-0  object-contain "
          src={hero}
          alt="Nanda Kishore"
        ></img>
        <div
          className="relative max-w-xl md:max-w-2xl min-h-full z-100   
                        mx-auto text-center pt-48 sm:pt-48 md:pt-60 lg:pt-80 xl:pt-70"
        >
          <h1 className="py-3 md:py-0 text-xl font-bold tracking-tight text-white md:text-2xl lg:text-4xl">
            Hello,
          </h1>
          <h1 className="py-4 uppercase text-4xl  sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl  font-bold tracking-tight animate-text bg-gradient-to-r from-cyan-50 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            {AllDetails.companyDetails.companyName}
          </h1>
          <p className="mt-3 px-3 text-sm md:text-md lg:text-lg leading-8 text-white rounded-lg ">
            I am{" "}
            <span className="text-amber-400 font-bold capitalize text-md lg:text-2xl">
              {AllDetails.applicantDetails.shortName}
            </span>
            . <br /> A Creative Mindset for your <br />
            <span className="text-cyan-400 font-bold capitalize ">
              {AllDetails.roleDetails.role}
            </span>{" "}
            position.
            <br /> Scroll Down to Learn More!
          </p>
          <div className="mt-3 flex flex-col items-center justify-center gap-x-6 gap-y-4">
            {/* <a
              href="#"
              className="rounded-md bg-transparent border px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400/60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 "
            >
              Scroll Down for my application
            </a> */}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
