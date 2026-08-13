"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "المدن التي نخدمها", href: "#cities" },
  // { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0  z-50 ">
        <div
          className="
            mx-auto flex max-w-7xl items-center justify-between
            px-6 py-4
            md:px-4 md:py-3
            mt-1.5
            min-[940px]:px-10 min-[940px]:py-4
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 md:gap-1.5 min-[940px]:gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logocut.png"
              alt="شراء السيارات المصدومة"
              width={100}
              height={100}
              priority
              className="
                object-contain
                md:h-16 md:w-16
                min-[940px]:h-[100px] min-[940px]:w-[100px]
              "
            />

            <span
              className="
                hidden
                font-[var(--font-display)]
                font-bold
                text-[var(--color-cta)]
                sm:block
                md:text-sm
                min-[940px]:text-base
              "
            >
              شراء السيارات المصدومة
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="
              hidden items-center
              gap-4
              md:flex
              min-[940px]:gap-8
            "
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  font-medium
                  text-[var(--color-ink)]
                  transition-colors
                  hover:text-[var(--color-primary)]
                  text-sm
                  min-[940px]:text-[16px]
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="
              hidden shrink-0
              items-center gap-2
              rounded-[var(--radius-pill)] bg-[var(--color-cta)] 
              font-semibold text-white
              shadow-[var(--shadow-sm)]
              transition-all
              hover:-translate-y-0.5
              hover:bg-[var(--color-cta-hover)]
              hover:shadow-[var(--shadow-md)]
              md:inline-flex

              px-4 py-2
              text-xs

              min-[940px]:px-6
              min-[940px]:py-3
              min-[940px]:text-sm
            "
          >
            تواصل معنا
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={isOpen}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border
              text-[var(--color-ink)]
              md:hidden
            "
          >
            <Menu size={19} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[90]
          bg-black/30
          backdrop-blur-sm
          transition-opacity duration-300
          sm:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Mobile drawer — LEFT */}
      <nav
        dir="rtl"
        className={`
          fixed left-0 top-0 z-[100]
          h-dvh
          w-[60%]
          max-w-[380px]
          overflow-y-auto
          bg-[var(--color-bg-raised)]
          px-6
          py-6
          shadow-[20px_0_50px_rgba(0,0,0,0.12)]
          transition-transform
          duration-400
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="إغلاق القائمة"
            className="
              flex
              -mt-2
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

        {/* Links */}
        <div className="mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                border-b
                border-[var(--color-border)]
                py-6
                text-right
                text-base
                font-medium
                text-[var(--color-ink)]
                transition-colors
                hover:text-[var(--color-primary)]
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            rounded-[var(--radius-pill)]
            bg-[var(--color-cta)]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
          "
        >
          تواصل معنا
        </Link>
      </nav>
    </>
  );
}