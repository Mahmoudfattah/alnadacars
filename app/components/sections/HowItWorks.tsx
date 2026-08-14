import Link from "next/link";
import { MessageCircle, Search, Banknote, ArrowLeft } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    iconBg: "var(--color-primary-tint)",
    iconColor: "var(--color-primary)",
    title: "تواصل معنا",
    desc: "أرسل تفاصيل سيارتك وصورها عبر واتساب أو نموذج التواصل في الموقع.",
  },
  {
    number: "02",
    icon: Search,
    iconBg: "var(--color-bg-soft)",
    iconColor: "var(--color-ink)",
    title: "معاينة وتسعير فوري",
    desc: "نعاين السيارة في موقعك ونقدّم عرض سعر عادل خلال 30 دقيقة فقط.",
  },
  {
    number: "03",
    icon: Banknote,
    iconBg: "var(--color-cash-tint)",
    iconColor: "var(--color-cash)",
    title: "استلام الكاش فوراً",
    desc: "وافق على السعر واستلم المبلغ نقداً، مع سطحة مجانية لنقل السيارة.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-6 text-center md:px-10 lg:px-16">
        <span className="text-xs font-medium tracking-[0.15em] text-[var(--color-ink-faint)]">
          خطوات بسيطة وسريعة
        </span>
        <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px]">
          كيف تعمل الخدمة
        </h2>
        <p className="max-w-[520px] text-[15.5px] leading-[1.8] text-[var(--color-ink-soft)]">
          صممنا عملية بيع السيارة المصدومة لتكون بسيطة وسريعة قدر الإمكان، من
          أول تواصل معنا وحتى استلام قيمة سيارتك نقداً خلال دقائق.
        </p>

        {/* Steps */}
        <div className="mt-10 grid w-full grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents">
              <div className="relative flex h-[220px] flex-col items-start justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-6 text-right shadow-[var(--shadow-sm)]">
                <span className="absolute left-5 top-4 text-3xl font-bold text-[var(--color-border)]">
                  {step.number}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                  style={{ background: step.iconBg }}
                >
                  <step.icon size={22} color={step.iconColor} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[15px] font-bold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden items-center justify-center md:flex">
                  <ArrowLeft
                    size={20}
                    className="text-[var(--color-ink-faint)]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-cta)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)] hover:shadow-[var(--shadow-md)]"
        >
          احصل على السعر الآن
        </Link>
      </div>
    </section>
  );
}