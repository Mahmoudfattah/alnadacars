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
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-8px_24px_rgba(15,23,42,0.12)]"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent("phone_call_click", "sticky_mobile_bar")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] active:bg-[#0369a1] py-3 px-3 text-sm font-extrabold text-white shadow-sm"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>اتصل للتثمين</span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", "sticky_mobile_bar")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] active:bg-[#15803d] py-3 px-3 text-sm font-extrabold text-white shadow-sm"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  );
}
