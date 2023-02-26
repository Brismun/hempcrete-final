import React, { useState } from "react";
const Navbar = () => {
  return (
    <nav className="mx-2 gg:mx-5">
      <div className="flex items-center justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
          className="max-h-[150px] max-w-[150px]"
        />
        <div className="hidden gg:block">
          <div className="font-head flex items-center gap-[15px] text-[15px]">
            <a
              href=""
              className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Home
            </a>

            <a
              href=""
              className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              About Us
            </a>

            <a
              href=""
              className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Gallery
            </a>

            <a
              href=""
              className="duration-650 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Other Products
            </a>

            <button class="btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
