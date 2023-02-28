import React, { useState } from "react";
import Logo from "../../assets/NAVLOGO.png";
const Navbar = () => {
  return (
    <nav className="mx-auto gg:mx-5">
      <div className="flex flex-col items-center justify-between gg:flex-row">
        <img src={Logo} alt="hemp-logo-nav" className="" />

        <div className="paddingY flex flex-col items-center gap-[15px] whitespace-nowrap font-paraF text-[16px] text-[#D8B586] gg:flex-row">
          <a
            href=""
            className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-[#7B8753] hover:bg-[#7B8753] hover:text-white"
          >
            Home
          </a>
          <a
            href=""
            className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-[#7B8753] hover:bg-[#7B8753] hover:text-white"
          >
            Services
          </a>

          <a
            href=""
            className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-[#7B8753] hover:bg-[#7B8753] hover:text-white"
          >
            About Us
          </a>

          <a
            href=""
            className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-[#7B8753] hover:bg-[#7B8753] hover:text-white"
          >
            Gallery
          </a>

          <a
            href=""
            className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-[#7B8753] hover:bg-[#7B8753] hover:text-white"
          >
            Other Products
          </a>

          <button className="btn-primary">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
