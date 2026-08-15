"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Injecting the SEO keywords from your handwritten list into the alt tags
const IMAGES = [
  {
    src: "/car1.webp",
    alt: "شراء سيارات مصدومة وتالف جدة مكة الطائف",
  },
  {
    src: "/car2.webp",
    alt: "شراء سيارات معطلة وشراء سيارات السكراب جدة",
  },
  {
    src: "/car3.webp",
    alt: "شراء سيارات مصدومة تشليح وخربانه جدة مكة الطائف",
  },
  {
    src: "/car4.webp",
    alt: "شراء سيارات مصدومة وتالف في جدة ومكة والطائف والجموم",
  },
  {
    src: "/car5.webp",
    alt: "شراء سيارات تالف قديمة متعطلة مكة",
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

      // ---------------------------------------------
      // Split title
      // ---------------------------------------------
      const titleSplit = SplitText.create(title, {
        type: "words",
      });

      // ---------------------------------------------
      // Initial state
      // ---------------------------------------------
      gsap.set(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
      });

      gsap.set(items, {
        opacity: 0,
        y: 20,
      });

      // ---------------------------------------------
      // Scroll animation
      // ---------------------------------------------
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: '20% center',
          once: true,
          invalidateOnRefresh: false,
        },
      });

      timeline
        // -------------------------------------------
        // TITLE
        // -------------------------------------------
        .to(titleSplit.words, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.025,
        })
        // -------------------------------------------
        // IMAGES
        // -------------------------------------------
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
          "-=0.35"
        );

      // ---------------------------------------------
      // Cleanup
      // ---------------------------------------------
      return () => {
        titleSplit.revert();
      };
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="approach"
      dir="rtl"
      className="mx-auto max-w-[1300px] px-5  2xl:px-0"
    >
      {/* ============================================
          HEADER
      ============================================ */}

      <div className="mb-16 px-4 md:px-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* TITLE */}

          <div className="lg:col-span-8">
            {/* Added one of your main keywords here for visibility */}
            <p className="mb-8 inline-block rounded-full bg-[var(--color-cta)] px-4 py-2 text-sm font-medium text-white">
              شراء سيارات تشليح جدة ومكة بأفضل الأسعار
            </p>

            <h2 className="max-w-lg text-5xl font-bold leading-tight text-[var(--color-ink)] md:text-5xl">
              نهتم بكل تفصيلة، من أول معاينة وحتى استلامك للكاش
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div className="mt-4 flex flex-col justify-between gap-2 lg:col-span-4 lg:mt-0">
            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)]">
              كل سيارة مصدومة نشتريها بنعاملها باهتمام كامل — تقييم دقيق، سعر
              عادل، وتعامل شفاف من أول اتصال لحد استلام المبلغ نقداً. ده اللي
              بيخلي عملاءنا يرشحونا لغيرهم.
            </p>

            <div className="flex flex-col justify-between gap-2 md:gap-2">
              <p className="numeral text-4xl font-bold text-[var(--color-ink)] md:text-5xl">
                +500
              </p>

              <p className="text-sm font-medium text-[var(--color-ink-soft)]">
                سيارة تم شراؤها
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          IMAGE GRID — ROW 1
      ============================================ */}

      <div className="mb-5 grid grid-cols-1 gap-5 px-5 md:px-0 xl:grid-cols-12">
        {/* IMAGE 1 */}
        <div className="approach-grid-item group relative h-72 overflow-hidden rounded-3xl xl:col-span-3">
          <Image
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            fill
            priority
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-101"
            sizes="(max-width: 1280px) 100vw, 25vw"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="approach-grid-item group relative h-72 overflow-hidden rounded-3xl xl:col-span-6">
          <Image
            src={IMAGES[1].src}
            alt={IMAGES[1].alt}
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="approach-grid-item group relative h-72 overflow-hidden rounded-3xl xl:col-span-3">
          <Image
            src={IMAGES[2].src}
            alt={IMAGES[2].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 25vw"
          />
        </div>
      </div>

      {/* ============================================
          IMAGE GRID — ROW 2
      ============================================ */}

      <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-12 md:px-0">
        {/* IMAGE 4 */}
        <div className="approach-grid-item group relative h-72 overflow-hidden rounded-3xl md:col-span-8">
          <Image
            src={IMAGES[3].src}
            alt={IMAGES[3].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>

        {/* IMAGE 5 */}
        <div className="approach-grid-item group relative h-72 overflow-hidden rounded-3xl md:col-span-4">
          <Image
            src={IMAGES[4].src}
            alt={IMAGES[4].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </div>
      </div>
    </section>
  );
}