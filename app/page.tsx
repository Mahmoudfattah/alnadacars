import Hero from "./components/sections/Hero";
import Brands from "./components/sections/Brands";
import About from "./components/sections/About";
import OurApproach from "./components/sections/OurApproach";
import ServicesGrid from "./components/sections/ServicesGrid";
import CitiesWeServe from "./components/sections/CitiesWeServe";
import Contact from "./components/sections/Contact";

export default function Home() {
  const phoneNumber = "0562117196";
  const internationalNumber = "971562117196"; // Update country code if needed (e.g., +971 for UAE)

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

      {/* Left Bottom Corner - WhatsApp Button (Smaller Size) */}
      <div className="fixed bottom-4 right-2 z-50">
        <a
          href={`https://wa.me/${internationalNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-11 h-11 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba59] hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      {/* Right Bottom Corner - Call Button (Smaller Size) */}
      <div className="fixed bottom-4 left-2 z-50">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Us"
          className="flex items-center justify-center w-11 h-11 bg-[#0284C7] text-white rounded-full shadow-lg hover:bg-[#0369A1] hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.47 2.58l-1.06 1.06C5.45 7.63 5.16 6.34 5.03 5zm13.94 13.97c-1.34-.13-2.63-.42-3.84-1.06l1.06-1.06c.83.25 1.7.4 2.59.47v1.51z" />
          </svg>
        </a>
      </div>
    </>
  );
}