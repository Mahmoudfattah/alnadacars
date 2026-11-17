"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE_TEL = "tel:+966562117196";
const WHATSAPP_URL =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تثمين وبيع سيارتي (جدة / مكة / الطائف) مع نقل الملكية أو إسقاط اللوحات النظامي عبر أبشر (الاستمارة سارية).",
  );

export default function StickyMobileBar() {
  const trackEvent = (
    eventName: "phone_call_click" | "whatsapp_click",
    label: string,
  ) => {
    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        eventName,
        {
          event_category: "conversion",
          event_label: label,
        },
      );
    }
  };

  return (
    <div
      dir="rtl"
      className="fixed bottom-3 inset-x-1 z-50 md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 p-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.16)] backdrop-blur-xl">
        {/* زر الاتصال */}
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent("phone_call_click", "sticky_mobile_bar")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 active:scale-[0.98] py-3 px-3 text-xs sm:text-sm font-bold text-white transition-all"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
            <Phone className="h-3.5 w-3.5 text-sky-400" />
          </span>
          <span>اتصل للتثمين</span>
        </a>

        {/* زر الواتساب */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", "sticky_mobile_bar")}
          className="relative flex flex-[1.2] items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-600 to-emerald-500 active:scale-[0.98] py-4 px-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_6px_16px_-3px_rgba(16,185,129,0.45)] transition-all"
        >
          {/* مؤشر متصل الآن */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <MessageCircle className="h-4 w-4 shrink-0 fill-white/15" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  );
}
