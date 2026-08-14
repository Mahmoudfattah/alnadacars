import Image from "next/image";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import CarBrandsSection from "./components/sections/CarBrandsSection";
import Brands from "./components/sections/Brands";

import About from "./components/sections/About";


export default function Home() {
  return (
    <div className="">
      <Hero/>
<Brands/>
{/* <CarBrandsSection/> */}
          <About />
      <div className="h-[100dvh]">

      </div>
    </div>
  );
}
