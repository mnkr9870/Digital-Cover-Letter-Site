import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const MyDetails = () => {
  const { AllDetails } = useContext(GlobalContext);
  const basicInfo = AllDetails.basicInfo;
  const education = AllDetails.education;
  console.log(education);
  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5 z-10">
      <div className="mx=auto max-w-7xl px-6 ">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white ">
          Hello again! I am{" "}
          <span className="text-cyan-400 text-4xl ">
            {AllDetails.applicantDetails.shortName}.
          </span>
        </h2>
        <p className="mt-4 text-white text-justify">{basicInfo.mainHeadline}</p>
      </div>
      <div className="  mx-auto grid max-w-10xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:py-10 lg:max-w-10xl lg:grid-cols-2 lg:px-8">
        <div className="h-full">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-amber-400 ">
            My Basics
          </h2>
          <p className="mt-4 text-white">{basicInfo.headline}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8">
            {basicInfo.basicInfo.map((feature) => (
              <div key={feature.heading} className="border-t border-white pt-3">
                <dt className="font-medium text-cyan-400">{feature.heading}</dt>
                <dd className="mt-2 text-sm text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="h-full">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-amber-400 ">
            Education
          </h2>
          <p className="mt-4 text-white">{education.headline}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8">
            {education.education.map((feature) => (
              <div key={feature.degree} className="border-t border-white pt-4">
                <dt className="font-medium text-cyan-400">{feature.degree}</dt>
                <dd className="mt-2 text-sm font-semibold text-amber-400">
                  {feature.course}
                </dd>
                <dd className="mt-2 text-sm text-white">{feature.college}</dd>
                <dd className="mt-2 text-sm text-white">{feature.duration}</dd>
                <dd className="mt-2 text-sm text-black font-semibold bg-amber-400 max-w-max rounded-2xl px-2 py-1">
                  {feature.grade}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
