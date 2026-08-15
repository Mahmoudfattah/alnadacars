import Image from "next/image";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import CarBrandsSection from "./components/sections/CarBrandsSection";
import Brands from "./components/sections/Brands";

import About from "./components/sections/About";
import OurApproach from "./components/sections/OurApproach";
import ServicesGrid from "./components/sections/ServicesGrid";
import CitiesWeServe from "./components/sections/CitiesWeServe";
import Contact from "./components/sections/Contact";


export default function Home() {
  return (
    <div className="">
      <Hero/>
<Brands/>
{/* <CarBrandsSection/> */}
          <About />
          <OurApproach   />
             <ServicesGrid />
             < CitiesWeServe/>
             < Contact/>
     
    </div>
  );
}
