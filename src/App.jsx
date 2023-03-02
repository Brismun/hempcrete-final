import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/navbar";
import OtherProducts from "./components/OtherProducts/OtherProducts";
import Hero from "./components/Hero/hero";
import ContactForm from "./components/ContactForm/ContactForm";
import Media from "./components/Media/Media";
import Services from "./components/Our Services/services";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="paddingX flexCenter bg-[#121212]">
        <div className="boxWidth">
          <Navbar />
          <Hero />
        </div>
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
      <div className="flexStart bgi-contact bg-contact-form bg-cover bg-no-repeat">
        <ContactForm />
      </div>
      <div className="flexStart paddingX bg-[#121212]">
        <Media />
      </div>
      <div className="flexStart paddingX bg-[#121212]">
        <Services />
      </div>
    </div>
  );
};

export default App;
