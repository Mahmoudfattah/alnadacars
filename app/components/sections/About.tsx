"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

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
/*  Animation constants (kept out of render – no re-allocations)               */
/* -------------------------------------------------------------------------- */

/**
 * clip-path is interpolated by GSAP as long as the string "shape" matches.
 * Both values MUST share the same function, value count and units.
 */
const CLIP_START_DESKTOP = "inset(18% 22% round 16px)";
const CLIP_START_MOBILE = "inset(14% 12% round 16px)";
const CLIP_END = "inset(0% 0% round 16px)";

/** Server-rendered fallback so nothing "pops" before hydration. */
const INITIAL_MASK_STYLE = { clipPath: CLIP_START_DESKTOP } as const;

const MEDIA_QUERIES = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
} as const;

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

type FeatureListProps = {
  items: readonly string[];
  align?: "start" | "end";
};

function FeatureList({ items, align = "start" }: FeatureListProps) {
  return (
    <>
      {items.map((feature) => (
        <li key={feature} className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
            <Image
              src="/check.webp"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
          </span>
          <p
            className={`text-base font-medium text-gray-700 ${
              align === "end" ? "md:text-right" : ""
            }`}
          >
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
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
      const wheelLeft = wheelLeftRef.current;
      const wheelRight = wheelRightRef.current;
      const reveal = revealRef.current;

      if (
        !section ||
        !title ||
        !leftList ||
        !rightList ||
        !mask ||
        !wheelLeft ||
        !wheelRight ||
        !reveal
      ) {
        return;
      }

      // Prevent expensive refreshes when the mobile URL bar shows/hides.
      ScrollTrigger.config({ ignoreMobileResize: true });

      const fadeTargets = [title, leftList, rightList];
      const wheels = [wheelLeft, wheelRight];

      const playVideo = () => {
        videoRef.current?.play().catch(() => {
          /* Autoplay may be blocked – user gesture (mute button) will resume. */
        });
      };
      const pauseVideo = () => videoRef.current?.pause();

      const mm = gsap.matchMedia();

      mm.add(MEDIA_QUERIES, (context) => {
        const isMobile = context.conditions?.isMobile ?? false;

        /* ------------------------- Initial states ------------------------- */
        // All of these are compositor-friendly: transform / opacity / clip-path.

        gsap.set(fadeTargets, { opacity: 1, y: 0, force3D: true });

        gsap.set(mask, {
          clipPath: isMobile ? CLIP_START_MOBILE : CLIP_START_DESKTOP,
          scale: 1,
          force3D: true,
        });

        // Wheels are centred with GSAP percentages (NOT Tailwind translate classes)
        // so GSAP owns the transform matrix exclusively – no double transforms.
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

        // 1. Title + side lists fade up & out
        tl.to(fadeTargets, {
          opacity: 0,
          y: -20,
          stagger: 0.1,
          duration: 0.8,
        });

        // 2. Mask expands to fill the container
        tl.to(
          mask,
          {
            clipPath: CLIP_END,
            scale: 1.04,
            duration: 1.5,
          },
          "-=0.4",
        );

        // 3. Wheels roll out simultaneously with the mask
        tl.to(
          wheelLeft,
          {
            opacity: 1,
            x: isMobile ? 0 : -200,
            y: isMobile ? -120 : 0,
            rotation: -180,
            duration: 1.5,
          },
          "<",
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

        // 4. Bottom copy slides in
        tl.to(
          reveal,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        );

        // Everything created here is auto-reverted by this matchMedia context.
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
      className="relative mb-4 w-full min-h-screen overflow-x-clip bg-(--color-bg-soft)"
    >
      <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-8 px-4">
        {/* ---------------------------- TITLE ---------------------------- */}
        <h2
          ref={titleRef}
          className="text-center text-4xl font-extrabold leading-[1.2] text-gray-900 will-change-[transform,opacity] md:text-7xl"
        >
          شراء سيارات مصدومة
          <br />
          <span className="text-blue-400 drop-shadow-sm">جدة ومكة والطائف</span>
        </h2>

        {/* ---------------------------- GRID ----------------------------- */}
        <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.7fr_1fr] md:gap-8">
          {/* LEFT LIST */}
          <ul
            ref={leftListRef}
            className="z-20 w-full space-y-5 will-change-[transform,opacity]"
          >
            <FeatureList items={REASONS_PRIMARY} />
          </ul>

          {/* CENTER: VIDEO + WHEELS */}
          <div className="relative mx-auto aspect-video w-full overflow-visible md:aspect-auto md:h-[65vh]">
            {/* LEFT WHEEL — fixed box size = zero CLS when the image decodes */}
            <div
              ref={wheelLeftRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-28 w-28 will-change-[transform,opacity] md:left-0 md:top-1/2 md:h-44 md:w-44"
            >
              <Image
                src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
                alt=""
                width={176}
                height={176}
                sizes="(max-width: 767px) 112px, 176px"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>

            {/* RIGHT WHEEL */}
            <div
              ref={wheelRightRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-28 w-28 will-change-[transform,opacity] md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-44 md:w-44"
            >
              <Image
                src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
                alt=""
                width={176}
                height={176}
                sizes="(max-width: 767px) 112px, 176px"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>

            {/* VIDEO MASK LAYER — clip-path is animated directly by GSAP */}
            <div
              ref={maskRef}
              className="absolute inset-0 z-10 overflow-hidden rounded-2xl bg-black will-change-[clip-path,transform]"
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
            </div>

            {/* MUTE BUTTON — lives outside the clipped layer so it is never cut off */}
            <button
              type="button"
              onClick={toggleSound}
              className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
              aria-label={soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"}
              aria-pressed={soundOn}
            >
              {soundOn ? (
                <Volume2 size={16} aria-hidden="true" />
              ) : (
                <VolumeOff size={16} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* RIGHT LIST */}
          <ul
            ref={rightListRef}
            className="z-20 w-full space-y-5 will-change-[transform,opacity] md:justify-self-end"
          >
            <FeatureList items={REASONS_SECONDARY} align="end" />
          </ul>
        </div>

        {/* ---------------------- FINAL REVEAL TEXT ---------------------- */}
        <div
          ref={revealRef}
          className="relative z-30 flex max-w-2xl flex-col items-center justify-center px-6 text-center opacity-0 will-change-[transform,opacity] md:-mt-2"
        >
          <h3 className="mb-1 text-2xl font-extrabold text-gray-900 sm:mb-4 md:text-3xl">
            من أول اتصال إلى استلام الكاش
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-gray-500 md:text-xl">
            شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
          </p>
        </div>
      </div>
    </section>
  );
}