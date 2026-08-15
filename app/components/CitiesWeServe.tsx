"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  {
    name: "جدة",
    desc: "نغطي جميع أحياء جدة شمالاً وجنوباً لشراء السيارات المصدومة والمتعطلة والاسكراب.",
    lat: 21.5433,
    lng: 39.1728,
  },
  {
    name: "مكة المكرمة",
    desc: "خدمة شراء سيارات تشليح وقديمة تصل إلى جميع أحياء مكة المكرمة.",
    lat: 21.3891,
    lng: 39.8579,
  },
  {
    name: "الطائف",
    desc: "نصل إلى الطائف لمعاينة وشراء السيارات التالفة والمتعطلة بأفضل سعر فوري.",
    lat: 21.2854,
    lng: 40.4183,
  },
];

export default function CitiesWeServe() {
  const [active, setActive] = useState(0);
  const city = CITIES[active];

  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = container.current;

      if (!section) return;

      /*
       * Initial states
       */
      gsap.set(".cities-badge", {
        opacity: 0,
        y: 25,
        scale: 0.95,
      });

      gsap.set(".cities-title", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".cities-description", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".city-item", {
        opacity: 0,
        x: -35,
      });

      gsap.set(".cities-cta", {
        opacity: 0,
        y: 25,
        scale: 0.95,
      });

      gsap.set(".cities-map", {
        opacity: 0,
        scale: 0.92,
        y: 30,
        rotate: 1.5,
      });

      /*
       * Main entrance animation
       *
       * يبدأ عندما يصل مركز الـ section
       * إلى مركز الـ viewport
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "30% center",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(".cities-badge", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          ".cities-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          ".cities-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )

        /*
         * Cities appear one after another
         */
        .to(
          ".city-item",
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.13,
            ease: "power3.out",
          },
          "-=0.2"
        )

        /*
         * CTA
         */
        .to(
          ".cities-cta",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.35"
        )

        /*
         * Map comes from slightly behind
         */
        .to(
          ".cities-map",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      /*
       * Subtle floating animation for the map
       *
       * Very slow so it doesn't look like
       * a normal "floating card" animation.
       */
      gsap.to(".cities-map", {
        y: -5,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    {
      scope: container,
    }
  );

  /*
   * Animate the map when changing city
   */
  const handleCityChange = (index: number) => {
    if (index === active) return;

    gsap.fromTo(
      ".cities-map",
      {
        opacity: 0.45,
        scale: 0.97,
        filter: "blur(2px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }
    );

    setActive(index);
  };

  return (
    <section
      ref={container}
      id="cities"
      className="border-t border-[var(--color-border)]  py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* =========================
            Header
        ========================== */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="cities-badge inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-blue-600 shadow-sm">
            مواقع الخدمة
          </span>

          <h2 className="cities-title text-[32px] font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px]">
            المدن التي نخدمها
          </h2>

          <p className="cities-description max-w-[480px] text-[15.5px] leading-[1.8] text-[var(--color-ink-soft)]">
            خبرة محلية أينما كنت — نصل إليك في جدة ومكة المكرمة والطائف بسرعة
            واحترافية.
          </p>
        </div>

        {/* =========================
            Content
        ========================== */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* =========================
              Cities List
          ========================== */}
          <div className="flex flex-col gap-4">
            {CITIES.map((c, i) => {
              const isActive = i === active;

              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => handleCityChange(i)}
                  className={`city-item group relative flex cursor-pointer items-start gap-5 overflow-hidden rounded-2xl border p-5 text-right transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-[1.02] border-blue-100 bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-50"
                      : "border-transparent bg-transparent hover:border-gray-100 hover:bg-white/60 hover:shadow-sm"
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute right-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-l-full transition-all duration-500 ${
                      isActive
                        ? "bg-[var(--color-cta)] opacity-100"
                        : "bg-transparent opacity-0"
                    }`}
                  />

                  {/* Icon */}
                  <span
                    className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                      isActive
                        ? "scale-110 bg-[var(--color-cta)] text-white shadow-md shadow-blue-500/30"
                        : "bg-gray-100 text-gray-400 group-hover:scale-105 group-hover:bg-blue-50 group-hover:text-blue-500"
                    }`}
                  >
                    <MapPin
                      size={22}
                      color={isActive ? "white" : "currentColor"}
                      strokeWidth={isActive ? 2 : 1.75}
                    />
                  </span>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3
                      className={`mb-1.5 text-lg font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-900 group-hover:text-blue-500"
                      }`}
                    >
                      {c.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      {c.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* CTA */}
            <Link
              href="#contact"
              className="cities-cta mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[var(--color-cta)] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1! hover:bg-[var(--color-cta-hover)] hover:shadow-lg active:scale-95"
            >
              تواصل معنا الآن
            </Link>
          </div>

          {/* =========================
              Map
          ========================== */}
          <div className="relative w-full">
            <div
              className="cities-map group relative aspect-square w-full overflow-hidden rounded-[2rem] border-[6px] border-[var(--color-bg-raised)] bg-[var(--color-bg-raised)] shadow-[var(--shadow-md)] transition-shadow duration-500 hover:shadow-[var(--shadow-lg)] md:aspect-[4/3]"
            >
              {/* Premium overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] ring-1 ring-inset ring-black/5" />

              <iframe
                key={city.name}
                title={`موقع خدمة شراء السيارات في ${city.name}`}
                src={`https://www.google.com/maps?q=${city.lat},${city.lng}&z=11&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-[1.5rem] contrast-[0.95] transition-all duration-700 group-hover:contrast-100"
              />

              {/* Current city label */}
              <div className="pointer-events-none absolute bottom-5 right-5 z-20">
                <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-bold text-gray-900 shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                  {city.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}