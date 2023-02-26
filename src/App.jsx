import React from "react";
import Navbar from "./components/Navbar/navbar";
import OtherProducts from "./components/OtherProducts/OtherProducts";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="flexStart">
        <div className="boxWidth">HERO-HOME</div>
      </div>

      <div className="flexStart paddingX bg-[#121212]">
        <div className="boxWidth">
          <OtherProducts />
        </div>
      </div>
    </div>
  );
};

export default App;
