"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Banknote, CarFront, Clock3 } from "lucide-react";

const STATS = [
  {
    value: "+5,000",
    label: "سيارة تم شراؤها",
    icon: CarFront,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconRing: "ring-emerald-100",
  },
  {
    value: "30",
    unit: "دقيقة",
    label: "متوسط وقت المعاينة",
    icon: Clock3,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    iconRing: "ring-blue-100",
  },
  {
    value: "100%",
    label: "دفع نقدي فوري",
    icon: Banknote,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    iconRing: "ring-violet-100",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // ============================================================
      // 1. NON-LCP CONTENT REVEAL
      // ============================================================
      //
      // IMPORTANT:
      // The H1 is intentionally NOT animated here.
      // It must be visible immediately so PageSpeed can paint
      // the LCP element as early as possible.
      //

      tl.fromTo(
        ".hero-badge",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      )
        .fromTo(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .fromTo(
          ".reveal-item:not(.hero-badge):not(.hero-description)",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-map",
          {
            opacity: 0,
            scale: 0.97,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
          },
          "-=0.5"
        );

      // ============================================================
      // 2. CLEAN CAR ENTERS
      // ============================================================

      tl.fromTo(
        ".hero-car-clean",
        {
          opacity: 0,
          x: -400,
          rotation: -2,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.5"
      )

        // ============================================================
        // 3. CLEAN CAR FADES OUT
        // ============================================================

        .to(
          ".hero-car-clean",
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.6"
        )

        // ============================================================
        // 4. DAMAGED CAR FADES IN
        // ============================================================

        .fromTo(
          ".hero-car-damaged",
          {
            opacity: 0,
            scale: 0.96,
            x: 15,
            rotation: 1,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        );

      // ============================================================
      // 5. CONTINUOUS CAR FLOAT
      // ============================================================

      gsap.to(".hero-car-damaged", {
        y: -12,
        rotation: -1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });

      // ============================================================
      // 6. MAP FLOAT
      // ============================================================

      gsap.to(".hero-map", {
        scale: 1.03,
        rotation: 1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-[var(--color-bg-raised)]"
    >
      <div
        className="
          mx-auto grid max-w-[1400px]
          items-center
          gap-12
          px-6 py-10
          md:grid-cols-2
          md:gap-10
          md:px-10
          md:py-10
        "
      >
        {/* ============================================================
            TEXT COLUMN
        ============================================================ */}

        <div className="flex flex-col items-start gap-6">
          {/* BADGE */}

          <span className="reveal-item hero-badge inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            كاش فوري خلال 30 دقيقة
          </span>

          {/* ============================================================
              LCP ELEMENT
              
              IMPORTANT:
              No opacity-0.
              No GSAP initial state.
              No hidden/invisible.
          ============================================================ */}

          <h1
            className="
              hero-title-line
              text-balance
              text-4xl
              font-bold
              leading-[1.3]
              text-[var(--color-ink)]
              sm:text-4xl
              md:text-[40px]
            "
          >
            شراء سيارات مصدومة وتالف في جدة ومكة نقداً وبأفضل سعر
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              reveal-item
              hero-description
              max-w-lg
              text-base
              font-medium
              leading-relaxed
              text-slate-600
              md:text-lg
            "
          >
            نشتري سيارتك المصدومة أو التالفة أياً كانت حالتها، بمعاينة فورية
            وسعر عادل، مع{" "}
            <strong className="font-bold text-slate-900">
              سطحة مجانية
            </strong>{" "}
            لنقل السيارة من موقعك.
          </p>

          {/* CTA BUTTONS */}

          <div className="reveal-item flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#contact"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-slate-900
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                hover:-translate-y-1
                hover:bg-slate-800
                hover:shadow-xl
                hover:shadow-slate-900/20
              "
            >
              <span className="relative z-10">
                احصل على السعر الآن
              </span>

              <ArrowLeft
                size={18}
                strokeWidth={2.5}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </Link>

            <Link
              href="#how-it-works"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white/50
                px-8
                py-4
                text-sm
                font-semibold
                text-slate-700
                backdrop-blur-sm
                transition-all
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-md
              "
            >
              كيف تعمل الخدمة
            </Link>
          </div>

          {/* ============================================================
              TRUST STATS
          ============================================================ */}

          <div
            className="
              reveal-item
              mt-8
              grid
              w-full
              grid-cols-3
              gap-4
              rounded-3xl
              border
              border-white/40
              bg-white/40
              p-4
              shadow-[0_8px_30px_rgb(0,0,0,0.04)]
              backdrop-blur-xl
            "
          >
            {STATS.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    text-center
                    sm:flex-row
                    sm:justify-start
                    sm:text-right
                  "
                >
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      ${stat.iconBg}
                      ${stat.iconColor}
                      ${stat.iconRing}
                      ring-1
                      shadow-sm
                    `}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span
                      className="
                        text-lg
                        font-extrabold
                        tracking-tight
                        text-slate-900
                        sm:text-base
                        md:text-xl
                      "
                    >
                      {stat.value}

                      {stat.unit && (
                        <span
                          className="
                            mr-1
                            text-[11px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          {stat.unit}
                        </span>
                      )}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-slate-500
                        sm:text-xs
                      "
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            IMAGE COLUMN
        ============================================================ */}

        <div
          className="
            relative
            mx-auto
            aspect-[4/3]
            w-full
            max-w-lg
            md:max-w-none
          "
        >
          {/* MAP */}

          <div
            className="
              hero-map
              absolute
              inset-x-0
              top-[-5%]
              z-0
              h-[55%]
              md:h-[58%]
            "
          >
            <Image
              src="/map.webp"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>

          {/* CLEAN CAR */}

          <Image
            src="/car.png"
            alt="سيارة سليمة"
            fill
            priority
            className="
              hero-car-clean
              relative
              z-10
              object-contain
              drop-shadow-2xl
            "
            sizes="(max-width: 768px) 90vw, 45vw"
          />

          {/* DAMAGED CAR */}

          <Image
            src="/cardamage.webp"
            alt="سيارة مصدومة جاهزة للبيع فوراً"
            fill
            className="
              hero-car-damaged
              absolute
              inset-0
              z-10
              object-contain
              drop-shadow-2xl
              opacity-0
            "
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}