import React from "react";
import Navbar from "./components/Navbar/navbar";

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

      <div className="flexStart paddingX">
        <div className="boxWidth">AboutUS Gallery OtherProducts Footer</div>
      </div>
    </div>
  );
};

export default App;
