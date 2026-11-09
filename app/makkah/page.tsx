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
    "السلام عليكم، أرغب في تقييم وبيع سيارتي المصدومة أو التشليح في مكة المكرمة",
  );

export const metadata: Metadata = {
  title:
    "تشليح مكة وشراء سيارات مصدومة وتالفة في مكة المكرمة كاش فوري | بيعها كاش 0562117196",
  description:
    "نشتري السيارات المصدومة والتالفة والمتعطلة وتشليح مكة المكرمة (الشرائع، العزيزية، العوالي، المعابدة، النوارية، الجموم) بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر: 0562117196.",
  keywords: [
    "تشليح مكة",
    "شراء سيارات مصدومة في مكة",
    "شراء سيارات تشليح مكة المكرمة",
    "سيارات مصدومة للبيع في مكة",
    "تشليح الشرائع مكة",
    "شراء سيارات تالفة ومتعطلة مكة",
    "اسقاط لوحات سيارات مكة",
    "بيعها كاش مكة",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/makkah",
  },
  openGraph: {
    title: "تشليح مكة وشراء سيارات مصدومة في مكة المكرمة كاش فوري | بيعها كاش",
    description:
      "هل لديك سيارة مصدومة أو متعطلة أو تالفة للبيع في مكة المكرمة؟ نشتريها فوراً بأعلى سعر نقدي مع سطحة مجانية لجميع أحياء مكة وإنهاء إسقاط اللوحات عبر أبشر.",
    url: "https://ba3hacash.com/makkah",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const MAKKAH_NEIGHBORHOODS = [
  "حي الشرائع",
  "حي العزيزية",
  "حي العوالي",
  "حي المعابدة",
  "حي النوارية",
  "بطحاء قريش",
  "حي الكعكية",
  "حي الشوقية",
  "حي العتيبية",
  "حي الزاهر",
  "حي الحمراء",
  "محافظة الجموم",
];

const SERVICES_MAKKAH = [
  {
    title: "شراء سيارات تشليح في مكة المكرمة",
    desc: "نشتري كافة سيارات التشليح والسكراب والسيارات التالفة بالكامل في جميع أحياء مكة المكرمة والجموم بأعلى تثمين نقدي فوري يفوق متوسط السوق.",
  },
  {
    title: "شراء سيارات مصدومة من الحوادث بمكة",
    desc: "سواء كانت سيارتك مصدومة من الأمام أو الخلف أو متضررة من حادث مروري في مكة، نعاينها في موقعك ونشتريها فوراً دون الحاجة لإصلاحها.",
  },
  {
    title: "شراء سيارات متعطلة وبدون فحص أو استمارة",
    desc: "نشتري السيارات المتعطلة في المكينة أو الجيربوكس والسيارات المتوقفة أو منتهية الاستمارة في مكة المكرمة مع التكفل الكامل بإجراءات أبشر.",
  },
];

const FAQS_MAKKAH = [
  {
    q: "كيف أبيع سيارتي تشليح أو مصدومة في مكة المكرمة بأعلى سعر؟",
    a: "تواصل معنا عبر الواتساب أو الاتصال المباشر على الرقم 0562117196 وأرسل صور السيارة وموديلها وموقعك في مكة المكرمة، وسنقدم لك عرض سعر كاش فوري خلال دقائق مع إرسال سطحة مجانية.",
  },
  {
    q: "هل توفرون سطحة مجانية لسحب السيارة من جميع أحياء مكة المكرمة والجموم؟",
    a: "نعم، نوفر سطحة خاصة مجانية تماماً لسحب ونقل السيارة المصدومة أو المتعطلة من أمام منزلك أو من الورشة في الشرائع، العزيزية، العوالي، النوارية، الكعكية، والجموم.",
  },
  {
    q: "هل تقومون بإسقاط اللوحات ونقل الملكية فوراً في مكة المكرمة؟",
    a: "نعم بالتأكيد، نتولى إنهاء إجراءات إسقاط اللوحات والمركبة رسمياً عبر منصة أبشر في نفس يوم الشراء دون أي رسوم إضافية على المالك.",
  },
  {
    q: "هل تشترون السيارات ذات المكينة المخبطة أو القير العطلان في مكة؟",
    a: "نعم، نشتري جميع السيارات المتعطلة ميكانيكياً أو كهربائياً والسيارات القديمة والسكراب في مكة المكرمة بأفضل سعر نقدي فوري.",
  },
];

export default function MakkahLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/makkah#service",
        name: "تشليح مكة وشراء سيارات مصدومة وتالفة في مكة المكرمة — بيعها كاش",
        description:
          "خدمة شراء السيارات المصدومة والتالفة والمتعطلة وتشليح السيارات في مكة المكرمة (الشرائع، العزيزية، العوالي، المعابدة، النوارية) بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "مكة المكرمة",
        },
        url: "https://ba3hacash.com/makkah",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/makkah#faq",
        mainEntity: FAQS_MAKKAH.map((item) => ({
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
            name: "تشليح مكة وشراء سيارات مصدومة في مكة المكرمة",
            item: "https://ba3hacash.com/makkah",
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
              تشليح مكة وشراء سيارات مصدومة في مكة المكرمة
            </span>
          </nav>
        </div>

        {/* Hero Card */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
              <MapPin className="w-4 h-4" />
              <span>
                خدمة فورية في كافة أحياء مكة المكرمة والجموم على مدار 24 ساعة
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
              تشليح مكة وشراء سيارات مصدومة وتالفة{" "}
              <span className="text-[#0284C7]">
                في مكة المكرمة بأعلى سعر كاش فوري
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
              هل لديك سيارة مصدومة أو تالفة أو متعطلة وتبحث عن{" "}
              <strong>أفضل تشليح لشراء السيارات في مكة المكرمة</strong>؟ في{" "}
              <strong>بيعها كاش</strong> نشتري جميع أنواع السيارات المصدومة
              والتالفة والسكراب في{" "}
              <strong>
                الشرائع، العزيزية، العوالي، النوارية، الكعكية، والمعابدة
              </strong>{" "}
              بأعلى سعر كاش فوري خلال 30 دقيقة، مع <strong>سطحة مجانية</strong>{" "}
              من أمام منزلك وإنهاء إجراءات نقل الملكية و
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
                <span>أرسل صور سيارتك في مكة عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>اتصل بمندوب مكة المكرمة:</span>
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
                    دفع كاش فوري خلال 30 دقيقة
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    أعلى تثمين نقدي أو تحويل بنكي فوري في مكة المكرمة
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <Truck className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    سطحة مجانية لجميع أحياء مكة
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    سحب مجاني من الشرائع، العزيزية، العوالي، النوارية، والكعكية
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
                    إخلاء مسؤولية المالك رسمياً في نفس اليوم بدون رسوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Makkah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7]">
              خدماتنا في العاصمة المقدسة مكة المكرمة
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              نشتري كافة أنواع السيارات المصدومة والتشليح في مكة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_MAKKAH.map((srv, idx) => (
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

        {/* Neighborhoods in Makkah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              أحياء ومناطق مكة المكرمة المشمولة بالسطحة المجانية
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
              أينما كانت سيارتك المتعطلة أو المصدومة داخل أحياء مكة المكرمة أو
              الجموم، يصلك مندوب التقييم والسطحة الخاصة مجاناً:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {MAKKAH_NEIGHBORHOODS.map((area) => (
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

        {/* FAQ in Makkah */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة — فرع مكة المكرمة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              أسئلة متكررة حول تشليح وشراء السيارات المصدومة في مكة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_MAKKAH.map((item, i) => (
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
                جاهز لبيع سيارتك المصدومة أو التشليح في مكة المكرمة اليوم؟
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
