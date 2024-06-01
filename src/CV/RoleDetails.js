import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const RoleDetails = () => {
  const { AllDetails } = useContext(GlobalContext);
  const roleDetails = AllDetails.roleDetails;
  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5">
      <div className=" w-full h-30 my-3 p-3 rounded-lg text-center">
        <h1 className="text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl">
          {" "}
          Which Role Did I Apply To ?
        </h1>
        <h1 className="text-amber-400  text-sm md:text-md lg:text-lg pt-5">
          {" "}
          {roleDetails.role}, {roleDetails.location}
        </h1>
      </div>
      <div className="mx-auto max-w-10xl px-6 text-left flex flex-col md:flex-row  gap-4">
        <div className="w-full md:w-1/2 my-5 rounded-lg p-5 bg-white/10">
          <h1 className="text-amber-400 font-bold text-lg md:text-xl lg:text-2xl text-center">
            {" "}
            What Do I Like About The Role ?
          </h1>
          <h1 className="text-white text-sm md:text-md lg:text-lg pt-5 text-justify">
            {" "}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            {roleDetails.whyThisRole}
          </h1>
          <br />
          <ul
            className="text-white pl-5 pt-3 text-sm md:text-md lg:text-lg text-justify"
            style={{ listStyleType: "decimal" }}
          >
            {roleDetails.whyThisRolePoints.map((point) => (
              <li className="py-1">{point.point}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-30 my-5 rounded-lg p-5 bg-white/10">
          <h1 className="text-amber-400 font-bold text-lg md:text-xl lg:text-2xl text-center">
            {" "}
            What Can I Gain From This Role ?
          </h1>
          <h1 className="text-white text-sm md:text-md lg:text-lg pt-5 text-justify">
            {" "}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            {roleDetails.gainFromThisRole}
          </h1>
          <br />
          <ul
            className="text-white pl-5 pt-3 text-sm md:text-md lg:text-lg text-justify"
            style={{ listStyleType: "decimal" }}
          >
            {roleDetails.gainFromThisRolePoints.map((point) => (
              <li className="py-1">{point.point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleDetails;
