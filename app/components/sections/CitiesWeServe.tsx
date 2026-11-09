"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  {
    name: "جدة",
    desc: "نغطي كافة أحياء جدة لشراء السيارات المصدومة والمتعطلة وتشليح وسكراب مع سطحة مجانية سريعة.",
    neighborhoods: [
      "الحمدانية",
      "بريمان",
      "أبحر الشمالية",
      "الصفا",
      "المروة",
      "السامر",
      "النسيم",
      "الروضة",
      "الفيحاء",
      "جنوب جدة",
    ],
    lat: 21.5433,
    lng: 39.1728,
    href: "",
  },
  {
    name: "مكة المكرمة",
    desc: "خدمة شراء سيارات تشليح ومصدومة وتالفة تصل لجميع أحياء مكة المكرمة وإسقاط اللوحات فوري.",
    neighborhoods: [
      "الشرائع",
      "العزيزية",
      "النوارية",
      "العوالي",
      "بطحاء قريش",
      "الكعكية",
      "الشوقية",
      "العتيبية",
    ],
    lat: 21.3891,
    lng: 39.8579,
    href: "/makkah",
  },
  {
    name: "الطائف",
    desc: "معاينة وشراء فوري للسيارات المصدومة والتالفة والمتعطلة في جميع مناطق وضواحي الطائف.",
    neighborhoods: [
      "الحوية",
      "شهار",
      "الوسام",
      "السيل الصغير",
      "الفيصلية",
      "قروى",
      "الردف",
      "المثناة",
    ],
    lat: 21.2854,
    lng: 40.4183,
    href: "/taif",
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "12% center",
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
          "-=0.35",
        )
        .to(
          ".cities-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          ".city-item",
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.13,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          ".cities-cta",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.35",
        )
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
          "-=0.8",
        );

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
    },
  );

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
      },
    );

    setActive(index);
  };

  return (
    <section
      ref={container}
      id="cities"
      className="border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="cities-badge inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-blue-600 shadow-sm">
            مواقع الخدمة والأحياء
          </span>

          <h2 className="cities-title text-[32px] font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px]">
            المدن والأحياء التي نخدمها في السعودية
          </h2>

          <p className="cities-description max-w-[540px] text-[15.5px] leading-[1.8] text-[var(--color-ink-soft)]">
            نصل إليك أينما كنت بسطحة خاصة مجانية لشراء سيارتك المصدومة أو
            التشليح في جميع أحياء جدة ومكة المكرمة والطائف.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* Cities List */}
          <div className="flex flex-col gap-4">
            {CITIES.map((c, i) => {
              const isActive = i === active;

              return (
                <div
                  key={c.name}
                  onClick={() => handleCityChange(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleCityChange(i);
                  }}
                  className={`city-item group relative flex cursor-pointer flex-col items-start gap-3 overflow-hidden rounded-2xl border p-5 text-right transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-[1.02] border-blue-200 bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-100"
                      : "border-slate-200/60 bg-white/60 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4 w-full">
                    <span
                      className={`absolute right-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-l-full transition-all duration-500 ${
                        isActive
                          ? "bg-[var(--color-cta)] opacity-100"
                          : "bg-transparent opacity-0"
                      }`}
                    />

                    <span
                      className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                        isActive
                          ? "scale-110 bg-[var(--color-cta)] text-white shadow-md shadow-blue-500/30"
                          : "bg-gray-100 text-gray-500 group-hover:scale-105 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <MapPin
                        size={22}
                        color={isActive ? "white" : "currentColor"}
                        strokeWidth={isActive ? 2 : 1.75}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`mb-1 text-lg font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-blue-600"
                              : "text-gray-900 group-hover:text-blue-600"
                          }`}
                        >
                          {c.name}
                        </h3>

                        {c.href && (
                          <Link
                            href={c.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-all"
                          >
                            <span>صفحة فرع {c.name}</span>
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {c.desc}
                      </p>
                    </div>
                  </div>

                  {/* Local SEO Neighborhood Badges */}
                  <div className="mt-1 flex flex-wrap gap-1.5 pr-16 w-full">
                    {c.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 border border-blue-100"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
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

          {/* Map */}
          <div className="relative w-full">
            <div className="cities-map group relative aspect-square w-full overflow-hidden rounded-[2rem] border-[6px] border-[var(--color-bg-raised)] bg-[var(--color-bg-raised)] shadow-[var(--shadow-md)] transition-shadow duration-500 hover:shadow-[var(--shadow-lg)] md:aspect-[4/3]">
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
