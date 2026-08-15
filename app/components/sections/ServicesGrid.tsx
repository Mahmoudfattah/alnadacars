"use client";
import Link from "next/link";
import { Cog, ZapOff, MapPin } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SERVICES = [
  {
    icon: Cog,
    title: "شراء سيارات تشليح ومصدومة",
    desc: "نشتري السيارات المصدومة والتالفة تشليح بغض النظر عن حجم الضرر، مع تقييم عادل لحالة الهيكل وقطع الغيار.",
    featured: false,
  },
  {
    icon: ZapOff,
    title: "شراء سيارات متعطلة واسكراب",
    desc: "سيارتك قديمة أو متعطلة ولا تعمل؟ نشتريها اسكراب فوراً بدون الحاجة لإصلاحها أو حتى تشغيلها.",
    featured: true,
  },
  {
    icon: MapPin,
    title: "تغطية جدة ومكة والطائف",
    desc: "نصل إليك أينما كنت في جدة، مكة المكرمة، والطائف، مع سطحة مجانية لنقل سيارتك القديمة أو المتعطلة.",
    featured: false,
  },
];

export default function ServicesGrid() {
  const container = useRef(null);

  useGSAP(
    () => {
      const section = container.current;

      if (!section) return;

      // Main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          // يبدأ عندما يصل منتصف الـ section
          // إلى منتصف الـ viewport
          start: "30% center",

          // يعمل مرة واحدة فقط
          toggleActions: "play none none none",

          // markers: true, // فعّلها أثناء التطوير فقط
        },
      });

      // Initial states
      gsap.set(".services-badge", {
        opacity: 0,
        y: 25,
        scale: 0.95,
      });

      gsap.set(".services-title", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".services-description", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".service-card", {
        opacity: 0,
        y: 70,
        scale: 0.94,
      });

      gsap.set(".service-icon", {
        scale: 0.7,
        opacity: 0,
        rotate: -15,
      });

      // Badge
      tl.to(".services-badge", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      })

        // Title
        .to(
          ".services-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        )

        // Description
        .to(
          ".services-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )

        // Cards stagger
        .to(
          ".service-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.25",
        )

        // Icons pop in after cards
        .to(
          ".service-icon",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.55",
        );

      // Small hover-like floating effect for icons
      gsap.to(".service-icon", {
        y: -5,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "center",
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      id="services"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-6 text-center md:px-10 lg:px-16">
        <span className="header-item  services-badge one  inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-blue-600 shadow-sm border border-blue-100">
          خدماتنا في جدة ومكة والطائف
        </span>

        <h2 className="text-balance max-w-2xl services-title two text-[32px] font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px]">
          نشتري كل أنواع السيارات: مصدومة، تالفة، متعطلة، أو تشليح
        </h2>
        <p className="max-w-[560px] three text-[15.5px] services-description leading-[1.8] text-[var(--color-ink-soft)]">
          سواء كانت سيارتك قديمة، سيارة اسكراب، أو متعطلة بالكامل، نقدّم لك أفضل
          سعر فوري نقداً في جدة، مكة المكرمة، والطائف.
        </p>

        {/* Cards Container */}
        {/* تم زيادة المساحة العلوية (mt-20) لتوفير مساحة للأيقونات البارزة */}
        {/* تم زيادة الفراغ (gap-12) في الجوال حتى لا تغطي الأيقونات على الكارت الذي فوقها */}
        <div className="mt-20 grid w-full grid-cols-1 items-center gap-12 md:grid-cols-3 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`relative s
            service-card  flex flex-col items-center gap-5 rounded-[2rem] border px-6 pb-8 pt-14 text-center transition-all duration-500 ease-in-out ${
              service.featured
                ? "border-[var(--color-border)] bg-[var(--color-bg-raised)] shadow-[var(--shadow-lg)] md:scale-105 z-10"
                : "border-transparent bg-transparent shadow-none hover:border-[var(--color-border)] hover:bg-[var(--color-bg-raised)] hover:shadow-[var(--shadow-lg)] hover:scale-105 hover:z-10"
            }`}
            >
              {/* Icon - تم فصلها وجعلها Absolute في منتصف الأعلى */}
              <div className="absolute -top-10  flex h-20 w-20 -translate-x-1/2 items-center justify-center  service-icon rounded-full bg-[var(--color-cta)] transition-transform duration-300 hover:scale-110">
                <service.icon size={32} color="#ffffff" strokeWidth={1.75} />
              </div>

              <h3 className="text-lg font-bold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {service.desc}
              </p>

              <Link
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 rounded-[var(--radius-pill)] tracking-[0.15em] text-blue-600 shadow-sm border border-blue-100  px-6 py-3 text-sm font-semibold  transition-all hover:-translate-y-0.5 hover:bg-blue-100/10"
              >
                اطلب تقييم مجاني
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
