"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/*
  Stops ScrollTrigger from calling refresh() when a mobile browser's
  address bar shows/hides during scroll. That resize event was
  re-calculating this section's pin start/end positions WHILE the
  user was mid-scroll through it, which is what looked like the
  layout "breaking" until the pin finished and the video mask fully
  expanded. This is a GSAP-recommended, one-time global setting —
  ideally it lives in a single shared GSAP setup module so it's only
  ever set once app-wide, but there isn't one in this codebase yet,
  so it's set here (calling it more than once is harmless/idempotent).
*/
if (typeof window !== "undefined") {
  ScrollTrigger.config({ ignoreMobileResize: true });
}

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

const About = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  const [soundOn, setSoundOn] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions || {};
          const start = isMobile ? "top 10%" : "top top";

          // Initial state setup (Hardware accelerated)
          gsap.set(maskRef.current, {
            "--mask-size": isMobile ? "72%" : "62%",
            scale: 1,
            force3D: true,
          } as gsap.TweenVars);

          gsap.set(".will-fade", { opacity: 1, y: 0, force3D: true });
          gsap.set("#masked-content", { opacity: 0, y: 30, force3D: true });
          
          // Initial state for the wheels (Hidden and centered)
          gsap.set([".wheel-left", ".wheel-right"], { 
            opacity: 0, 
            x: 0, 
            rotation: 0, 
            force3D: true 
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              end: isMobile ? "+=120%" : "+=150%",
              scrub: 1, // Smooth scrub matching reference video physics
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onEnter: () => videoRef.current?.play().catch(() => {}),
              onEnterBack: () => videoRef.current?.play().catch(() => {}),
            },
          });

          // 1. Fade out header & side lists smoothly
          timeline.to(".will-fade", {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.inOut",
          });

          // 2. Expand mask & scale video container slightly
          timeline.to(
            maskRef.current,
            {
              "--mask-size": "450%",
              scale: 1.05,
              duration: 1.5,
              ease: "power2.inOut",
            } as gsap.TweenVars,
            "-=0.4"
          );

          // 2.5 ANIMATE WHEELS ALONGSIDE THE MASK EXPANSION
          // The '<' makes these start at the exact same time as the mask expansion above
          timeline.to(".wheel-left", {
            opacity: 1,
            x: isMobile ? -80 : -200, // Moves out to the left like leaf-left
            rotation: -180,           // Rolls backwards
            duration: 1.5,
            ease: "power2.inOut",
          }, "<");

          timeline.to(".wheel-right", {
            opacity: 1,
            x: isMobile ? 80 : 200,   // Moves out to the right like leaf-right
            rotation: 180,            // Rolls forwards
            duration: 1.5,
            ease: "power2.inOut",
          }, "<");

          // 3. Fade in bottom text cleanly
          timeline.to(
            "#masked-content",
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.5"
          );

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

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
    // min-h-dvh set explicitly here (not min-h-screen) to match
    // globals.css's #art rule instead of silently conflicting with
    // it. #art{ min-h-dvh } was already winning at runtime due to
    // ID selector specificity beating this class, but that made the
    // actual rendered height dependent on an unrelated file — this
    // makes the intended value explicit and self-documenting.
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-dvh overflow-hidden mb-4 bg-[var(--color-bg-soft)]"
    >
      <div className="container mx-auto min-h-screen max-w-6xl flex flex-col items-center justify-center gap-8 px-4 relative z-10">
        {/* TITLE */}
        <h2 className="will-fade text-center text-4xl md:text-7xl font-extrabold leading-[1.2] text-gray-900 will-change-transform">
          شراء سيارات مصدومة
          <br />
          <span className="text-blue-400 drop-shadow-sm">جدة ومكة</span>
        </h2>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr_1fr] gap-6 md:gap-8 items-center w-full">
          {/* LEFT LIST */}
          <ul className="will-fade space-y-5 justify-self-start z-20 w-full will-change-transform">
            {REASONS_PRIMARY.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border border-blue-200 shrink-0">
                  <Image
                    src="/check.webp"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="text-base md:text-md font-medium text-gray-700">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          {/* CENTER VIDEO WITH MASK AND WHEELS */}
          <div className="cocktail-img relative w-full aspect-video md:h-[65vh] md:aspect-auto mx-auto flex items-center justify-center overflow-visible rounded-2xl">
            
            {/* --- NEW ADDITION: LEFT WHEEL --- */}
            <img
              src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
              alt="Left Wheel"
              className="wheel-left absolute left-0 top-1/2 -translate-y-1/2 w-24 md:w-44 z-0 object-contain pointer-events-none will-change-transform"
            />

            {/* --- NEW ADDITION: RIGHT WHEEL --- */}
            <img
              src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
              alt="Right Wheel"
              className="wheel-right absolute right-0 top-1/2 -translate-y-1/2 w-24 md:w-44 z-0 object-contain pointer-events-none will-change-transform"
            />

            {/* VIDEO MASK LAYER */}
            <div
              ref={maskRef}
              className="car-mask absolute inset-0 w-full h-full rounded-2xl overflow-hidden will-change-transform z-10"
              style={
                {
                  "--mask-size": "62%",
                  transform: "translateZ(0)", // Force GPU layer
                } as React.CSSProperties
              }
            >
              <video
                ref={videoRef}
                src="/video-optimized.mp4"
                className="masked-video w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="فيديو السيارة المصدومة"
              />

              <button
                type="button"
                onClick={soundOn ? disableSound : enableSound}
                className="absolute bottom-4 left-4 z-[100] rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white w-10 h-10 flex items-center justify-center text-sm shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                {soundOn ? <VolumeOff size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>

          {/* RIGHT LIST */}
          <ul className="will-fade space-y-5 md:justify-self-end z-20 w-full will-change-transform">
            {REASONS_SECONDARY.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border border-blue-200 shrink-0">
                  <Image
                    src="/check.webp"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="text-base md:text-md font-medium text-gray-700">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* FINAL REVEAL CONTENT */}
        <div
          id="masked-content"
          className="flex flex-col items-center justify-center text-center px-6 max-w-2xl relative z-30 md:-mt-2 will-change-transform"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:mb-4 mb-1">
            من أول اتصال إلى استلام الكاش
          </h3>
          <p className="text-base md:text-xl text-gray-500 max-w-xl leading-relaxed">
            شاهد كيف نُقيّم سيارتك المصدومة وندفع لك القيمة نقداً في نفس اليوم.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;