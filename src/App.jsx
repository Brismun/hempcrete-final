import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/navbar";
import OtherProducts from "./components/OtherProducts/OtherProducts";
<<<<<<< HEAD
=======
import Hero from "./components/Hero/hero";
>>>>>>> 519a6d6299087a241b42b2513a1445e3260dd457

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="paddingX flexCenter bg-[#121212]">
        <div className="boxWidth">
          <Navbar />
          <Hero />
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
      <div className="flexStart paddingX bg-[#121212]">
        <div className="boxWidth">
          <Gallery />
        </div>
      </div>
      <div className="flexStart paddingX bg-about-us bg-cover bg-no-repeat">
        <div className="boxWidth">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default App;
