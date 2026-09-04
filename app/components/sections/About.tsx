"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

type FeatureListProps = {
  items: string[];
  align?: "start" | "end";
};

function FeatureList({ items, align = "start" }: FeatureListProps) {
  return (
    <ul className="flex w-full flex-col gap-3 md:gap-4">
      {items.map((feature, index) => (
        <li
          key={index}
          className="group flex items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-blue-500/20"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-inner ring-1 ring-blue-200/50 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/check.webp"
              alt="علامة صح"
              width={18}
              height={18}
              className="object-contain opacity-90"
            />
          </div>
          <p
            className={`w-full text-sm font-semibold leading-relaxed text-gray-700 md:text-base ${
              align === "end" ? "md:text-left" : "md:text-right"
            } text-right`}
            dir="rtl"
          >
            {feature}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                            */
/* -------------------------------------------------------------------------- */

const About = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [soundOn, setSoundOn] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Lazy load the video when the section comes into view
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Play video automatically once loaded
  useEffect(() => {
    if (!videoLoaded) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [videoLoaded]);

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      setSoundOn(true);
    } catch {
      video.muted = true;
      setSoundOn(false);
    }
  };

  const disableSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    setSoundOn(false);
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-(--color-bg-soft) py-16 md:py-24"
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 relative z-10">
        
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-[1.2]">
            شراء سيارات مصدومة
            <br className="hidden md:block" />
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent pb-2 drop-shadow-sm">
              جدة ومكة والطائف
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        {/* order-first md:order-none on the video ensures it sits at the top on mobile, but center on desktop */}
        <div className="flex w-full flex-col gap-8 md:grid md:grid-cols-[1fr_2.5fr_1fr] md:items-center md:gap-6 lg:gap-10">
          
          {/* CENTER VIDEO WITH DECORATIVE WHEELS */}
          <div className="relative mx-auto w-full max-w-2xl order-first md:order-none aspect-square md:aspect-[4/3] lg:h-[65vh] flex items-center justify-center">
            
            {/* DECORATIVE BACKGROUND WHEELS (Hidden on very small screens, visible behind video otherwise) */}
            <Image
              src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
              alt=""
              aria-hidden="true"
              width={160}
              height={160}
              className="absolute -left-4 top-10 -rotate-12 opacity-80 md:-left-16 md:top-1/4 object-contain pointer-events-none drop-shadow-xl z-0 hidden sm:block"
            />
            <Image
              src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
              alt=""
              aria-hidden="true"
              width={160}
              height={160}
              className="absolute -right-4 bottom-10 rotate-12 opacity-80 md:-right-16 md:bottom-1/4 object-contain pointer-events-none drop-shadow-xl z-0 hidden sm:block"
            />

            {/* VIDEO CONTAINER */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-black shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-white/20">
              {videoLoaded && (
                <video
                  ref={videoRef}
                  src="/video-optimized.mp4"
                  className="h-full w-full object-cover transition-opacity duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label="فيديو السيارة المصدومة"
                />
              )}

              {/* MUTE TOGGLE */}
              <button
                type="button"
                onClick={soundOn ? disableSound : enableSound}
                className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-black/70 active:scale-95"
                aria-label={soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"}
                aria-pressed={soundOn}
              >
                {soundOn ? (
                  <Volume2 size={20} aria-hidden="true" />
                ) : (
                  <VolumeOff size={20} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* LEFT LIST */}
          <div className="z-20 w-full md:order-first">
            <FeatureList items={REASONS_PRIMARY} />
          </div>

          {/* RIGHT LIST */}
          <div className="z-20 w-full md:order-last">
            <FeatureList items={REASONS_SECONDARY} align="end" />
          </div>
        </div>

        {/* FINAL REVEAL CONTENT */}
        <div className="mt-4 flex w-full max-w-2xl flex-col items-center justify-center text-center">
          <h3 className="mb-3 text-2xl font-black text-gray-900 md:text-3xl">
            من أول اتصال إلى استلام الكاش
          </h3>
          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;







// "use client";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import { useCallback, useRef, useState } from "react";
// import { Volume2, VolumeOff } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// /* -------------------------------------------------------------------------- */
// /*  Content                                                                    */
// /* -------------------------------------------------------------------------- */

// const REASONS_PRIMARY = [
//   "تقييم فوري ومجاني لسيارتك المصدومة",
//   "أسعار تنافسية تفوق متوسط السوق",
//   "معاينة في موقعك دون أي تكلفة إضافية",
//   "لا حاجة لإصلاح السيارة قبل البيع",
// ] as const;

// const REASONS_SECONDARY = [
//   "دفع نقدي فوري خلال 30 دقيقة",
//   "سطحة مجانية لنقل السيارة من موقعك",
//   "نغطي جميع أحياء جدة ومكة المكرمة",
//   "فريق محترف وموثوق في مجال شراء السيارات",
// ] as const;

// /* -------------------------------------------------------------------------- */
// /*  Animation constants (kept out of render – no re-allocations)               */
// /* -------------------------------------------------------------------------- */

// /**
//  * clip-path is interpolated by GSAP as long as the string "shape" matches.
//  * Both values MUST share the same function, value count and units.
//  */
// const CLIP_START_DESKTOP = "inset(18% 22% round 16px)";
// const CLIP_START_MOBILE = "inset(14% 12% round 16px)";
// const CLIP_END = "inset(0% 0% round 16px)";

// /** Server-rendered fallback so nothing "pops" before hydration. */
// const INITIAL_MASK_STYLE = { clipPath: CLIP_START_DESKTOP } as const;

// const MEDIA_QUERIES = {
//   isMobile: "(max-width: 767px)",
//   isDesktop: "(min-width: 768px)",
// } as const;

// /* -------------------------------------------------------------------------- */
// /*  Sub-components                                                             */
// /* -------------------------------------------------------------------------- */

// type FeatureListProps = {
//   items: readonly string[];
//   align?: "start" | "end";
// };

// function FeatureList({ items, align = "start" }: FeatureListProps) {
//   return (
//     <>
//       {items.map((feature) => (
//         <li key={feature} className="flex items-center gap-4">
//           <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
//             <Image
//               src="/check.webp"
//               alt=""
//               aria-hidden="true"
//               width={16}
//               height={16}
//               className="h-4 w-4 object-contain"
//             />
//           </span>
//           <p
//             className={`text-base font-medium text-gray-700 ${
//               align === "end" ? "md:text-right" : ""
//             }`}
//           >
//             {feature}
//           </p>
//         </li>
//       ))}
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Component                                                                  */
// /* -------------------------------------------------------------------------- */

// export default function About() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const leftListRef = useRef<HTMLUListElement>(null);
//   const rightListRef = useRef<HTMLUListElement>(null);
//   const maskRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const wheelLeftRef = useRef<HTMLDivElement>(null);
//   const wheelRightRef = useRef<HTMLDivElement>(null);
//   const revealRef = useRef<HTMLDivElement>(null);

//   const [soundOn, setSoundOn] = useState(false);

//   /* ------------------------------------------------------------------------ */
//   /*  Scroll animation                                                         */
//   /* ------------------------------------------------------------------------ */

//   useGSAP(
//     () => {
//       const section = sectionRef.current;
//       const title = titleRef.current;
//       const leftList = leftListRef.current;
//       const rightList = rightListRef.current;
//       const mask = maskRef.current;
//       const wheelLeft = wheelLeftRef.current;
//       const wheelRight = wheelRightRef.current;
//       const reveal = revealRef.current;

//       if (
//         !section ||
//         !title ||
//         !leftList ||
//         !rightList ||
//         !mask ||
//         !wheelLeft ||
//         !wheelRight ||
//         !reveal
//       ) {
//         return;
//       }

//       // Prevent expensive refreshes when the mobile URL bar shows/hides.
//       ScrollTrigger.config({ ignoreMobileResize: true });

//       const fadeTargets = [title, leftList, rightList];
//       const wheels = [wheelLeft, wheelRight];

//       const playVideo = () => {
//         videoRef.current?.play().catch(() => {
//           /* Autoplay may be blocked – user gesture (mute button) will resume. */
//         });
//       };
//       const pauseVideo = () => videoRef.current?.pause();

//       const mm = gsap.matchMedia();

//       mm.add(MEDIA_QUERIES, (context) => {
//         const isMobile = context.conditions?.isMobile ?? false;

//         /* ------------------------- Initial states ------------------------- */
//         // All of these are compositor-friendly: transform / opacity / clip-path.

//         gsap.set(fadeTargets, { opacity: 1, y: 0, force3D: true });

//         gsap.set(mask, {
//           clipPath: isMobile ? CLIP_START_MOBILE : CLIP_START_DESKTOP,
//           scale: 1,
//           force3D: true,
//         });

//         // Wheels are centred with GSAP percentages (NOT Tailwind translate classes)
//         // so GSAP owns the transform matrix exclusively – no double transforms.
//         gsap.set(wheels, {
//           opacity: 0,
//           x: 0,
//           y: 0,
//           rotation: 0,
//           xPercent: isMobile ? -50 : 0,
//           yPercent: isMobile ? 0 : -50,
//           force3D: true,
//         });

//         gsap.set(reveal, { opacity: 0, y: 30, force3D: true });

//         /* ---------------------------- Timeline ---------------------------- */

//         const tl = gsap.timeline({
//           defaults: { ease: "power2.inOut" },
//           scrollTrigger: {
//             trigger: section,
//             start: isMobile ? "top 10%" : "top top",
//             end: isMobile ? "+=120%" : "+=150%",
//             pin: true,
//             scrub: 1,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//             onEnter: playVideo,
//             onEnterBack: playVideo,
//             onLeave: pauseVideo,
//             onLeaveBack: pauseVideo,
//           },
//         });

//         // 1. Title + side lists fade up & out
//         tl.to(fadeTargets, {
//           opacity: 0,
//           y: -20,
//           stagger: 0.1,
//           duration: 0.8,
//         });

//         // 2. Mask expands to fill the container
//         tl.to(
//           mask,
//           {
//             clipPath: CLIP_END,
//             scale: 1.04,
//             duration: 1.5,
//           },
//           "-=0.4",
//         );

//         // 3. Wheels roll out simultaneously with the mask
//         tl.to(
//           wheelLeft,
//           {
//             opacity: 1,
//             x: isMobile ? 0 : -200,
//             y: isMobile ? -120 : 0,
//             rotation: -180,
//             duration: 1.5,
//           },
//           "<",
//         );

//         tl.to(
//           wheelRight,
//           {
//             opacity: 1,
//             x: isMobile ? 0 : 200,
//             y: isMobile ? 120 : 0,
//             rotation: 180,
//             duration: 1.5,
//           },
//           "<",
//         );

//         // 4. Bottom copy slides in
//         tl.to(
//           reveal,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power2.out",
//           },
//           "-=0.5",
//         );

//         // Everything created here is auto-reverted by this matchMedia context.
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef },
//   );

//   /* ------------------------------------------------------------------------ */
//   /*  Sound toggle                                                             */
//   /* ------------------------------------------------------------------------ */

//   const toggleSound = useCallback(async () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (soundOn) {
//       video.muted = true;
//       setSoundOn(false);
//       return;
//     }

//     try {
//       video.muted = false;
//       video.volume = 1;
//       await video.play();
//       setSoundOn(true);
//     } catch {
//       video.muted = true;
//       setSoundOn(false);
//     }
//   }, [soundOn]);

//   /* ------------------------------------------------------------------------ */
//   /*  Markup                                                                   */
//   /* ------------------------------------------------------------------------ */

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative mb-4 w-full min-h-screen overflow-x-clip bg-(--color-bg-soft)"
//     >
//       <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-8 px-4">
//         {/* ---------------------------- TITLE ---------------------------- */}
//         <h2
//           ref={titleRef}
//           className="text-center text-4xl font-extrabold leading-[1.2] text-gray-900 will-change-[transform,opacity] md:text-7xl"
//         >
//           شراء سيارات مصدومة
//           <br />
//           <span className="text-blue-400 drop-shadow-sm">جدة ومكة والطائف</span>
//         </h2>

//         {/* ---------------------------- GRID ----------------------------- */}
//         <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.7fr_1fr] md:gap-8">
//           {/* LEFT LIST */}
//           <ul
//             ref={leftListRef}
//             className="z-20 w-full space-y-5 will-change-[transform,opacity]"
//           >
//             <FeatureList items={REASONS_PRIMARY} />
//           </ul>

//           {/* CENTER: VIDEO + WHEELS */}
//           <div className="relative mx-auto aspect-video w-full overflow-visible md:aspect-auto md:h-[65vh]">
//             {/* LEFT WHEEL — fixed box size = zero CLS when the image decodes */}
//             <div
//               ref={wheelLeftRef}
//               aria-hidden="true"
//               className="pointer-events-none absolute left-1/2 top-0 z-0 h-28 w-28 will-change-[transform,opacity] md:left-0 md:top-1/2 md:h-44 md:w-44"
//             >
//               <Image
//                 src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
//                 alt=""
//                 width={176}
//                 height={176}
//                 sizes="(max-width: 767px) 112px, 176px"
//                 className="h-full w-full object-contain"
//                 draggable={false}
//               />
//             </div>

//             {/* RIGHT WHEEL */}
//             <div
//               ref={wheelRightRef}
//               aria-hidden="true"
//               className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-28 w-28 will-change-[transform,opacity] md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-44 md:w-44"
//             >
//               <Image
//                 src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
//                 alt=""
//                 width={176}
//                 height={176}
//                 sizes="(max-width: 767px) 112px, 176px"
//                 className="h-full w-full object-contain"
//                 draggable={false}
//               />
//             </div>

//             {/* VIDEO MASK LAYER — clip-path is animated directly by GSAP */}
//             <div
//               ref={maskRef}
//               className="absolute inset-0 z-10 overflow-hidden rounded-2xl bg-black will-change-[clip-path,transform]"
//               style={INITIAL_MASK_STYLE}
//             >
//               <video
//                 ref={videoRef}
//                 src="/video-optimized.mp4"
//                 className="h-full w-full object-cover"
//                 muted
//                 loop
//                 playsInline
//                 preload="none"
//                 disablePictureInPicture
//                 disableRemotePlayback
//                 aria-label="فيديو السيارة المصدومة"
//               />
//             </div>

//             {/* MUTE BUTTON — lives outside the clipped layer so it is never cut off */}
//             <button
//               type="button"
//               onClick={toggleSound}
//               className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
//               aria-label={soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"}
//               aria-pressed={soundOn}
//             >
//               {soundOn ? (
//                 <Volume2 size={16} aria-hidden="true" />
//               ) : (
//                 <VolumeOff size={16} aria-hidden="true" />
//               )}
//             </button>
//           </div>

//           {/* RIGHT LIST */}
//           <ul
//             ref={rightListRef}
//             className="z-20 w-full space-y-5 will-change-[transform,opacity] md:justify-self-end"
//           >
//             <FeatureList items={REASONS_SECONDARY} align="end" />
//           </ul>
//         </div>

//         {/* ---------------------- FINAL REVEAL TEXT ---------------------- */}
//         <div
//           ref={revealRef}
//           className="relative z-30 flex max-w-2xl flex-col items-center justify-center px-6 text-center opacity-0 will-change-[transform,opacity] md:-mt-2"
//         >
//           <h3 className="mb-1 text-2xl font-extrabold text-gray-900 sm:mb-4 md:text-3xl">
//             من أول اتصال إلى استلام الكاش
//           </h3>
//           <p className="max-w-xl text-base leading-relaxed text-gray-500 md:text-xl">
//             شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import { useCallback, useRef, useState } from "react";
// import {
//   Check,
//   ChevronDown,
//   MessageCircle,
//   Play,
//   Volume2,
//   VolumeOff,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// /* -------------------------------------------------------------------------- */
// /*  Content                                                                    */
// /* -------------------------------------------------------------------------- */

// const REASONS_PRIMARY = [
//   "تقييم فوري ومجاني لسيارتك المصدومة",
//   "أسعار تنافسية تفوق متوسط السوق",
//   "معاينة في موقعك دون أي تكلفة إضافية",
//   "لا حاجة لإصلاح السيارة قبل البيع",
// ] as const;

// const REASONS_SECONDARY = [
//   "دفع نقدي فوري خلال 30 دقيقة",
//   "سطحة مجانية لنقل السيارة من موقعك",
//   "نغطي جميع أحياء جدة ومكة المكرمة",
//   "فريق محترف وموثوق في مجال شراء السيارات",
// ] as const;

// /* -------------------------------------------------------------------------- */
// /*  Animation constants                                                        */
// /* -------------------------------------------------------------------------- */

// /** Start / end must share the exact same shape so GSAP can interpolate them. */
// const CLIP_START_DESKTOP = "inset(16% 20% round 24px)";
// const CLIP_START_MOBILE = "inset(10% 10% round 20px)";
// const CLIP_END = "inset(0% 0% round 24px)";

// const INITIAL_MASK_STYLE = { clipPath: CLIP_START_DESKTOP } as const;

// const MEDIA_QUERIES = {
//   isMobile: "(max-width: 767px)",
//   isDesktop: "(min-width: 768px)",
//   reduceMotion: "(prefers-reduced-motion: reduce)",
// } as const;

// /* -------------------------------------------------------------------------- */
// /*  Sub-components                                                             */
// /* -------------------------------------------------------------------------- */

// function FeatureList({ items }: { items: readonly string[] }) {
//   return (
//     <>
//       {items.map((feature) => (
//         <li
//           key={feature}
//           className="flex items-start gap-2.5 rounded-2xl border border-white/70 bg-white/70 px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5 backdrop-blur-[2px] md:gap-3.5 md:px-4 md:py-3"
//         >
//           <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-sm md:h-7 md:w-7">
//             <Check size={14} strokeWidth={3} aria-hidden="true" />
//           </span>
//           <p className="text-[13px] font-semibold leading-snug text-slate-700 md:text-[15px]">
//             {feature}
//           </p>
//         </li>
//       ))}
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Component                                                                  */
// /* -------------------------------------------------------------------------- */

// export default function About() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const leftListRef = useRef<HTMLUListElement>(null);
//   const rightListRef = useRef<HTMLUListElement>(null);
//   const maskRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);
//   const hintRef = useRef<HTMLDivElement>(null);
//   const soundBtnRef = useRef<HTMLButtonElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const wheelLeftRef = useRef<HTMLDivElement>(null);
//   const wheelRightRef = useRef<HTMLDivElement>(null);
//   const revealRef = useRef<HTMLDivElement>(null);

//   const [soundOn, setSoundOn] = useState(false);

//   /* ------------------------------------------------------------------------ */
//   /*  Scroll animation                                                         */
//   /* ------------------------------------------------------------------------ */

//   useGSAP(
//     () => {
//       const section = sectionRef.current;
//       const title = titleRef.current;
//       const leftList = leftListRef.current;
//       const rightList = rightListRef.current;
//       const mask = maskRef.current;
//       const glow = glowRef.current;
//       const hint = hintRef.current;
//       const soundBtn = soundBtnRef.current;
//       const wheelLeft = wheelLeftRef.current;
//       const wheelRight = wheelRightRef.current;
//       const reveal = revealRef.current;

//       if (
//         !section ||
//         !title ||
//         !leftList ||
//         !rightList ||
//         !mask ||
//         !glow ||
//         !hint ||
//         !soundBtn ||
//         !wheelLeft ||
//         !wheelRight ||
//         !reveal
//       ) {
//         return;
//       }

//       ScrollTrigger.config({ ignoreMobileResize: true });

//       const fadeTargets = [title, leftList, rightList];
//       const wheels = [wheelLeft, wheelRight];

//       const playVideo = () => {
//         videoRef.current?.play().catch(() => {});
//       };
//       const pauseVideo = () => videoRef.current?.pause();

//       const mm = gsap.matchMedia();

//       mm.add(MEDIA_QUERIES, (context) => {
//         const isMobile = context.conditions?.isMobile ?? false;
//         const reduceMotion = context.conditions?.reduceMotion ?? false;

//         /* ---------------- Reduced motion: static final state ---------------- */
//         if (reduceMotion) {
//           gsap.set(mask, { clipPath: CLIP_END });
//           gsap.set([glow, reveal], { autoAlpha: 1, y: 0 });
//           gsap.set(soundBtn, { autoAlpha: 1 });
//           gsap.set([hint, ...wheels], { autoAlpha: 0 });

//           ScrollTrigger.create({
//             trigger: section,
//             start: "top 70%",
//             end: "bottom 30%",
//             onEnter: playVideo,
//             onEnterBack: playVideo,
//             onLeave: pauseVideo,
//             onLeaveBack: pauseVideo,
//           });
//           return;
//         }

//         /* ------------------------- Initial states ------------------------- */

//         gsap.set(fadeTargets, { opacity: 1, y: 0, force3D: true });

//         gsap.set(mask, {
//           clipPath: isMobile ? CLIP_START_MOBILE : CLIP_START_DESKTOP,
//           scale: 1,
//           force3D: true,
//         });

//         gsap.set(glow, { autoAlpha: 0, scale: 0.9, force3D: true });
//         gsap.set(hint, { autoAlpha: 1, y: 0, force3D: true });
//         gsap.set(soundBtn, { autoAlpha: 0, y: 8, force3D: true });

//         gsap.set(wheels, {
//           opacity: 0,
//           x: 0,
//           y: 0,
//           rotation: 0,
//           xPercent: isMobile ? -50 : 0,
//           yPercent: isMobile ? 0 : -50,
//           force3D: true,
//         });

//         gsap.set(reveal, { opacity: 0, y: 30, force3D: true });

//         /* ---------------------------- Timeline ---------------------------- */

//         const tl = gsap.timeline({
//           defaults: { ease: "power2.inOut" },
//           scrollTrigger: {
//             trigger: section,
//             start: isMobile ? "top 10%" : "top top",
//             end: isMobile ? "+=120%" : "+=150%",
//             pin: true,
//             scrub: 1,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//             onEnter: playVideo,
//             onEnterBack: playVideo,
//             onLeave: pauseVideo,
//             onLeaveBack: pauseVideo,
//           },
//         });

//         // 1. Title + feature lists fade up and away
//         tl.to(fadeTargets, {
//           opacity: 0,
//           y: -20,
//           stagger: 0.1,
//           duration: 0.8,
//         });

//         // 2. Mask opens, "watch" hint dissolves, frame glow appears
//         tl.to(
//           mask,
//           { clipPath: CLIP_END, scale: 1.03, duration: 1.5 },
//           "-=0.4",
//         )
//           .to(hint, { autoAlpha: 0, y: -10, duration: 0.5 }, "<")
//           .to(glow, { autoAlpha: 1, scale: 1, duration: 1.2 }, "<0.3");

//         // 3. Wheels roll away (runs in parallel with the mask)
//         tl.to(
//           wheelLeft,
//           {
//             opacity: 1,
//             x: isMobile ? 0 : -200,
//             y: isMobile ? -120 : 0,
//             rotation: -180,
//             duration: 1.5,
//           },
//           "<-0.3",
//         );

//         tl.to(
//           wheelRight,
//           {
//             opacity: 1,
//             x: isMobile ? 0 : 200,
//             y: isMobile ? 120 : 0,
//             rotation: 180,
//             duration: 1.5,
//           },
//           "<",
//         );

//         // 4. Mute button + closing copy slide in
//         tl.to(soundBtn, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.6")
//           .to(
//             reveal,
//             { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//             "<",
//           );
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef },
//   );

//   /* ------------------------------------------------------------------------ */
//   /*  Sound toggle                                                             */
//   /* ------------------------------------------------------------------------ */

//   const toggleSound = useCallback(async () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (soundOn) {
//       video.muted = true;
//       setSoundOn(false);
//       return;
//     }

//     try {
//       video.muted = false;
//       video.volume = 1;
//       await video.play();
//       setSoundOn(true);
//     } catch {
//       video.muted = true;
//       setSoundOn(false);
//     }
//   }, [soundOn]);

//   /* ------------------------------------------------------------------------ */
//   /*  Markup                                                                   */
//   /* ------------------------------------------------------------------------ */

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative mb-4 min-h-dvh w-full overflow-x-clip bg-(--color-bg-soft)"
//     >
//       {/* Decorative background — pure gradients, no filters, no layers */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(96,165,250,0.18),transparent_70%),radial-gradient(45%_45%_at_10%_90%,rgba(34,211,238,0.14),transparent_70%)]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
//       />

//       <div className="container relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center gap-5 px-4 pb-8 pt-24 md:gap-7 md:pt-28">
//         {/* ---------------------------- TITLE ---------------------------- */}
//         <div
//           ref={titleRef}
//           className="flex flex-col items-center gap-3 text-center will-change-[transform,opacity]"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3.5 py-1 text-xs font-bold tracking-wide text-blue-600 shadow-sm md:text-sm">
//             <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
//             لماذا تختارنا؟
//           </span>

//           <h2 className="text-balance text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
//             شراء سيارات مصدومة
//             <br />
//             <span className="bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
//               جدة ومكة والطائف
//             </span>
//           </h2>
//         </div>

//         {/* ---------------------------- GRID ----------------------------- */}
//         <div className="grid w-full grid-cols-2 items-center gap-x-3 gap-y-3 md:grid-cols-[1fr_1.7fr_1fr] md:gap-8">
//           {/* LIST A */}
//           <ul
//             ref={leftListRef}
//             className="order-1 z-20 flex flex-col gap-2 will-change-[transform,opacity] md:order-1 md:gap-3"
//           >
//             <FeatureList items={REASONS_PRIMARY} />
//           </ul>

//           {/* LIST B */}
//           <ul
//             ref={rightListRef}
//             className="order-2 z-20 flex flex-col gap-2 will-change-[transform,opacity] md:order-3 md:gap-3"
//           >
//             <FeatureList items={REASONS_SECONDARY} />
//           </ul>

//           {/* CENTER: VIDEO + WHEELS */}
//           <div className="relative order-3 col-span-2 mx-auto aspect-video w-full md:order-2 md:col-span-1 md:aspect-auto md:h-[min(58vh,560px)]">
//             {/* Ambient glow frame — revealed as the mask opens */}
//             <div
//               ref={glowRef}
//               aria-hidden="true"
//               className="pointer-events-none absolute -inset-3 -z-10 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.35),rgba(34,211,238,0.25),rgba(59,130,246,0.35))] opacity-0 will-change-[transform,opacity] md:-inset-4"
//             />

//             {/* LEFT WHEEL */}
//             <div
//               ref={wheelLeftRef}
//               aria-hidden="true"
//               className="pointer-events-none absolute left-1/2 top-0 z-0 h-24 w-24 will-change-[transform,opacity] md:left-0 md:top-1/2 md:h-44 md:w-44"
//             >
//               <Image
//                 src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
//                 alt=""
//                 width={176}
//                 height={176}
//                 sizes="(max-width: 767px) 96px, 176px"
//                 className="h-full w-full object-contain drop-shadow-xl"
//                 draggable={false}
//               />
//             </div>

//             {/* RIGHT WHEEL */}
//             <div
//               ref={wheelRightRef}
//               aria-hidden="true"
//               className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-24 w-24 will-change-[transform,opacity] md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-44 md:w-44"
//             >
//               <Image
//                 src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
//                 alt=""
//                 width={176}
//                 height={176}
//                 sizes="(max-width: 767px) 96px, 176px"
//                 className="h-full w-full object-contain drop-shadow-xl"
//                 draggable={false}
//               />
//             </div>

//             {/* VIDEO MASK LAYER */}
//             <div
//               ref={maskRef}
//               className="absolute inset-0 z-10 overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-slate-900/20 will-change-[clip-path,transform]"
//               style={INITIAL_MASK_STYLE}
//             >
//               <video
//                 ref={videoRef}
//                 src="/video-optimized.mp4"
//                 className="h-full w-full object-cover"
//                 muted
//                 loop
//                 playsInline
//                 preload="none"
//                 disablePictureInPicture
//                 disableRemotePlayback
//                 aria-label="فيديو السيارة المصدومة"
//               />

//               {/* Subtle vignette for legibility of overlays */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-slate-900/15"
//               />

//               {/* "Scroll to watch" hint — always centred so it is never clipped */}
//               <div
//                 ref={hintRef}
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 will-change-[transform,opacity]"
//               >
//                 <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md md:h-14 md:w-14">
//                   <Play size={20} className="translate-x-[1px] fill-white" />
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md md:text-xs">
//                   اسحب للأسفل لمشاهدة الفيديو
//                   <ChevronDown size={14} className="animate-bounce" />
//                 </span>
//               </div>
//             </div>

//             {/* MUTE BUTTON — outside the clipped layer, revealed after expansion */}
//             <button
//               ref={soundBtnRef}
//               type="button"
//               onClick={toggleSound}
//               className="invisible absolute bottom-4 left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-transform will-change-[transform,opacity] hover:scale-110 active:scale-95"
//               aria-label={soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"}
//               aria-pressed={soundOn}
//             >
//               {soundOn ? (
//                 <Volume2 size={18} aria-hidden="true" />
//               ) : (
//                 <VolumeOff size={18} aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ---------------------- FINAL REVEAL TEXT ---------------------- */}
//         <div
//           ref={revealRef}
//           className="relative z-30 flex max-w-2xl flex-col items-center px-4 text-center opacity-0 will-change-[transform,opacity]"
//         >
//           <h3 className="text-balance text-xl font-extrabold text-slate-900 md:text-3xl">
//             من أول اتصال إلى استلام الكاش
//           </h3>
//           <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 md:mt-3 md:text-lg">
//             شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
//           </p>
//           <a
//             href="#contact"
//             className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0 md:mt-5 md:text-base"
//           >
//             <MessageCircle size={18} aria-hidden="true" />
//             تواصل معنا الآن
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


