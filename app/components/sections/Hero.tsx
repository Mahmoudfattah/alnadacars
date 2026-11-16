"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Banknote, CarFront, Clock3, Phone } from "lucide-react";
import HeroQuickForm from "./HeroQuickForm";

const STATS = [
  {
    value: "+5,000",
    label: "سيارة تم شراؤها",
    icon: CarFront,
    iconBg: "bg-emerald-50",
    iconColor: "text-violet-600",
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
    iconColor: "text-emerald-600",
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

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".reveal-item:not(.hero-badge):not(.hero-description)",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 },
          "-=0.4",
        );
    },
    { scope: heroRef },
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
          gap-10
          px-6 pt-24 pb-14
          md:grid-cols-2
          md:gap-12
          md:px-10
          md:pt-28 md:pb-20
        "
      >
        {/* RIGHT COLUMN: HEADLINE + DIRECT CALL + STATS */}
        <div className="flex flex-col items-start gap-5">
          <span className="reveal-item hero-badge inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-5 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            كاش فوري خلال 30 دقيقة
          </span>

          <h1 className="hero-title-line text-balance text-3xl font-bold leading-[1.3] text-[var(--color-ink)] sm:text-4xl md:text-[40px]">
            شراء سيارات مصدومة وتالفة وتشليح في جدة ومكة والطائف كاش فوري
          </h1>

          <p className="reveal-item hero-description max-w-lg text-base font-medium leading-relaxed text-slate-700 md:text-lg">
            نشتري سيارتك المصدومة أو التالفة أو المتعطلة بإجراءات نظامية 100%
            عبر أبشر، بمعاينة فورية وسعر عادل في نفس اليوم، مع{" "}
            <strong className="font-bold text-slate-900">سطحة مجانية</strong>{" "}
            لنقل السيارة من موقعك بجدة ومكة والطائف.
          </p>

          {/* SINGLE DIRECT CALL CTA (Desktop & Mobile) */}
          <div className="reveal-item flex flex-wrap items-center gap-3 pt-1">
            <a
              href="tel:+966562117196"
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Phone size={18} className="text-sky-400" />
              <span>اتصال مباشر:</span>
              <span dir="ltr" className="text-sky-300">
                0562117196
              </span>
            </a>
          </div>

          {/* TRUST STATS */}
          <div className="reveal-item mt-2 grid w-full grid-cols-3 gap-3 rounded-3xl border border-white/40 bg-white/50 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-start sm:text-right"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg} ${stat.iconColor} ${stat.iconRing} ring-1 shadow-sm`}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold tracking-tight text-slate-900 md:text-lg">
                      {stat.value}
                      {stat.unit && (
                        <span className="mr-1 text-[11px] font-semibold text-slate-600">
                          {stat.unit}
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEFT COLUMN: COMPACT CAR IMAGE + QUICK FORM */}
        <div className="reveal-item flex flex-col items-center gap-4 w-full">
          {/* <div className="relative w-full h-40 sm:h-48">
            <Image
              src="/cardamage.webp"
              alt="سيارة مصدومة وتالفة للبيع تشليح نقداً مع سطحة مجانية في جدة ومكة والطائف"
              fill
              priority
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div> */}

          <div className="w-full">
            <HeroQuickForm />
          </div>
        </div>
      </div>
    </section>
  );
}
