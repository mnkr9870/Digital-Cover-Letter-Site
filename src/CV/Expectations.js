import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Expectations = () => {
  const { AllDetails } = useContext(GlobalContext);
  const expectationsData = AllDetails.expectations;
  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5">
      <div className=" h-30 mx-5 my-3 p-3 rounded-lg text-center ">
        <h1 className="text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          What Am I Expecting ?
        </h1>
        <p className="text-white  text-sm md:text-md lg:text-lg pt-5">
          {" "}
          {expectationsData.headline}
        </p>
      </div>
      <div className="  h-30 my-3 p-3 rounded-lg text-left grid grid-cols-1 lg:grid-cols-2 gap-3">
        {expectationsData.expectationsArray.map((expectation) => (
          <div className="mx-5 my-2 rounded-lg p-5 bg-white/10 ">
            <h1 className="text-amber-400 font-bold text-lg md:text-xl lg:text-2xl text-center h-1/4">
              {expectation.qus}
            </h1>
            <p className="text-white text-sm md:text-md lg:text-lg mt-2 py-4 text-center h-3/4 content-top">
              {expectation.ans}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expectations;
