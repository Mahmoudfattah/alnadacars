"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CarFront,
  Code2,
  Globe,
  MessageCircle,
  Music2,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "966562117196";
const PHONE_NUMBERS = ["056 211 7196", "0532449975", "0561849429"];

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    title: "تواصل عبر واتساب",
    desc: "أرسل تفاصيل سيارتك وسنرد عليك بعرض سعر فوري.",
    action: `https://wa.me/${WHATSAPP_NUMBER}`,
    actionLabel: "بدء المحادثة",
  },
  {
    icon: Phone,
    title: "اتصل بنا مباشرة",
    desc: "فريقنا متاح للرد على استفساراتك خلال أوقات العمل.",
    action: `tel:${PHONE_NUMBERS[0]}`,
    actionLabel: PHONE_NUMBERS[0],
  },
];

const QUICK_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "المدن التي نخدمها", href: "#cities" },
];

const SOCIAL_LINKS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ahmdtop3?_r=1&_t=ZS-988TmPzlcFM",
    icon: Music2,
  },
  {
    label: "Ahmed Alhawary",
    href: "https://ahmed-alhawary.com/",
    icon: Globe,
  },
  {
    label: "Alnada Cars",
    href: "https://alnada-cars.com/",
    icon: CarFront,
  },
  {
    label: "Netlify",
    href: "https://silver-muffin-1fb75b.netlify.app/",
    icon: Globe,
  },
];

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carInfo, setCarInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `مرحباً، أريد تقييم سيارتي:%0Aالاسم: ${encodeURIComponent(
      name,
    )}%0Aرقم الجوال: ${encodeURIComponent(
      phone,
    )}%0Aتفاصيل السيارة: ${encodeURIComponent(carInfo)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="mx-auto max-w-[1800px] px-6 md:px-10 lg:px-16">
      {/* Main Footer Container */}
      <div
        id="contact"
        className="mx-auto max-w-[1400px] overflow-hidden rounded-t-[2.5rem] bg-[var(--color-ink)] text-white"
      >
        <div className="px-6 py-6 md:px-10 md:py-8 lg:px-16">
          {/* Left: Heading + form */}
          <div>
            <h2 className="mb-3 text-[38px] text-white/90 py-4 font-bold leading-tight md:text-[52px]">
              تواصل معنا
            </h2>

            <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-white/60">
              اترك بياناتك وتفاصيل سيارتك، وهنبعتلك عرض سعر فوري عبر واتساب خلال
              دقائق.
            </p>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/70">
                    الاسم
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: أحمد عبدالله"
                    className="border-b border-white/25 bg-transparent pb-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-white/70">
                    رقم الجوال
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    dir="ltr"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="numeral border-b border-white/25 bg-transparent pb-3 text-right text-[15px] text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="carInfo" className="text-sm text-white/70">
                    تفاصيل السيارة
                  </label>

                  <textarea
                    id="carInfo"
                    required
                    rows={2}
                    value={carInfo}
                    onChange={(e) => setCarInfo(e.target.value)}
                    placeholder="نوع السيارة، الموديل، وحالتها"
                    className="resize-none border-b border-white/25 bg-transparent pb-3 text-[15px] leading-relaxed text-white outline-none transition-colors placeholder:text-white/35"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-white px-8 py-4 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  أرسل عبر واتساب
                </button>
              </form>

              <div className="flex flex-col gap-8">
                {CONTACT_METHODS.map((method) => (
                  <a
                    key={method.title}
                    href={method.action}
                    target={
                      method.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-ink)]">
                      <method.icon size={20} strokeWidth={1.75} />
                    </span>

                    <div>
                      <h3 className="mb-1 text-base font-bold text-white">
                        {method.title}
                      </h3>

                      <p className="mb-1 text-sm text-white/55">
                        {method.desc}
                      </p>

                      <span className="numeral text-sm font-semibold text-white underline-offset-4 group-hover:underline">
                        {method.actionLabel}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16 pt-4 lg:grid-cols-2">
              <nav>
                <p className="mb-4 text-sm text-white/50">روابط سريعة</p>

                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[var(--color-ink)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
            <p>
              © {new Date().getFullYear()} شراء السيارات المصدومة. جميع الحقوق
              محفوظة.
            </p>

            <div className="flex items-center gap-2 text-white/60">
              <span className="hidden h-3 w-px bg-white/10 md:block" />
              <Code2 size={14} className="text-white/40" />
              <span>تم تطوير الموقع بواسطة</span>
              <a
                href="https://www.tiktok.com/@dev_flow"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline underline-offset-4 transition-colors hover:text-blue-600"
                aria-label="تم تطوير الموقع بواسطة DevFlow"
              >
                Dev Flow
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <p>خدماتنا تغطي جدة، مكة المكرمة، والطائف</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
