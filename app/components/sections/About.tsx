"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Volume2, VolumeOff } from "lucide-react";

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

const About = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  const [soundOn, setSoundOn] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  useEffect(() => {
    if (!videoLoaded) return;

    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {});
  }, [videoLoaded]);

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

          const section = containerRef.current;
          const mask = maskRef.current;

          if (!section || !mask) return;

          gsap.set(mask, {
            "--mask-size": isMobile ? "82%" : "62%",
            scale: 1,
            force3D: true,
          } as gsap.TweenVars);

          gsap.set(".will-fade", {
            opacity: 1,
            y: 0,
            force3D: true,
          });

          gsap.set("#masked-content", {
            opacity: 0,
            y: 30,
            force3D: true,
          });

          gsap.set([".wheel-left", ".wheel-right"], {
            opacity: 0,
            x: 0,
            y: 0,
            rotation: 0,
            force3D: true,
          });

          const timeline = gsap.timeline({
            scrollTrigger: isMobile
              ? {
                  trigger: section,
                  start: "top 75%",
                  end: "bottom 35%",
                  scrub: 1,
                  invalidateOnRefresh: true,
                  onEnter: () => {
                    videoRef.current?.play().catch(() => {});
                  },
                  onEnterBack: () => {
                    videoRef.current?.play().catch(() => {});
                  },
                }
              : {
                  trigger: section,
                  start: "top top",
                  end: "+=150%",
                  scrub: 1,
                  pin: true,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                  onEnter: () => {
                    videoRef.current?.play().catch(() => {});
                  },
                  onEnterBack: () => {
                    videoRef.current?.play().catch(() => {});
                  },
                },
          });

          // 1. Fade out heading and lists
          timeline.to(".will-fade", {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.inOut",
          });

          // 2. Expand the mask safely
          timeline.to(
            mask,
            {
              "--mask-size": isMobile ? "180%" : "450%",
              scale: isMobile ? 1 : 1.05,
              duration: 1.5,
              ease: "power2.inOut",
            } as gsap.TweenVars,
            "-=0.4",
          );

          // 3. Left wheel
          timeline.to(
            ".wheel-left",
            {
              opacity: 1,
              x: isMobile ? 0 : -200,
              y: isMobile ? -70 : 0,
              rotation: -180,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "<",
          );

          // 4. Right wheel
          timeline.to(
            ".wheel-right",
            {
              opacity: 1,
              x: isMobile ? 0 : 200,
              y: isMobile ? 70 : 0,
              rotation: 180,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "<",
          );

          // 5. Show final content
          timeline.to(
            "#masked-content",
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.5",
          );

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        },
      );

      return () => mm.revert();
    },
    {
      scope: containerRef,
    },
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
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    setSoundOn(false);
  };

  return (
    <section
      id="about"
      ref={containerRef}
  className="relative isolate mb-4 w-full max-w-full min-h-screen overflow-x-clip bg-(--color-bg-soft) box-border"
    >
    <div className="container relative z-10 mx-auto h-full w-full max-w-6xl min-w-0 flex flex-col items-center justify-center gap-8 overflow-x-clip px-4 box-border">
        {/* TITLE */}
        <h2 className="will-fade max-w-full text-center text-4xl font-extrabold leading-[1.2] text-gray-900 will-change-transform md:text-7xl">
          شراء سيارات مصدومة
          <br />
          <span className="text-blue-400 drop-shadow-sm">
            جدة ومكة والطائف
          </span>
        </h2>

        {/* MAIN GRID CONTENT */}
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)_minmax(0,1fr)] md:gap-8">
          {/* LEFT LIST */}
          <ul className="will-fade z-20 w-full min-w-0 max-w-full space-y-5 justify-self-start will-change-transform">
            {REASONS_PRIMARY.map((feature, index) => (
              <li
                key={index}
                className="group flex min-w-0 max-w-full items-center gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                  <Image
                    src="/check.webp"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>

                <p className="min-w-0 break-words text-base font-medium text-gray-700 md:text-md">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          {/* CENTER VIDEO */}
          <div className="relative mx-auto flex w-full min-w-0 max-w-full items-center justify-center overflow-hidden rounded-2xl aspect-video md:h-[65vh] md:aspect-auto">
            {/* LEFT WHEEL */}
            <Image
              src="/ChatGPT Image 15 أغسطس 2026، 05_34_06 م.webp"
              alt=""
              aria-hidden="true"
              width={176}
              height={176}
              sizes="176px"
              className="wheel-left pointer-events-none absolute left-1/2 top-0 z-0 w-32 max-w-[40vw] -translate-x-1/2 object-contain will-change-transform md:left-0 md:top-1/2 md:w-44 md:max-w-none md:-translate-y-1/2 md:translate-x-0"
            />

            {/* RIGHT WHEEL */}
            <Image
              src="/ChatGPT Image 15 أغسطس 2026، 05_36_28 م.webp"
              alt=""
              aria-hidden="true"
              width={176}
              height={176}
              sizes="176px"
              className="wheel-right pointer-events-none absolute bottom-0 left-1/2 z-0 w-32 max-w-[40vw] -translate-x-1/2 object-contain will-change-transform md:right-0 md:left-auto md:top-1/2 md:bottom-auto md:w-44 md:max-w-none md:-translate-y-1/2 md:translate-x-0"
            />

            {/* VIDEO MASK LAYER */}
            <div
              ref={maskRef}
              className="car-mask absolute inset-0 z-10 h-full w-full max-w-full overflow-hidden rounded-2xl will-change-transform"
              style={
                {
                  "--mask-size": "62%",
                  transform: "translateZ(0)",
                } as CSSProperties
              }
            >
              {videoLoaded && (
                <video
                  ref={videoRef}
                  src="/video-optimized.mp4"
                  className="masked-video h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label="فيديو السيارة المصدومة"
                  onLoadedMetadata={() => ScrollTrigger.refresh()}
                />
              )}

              <button
                type="button"
                onClick={soundOn ? disableSound : enableSound}
                className="absolute bottom-4 left-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white shadow-lg backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
                aria-label={
                  soundOn ? "إيقاف صوت الفيديو" : "تشغيل صوت الفيديو"
                }
                aria-pressed={soundOn}
              >
                {soundOn ? (
                  <Volume2 size={16} aria-hidden="true" />
                ) : (
                  <VolumeOff size={16} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* RIGHT LIST */}
          <ul className="will-fade z-20 w-full min-w-0 max-w-full space-y-5 md:justify-self-end will-change-transform">
            {REASONS_SECONDARY.map((feature, index) => (
              <li
                key={index}
                className="group flex min-w-0 max-w-full items-center gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                  <Image
                    src="/check.webp"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>

                <p className="min-w-0 break-words text-base font-medium text-gray-700 md:text-md">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* FINAL REVEAL CONTENT */}
        <div
          id="masked-content"
          className="relative z-30 flex max-w-2xl flex-col items-center justify-center px-6 text-center will-change-transform md:-mt-2"
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
};

export default About;