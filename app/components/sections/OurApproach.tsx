"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const IMAGES = [
  {
    src: "/car1.webp",
    alt: "شراء سيارات مصدومة بحوادث في جدة ومكة والطائف بأعلى سعر كاش فوري",
    title: "شراء سيارات مصدومة",
    subtitle: "في جدة ومكة والطائف",
  },
  {
    src: "/car2.webp",
    alt: "شراء سيارات تالفة بالكامل ومكبس وسكراب في جدة ومكة مع سطحة مجانية",
    title: "سيارات تالفة ومكبس",
    subtitle: "سعر فوري وشراء نقدي",
  },
  {
    src: "/car3.webp",
    alt: "شراء سيارات تشليح وقطع غيار وإسقاط لوحات في جدة ومكة والطائف",
    title: "شراء سيارات تشليح",
    subtitle: "معاملة شفافة وسريعة",
  },
  {
    src: "/car4.webp",
    alt: "شراء سيارات متعطلة ميكانيكياً وكهربائياً في جدة ومكة بدون فحص دوري",
    title: "سيارات متعطلة",
    subtitle: "بيعها بسهولة وبدون تعقيد",
  },
  {
    src: "/car5.webp",
    alt: "شراء سيارات قديمة وتالفة متوقفة في مكة وجدة مع نقل فوري",
    title: "شراء سيارات قديمة",
    subtitle: "تقييم عادل ونتيجة في نفس اليوم",
  },
];

export default function OurApproach() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const title = section.querySelector("h2");
      const items = section.querySelectorAll(".approach-grid-item");

      if (!title || !items.length) return;

      const titleSplit = SplitText.create(title, {
        type: "words",
      });

      gsap.set(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
      });

      gsap.set(items, {
        opacity: 0,
        y: 20,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "12% center",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      timeline
        .to(titleSplit.words, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.025,
        })
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
            clearProps: "transform",
          },
          "-=0.35",
        );

      return () => {
        titleSplit.revert();
      };
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      dir="rtl"
      className="mx-auto max-w-[1300px] px-5 2xl:px-0"
    >
      {/* HEADER */}
      <div className="mb-16 px-4 md:px-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* TITLE */}
          <div className="lg:col-span-8">
            <span className="mb-8 inline-block rounded-full bg-[var(--color-cta)] px-4 py-2 text-sm font-semibold text-white">
              خدماتنا: شراء سيارات مصدومة وتالفة ومكبس في جدة ومكة والطائف
            </span>

            <h2 className="max-w-lg text-4xl font-bold leading-tight text-[var(--color-ink)] md:text-5xl">
              شراء سيارات مصدومة وتالفة ومكبس بسرعة وشفافية كاملة
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-4 flex flex-col justify-between gap-2 lg:col-span-4 lg:mt-0">
            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] font-medium">
              نشتري سيارات مصدومة، تالفة، ومكبس في جدة ومكة والطائف بأعلى
              مستويات الثقة والشفافية. نضمن لك تقييمًا عادلًا، صفقة سريعة،
              واستلام نقدي بدون تعقيد أو ضغط.
            </p>

            <div className="flex flex-col justify-between gap-2 md:gap-2">
              <p className="numeral text-4xl font-bold text-[var(--color-ink)] md:text-5xl">
                +5000
              </p>

              <p className="text-sm font-semibold text-[var(--color-ink-soft)]">
                سيارة تم شراؤها بنظام موثوق
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE GRID — ROW 1 */}
      <div className="mb-5 grid grid-cols-1 gap-5 px-5 md:px-0 xl:grid-cols-12">
        {IMAGES.slice(0, 3).map((image, index) => (
          <div
            key={image.title}
            className={`approach-grid-item group relative h-72 overflow-hidden rounded-3xl ${
              index === 0
                ? "xl:col-span-3"
                : index === 1
                  ? "xl:col-span-6"
                  : "xl:col-span-3"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes={
                index === 0
                  ? "(max-width: 1280px) 100vw, 25vw"
                  : index === 1
                    ? "(max-width: 1280px) 100vw, 50vw"
                    : "(max-width: 1280px) 100vw, 25vw"
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 text-right text-white">
              {/* Semantic H3 for each service */}
              <h3 className="text-lg text-white font-bold md:text-2xl">
                {image.title}
              </h3>
              <p className="mt-1 text-xs text-white/90 font-medium md:text-sm">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE GRID — ROW 2 */}
      <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-12 md:px-0">
        {IMAGES.slice(3).map((image, index) => (
          <div
            key={image.title}
            className={`approach-grid-item group relative h-72 overflow-hidden rounded-3xl ${
              index === 0 ? "md:col-span-8" : "md:col-span-4"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 65vw"
                  : "(max-width: 768px) 100vw, 35vw"
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 text-right text-white">
              {/* Semantic H3 for each service */}
              <h3 className="text-lg text-white font-bold md:text-2xl">
                {image.title}
              </h3>
              <p className="mt-1 text-xs text-white/90 font-medium md:text-sm">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
