import Hero from "./components/sections/Hero";
import Brands from "./components/sections/Brands";

import About from "./components/sections/About";
import OurApproach from "./components/sections/OurApproach";
import ServicesGrid from "./components/sections/ServicesGrid";
import CitiesWeServe from "./components/sections/CitiesWeServe";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <OurApproach />
      <ServicesGrid />
      <CitiesWeServe />
      <Contact />
      {/* <CarBrandsSection/> */}
    </>
  );
}
