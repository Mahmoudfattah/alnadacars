"use client";

import { useState } from "react";
import {
  MessageCircle,
  ShieldCheck,
  MapPin,
  Clock,
  Car,
  Phone,
  Check,
  ArrowUpLeft,
} from "lucide-react";

const WHATSAPP_NUMBER = "966562117196";
const CITIES = ["جدة", "مكة المكرمة", "الطائف"];

export default function HeroQuickForm() {
  const [carModel, setCarModel] = useState("");
  const [city, setCity] = useState("جدة");
  const [phone, setPhone] = useState("");
  const [validReg, setValidReg] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validReg) return;

    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "whatsapp_form_submit",
        {
          event_category: "Lead",
          event_label: `hero_form_${city}_${carModel}`,
        },
      );
    }

    const msg =
      `السلام عليكم، أرغب في تثمين وبيع سيارتي:\n` +
      `نوع السيارة والموديل: ${carModel}\n` +
      `المدينة: ${city}\n` +
      `رقم الجوال: ${phone}\n` +
      `الإقرار النظامي: الاستمارة سارية والمبايعة/الإسقاط نظامي عبر أبشر.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      dir="rtl"
      className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all"
    >
      {/* لمسة إضاءة خلفية ناعمة */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-slate-900/5 blur-3xl" />

      {/* Header & Location Badge */}
      <div className="relative flex flex-wrap items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200/70">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
            تسعيرة فورية لسيارتك
          </h2>
          <p className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            يصلك التقييم المبدئي خلال 5 دقائق
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 px-3 py-1.5 text-[11px] font-bold text-slate-700">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          تشليح الندى 207 — الخمرة
        </span>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-4">
        {/* City Segmented Selector (بديل عصري للـ Select التقليدي) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            موقع السيارة الحالي
          </label>
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/60">
            {CITIES.map((item) => {
              const active = city === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCity(item)}
                  className={`relative rounded-xl py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Car Model */}
          <div className="group relative">
            <Car className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
            <input
              type="text"
              required
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="السيارة والموديل (كامري 2019)"
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 pr-10 pl-3.5 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
            />
          </div>

          {/* Phone */}
          <div className="group relative">
            <Phone className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
            <input
              type="tel"
              dir="ltr"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XXXXXXXX"
              className="w-full rounded-2xl border border-slate-200/90 bg-white/90 pr-10 pl-3.5 py-3 text-sm font-medium text-right text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
            />
          </div>
        </div>

        {/* Custom Checkbox */}
        <label className="flex items-center gap-2.5 pt-1 text-xs font-medium text-slate-600 cursor-pointer select-none group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              required
              checked={validReg}
              onChange={(e) => setValidReg(e.target.checked)}
              className="peer sr-only"
            />
            <div className="h-5 w-5 rounded-lg border border-slate-300 bg-white transition-all peer-checked:border-slate-900 peer-checked:bg-slate-900 group-hover:border-slate-400 flex items-center justify-center">
              <Check
                className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </div>
            {/* إظهار علامة الصح بشكل موثوق */}
            {validReg && (
              <Check
                className="pointer-events-none absolute w-3.5 h-3.5 text-white"
                strokeWidth={3}
              />
            )}
          </div>
          <span className="leading-snug">
            أقر بأن الاستمارة سارية لإتمام المبايعة أو الإسقاط عبر{" "}
            <strong className="font-bold text-slate-800">أبشر</strong>
          </span>
        </label>

        {/* Submit CTA */}
        <button
          type="submit"
          className="group relative w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-l from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 py-3.5 px-6 text-sm sm:text-base font-extrabold text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white/15" />
          <span>اطلب التسعيرة عبر واتساب</span>
          <ArrowUpLeft className="w-4 h-4 opacity-80 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Bottom Subtle Trust Footer */}
        <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-semibold text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>إجراءات نظامية 100% ومعتمدة — بدون أي التزام</span>
        </div>
      </form>
    </div>
  );
}
