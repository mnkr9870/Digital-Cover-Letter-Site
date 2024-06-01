import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Values = () => {
  const { AllDetails } = useContext(GlobalContext);
  const valuesData = AllDetails.values;
  const companyDetails = AllDetails.companyDetails;

  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5">
      <div className="h-30 mx-5 my-3 p-3 rounded-lg text-center">
        <h1 className="text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          Together We Could...
        </h1>
        <p className="text-white  text-sm md:text-md lg:text-lg pt-5 text-justify">
          {" "}
          {valuesData.headlineDesc1}
          {valuesData.headlineDesc2}
        </p>
      </div>
      <div className=" h-30 m-5 p-3 rounded-lg text-left ">
        <div className="flex flex-col lg:flex-row gap-4 ">
          <div className="basis-1/2  my-5  ">
            <h1 className="w-full text-center text-amber-400 font-bold text-lg md:text-xl lg:text-2xl">
              {" "}
              My Values
            </h1>
            <div className="w-full flex flex-row gap-y-2 gap-x-3 pt-10 justify-evenly text-amber-400  font-semibold">
              {valuesData.myValues.map((value) => (
                <div
                  key={value.heading}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] border-double border-4 hover:text-white border-cyan-500/50 hover:border-amber-500/50  rounded-3xl content-center shadow-lg shadow-cyan-400 hover:shadow-amber-400 "
                >
                  <h1 className="w-full text-center  text-xs md:text-md lg:text-lg">
                    {value.heading}
                  </h1>
                </div>
              ))}
            </div>
            <p className=" mt-20 mx-3 lg:mx-10 text-white text-justify">
              {valuesData.myValues.map((value) => (
                <>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  {value.description}
                  <br />
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className="basis-1/2  my-5 border-amber-400/50 ">
            <h1 className="w-full text-center text-amber-400 font-bold text-lg md:text-xl lg:text-2xl">
              {" "}
              {companyDetails.companyName} Values
            </h1>
            <div className="w-full flex flex-row gap-y-2 gap-x-3 pt-10 justify-evenly text-amber-400  font-semibold ">
              {valuesData.companyValues.map((value) => (
                <div
                  key={value.heading}
                  className=" w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] border-double border-4 hover:text-amber-400 border-cyan-500/50 hover:border-amber-500/50  rounded-3xl content-center shadow-lg shadow-cyan-400 hover:shadow-amber-400 "
                >
                  <h1 className=" text-center text-xs md:text-md lg:text-lg">
                    {value.heading}
                  </h1>
                </div>
              ))}
            </div>
            <p className="mt-20 mx-3 lg:mx-10 text-white text-justify">
              {valuesData.companyValues.map((value) => (
                <>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  {value.description}
                  <br />
                  <br />
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" w-full h-30 my-3 p-3 rounded-lg text-center">
        <h1 className="text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          Together We Could...
        </h1>
        <p className="text-white  text-sm md:text-md lg:text-lg pt-5">
          {" "}
          I like XYZ coz........
        </p>
      </div> */}
    </div>
  );
};

export default Values;
