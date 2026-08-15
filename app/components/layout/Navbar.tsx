"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  // { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "المدن التي نخدمها", href: "#cities" },
];

const NAV_OFFSET = 110;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  /* =====================================================
     REFS
  ====================================================== */

  const container = useRef<HTMLElement | null>(null);

  const navMobile = useRef<HTMLElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);

  const mobileTimeline = useRef<gsap.core.Timeline | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navLinksRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  /* =====================================================
     GSAP CONTEXT
  ====================================================== */

  const { contextSafe } = useGSAP({
    scope: container,
  });

  /* =====================================================
     DESKTOP NAVBAR ANIMATIONS
  ====================================================== */

  useGSAP(
    () => {
      /* -------------------------------------------------
         Initial animation using refs (faster & deterministic)
      ------------------------------------------------- */

      const tl = gsap.timeline();

      // Logo
      if (logoRef.current) {
        tl.to(
          logoRef.current,
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0,
        );
      }

      // Nav links (children of navLinksRef)
      if (navLinksRef.current) {
        const links = Array.from(
          navLinksRef.current.querySelectorAll(".nav"),
        ) as Element[];
        if (links.length) {
          tl.to(
            links,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            },
            0,
          );
        }
      }

      // CTA button
      if (ctaRef.current) {
        tl.to(
          ctaRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0,
        );
      }

      /* -------------------------------------------------
         Scroll animation
      ------------------------------------------------- */

      const nav = container.current;

      if (!nav) return;

      const glass = nav.querySelector(".nav-glass");
      const border = nav.querySelector(".nav-border");

      if (!glass || !border) return;

      const scrollAnimation = gsap.timeline({
        paused: true,
      });

      /*
        Move navbar slightly down when scrolling
      */

      scrollAnimation.to(
        nav,
        {
          y: 4,
          duration: 0.4,
          ease: "power2.out",
        },
        0,
      );

      /*
        Glass background
      */

      scrollAnimation.to(
        glass,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0,
      );

      /*
        Left + Right + Bottom border
        No top border
      */

      scrollAnimation.to(
        border,
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0,
      );

      const trigger = ScrollTrigger.create({
        start: "top -10",

        onEnter: () => {
          scrollAnimation.play();
        },

        onLeaveBack: () => {
          scrollAnimation.reverse();
        },
      });

      return () => {
        trigger.kill();
        scrollAnimation.kill();
      };
    },
    {
      scope: container,
    },
  );

  /* =====================================================
     HASH SCROLL + ACTIVE STATE
  ====================================================== */

  const scrollToSection = (hash: string) => {
    const id = hash.replace("#", "");
    if (!id) return;

    const section = document.getElementById(id);
    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveHash(hash);
    window.history.replaceState(null, "", hash);
  };

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      if (!link.href.startsWith("#")) return null;
      return document.getElementById(link.href.slice(1));
    }).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const activeSection = visibleEntries[0].target as HTMLElement;
          const nextHash = `#${activeSection.id}`;
          setActiveHash(nextHash);
          if (window.location.hash !== nextHash) {
            window.history.replaceState(null, "", nextHash);
          }
        } else if (window.scrollY < 120) {
          setActiveHash("");
          const cleanUrl = `${window.location.pathname}${window.location.search}`;
          if (window.location.pathname + window.location.search !== cleanUrl) {
            window.history.replaceState(null, "", cleanUrl);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTopOfPage = () => {
      if (window.scrollY < 120) {
        setActiveHash("");
        const cleanUrl = `${window.location.pathname}${window.location.search}`;
        if (window.location.hash) {
          window.history.replaceState(null, "", cleanUrl);
        }
      }
    };

    handleTopOfPage();
    window.addEventListener("scroll", handleTopOfPage, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleTopOfPage);
    };
  }, []);

  /* =====================================================
     MOBILE INITIAL GSAP STATE
  ====================================================== */

  useGSAP(
    () => {
      if (!navMobile.current || !overlay.current) return;

      const links = navMobile.current.querySelectorAll(".mobile-link");

      /*
        Initial closed state
      */

      gsap.set(navMobile.current, {
        xPercent: -100,
      });

      gsap.set(overlay.current, {
        opacity: 0,
      });

      gsap.set(links, {
        opacity: 0,
        x: 30,
      });
    },
    {
      scope: navMobile,
    },
  );

  /* =====================================================
     OPEN MOBILE MENU
  ====================================================== */

  const openMenu = contextSafe(() => {
    if (!navMobile.current || !overlay.current) return;

    setIsOpen(true);

    /*
      Kill previous animation if user clicks quickly
    */

    mobileTimeline.current?.kill();

    const links = navMobile.current.querySelectorAll(".mobile-link");

    mobileTimeline.current = gsap.timeline();

    /*
      1. Fade in overlay
    */

    mobileTimeline.current.to(
      overlay.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0,
    );

    /*
      2. Drawer slowly enters from the left
    */

    mobileTimeline.current.to(
      navMobile.current,
      {
        xPercent: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0,
    );

    /*
      3. Links appear one after another
    */

    mobileTimeline.current.to(
      links,
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.35",
    );
  });

  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  const closeMenu = contextSafe(() => {
    if (!navMobile.current || !overlay.current) return;

    mobileTimeline.current?.kill();

    const links = navMobile.current.querySelectorAll(".mobile-link");

    mobileTimeline.current = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
      },
    });

    /*
      1. Links disappear first
    */

    mobileTimeline.current.to(
      links,
      {
        opacity: 0,
        x: 30,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.in",
      },
      0,
    );

    /*
      2. Drawer slides back to the left
    */

    mobileTimeline.current.to(
      navMobile.current,
      {
        xPercent: -100,
        duration: 0.65,
        ease: "power3.inOut",
      },
      "-=0.05",
    );

    /*
      3. Overlay fades out
    */

    mobileTimeline.current.to(
      overlay.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.35",
    );
  });

  /* =====================================================
     CLOSE MENU WHEN CLICKING A LINK
  ====================================================== */

  const handleMobileLinkClick = contextSafe(() => {
    closeMenu();
  });

  /* =====================================================
     ESCAPE KEY
  ====================================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeMenu]);

  /* =====================================================
     PREVENT BODY SCROLL
  ====================================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     JSX
  ====================================================== */

  return (
    <>
      {/* =================================================
          DESKTOP / MAIN NAVBAR
      ================================================== */}

      <header
        ref={container}
        className="
          sticky
          top-0
          z-50
          px-0
        "
      >
        <div
          className="
            relative
            mx-auto
            mt-1.5
            max-w-7xl
          "
        >
          {/* =============================================
              GLASS BACKGROUND
          ============================================== */}

          <div
            className="
              nav-glass
              pointer-events-none
              absolute
              inset-0
              -z-10
              rounded-[14px]
              bg-white/85
              opacity-0
              backdrop-blur-md
            "
          />

          {/* =============================================
              BORDER

              ONLY:
              LEFT
              RIGHT
              BOTTOM
          ============================================== */}

          <div
            className="
              nav-border
              pointer-events-none
              absolute
              inset-0
              -z-10
              rounded-[14px]
              border-l
              border-r
              border-b
              border-[var(--color-border)]
              opacity-0
            "
          />

          {/* =============================================
              NAV CONTENT
          ============================================== */}

          <div
            className="
              mx-auto
              flex
              items-center
              justify-between
              px-6
              py-3

              md:grid
              md:grid-cols-[1fr_auto_1fr]
              md:px-6
              md:py-3

              min-[940px]:px-10
              min-[940px]:py-4
            "
          >
            {/* =========================================
                LOGO
            ========================================== */}

            <div className="flex justify-start">
              <Link
                href="/"
                ref={logoRef}
                className="
                  logo
                  opacity-0 -translate-y-5
                  flex
                  shrink-0
                  items-center
                  gap-2
                  md:gap-1.5
                  min-[940px]:gap-2
                "
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveHash("");
                  window.history.replaceState(null, "", "/");
                  if (isOpen) closeMenu();
                }}
              >
                <Image
                  src="/logocut.webp"
                  alt="شراء السيارات المصدومة"
                  width={100}
                  height={100}
                  priority
                  className="
                    object-contain

                    md:h-16
                    md:w-16

                    min-[940px]:h-25
                    min-[940px]:w-25
                  "
                />

                <span
                  className="
                    hidden
                    font-bold
                    text-(--color-cta)
                    sm:block
                    md:text-sm
                    min-[940px]:text-base
                  "
                >
                  شراء السيارات المصدومة
                </span>
              </Link>
            </div>

            {/* =========================================
                DESKTOP NAVIGATION
            ========================================== */}

            <nav
              ref={navLinksRef}
              className="
                hidden
                items-center
                justify-center
                gap-4
                md:flex
                min-[940px]:gap-8
              "
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    if (!link.href.startsWith("#")) {
                      if (isOpen) closeMenu();
                      return;
                    }

                    event.preventDefault();
                    scrollToSection(link.href);
                    if (isOpen) closeMenu();
                  }}
                  className={`
                    nav
                    opacity-0 -translate-y-5
                    whitespace-nowrap
                    text-sm
                    font-medium
                    transition-colors
                    min-[940px]:text-[16px]
                    ${
                      activeHash === link.href
                        ? "text-(--color-primary) font-semibold"
                        : "text-(--color-ink) hover:text-(--color-primary)"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* =========================================
                DESKTOP CTA
            ========================================== */}

            <div
              className="
                hidden
                justify-end
                md:flex
              "
            >
              <Link
                href="#contact"
                ref={ctaRef}
                className="
                  btn
                  opacity-0 -translate-y-5
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-(--radius-pill)
                  bg-(--color-cta)
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-white
                
                  transition-all
                
                  
                  hover:bg-(--color-cta-hover)
              

                  min-[940px]:px-6
                  min-[940px]:py-3
                  min-[940px]:text-sm
                  hover:shadow-md hover:-translate-y-1!
                "
              >
                تواصل معنا
              </Link>
            </div>

            {/* =========================================
                MOBILE MENU BUTTON
            ========================================== */}

            <button
              type="button"
              onClick={openMenu}
              aria-label="فتح القائمة"
              aria-expanded={isOpen}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                text-[var(--color-ink)]
                md:hidden
              "
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE OVERLAY
      ================================================== */}

      <div
        ref={overlay}
        onClick={closeMenu}
        className="
          fixed
          inset-0
          z-90
          bg-black/30
          backdrop-blur-sm
          opacity-0
          pointer-events-none
          sm:hidden
        "
      />

      {/* =================================================
          MOBILE DRAWER
      ================================================== */}

      <nav
        ref={navMobile}
        dir="rtl"
        className="
          fixed
          left-0
          top-0
          z-100

          h-dvh
          w-[60%]
          max-w-95

          overflow-y-auto

          bg-(--color-bg-raised)

          px-6
          py-6

          shadow-[20px_0_50px_rgba(0,0,0,0.12)]

          md:hidden
        "
      >
        {/* =============================================
            CLOSE BUTTON
        ============================================== */}

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="إغلاق القائمة"
            className="
              -mt-2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              text-[var(--color-ink)]
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* =============================================
            MOBILE LINKS
        ============================================== */}

        <div className="mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => {
                if (link.href.startsWith("#")) {
                  event.preventDefault();
                  scrollToSection(link.href);
                }
                handleMobileLinkClick();
              }}
              className={`
                mobile-link

                block

                border-b
border-(--color-border)

                py-6

                text-right
                text-base
                font-medium

                ${
                  activeHash === link.href
                    ? "text-(--color-primary)"
                    : "text-(--color-ink) hover:text-(--color-primary)"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* =============================================
            MOBILE CTA
        ============================================== */}

        <Link
          href="#contact"
          onClick={handleMobileLinkClick}
          className="
            mobile-link

            mt-6
            flex
            w-full
            items-center
            justify-center

            rounded-(--radius-pill)

            bg-(--color-cta)

            px-6
            py-3

            text-sm
            font-semibold
            text-white
            hover:shadow-md hover:-translate-y-1
          "
        >
          تواصل معنا
        </Link>
      </nav>
    </>
  );
}
