import React from "react";
import House from "../../assets/HERO-HOUSE.png";
import "./hero.css";
import Svg1 from "../Hero/SGVs/svgI";
import Svg2 from "../Hero/SGVs/svgH";
import Svg3 from "../Hero/SGVs/svgF";
import Svg4 from "../Hero/SGVs/svgS";

const div = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col items-center justify-center gg:flex-row gg:gap-[114px]">
        <div className="max-w-[500px] text-center gg:text-left">
          <h1 className="font-headF text-[25px] text-[#D8B586] gg:mb-[15px] gg:text-[55px]">
            HEMPCRETE
          </h1>
          <h1 className="whitespace-nowrap font-headF text-[25px] leading-none text-[#D8B586] gg:mb-[15px] gg:text-[55px]">
            BUILDING SYSTEMS
          </h1>

          <p className="max-w[500px] my-[1.8rem] font-paraF text-[16px] text-white gg:mb-[25px]">
            Hempitecture is the US leader in hemp construction. We work with
            architects, builders, engineers, and developers to build energy
            efficient, non-toxic, and carbon absorbing environments. We can help
            you use hemp based insulation materials on your next project.
          </p>
          <div className="max-w-[548px] bg-[#D8B586] py-1 text-center align-middle font-headF text-[20px] font-bold text-black">
            <h2 className="">BENEFITS OF HEMPCRETE</h2>
          </div>
          <div className="paddingY flex flex-col items-center gap-3 gg:flex-row gg:gap-[5rem]">
            <div className="flex flex-col">
              <div className="flex flex-col items-center gap-1 text-center gg:flex-row gg:text-left">
                <Svg1 />
                <h3 className="font-headF text-[20px] text-white">
                  Increased Energy<br></br> Performace
                </h3>
              </div>
              <div className="flex flex-col items-center gap-1 text-center gg:flex-row gg:text-left">
                <Svg2 />
                <h3 className="font-headF text-[20px] text-white">Healthy</h3>
              </div>
            </div>
            <div className="flex w-fit flex-col">
              <div className="flex flex-col items-center gap-1 text-center gg:flex-row gg:text-left">
                <Svg3 />
                <h3 className="font-headF text-[20px] text-white">Fireproof</h3>
              </div>
              <div className="flex flex-col items-center gap-1 text-center gg:flex-row gg:text-left">
                <Svg4 />
                <h3 className="font-headF text-[20px] text-white">
                  Save<br></br> Money
                </h3>
              </div>
            </div>
          </div>
        </div>
        <img src={House} alt="" className="w-full min-w-[280px]" />
      </div>
    </div>
  );
};

export default div;
