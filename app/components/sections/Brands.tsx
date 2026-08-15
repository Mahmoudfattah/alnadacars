"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BRANDS = [
  { name: "Aston Martin", src: "/Aston-Martin-Logo.webp" },
  { name: "Audi", src: "/audi-logo.png" },
  { name: "Benz", src: "/Benz-Logo.webp" },
  { name: "BMW", src: "/BMW-Logo.webp" },
  { name: "Ferrari", src: "/Ferrari-Logo.webp" },
  { name: "Maserati", src: "/Maserati-Logo.webp" },
  { name: "Peugeot", src: "/Peugeot-Logo.webp" },
  { name: "Porsche", src: "/Porsche-Logo.webp" },
  { name: "Volkswagen", src: "/Volkswagen-Logo.webp" },
];

export default function Brands() {
  const containerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!listRef.current) return;

      const brandItems = listRef.current.children;

      // Initial state: hidden and slightly offset downwards
      gsap.set(brandItems, {
        opacity: 0,
        y: 30,
      });

      // Animate into view with stagger when scrolled into view
      gsap.to(brandItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true, // Animates only once when scrolling down
        },
      });
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
        py-12
        md:px-10
        md:py-16
        lg:px-16
      "
    >
      {/* VIEWPORT / GRID CONTAINER */}
      <div className="w-full">
        <div
          ref={listRef}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            md:gap-6
            lg:gap-8
            lg:flex-nowrap
            lg:overflow-hidden
          "
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                md:h-16
                md:w-20
                lg:h-18
                lg:w-24
              "
            >
              <Image
                src={brand.src}
                alt={`شعار سيارة ${brand.name}`}
                width={100}
                height={72}
                className="
                  h-auto
                  max-h-8
                  w-auto
                  max-w-[70px]
                  object-contain
                  md:max-h-10
                  md:max-w-[86px]
                  lg:max-h-12
                  lg:max-w-[100px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
