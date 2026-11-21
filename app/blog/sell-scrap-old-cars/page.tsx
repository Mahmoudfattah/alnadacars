import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Truck,
  Banknote,
  AlertTriangle,
  CarFront,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، قرأت مقال بيع السيارات السكراب والقديمة في بيعها كاش وأرغب في تثمين سيارتي",
  );

export const metadata: Metadata = {
  title: "شراء سيارات سكراب وقديمة بجدة ومكة والطائف كاش فوري | 0562117196",
  description:
    "عندك سيارة قديمة أو متوقفة أو سكراب في جدة أو مكة أو الطائف؟ نشتريها نقداً بأعلى سعر مع سطحة مجانية وإسقاط لوحات نظامي عبر أبشر (سواء الاستمارة سارية أو منتهية). اتصل: 0562117196",
  keywords: [
    "شراء سيارات سكراب بجدة",
    "شراء سيارات قديمة جدة ومكة والطائف",
    "بيع سيارة متوقفة تشليح",
    "اسقاط لوحات سيارة قديمة ابشر",
    "بيعها كاش سيارات سكراب",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/blog/sell-scrap-old-cars",
  },
  openGraph: {
    title:
      "شراء سيارات سكراب وقديمة بجدة ومكة والطائف: كيف تتخلص من سيارتك المتوقفة كاش؟",
    description:
      "دليل عملي لبيع السيارات القديمة والسكراب والمتوقفة في جدة ومكة والطائف كاش فوري مع سطحة مجانية وإسقاط نظامي عبر أبشر.",
    url: "https://ba3hacash.com/blog/sell-scrap-old-cars",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "article",
  },
};

const VALUATION_FACTORS = [
  {
    title: "حالة المحرك والقير",
    desc: "حتى لو السيارة متوقفة منذ فترة، وجود مكينة أو قير سليم يرفع سعر التثمين بشكل ملحوظ.",
    icon: CarFront,
  },
  {
    title: "نوع الماركة والموديل",
    desc: "سيارات تويوتا وهيونداي وكيا وجمس وفورد لها طلب مرتفع في سوق قطع الغيار بجدة ومكة والطائف.",
    icon: Banknote,
  },
  {
    title: "اكتمال البودي والقطع الداخلية",
    desc: "الأبواب والأنوار والكمبيوتر والداخلية السليمة تُحتسب لصالحك عند التسعير النهائي.",
    icon: CheckCircle2,
  },
  {
    title: "سلامة الوضع النظامي",
    desc: "قبول المركبة بإجراءات نظامية 100% عبر أبشر سواء كانت الاستمارة سارية أو منتهية الصلاحية.",
    icon: ShieldCheck,
  },
];

const COMPARISON_ROWS = [
  {
    aspect: "المسؤولية والغرامات",
    keep: "مخالفات وقوف طويل أو سحب بلدي وتراكم رسوم التجديد",
    sell: "إسقاط لوحات فوري عبر أبشر وإخلاء مسؤولية نهائي",
  },
  {
    aspect: "قيمة السيارة مع الوقت",
    keep: "تآكل القطع والبطارية والهيكل تحت الشمس وانخفاض السعر",
    sell: "تحويلها إلى مبلغ نقدي فوري (كاش) بأعلى تقييم حالي",
  },
  {
    aspect: "تكلفة السحب والنقل",
    keep: "تتحمل أجور السطحة والذهاب إلى الورش أو التشاليح بنفسك",
    sell: "سطحة مجانية تصل إلى باب منزلك في جدة ومكة والطائف",
  },
];

export default function SellScrapOldCarsArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://ba3hacash.com/blog/sell-scrap-old-cars#article",
        headline:
          "شراء سيارات سكراب وقديمة بجدة ومكة والطائف: كيف تتخلص من سيارتك المتوقفة كاش؟",
        description:
          "دليل عملي لبيع السيارات القديمة والسكراب والمتوقفة في جدة ومكة والطائف بأعلى سعر كاش مع سطحة مجانية وإسقاط لوحات نظامي عبر أبشر.",
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
        mainEntityOfPage: "https://ba3hacash.com/blog/sell-scrap-old-cars",
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
            name: "شراء سيارات سكراب وقديمة بجدة ومكة والطائف",
            item: "https://ba3hacash.com/blog/sell-scrap-old-cars",
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
            شراء سيارات سكراب وقديمة بجدة ومكة والطائف
          </span>
        </nav>
      </div>

      {/* Article Section */}
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5">
              <BookOpen className="w-4 h-4" />
              <span>دليل السيارات السكراب والقديمة</span>
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
            شراء سيارات سكراب وقديمة بجدة ومكة والطائف:{" "}
            <span className="text-[#0284C7]">
              كيف تتخلص من سيارتك المتوقفة كاش مع إسقاط أبشر؟
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-4xl">
            ترك سيارة قديمة أو متعطلة أمام المنزل لشهور طويلة يُعرّض المالك
            لخسارة قيمتها السوقية ومخالفات الوقوف الطويل وتراكم رسوم التجديد. في{" "}
            <strong>بيعها كاش</strong> نشتري السيارات السكراب والقديمة والتالفة
            في{" "}
            <Link
              href="/jeddah"
              className="text-[#0284C7] underline font-semibold"
            >
              جدة
            </Link>{" "}
            و
            <Link
              href="/makkah"
              className="text-[#0284C7] underline font-semibold"
            >
              مكة المكرمة
            </Link>{" "}
            و
            <Link
              href="/taif"
              className="text-[#0284C7] underline font-semibold"
            >
              الطائف
            </Link>{" "}
            نقداً مع سحب مجاني بسطحة خاصة و
            <Link
              href="/isqat-lohat"
              className="text-[#0284C7] underline font-semibold"
            >
              إسقاط لوحات نظامي عبر أبشر
            </Link>{" "}
            سواء كانت الاستمارة سارية أو منتهية.
          </p>

          {/* 2x2 Valuation Grid */}
          <section className="mt-10 pt-8 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              كيف نحدد سعر السيارة السكراب أو القديمة بدون بخس؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUATION_FACTORS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 flex items-start gap-4 transition-all duration-200 hover:border-sky-200 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                مقارنة بين ترك السيارة القديمة متوقفة وبيعها سكراب كاش
              </h2>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
                <Truck className="w-4 h-4" />
                <span>سطحة مجانية</span>
              </span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-right border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold">وجه المقارنة</th>
                    <th className="p-4 font-bold">ترك السيارة متوقفة</th>
                    <th className="p-4 font-bold">البيع لـ «بيعها كاش»</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.aspect}
                      className="odd:bg-white even:bg-slate-50/80"
                    >
                      <td className="p-4 font-bold text-slate-900">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-slate-600">{row.keep}</td>
                      <td className="p-4 font-semibold text-emerald-700">
                        {row.sell}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Legal Note */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-slate-800">
              <strong>تنبيه نظامي مهم:</strong> جميع عمليات شراء السيارات
              السكراب والقديمة تتم بإجراءات رسمية 100% عبر منصة{" "}
              <strong>أبشر</strong> (بوجود الاستمارة سواء كانت سارية أو منتهية)
              لضمان إخلاء مسؤوليتك المرورية فور استلام المبلغ.
            </p>
          </div>

          {/* Direct CTA */}
          <div className="mt-10 rounded-3xl bg-slate-900 p-6 sm:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl text-[#E8F2FE] sm:text-2xl font-extrabold">
                جاهز لتثمين سيارتك القديمة أو السكراب الآن؟
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                أرسل صور السيارة عبر واتساب أو اتصل بنا مباشرة لتحديد أعلى سعر
                كاش مع سطحة مجانية في جدة ومكة والطائف.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0284C7] px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-sky-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16a34a] px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-[#15803d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تثمين عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Related Internal Links */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-sm text-slate-700">
              روابط تهمك:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/jeddah"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
              >
                شراء سيارات مصدومة جدة
              </Link>
              <Link
                href="/makkah"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
              >
                تشليح وشراء سيارات مكة
              </Link>
              <Link
                href="/taif"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
              >
                شراء سيارات مصدومة الطائف
              </Link>
              <Link
                href="/isqat-lohat"
                className="rounded-full bg-sky-50 border border-sky-200 px-5 py-2.5 text-sm font-bold text-[#0284C7] hover:bg-sky-100 transition-all"
              >
                إسقاط اللوحات الفوري
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
