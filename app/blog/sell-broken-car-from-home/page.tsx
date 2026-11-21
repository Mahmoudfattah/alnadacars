import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Camera,
  MapPin,
  Banknote,
  Truck,
  CheckCircle2,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تقييم وبيع سيارتي العطلانة من أمام المنزل عبر الواتساب",
  );

export const metadata: Metadata = {
  title:
    "تخليص وبيع سيارتك العطلانة من أمام المنزل عبر الواتساب بجدة ومكة والطائف | 0562117196",
  description:
    "تعطلت سيارتك أمام البيت أو الورشة؟ تقييم فوري عبر الواتساب وتخليص وشراء نقدي مع سطحة مجانية وإسقاط لوحات نظامي عبر أبشر في جدة ومكة والطائف. اتصل: 0562117196",
  keywords: [
    "تخليص سيارات تشليح من امام المنزل",
    "تقييم سيارة مصدومة عبر الواتساب",
    "شراء سيارة عطلانة جدة ومكة والطائف",
    "سطحة مجانية لشراء السيارات المتعطلة",
    "بيعها كاش",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/blog/sell-broken-car-from-home",
  },
  openGraph: {
    title:
      "تخليص وبيع سيارتك العطلانة من أمام المنزل عبر الواتساب في جدة ومكة والطائف",
    description:
      "خطوات بيع السيارة المتعطلة أو المصدومة من موقعك دون الذهاب إلى التشاليح، مع دفع كاش فوري وسطحة مجانية.",
    url: "https://ba3hacash.com/blog/sell-broken-car-from-home",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "article",
  },
};

const HOME_STEPS = [
  {
    step: "01",
    title: "أرسل 4 صور للسيارة عبر واتساب",
    desc: "صوّر السيارة من الأمام والخلف والجانبين ومكان العطل أو الصدمة وأرسلها على 0562117196 مع ذكر الموديل.",
    icon: Camera,
  },
  {
    step: "02",
    title: "استلم التقييم الفوري خلال دقائق",
    desc: "يراجع فريقنا المختص الصور وحالة المكينة والقير ويقدم لك أعلى تسعيرة عادلة بدون أي التزام.",
    icon: Banknote,
  },
  {
    step: "03",
    title: "وصول المندوب والسطحة إلى باب منزلك",
    desc: "بمجرد موافقتك، تتحرك السطحة المجانية لموقعك في جدة أو مكة أو الطائف لمعاينة المركبة واستلامها.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "استلام الكاش وإسقاط اللوحات عبر أبشر",
    desc: "تستلم المبلغ كاش فوري أو تحويل بنكي مباشر ويتم إنهاء إجراءات الإسقاط النظامي عبر أبشر (سواء الاستمارة سارية أو منتهية).",
    icon: Truck,
  },
];

const WHATSAPP_CHECKLIST = [
  "اسم الشركة المصنّعة والموديل وسنة الصنع (مثلاً: كامري 2018 أو إلنترا 2020).",
  "وصف مختصر للعطل (تخبيط مكينة، عطل قير، صدمة أمامية أو خلفية).",
  "تحديد الحي والمدينة (جدة، مكة المكرمة، أو الطائف) لإرسال أقرب سطحة مجانية.",
  "توضيح حالة الاستمارة (سارية أو منتهية) لتسريع إجراء المبايعة أو الإسقاط عبر أبشر.",
];

export default function SellBrokenCarFromHomeArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://ba3hacash.com/blog/sell-broken-car-from-home#article",
        headline:
          "تخليص وبيع سيارتك العطلانة من أمام المنزل عبر الواتساب في جدة ومكة والطائف",
        description:
          "شرح عملي لخطوات تقييم وبيع السيارة العطلانة أو المصدومة من أمام المنزل عبر الواتساب مع سطحة مجانية ودفع نقدي فوري.",
        datePublished: "2026-11-19T10:00:00+03:00",
        dateModified: "2026-11-19T10:00:00+03:00",
        author: {
          "@type": "Organization",
          name: "بيعها كاش لشراء السيارات المصدومة والتشليح",
          url: "https://ba3hacash.com",
        },
        publisher: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        mainEntityOfPage:
          "https://ba3hacash.com/blog/sell-broken-car-from-home",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://ba3hacash.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونة",
            item: "https://ba3hacash.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "تخليص وبيع سيارتك العطلانة من أمام المنزل",
            item: "https://ba3hacash.com/blog/sell-broken-car-from-home",
          },
        ],
      },
    ],
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav
          aria-label="مسار التنقل"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500"
        >
          <Link
            href="/"
            className="hover:text-[#0284C7] transition-colors flex items-center gap-1 font-medium"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>الرئيسية (بيعها كاش)</span>
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0284C7] transition-colors">
            المدونة
          </Link>
          <span>/</span>
          <span className="text-[#0284C7] font-bold">
            بيع السيارة العطلانة من أمام المنزل عبر الواتساب
          </span>
        </nav>
      </div>

      {/* Article Section */}
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5">
              <BookOpen className="w-4 h-4" />
              <span>دليل التخليص الفوري من موقعك</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
              <Calendar className="w-4 h-4" />
              <span>نوفمبر 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-4 h-4" />
              <span>وقت القراءة: 3 دقائق</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
            تخليص وبيع سيارتك العطلانة من أمام المنزل{" "}
            <span className="text-[#0284C7]">
              عبر الواتساب في جدة ومكة والطائف
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-4xl">
            إذا تعطلت سيارتك أمام المنزل أو داخل الورشة بسبب تخبيط المكينة أو
            تلف القير أو حادث مروري، فلست مضطراً لدفع أجرة سطحة والتنقل بين
            التشاليح. مع <strong>بيعها كاش</strong> يمكنك الحصول على تقييم فوري
            عبر الواتساب وإنهاء البيع و
            <Link
              href="/isqat-lohat"
              className="text-[#0284C7] underline font-semibold"
            >
              إسقاط اللوحات عبر أبشر
            </Link>{" "}
            وأنت في موقعك في{" "}
            <Link
              href="/jeddah"
              className="text-[#0284C7] underline font-semibold"
            >
              جدة
            </Link>{" "}
            أو{" "}
            <Link
              href="/makkah"
              className="text-[#0284C7] underline font-semibold"
            >
              مكة المكرمة
            </Link>{" "}
            أو{" "}
            <Link
              href="/taif"
              className="text-[#0284C7] underline font-semibold"
            >
              الطائف
            </Link>
            .
          </p>

          {/* 4-Step Timeline */}
          <section className="mt-10 pt-8 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              4 خطوات سريعة لبيع سيارتك من أمام المنزل في نفس اليوم
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HOME_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 flex items-start gap-4 transition-all duration-200 hover:border-sky-200 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sky-400 font-extrabold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#0284C7]" />
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* WhatsApp Checklist */}
          <section className="mt-12 rounded-3xl border border-sky-200 bg-sky-50/60 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5">
              ماذا ترسل في رسالة الواتساب لتحصل على أدق وأعلى سعر؟
            </h2>
            <ul className="space-y-3.5">
              {WHATSAPP_CHECKLIST.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Direct CTA */}
          <div className="mt-10 rounded-3xl bg-slate-900 p-6 sm:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl text-[#E8F2FE] sm:text-2xl font-extrabold   ">
                أرسل صور سيارتك الآن واستلم تسعيرتك خلال دقائق
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                نخدم جميع أحياء جدة ومكة والطائف على مدار الساعة — سطحة مجانية
                ودفع كاش فوري عند الاستلام.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16a34a] px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-[#15803d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تقييم فوري واتساب</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0284C7] px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-sky-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Related Internal Links */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-sm text-slate-700">
              تصفح أيضاً:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/scrap-car-brands"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
              >
                الماركات التي نشتريها
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
              >
                الدليل الشامل لبيع السيارات المصدومة
              </Link>
              <Link
                href="/isqat-lohat"
                className="rounded-full bg-sky-50 border border-sky-200 px-5 py-2.5 text-sm font-bold text-[#0284C7] hover:bg-sky-100 transition-all"
              >
                إسقاط اللوحات عبر أبشر
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
