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
    "السلام عليكم، أرغب في تقييم وبيع سيارتي المصدومة أو التشليح في الطائف",
  );

export const metadata: Metadata = {
  title:
    "شراء سيارات مصدومة وتشليح في الطائف بأعلى سعر كاش فوري | بيعها كاش 0562117196",
  description:
    "نشتري السيارات المصدومة والتالفة والمتعطلة والتشليح في الطائف (الحوية، شهار، القيم، السيل، الهدا) بأعلى سعر كاش فوري خلال 30 دقيقة مع سطحة مجانية وإسقاط لوحات فوري عبر أبشر: 0562117196.",
  keywords: [
    "سيارات مصدومة للبيع في الطائف",
    "شراء سيارات مصدومة في الطائف",
    "شراء سيارات تشليح الطائف",
    "تشليح الطائف الحوية",
    "شراء سيارات تالفة ومتعطلة الطائف",
    "ارقام شراء سيارات مصدومة الطائف",
    "اسقاط لوحات سيارات الطائف",
    "بيعها كاش الطائف",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/taif",
  },
  openGraph: {
    title: "شراء سيارات مصدومة وتشليح في الطائف كاش فوري | بيعها كاش",
    description:
      "هل لديك سيارة مصدومة أو متعطلة للبيع في الطائف؟ نشتريها فوراً بأعلى سعر نقدي مع سطحة مجانية من موقعك في جميع أحياء الطائف وإنهاء إسقاط اللوحات عبر أبشر.",
    url: "https://ba3hacash.com/taif",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const TAIF_NEIGHBORHOODS = [
  "الحوية",
  "حي شهار",
  "حي القيم",
  "حي الوسام",
  "حي الشفا",
  "حي الهدا",
  "حي الفيصلية",
  "السيل الصغير والكبير",
  "حي جبرة",
  "حي المثناة",
  "حي السلامة",
  "حي العقيق",
];

const SERVICES_TAIF = [
  {
    title: "شراء سيارات مصدومة في الطائف",
    desc: "نشتري جميع السيارات المتضررة من الحوادث في الطائف (سواء صدمات أمامية، خلفية، أو انقلاب) بأعلى تثمين نقدي فوري دون الحاجة لإصلاحها.",
  },
  {
    title: "شراء سيارات تشليح وسكراب بالحوية والطائف",
    desc: "تقييم عادل وشراء فوري للسيارات التالفة بالكامل والقديمة والسكراب في الطائف والحوية مع التكفل الكامل بنقلها.",
  },
  {
    title: "شراء سيارات متعطلة (مكينة أو قير) بالطائف",
    desc: "سيارتك متعطلة في المكينة أو الجيربوكس أو متوقفة بدون فحص دوري أو استمارة سارية؟ نشتريها بحالتها الراهنة فوراً.",
  },
];

const FAQS_TAIF = [
  {
    q: "كيف أبيع سيارتي المصدومة في الطائف بأعلى سعر؟",
    a: "كل ما عليك هو إرسال صور السيارة وموديلها وموقعك في الطائف عبر الواتساب على الرقم 0562117196، وسنقدم لك أعلى تسعير كاش فوري خلال دقائق مع إرسال سطحة مجانية لاستلامها.",
  },
  {
    q: "هل توفرون سطحة مجانية لسحب السيارات المصدومة من أحياء الطائف والحوية؟",
    a: "نعم، نوفر سطحة خاصة مجانية 100% لسحب السيارة المصدومة أو المتعطلة من أمام منزلك أو من الورشة في الحوية، شهار، القيم، السيل، وكافة أحياء الطائف.",
  },
  {
    q: "هل تقومون بنقل الملكية أو إسقاط اللوحات فوراً في الطائف؟",
    a: "نعم بالتأكيد، نُنهي إجراءات نقل الملكية أو إسقاط اللوحات الفوري رسمياً عبر منصة أبشر في نفس يوم استلام السيارة ودفع المبلغ دون أي رسوم إضافية.",
  },
  {
    q: "هل تشترون السيارات في الطائف لو الاستمارة منتهية أو بدون فحص؟",
    a: "نعم، نشتري جميع السيارات المصدومة والتالفة والمتعطلة في الطائف حتى لو كانت الاستمارة منتهية أو الفحص الدوري غير ساري.",
  },
];

export default function TaifLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/taif#service",
        name: "شراء سيارات مصدومة وتشليح في الطائف — بيعها كاش",
        description:
          "خدمة شراء السيارات المصدومة والتالفة والمتعطلة والتشليح في مدينة الطائف والحوية بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "الطائف",
        },
        url: "https://ba3hacash.com/taif",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/taif#faq",
        mainEntity: FAQS_TAIF.map((item) => ({
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
            name: "شراء سيارات مصدومة وتشليح في الطائف",
            item: "https://ba3hacash.com/taif",
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
              شراء سيارات مصدومة وتشليح في الطائف
            </span>
          </nav>
        </div>

        {/* Hero Card */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
              <MapPin className="w-4 h-4" />
              <span>
                تغطية فورية لجميع أحياء الطائف والحوية على مدار الساعة
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
              شراء سيارات مصدومة وتشليح في الطائف{" "}
              <span className="text-[#0284C7]">
                بأعلى سعر كاش فوري وسطحة مجانية
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
              هل تبحث عن{" "}
              <strong>بيع سيارة مصدومة أو تالفة أو متعطلة في الطائف</strong>؟ في{" "}
              <strong>بيعها كاش</strong> نشتري كافة أنواع السيارات المصدومة
              وسيارات التشليح والسكراب في{" "}
              <strong>الطائف والحوية وشهار والقيم</strong> بأعلى تثمين نقدي فوري
              خلال 30 دقيقة، مع إرسال <strong>سطحة خاصة مجانية</strong> لسحب
              السيارة من أمام منزلك وإنهاء إجراءات نقل الملكية و
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
                <span>أرسل صور سيارتك في الطائف عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>اتصل بمندوب الطائف:</span>
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
                    استلام فوري للمبلغ كاش أو تحويل بنكي في الطائف
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <Truck className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    سطحة مجانية في كافة أحياء الطائف
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    سحب مجاني من الحوية، شهار، القيم، السيل، والهدا
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
                    إنهاء كافة الإجراءات المرورية النظامية بدون رسوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Taif */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7]">
              خدماتنا في محافظة الطائف
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              نشتري جميع حالات السيارات المصدومة والتالفة في الطائف
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_TAIF.map((srv, idx) => (
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

        {/* Neighborhoods in Taif */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              أحياء ومناطق الطائف التي نغطيها بالسطحة المجانية
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
              يصلك مندوب التقييم والسطحة الخاصة مجاناً أينما كانت سيارتك
              المتعطلة أو المصدومة في جميع أحياء وضواحي الطائف:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TAIF_NEIGHBORHOODS.map((area) => (
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

        {/* FAQ in Taif */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة — فرع الطائف</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              أسئلة متكررة حول بيع السيارات المصدومة والتشليح في الطائف
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_TAIF.map((item, i) => (
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
                جاهز لبيع سيارتك المصدومة أو التالفة في الطائف اليوم؟
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#16a34a] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#15803d] transition-all"
                >
                  تواصل واتساب الآن
                </a>
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
