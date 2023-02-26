import React from "react";
import House from "../../assets/HERO-HOUSE.png";

const div = () => {
  return (
    <div className="div">
      <div className="flex flex-col items-center justify-center gap-8 gg:flex-row">
        <div className="max-w[500px]">
          <h1 className="font-headF text-[55px] text-[#D8B586]">HEMP CRETE</h1>
          <h1 className="font-headF text-[55px] text-[#D8B586]">
            BUILDING SYSTEMS
          </h1>

          <p className="font-paraF text-[16px] text-white">
            Hempitecture is the US leader in hemp construction. We work with
            <br></br> architects, builders, engineers, and developers to build
            energy efficient,<br></br> non-toxic, and carbon absorbing
            environments. We can help you use hemp<br></br> based insulation
            materials on your next project.
          </p>
          <div className="w-[548px] bg-[#D8B586] py-2 text-center align-middle font-headF text-[20px] font-bold text-black">
            <h2 className="">BENEFITS OF HEMPCRETE</h2>
          </div>
          <div className="div"></div>
        </div>
        <img src={House} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default div;
