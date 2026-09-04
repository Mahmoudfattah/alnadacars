"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  MessageCircle,
  Play,
  Volume2,
  VolumeOff,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* -------------------------------------------------------------------------- */
/*  Content                                                                    */
/* -------------------------------------------------------------------------- */

const REASONS_PRIMARY = [
  "تقييم فوري ومجاني لسيارتك المصدومة",
  "أسعار تنافسية تفوق متوسط السوق",
  "معاينة في موقعك دون أي تكلفة إضافية",
  "لا حاجة لإصلاح السيارة قبل البيع",
] as const;

const REASONS_SECONDARY = [
  "دفع نقدي فوري خلال 30 دقيقة",
  "سطحة مجانية لنقل السيارة من موقعك",
  "نغطي جميع أحياء جدة ومكة المكرمة",
  "فريق محترف وموثوق في مجال شراء السيارات",
] as const;

/* -------------------------------------------------------------------------- */
/*  Animation constants                                                        */
/* -------------------------------------------------------------------------- */

/** Start / end must share the exact same shape so GSAP can interpolate them. */
const CLIP_START_DESKTOP = "inset(16% 20% round 24px)";
const CLIP_START_MOBILE = "inset(10% 10% round 20px)";
const CLIP_END = "inset(0% 0% round 24px)";

const INITIAL_MASK_STYLE = { clipPath: CLIP_START_DESKTOP } as const;

const MEDIA_QUERIES = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2.5 rounded-2xl border border-white/70 bg-white/70 px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5 backdrop-blur-[2px] md:gap-3.5 md:px-4 md:py-3"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-sm md:h-7 md:w-7">
            <Check size={14} strokeWidth={3} aria-hidden="true" />
          </span>
          <p className="text-[13px] font-semibold leading-snug text-slate-700 md:text-[15px]">
            {feature}
          </p>
        </li>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const soundBtnRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wheelLeftRef = useRef<HTMLDivElement>(null);
  const wheelRightRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const [soundOn, setSoundOn] = useState(false);

  /* ------------------------------------------------------------------------ */
  /*  Scroll animation                                                         */
  /* ------------------------------------------------------------------------ */

  useGSAP(
    () => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const leftList = leftListRef.current;
      const rightList = rightListRef.current;
      const mask = maskRef.current;
      const glow = glowRef.current;
      const hint = hintRef.current;
      const soundBtn = soundBtnRef.current;
      const wheelLeft = wheelLeftRef.current;
      const wheelRight = wheelRightRef.current;
      const reveal = revealRef.current;

      if (
        !section ||
        !title ||
        !leftList ||
        !rightList ||
        !mask ||
        !glow ||
        !hint ||
        !soundBtn ||
        !wheelLeft ||
        !wheelRight ||
        !reveal
      ) {
        return;
      }

      ScrollTrigger.config({ ignoreMobileResize: true });

      const fadeTargets = [title, leftList, rightList];
      const wheels = [wheelLeft, wheelRight];

      const playVideo = () => {
        videoRef.current?.play().catch(() => {});
      };
      const pauseVideo = () => videoRef.current?.pause();

      const mm = gsap.matchMedia();

      mm.add(MEDIA_QUERIES, (context) => {
        const isMobile = context.conditions?.isMobile ?? false;
        const reduceMotion = context.conditions?.reduceMotion ?? false;

        /* ---------------- Reduced motion: static final state ---------------- */
        if (reduceMotion) {
          gsap.set(mask, { clipPath: CLIP_END });
          gsap.set([glow, reveal], { autoAlpha: 1, y: 0 });
          gsap.set(soundBtn, { autoAlpha: 1 });
          gsap.set([hint, ...wheels], { autoAlpha: 0 });

          ScrollTrigger.create({
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: playVideo,
            onEnterBack: playVideo,
            onLeave: pauseVideo,
            onLeaveBack: pauseVideo,
          });
          return;
        }

        /* ------------------------- Initial states ------------------------- */

        gsap.set(fadeTargets, { opacity: 1, y: 0, force3D: true });

        gsap.set(mask, {
          clipPath: isMobile ? CLIP_START_MOBILE : CLIP_START_DESKTOP,
          scale: 1,
          force3D: true,
        });

        gsap.set(glow, { autoAlpha: 0, scale: 0.9, force3D: true });
        gsap.set(hint, { autoAlpha: 1, y: 0, force3D: true });
        gsap.set(soundBtn, { autoAlpha: 0, y: 8, force3D: true });

        gsap.set(wheels, {
          opacity: 0,
          x: 0,
          y: 0,
          rotation: 0,
          xPercent: isMobile ? -50 : 0,
          yPercent: isMobile ? 0 : -50,
          force3D: true,
        });

        gsap.set(reveal, { opacity: 0, y: 30, force3D: true });

        /* ---------------------------- Timeline ---------------------------- */

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: section,
            start: isMobile ? "top 10%" : "top top",
            end: isMobile ? "+=120%" : "+=150%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: playVideo,
            onEnterBack: playVideo,
            onLeave: pauseVideo,
            onLeaveBack: pauseVideo,
          },
        });

        // 1. Title + feature lists fade up and away
        tl.to(fadeTargets, {
          opacity: 0,
          y: -20,
          stagger: 0.1,
          duration: 0.8,
        });

        // 2. Mask opens, "watch" hint dissolves, frame glow appears
        tl.to(
          mask,
          { clipPath: CLIP_END, scale: 1.03, duration: 1.5 },
          "-=0.4",
        )
          .to(hint, { autoAlpha: 0, y: -10, duration: 0.5 }, "<")
          .to(glow, { autoAlpha: 1, scale: 1, duration: 1.2 }, "<0.3");

        // 3. Wheels roll away (runs in parallel with the mask)
        tl.to(
          wheelLeft,
          {
            opacity: 1,
            x: isMobile ? 0 : -200,
            y: isMobile ? -120 : 0,
            rotation: -180,
            duration: 1.5,
          },
          "<-0.3",
        );

        tl.to(
          wheelRight,
          {
            opacity: 1,
            x: isMobile ? 0 : 200,
            y: isMobile ? 120 : 0,
            rotation: 180,
            duration: 1.5,
          },
          "<",
        );

        // 4. Mute button + closing copy slide in
        tl.to(soundBtn, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.6")
          .to(
            reveal,
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "<",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  /* ------------------------------------------------------------------------ */
  /*  Sound toggle                                                             */
  /* ------------------------------------------------------------------------ */

  const toggleSound = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
      return;
    }

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      setSoundOn(true);
    } catch {
      video.muted = true;
      setSoundOn(false);
    }
  }, [soundOn]);

  /* ------------------------------------------------------------------------ */
  /*  Markup                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mb-4 min-h-dvh w-full overflow-x-clip bg-(--color-bg-soft)"
    >
      {/* Decorative background — pure gradients, no filters, no layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(96,165,250,0.18),transparent_70%),radial-gradient(45%_45%_at_10%_90%,rgba(34,211,238,0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />

      <div className="container relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center gap-5 px-4 pb-8 pt-24 md:gap-7 md:pt-28">
        {/* ---------------------------- TITLE ---------------------------- */}
        <div
          ref={titleRef}
          className="flex flex-col items-center gap-3 text-center will-change-[transform,opacity]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3.5 py-1 text-xs font-bold tracking-wide text-blue-600 shadow-sm md:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            لماذا تختارنا؟
          </span>

          <h2 className="text-balance text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            شراء سيارات مصدومة
            <br />
            <span className="bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              جدة ومكة والطائف
            </span>
          </h2>
        </div>

        {/* ---------------------------- GRID ----------------------------- */}
        <div className="grid w-full grid-cols-2 items-center gap-x-3 gap-y-3 md:grid-cols-[1fr_1.7fr_1fr] md:gap-8">
          {/* LIST A */}
          <ul
            ref={leftListRef}
            className="order-1 z-20 flex flex-col gap-2 will-change-[transform,opacity] md:order-1 md:gap-3"
          >
            <FeatureList items={REASONS_PRIMARY} />
          </ul>

          {/* LIST B */}
          <ul
            ref={rightListRef}
            className="order-2 z-20 flex flex-col gap-2 will-change-[transform,opacity] md:order-3 md:gap-3"
          >
            <FeatureList items={REASONS_SECONDARY} />
          </ul>

          {/* CENTER: VIDEO + WHEELS */}
          <div className="relative order-3 col-span-2 mx-auto aspect-video w-full md:order-2 md:col-span-1 md:aspect-auto md:h-[min(58vh,560px)]">
            {/* Ambient glow frame — revealed as the mask opens */}
            <div
              ref={glowRef}
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.35),rgba(34,211,238,0.25),rgba(59,130,246,0.35))] opacity-0 will-change-[transform,opacity] md:-inset-4"
            />

            {/* LEFT WHEEL */}
            <div
              ref={wheelLeftRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-24 w-24 will-change-[transform,opacity] md:left-0 md:top-1/2 md:h-44 md:w-44"
            >
              <Image
                src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
                alt=""
                width={176}
                height={176}
                sizes="(max-width: 767px) 96px, 176px"
                className="h-full w-full object-contain drop-shadow-xl"
                draggable={false}
              />
            </div>

            {/* RIGHT WHEEL */}
            {/* <div
              ref={wheelRightRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-24 w-24 will-change-[transform,opacity] md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-44 md:w-44"
            >
              <Image
                src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
                alt=""
                width={176}
                height={176}
                sizes="(max-width: 767px) 96px, 176px"
                className="h-full w-full object-contain drop-shadow-xl"
                draggable={false}
              />
            </div> */}

            {/* VIDEO MASK LAYER */}
            <div
              ref={maskRef}
              className="absolute inset-0 z-10 overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-slate-900/20 will-change-[clip-path,transform]"
              style={INITIAL_MASK_STYLE}
            >
              <video
                ref={videoRef}
                src="/video-optimized.mp4"
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="none"
                disablePictureInPicture
                disableRemotePlayback
                aria-label="فيديو السيارة المصدومة"
              />

              {/* Subtle vignette for legibility of overlays */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-slate-900/15"
              />

              {/* "Scroll to watch" hint — always centred so it is never clipped */}
              <div
                ref={hintRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 will-change-[transform,opacity]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md md:h-14 md:w-14">
                  <Play size={20} className="translate-x-[1px] fill-white" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md md:text-xs">
                  اسحب للأسفل لمشاهدة الفيديو
                  <ChevronDown size={14} className="animate-bounce" />
                </span>
              </div>
            </div>

            {/* MUTE BUTTON — outside the clipped layer, revealed after expansion */}
            <button
              ref={soundBtnRef}
              type="button"
              onClick={toggleSound}
              className="invisible absolute bottom-4 left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-transform will-change-[transform,opacity] hover:scale-110 active:scale-95"
              aria-label={soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"}
              aria-pressed={soundOn}
            >
              {soundOn ? (
                <Volume2 size={18} aria-hidden="true" />
              ) : (
                <VolumeOff size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ---------------------- FINAL REVEAL TEXT ---------------------- */}
        <div
          ref={revealRef}
          className="relative z-30 flex max-w-2xl flex-col items-center px-4 text-center opacity-0 will-change-[transform,opacity]"
        >
          <h3 className="text-balance text-xl font-extrabold text-slate-900 md:text-3xl">
            من أول اتصال إلى استلام الكاش
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 md:mt-3 md:text-lg">
            شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0 md:mt-5 md:text-base"
          >
            <MessageCircle size={18} aria-hidden="true" />
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}