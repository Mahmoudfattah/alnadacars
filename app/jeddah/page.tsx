import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تقييم وبيع سيارتي المصدومة أو التشليح في جدة",
  );

export const metadata: Metadata = {
  title:
    "شراء سيارات مصدومة للبيع في جدة وتشليح بأعلى سعر كاش فوري | بيعها كاش 0562117196",
  description:
    "نشتري السيارات المصدومة والتالفة والمتعطلة والتشليح في جدة (الحمدانية، بريمان، أبحر، الصفا، المروة، السامر، الخمرة) بأعلى سعر كاش فوري خلال 30 دقيقة مع سطحة مجانية وإسقاط لوحات عبر أبشر: 0562117196.",
  keywords: [
    "سيارات مصدومة للبيع في جده",
    "سيارات مصدومه للبيع جده",
    "شراء سيارات مصدومة في جدة",
    "شراء سيارات تشليح جدة",
    "تشليح جدة الحمدانية",
    "تشليح بريمان جدة",
    "شراء سيارات متعطلة وسكراب جدة",
    "بيعها كاش جدة",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/jeddah",
  },
  openGraph: {
    title: "شراء سيارات مصدومة وتشليح في جدة كاش فوري | بيعها كاش",
    description:
      "هل لديك سيارة مصدومة أو تالفة أو متعطلة للبيع في جدة؟ نشتريها فوراً بأعلى سعر نقدي مع سطحة مجانية لجميع أحياء جدة وإنهاء إسقاط اللوحات عبر أبشر.",
    url: "https://ba3hacash.com/jeddah",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const JEDDAH_NEIGHBORHOODS = [
  "حي الحمدانية",
  "حي بريمان",
  "أبحر الشمالية والجنوبية",
  "حي الصفا",
  "حي المروة",
  "حي السامر",
  "حي النسيم",
  "حي الروضة",
  "حي الفيحاء",
  "حي السلامة",
  "حي الخمرة وجنوب جدة",
  "حي المحمدية والنعيم",
];

const SERVICES_JEDDAH = [
  {
    title: "شراء سيارات مصدومة في جدة",
    desc: "نشتري كافة السيارات المتضررة من الحوادث المرورية في جدة (صدمات أمامية، خلفية، جانبية، أو انقلاب) بأعلى تثمين نقدي فوري دون الحاجة لإصلاحها.",
  },
  {
    title: "شراء سيارات تشليح وسكراب بجدة (الحمدانية وبريمان)",
    desc: "تقييم عادل وفوري للسيارات التالفة بالكامل والقديمة والسكراب في جميع أحياء شمال وجنوب جدة مع سحب مجاني بالسطحة.",
  },
  {
    title: "شراء سيارات متعطلة (مكينة أو قير) وبدون فحص",
    desc: "سيارتك متعطلة في المكينة أو الجيربوكس أو منتهية الاستمارة والفحص الدوري؟ نشتريها فوراً في موقعك بجدة ونتكفل بإجراءات أبشر.",
  },
];

const FAQS_JEDDAH = [
  {
    q: "كيف أبيع سيارتي المصدومة في جدة بأعلى سعر كاش؟",
    a: "أرسل صور السيارة وموديلها وموقعك في جدة عبر الواتساب على الرقم 0562117196، وسنقدم لك أعلى تسعير كاش فوري خلال دقائق مع إرسال سطحة مجانية لاستلامها من أمام منزلك.",
  },
  {
    q: "هل توفرون سطحة مجانية لسحب السيارات في جميع أحياء جدة؟",
    a: "نعم، نوفر سطحة خاصة مجانية 100% لسحب السيارة المصدومة أو التالفة من كافة أحياء جدة (الحمدانية، بريمان، أبحر، الصفا، المروة، السامر، النسيم، والخمرة).",
  },
  {
    q: "هل تقومون بنقل الملكية أو إسقاط اللوحات الفوري في جدة عبر أبشر؟",
    a: "نعم بالتأكيد، نُنهي إجراءات نقل الملكية أو إسقاط اللوحات الفوري رسمياً عبر منصة أبشر في نفس يوم استلام السيارة ودفع المبلغ دون أي رسوم إضافية.",
  },
  {
    q: "هل تشترون السيارات في جدة لو الاستمارة منتهية أو بدون فحص دوري؟",
    a: "نعم، نشتري جميع السيارات المصدومة والتالفة والمتعطلة في جدة حتى لو كانت الاستمارة منتهية أو الفحص الدوري غير ساري المفعول.",
  },
];

export default function JeddahLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/jeddah#service",
        name: "شراء سيارات مصدومة وتشليح في جدة — بيعها كاش",
        description:
          "خدمة شراء السيارات المصدومة والتالفة والمتعطلة والتشليح في جميع أحياء جدة (الحمدانية، بريمان، أبحر، الصفا، المروة، السامر، الخمرة) بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://ba3hacash.com/jeddah",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/jeddah#faq",
        mainEntity: FAQS_JEDDAH.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية — بيعها كاش",
            item: "https://ba3hacash.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "شراء سيارات مصدومة وتشليح في جدة",
            item: "https://ba3hacash.com/jeddah",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        dir="rtl"
        className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-16"
      >
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
          <nav
            aria-label="مسار الصفحة"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-500"
          >
            <Link
              href="/"
              className="hover:text-[#0284C7] transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>الرئيسية (بيعها كاش)</span>
            </Link>
            <span>/</span>
            <span className="text-[#0284C7] font-bold">
              شراء سيارات مصدومة وتشليح في جدة
            </span>
          </nav>
        </div>

        {/* Hero Card */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
              <MapPin className="w-4 h-4" />
              <span>
                تغطية شاملة لجميع أحياء شمال وجنوب جدة على مدار 24 ساعة
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
              شراء سيارات مصدومة وتشليح في جدة{" "}
              <span className="text-[#0284C7]">
                بأعلى سعر كاش فوري وسطحة مجانية
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
              هل لديك <strong>سيارة مصدومة للبيع في جدة</strong> أو تبحث عن{" "}
              <strong>أفضل مشتري سيارات تشليح وتالفة ومتعطلة في جدة</strong>؟ في{" "}
              <strong>بيعها كاش</strong> نشتري كافة أنواع السيارات في{" "}
              <strong>
                الحمدانية، بريمان، أبحر، الصفا، المروة، السامر، والخمرة
              </strong>{" "}
              بأعلى تثمين نقدي فوري خلال 30 دقيقة، مع{" "}
              <strong>سطحة خاصة مجانية</strong> لسحب السيارة من أمام منزلك
              وإنهاء إجراءات نقل الملكية و
              <strong>إسقاط اللوحات الفوري عبر أبشر</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#16a34a] hover:bg-[#15803d] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>أرسل صور سيارتك في جدة عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>اتصل بمندوب جدة:</span>
                <span dir="ltr" className="text-sky-300">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* 3 Highlight Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <Clock className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    معاينة ودفع كاش خلال 30 دقيقة
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    أعلى سعر شراء نقدي أو تحويل بنكي فوري في جدة
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <Truck className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    سطحة مجانية لجميع أحياء جدة
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    سحب مجاني من الحمدانية، بريمان، أبحر، الصفا، والخمرة
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <ShieldCheck className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    إسقاط لوحات فوري عبر أبشر
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    إنهاء الإجراءات النظامية وإخلاء المسؤولية في نفس اليوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Jeddah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7]">
              خدماتنا في محافظة جدة
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              نشتري جميع حالات السيارات المصدومة والتالفة والتشليح في جدة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_JEDDAH.map((srv, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods in Jeddah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              أحياء ومناطق جدة المشمولة بخدمة السطحة المجانية والتقييم الفوري
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
              يصلك مندوب التقييم والسطحة الخاصة مجاناً خلال دقائق أينما كانت
              سيارتك المصدومة أو المتعطلة في شمال أو وسط أو جنوب جدة:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {JEDDAH_NEIGHBORHOODS.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-sky-50 border border-sky-200/80 px-4 py-2 text-xs sm:text-sm font-bold text-slate-800"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ in Jeddah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة — فرع جدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              أسئلة متكررة حول بيع السيارات المصدومة والتشليح في جدة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_JEDDAH.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-50 border border-slate-200/70 p-5"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-bold text-slate-700">
                تصفح أيضاً فروعنا الأخرى في المنطقة الغربية:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#16a34a] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#15803d] transition-all"
                >
                  تواصل واتساب الآن
                </a>
                <Link
                  href="/makkah"
                  className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع مكة المكرمة
                </Link>
                <Link
                  href="/taif"
                  className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع الطائف
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
