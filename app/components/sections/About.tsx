"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  const [soundOn, setSoundOn] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile } = context.conditions || {};

        const start = isMobile ? "top 12%" : "top top";

        /*
        Initial mask size
        */
        gsap.set(maskRef.current, {
          "--mask-size": isMobile ? "72%" : "62%",
        } as gsap.TweenVars);

        /*
        Initial state of final content
        */
        gsap.set("#masked-content", {
          opacity: 0,
          y: 35,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#art",

            start,

            /*
            Shorter pin duration.
            The user doesn't need to scroll forever.
            */
            end: isMobile ? "+=65%" : "+=70%",

            scrub: 0.8,

            pin: true,

            anticipatePin: 1,

            fastScrollEnd: true,

            invalidateOnRefresh: true,

            onEnter: () => {
              const video = videoRef.current;

              if (!video) return;

              video.play().catch(() => {});
            },

            onEnterBack: () => {
              const video = videoRef.current;

              if (!video) return;

              video.play().catch(() => {});
            },
          },
        });

        /*
        ================================================================
        1. FADE EVERYTHING EXCEPT VIDEO
        ================================================================
        */

        timeline.to(".will-fade", {
          opacity: 0,
          stagger: 0.08,
          duration: 0.35,
          ease: "power1.inOut",
        });

        /*
        ================================================================
        2. EXPAND MASK
        ================================================================
        */

        timeline.to(
          maskRef.current,
          {
            "--mask-size": "460%",
            duration: 0.8,
            ease: "power2.inOut",
          } as gsap.TweenVars
        );

        /*
        ================================================================
        3. SHOW TEXT UNDER VIDEO
        ================================================================
        */

        timeline.to(
          "#masked-content",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25"
        );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      }
    );

    return () => mm.revert();
  });

  /*
  ================================================================
  ENABLE SOUND
  ================================================================
  */

  const enableSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = false;
      video.volume = 1;

      await video.play();

      setSoundOn(true);
    } catch (error) {
      console.error("Unable to enable video sound:", error);

      video.muted = true;
      setSoundOn(false);
    }
  };

  /*
  ================================================================
  DISABLE SOUND
  ================================================================
  */

  const disableSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    setSoundOn(false);
  };

  return (
    <section
      id="art"
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          container
          mx-auto
          min-h-screen
          max-w-6xl
          flex
          flex-col
          items-center
          justify-center
          gap-5
          py-8
          px-4
          relative
          z-10
        "
      >

        {/* ============================================================
            TITLE
        ============================================================ */}

        <h2
          className="
            will-fade
            text-6xl
            md:text-8xl
            text-center
            font-bold
            text-[#505050]
            leading-none
          "
        >
         شراء سيارات مصدومة 
        </h2>

        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[1fr_1.7fr_1fr]
            gap-5
            items-center
            w-full
          "
        >

          {/* ==========================================================
              LEFT LIST
          ========================================================== */}

          <ul
            className="
              will-fade
              space-y-4
              justify-self-start
              z-20
              w-full
            "
          >
            {REASONS_PRIMARY.map((feature, index) => (
              <li
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <Image
                  src="/check.png"
                  alt="check"
                  width={24}
                  height={24}
                  className="
                    w-6
                    h-6
                    shrink-0
                    object-contain
                     border 
                    border-blue-300
                    rounded-full
                  
                  "
                />

                <p
                  className="
                    text-base
                    md:text-lg
                    font-medium
                  "
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          {/* ==========================================================
              CENTER VIDEO
          ========================================================== */}

          <div
            className="
              cocktail-img
              relative
              w-full
            
              aspect-video
              md:h-[68vh]
              md:aspect-auto
              mx-auto
              flex
              items-center
              justify-center
              overflow-visible
            "
          >
            <div
              ref={maskRef}
              className="
                car-mask
                absolute
                inset-0
                w-full
                h-full
                rounded-md
              "
            >
              <video
                ref={videoRef}
                src="/video-optimized.mp4"
                className="
                  masked-video
                  w-full
                  h-full
                  object-cover
                  rounded-md
                "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="فيديو السيارة المصدومة"
              />
            </div>
          </div>

          {/* ==========================================================
              RIGHT LIST
          ========================================================== */}

          <ul
            className="
              will-fade
              space-y-4
              justify-self-end
              z-20
              w-full
            "
          >
            {REASONS_SECONDARY.map((feature, index) => (
              <li
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  
                "
              >
                <Image
                  src="/check.png"
                  alt="check"
                  width={24}
                  height={24}
                  className="
                    w-6
                    h-6
                    shrink-0
                    object-contain
                    border 
                    border-blue-300
                    rounded-full
                  "
                />

                <p
                  className="
                    text-base
                    md:text-lg
                    font-medium
                  "
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ============================================================
            FINAL CONTENT
            THIS APPEARS UNDER THE VIDEO
        ============================================================ */}

        <div
          id="masked-content"
          className="
            opacity-0
      
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
            max-w-2xl
            relative
            z-30
            -mt-1
          "
        >
          <h3
            className="
              text-2xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-[#1d1d1f]
              mb-3
            "
          >
            من أول اتصال إلى استلام الكاش
          </h3>

          <p
            className="
              text-base
              md:text-lg
              text-[#6e6e73]
              max-w-xl
            "
          >
            شاهد كيف نُقيّم سيارتك المصدومة وندفع لك
            القيمة نقداً في نفس اليوم.
          </p>
        </div>
      </div>

      {/* ================================================================
          SOUND BUTTON
      ================================================================= */}

      <button
        type="button"
        onClick={soundOn ? disableSound : enableSound}
        className="
          absolute
        top-1/2
          left-1/2
          -translate-x-1/2
          z-[100]
          rounded-full
         
          
          text-white
          px-3
          py-3
          text-sm
          font-semibold
          shadow-lg
          transition-all
          duration-300
       
          hover:scale-105
          active:scale-95
        "
      >
        {soundOn ? "🔇 " : "🔊 "}
      </button>
    </section>
  );
};

export default About;