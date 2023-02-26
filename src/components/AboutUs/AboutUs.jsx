import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className=" bg-blur-a  m-auto my-[50px] max-w-[726px] text-center ">
        <h2 className=" mt-[70px] mb-[34px] pt-[20px] font-paraF text-[25px] text-black">
          ABOUT US
        </h2>
        <h1 className="mb-[34px] font-headF text-[40px]">
          Our 8 years of experience
        </h1>
        <p className="mx-auto mb-[28px] max-w-[753px] font-paraF  text-black">
          The importance of hempcrete binder can never be underestimated and our
          products were carefully selected and tested to create long lasting
          biocomposites that are resilient, healthy, and high performing.
        </p>
        <p className="mb-[90px]">
          Hempitecture uses a specifically formulated mineral based binder that
          is ideal for bonding hemp core both in spray applied and cast in place
          methods.
        </p>

        <button className="btn-secondary translate-y-6  transform">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
