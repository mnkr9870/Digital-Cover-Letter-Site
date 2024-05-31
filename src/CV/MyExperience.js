import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const MyExperience = () => {
  const { AllDetails } = useContext(GlobalContext);
  const howBestFit = AllDetails.howBestFit;
  const features = AllDetails.howBestFit.experience;
  
  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5">
      <div className=" w-full h-30 my-3 p-2 rounded-lg text-center">
        <h1 className="px-2 text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          How am I best fit for the Role ?
        </h1>
      </div>
      <div className=" h-full mx-auto grid max-w-10xl grid-cols-1 gap-x-8 gap-y-5 px-2 py-5 sm:px-6 sm:py-5 lg:max-w-10xl lg:grid-cols-1 lg:px-8">
        <div className="mx-auto px-6 text-left flex flex-col gap-4">
          <div className="w-full my-2 rounded-lg ">
            <p className="text-white text-sm md:text-md lg:text-lg  text-justify ">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {howBestFit.description}
            </p>
            <div className=" w-full flex flex-col gap-5 lg:flex-row mt-10 ">
              {howBestFit.descriptionPoints.map((point) => (
                <div className="h-30 p-3 basis-1/3 text-white text-center rounded-xl border-double border-4 border-cyan-400/60 content-center  ">
                  <h1 className="text-amber-400 font-bold uppercase text-lg md:text-xl h-1/5">
                    {point.heading}
                  </h1>
                  <p className="text-sm md:text-md pt-3 h-4/5">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-30  rounded-lg p-5 lg:mt-5 bg-white/10">
            <h1 className="text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
              {" "}
              As outlined in my Experience...
            </h1>
            <p className="text-white text-sm md:text-md lg:text-lg pt-5 text-justify">
              {" "}
              {howBestFit.experienceOutline}
            </p>
            <ol
              className="text-white pl-5 pt-3 text-sm md:text-md lg:text-lg"
              style={{ listStyleType: "decimal" }}
            >
              {howBestFit.experienceOutlinePoints.map((point) => (
                <li>{point.point}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="py-5 px-6 ">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            My Experience
          </h2>
          <p className="mt-4 text-white">{howBestFit.experienceHeadline}</p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.role} className="border-t border-white pt-3">
                <dt className="font-medium text-cyan-400">{feature.role}</dt>
                <dd className="mt-2 text-sm text-amber-400 font-semibold">
                  {feature.company}
                </dd>
                <dd className="mt-2 text-sm text-white">{feature.duration}</dd>
                <dd className="mt-2 text-sm text-white">{feature.desc}</dd>
                <dd className="mt-2 text-sm flex flex-row flex-wrap">
                  {feature.skills.map((skill) => {
                    return (
                      <span
                        key={skill.text}
                        className="my-1 mx-1 text-sm text-black font-semibold bg-amber-400 hover:bg-cyan-300 max-w-max rounded-2xl px-1"
                      >
                        {skill.text}
                      </span>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
