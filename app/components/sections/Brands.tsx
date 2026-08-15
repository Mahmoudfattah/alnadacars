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

export default function Brands() {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!trackRef.current || !firstGroupRef.current) return;

      const track = trackRef.current;
      const firstGroup = firstGroupRef.current;

      const getGroupWidth = () => firstGroup.offsetWidth;

      const createAnimation = () => {
        gsap.killTweensOf(track);

        const distance = getGroupWidth();

        gsap.set(track, {
          x: 0,
        });

        return gsap.to(track, {
          x: -distance,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
      };

      const animation = createAnimation();

      const handleResize = () => {
        animation.kill();
        createAnimation();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        animation.kill();
        window.removeEventListener("resize", handleResize);
      };
    },
    {
      scope: containerRef,
    },
  );

  return (
    <section
      ref={containerRef}
      id="brands"
      aria-label="أنواع السيارات"
      className="
        relative
        mx-auto
        w-full
        max-w-[1400px]
        overflow-hidden
        bg-[var(--color-bg-raised)]
        px-6
        py-8
        md:px-10
        lg:px-16
      "
    >
      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-16
          bg-gradient-to-r
          from-[var(--color-bg-raised)]
          to-transparent
          md:w-28
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-20
          w-16
          bg-gradient-to-l
          from-[var(--color-bg-raised)]
          to-transparent
          md:w-28
        "
      />

      {/* VIEWPORT */}
      <div className="w-full overflow-hidden">
        {/* MOVING TRACK */}
        <div
          ref={trackRef}
          dir="ltr"
          className="
            flex
            w-max
            flex-nowrap
            items-center
          "
        >
          {/* =================================================
              GROUP 1
          ================================================== */}

          <div
            ref={firstGroupRef}
            className="
              flex
              shrink-0
              items-center
              gap-10
              pr-10
              md:gap-14
              md:pr-14
              lg:gap-16
              lg:pr-16
            "
          >
            {BRANDS.map((brand) => (
              <div
                key={`group-1-${brand.name}`}
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  md:h-24
                  md:w-28
                "
              >
                <Image
                  src={brand.src}
                  alt={`شعار سيارة ${brand.name}`}
                  width={120}
                  height={80}
                  className="
                    h-auto
                    max-h-11
                    w-auto
                    max-w-[90px]
                    object-contain
                    md:max-h-14
                    md:max-w-[120px]
                  "
                />
              </div>
            ))}
          </div>

          {/* =================================================
              GROUP 2 — EXACT COPY
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              flex
              shrink-0
              items-center
              gap-10
              pr-10
              md:gap-14
              md:pr-14
              lg:gap-16
              lg:pr-16
            "
          >
            {BRANDS.map((brand) => (
              <div
                key={`group-2-${brand.name}`}
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  md:h-24
                  md:w-28
                "
              >
                <Image
                  src={brand.src}
                  alt=""
                  width={120}
                  height={80}
                  className="
                    h-auto
                    max-h-11
                    w-auto
                    max-w-[90px]
                    object-contain
                    md:max-h-14
                    md:max-w-[120px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}