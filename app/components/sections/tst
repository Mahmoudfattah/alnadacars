"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const REASONS_PRIMARY = [
  "تقييم فوري ومجاني لسيارتك المصدومة",
  "أسعار تنافسية تفوق متوسط السوق",
  "معاينة في موقعك دون أي تكلفة إضافية",
  "لا حاجة لإصلاح السيارة قبل البيع",
];

const REASONS_SECONDARY = [
  "دفع نقدي فوري خلال 30 دقيقة",
  "سطحة مجانية لنقل السيارة من موقعك",
  "نغطي جميع أحياء جدة ومكة المكرمة",
  "فريق محترف وموثوق في مجال شراء السيارات",
];

function CheckIcon() {
  return (
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-cash)] text-white">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6.5L4.5 9L10 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskedImgRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const fadeRefs = useRef<Array<HTMLElement | null>>([]);

  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const start = isMobile ? "top 20%" : "top top";

      const targets = fadeRefs.current.filter(Boolean);
      if (!targets.length || !maskedImgRef.current || !revealRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start,
          end: "bottom center",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(targets, {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
        .to(maskedImgRef.current, {
          clipPath: "circle(150% at 50% 50%)",
          scale: 1.15,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(revealRef.current, {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col items-center overflow-hidden bg-[var(--color-bg-raised)] p-5 pt-20"
    >
      <div className="container relative mx-auto flex h-full flex-col items-center">
        {/* Ghost heading — ties this section thematically to "why choose us" */}
        <h2
          ref={(el) => {
            fadeRefs.current[0] = el;
          }}
          className="relative select-none text-center text-8xl font-bold leading-none text-[var(--color-border)] md:mb-8 md:text-[16vw]"
        >
          الثقة
        </h2>

        {/* Checklist + centered reveal image */}
        <div className="relative mt-40 flex w-full flex-col justify-between gap-10 md:mt-0 md:mb-16 md:flex-row">
          <ul
            ref={(el) => {
              fadeRefs.current[1] = el;
            }}
            className="space-y-4"
          >
            {REASONS_PRIMARY.map((reason) => (
              <li key={reason} className="flex items-center gap-2">
                <CheckIcon />
                <p className="text-[15px] text-[var(--color-ink)]">{reason}</p>
              </li>
            ))}
          </ul>

          <div
            ref={maskedImgRef}
            className="absolute left-1/2 top-0 h-[50vh] w-full -translate-x-1/2 overflow-hidden rounded-[2rem] md:top-1/2 md:h-[70vh] md:w-[60vw] md:-translate-y-1/2"
            style={{ clipPath: "circle(0% at 50% 50%)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/carVideo.png"
              alt="فريق متخصص في شراء السيارات المصدومة وتقييمها في جدة ومكة المكرمة"
              className="h-full w-full object-cover"
            />
          </div>

          <ul
            ref={(el) => {
              fadeRefs.current[2] = el;
            }}
            className="space-y-4"
          >
            {REASONS_SECONDARY.map((reason) => (
              <li key={reason} className="flex items-center justify-start gap-2">
                <CheckIcon />
                <p className="w-60 text-[15px] text-[var(--color-ink)] md:w-fit">
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom reveal panel */}
        <div className="relative mt-32 md:mt-0">
          <h2
            ref={(el) => {
              fadeRefs.current[3] = el;
            }}
            className="mt-32 mb-10 text-center text-4xl font-bold text-[var(--color-ink)] md:text-5xl"
          >
            تجربة بيع بلا تعقيد
          </h2>
          <div
            ref={revealRef}
            className="absolute bottom-52 left-1/2 w-full -translate-x-1/2 space-y-5 px-5 opacity-0 md:bottom-5 md:px-0"
          >
            <h3 className="w-80 text-center text-2xl font-bold text-[var(--color-ink)] md:w-full md:text-5xl">
              من أول اتصال إلى استلام الكاش
            </h3>
            <p className="text-center text-lg text-[var(--color-ink-soft)]">
              شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
            </p>
            <video
              controls
              preload="none"
              poster="/carVideo.png"
              className="mx-auto w-full max-w-2xl rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]"
            >
              <source src="/video.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}