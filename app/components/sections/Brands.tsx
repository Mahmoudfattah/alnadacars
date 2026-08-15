"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BRANDS = [
  { name: "Aston Martin", src: "/Aston-Martin-Logo.png" },
  { name: "Audi", src: "/audi-logo.png" },
  { name: "Benz", src: "/Benz-Logo.png" },
  { name: "BMW", src: "/BMW-Logo.png" },
  { name: "Ferrari", src: "/Ferrari-Logo.png" },
  { name: "Maserati", src: "/Maserati-Logo.png" },
  { name: "Peugeot", src: "/Peugeot-Logo.png" },
  { name: "Porsche", src: "/Porsche-Logo.png" },
  { name: "Volkswagen", src: "/Volkswagen-Logo.png" },
];

// Two identical sets = seamless loop
const DOUBLE_BRANDS = [...BRANDS, ...BRANDS];

export default function Brands() {
  const containerRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(
  //   () => {
  //     if (!marqueeRef.current) return;

  //     // RIGHT → LEFT
  //     // Move exactly one complete set to the left,
  //     // then restart seamlessly from the beginning.
  //     gsap.to(marqueeRef.current, {
  //       xPercent: -50,
  //       duration: 25,
  //       ease: "none",
  //       repeat: -1,
  //     });
  //   },
  //   {
  //     scope: containerRef,
  //   }
  // );

  return (
    <section
      id="brands"
      ref={containerRef}
      aria-label="أنواع السيارات"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-bg-raised)]
        py-8
      "
    >
      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-20
          bg-gradient-to-r
          from-[var(--color-bg-raised)]
          to-transparent
          md:w-32
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-20
          bg-gradient-to-l
          from-[var(--color-bg-raised)]
          to-transparent
          md:w-32
        "
      />

      {/* MARQUEE */}
      <div
        ref={marqueeRef}
        dir="ltr"
        className="
          flex
          w-max
          flex-nowrap
          items-center
          gap-12
        "
      >
        {DOUBLE_BRANDS.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="
              flex
              w-24
              shrink-0
              items-center
              justify-center
              opacity-100
            
              transition-all
            
              md:w-32
            "
          >
            <Image
              src={brand.src}
              alt={`شعار سيارة ${brand.name}`}
              width={120}
              height={80}
              className="
                max-h-12
                w-auto
                object-contain
                md:max-h-14
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}