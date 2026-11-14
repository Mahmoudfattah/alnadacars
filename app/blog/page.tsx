// app/blog/page.tsx (مشروع ba3hacash.com)
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
  FileText,
  HelpCircle,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، قرأت دليل بيع السيارات المصدومة في مدونة بيعها كاش وأرغب في تقييم سيارتي",
  );

export const metadata: Metadata = {
  title:
    "مدونة بيعها كاش | دليلك الشامل لبيع السيارات المصدومة والتشليح في جدة والطائف ومكة",
  description:
    "دليل شامل ومحدث لعام 2026 حول كيفية بيع السيارات المصدومة والتالفة والمتعطلة في جدة والطائف ومكة المكرمة بأعلى سعر كاش، مع شرح خطوات إسقاط اللوحات عبر أبشر.",
  keywords: [
    "كيف ابيع سيارتي المصدومة",
    "خطوات بيع سيارة تشليح في السعودية",
    "شراء سيارات مصدومة في جدة والطائف",
    "طريقة اسقاط اللوحات عند بيع السيارة تشليح",
    "هل الافضل اصلاح السيارة المصدومة او بيعها",
    "مدونة بيعها كاش",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/blog",
  },
  openGraph: {
    title:
      "دليلك الشامل لبيع السيارات المصدومة والتشليح في جدة والطائف ومكة | مدونة بيعها كاش",
    description:
      "متى يكون بيع السيارة المصدومة أفضل من إصلاحها؟ وما هي الأوراق المطلوبة لإسقاط اللوحات الفوري عبر أبشر؟ اقرأ الدليل الكامل.",
    url: "https://ba3hacash.com/blog",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "article",
  },
};

const ARTICLE_SECTIONS = [
  {
    title: "1. متى يكون بيع السيارة المصدومة أو المتعطلة أفضل من إصلاحها؟",
    content:
      "عند تعرض السيارة لحادث مروري قوي أو عطل كبير في المحرك (تخبيط مكينة) أو الجيربوكس في جدة أو الطائف أو مكة، يقع المالك في حيرة بين إصلاحها أو بيعها بحالتها الراهنة. القاعدة الذهبية التي ينصح بها خبراء تثمين المركبات هي: إذا تجاوزت تكلفة الإصلاح وقطع الغيار 40% من القيمة السوقية للسيارة، أو إذا وصل الضرر إلى الشاصي والإيرباقات، فإن بيعها فوراً كسيارة مصدومة أو تشليح يوفر عليك آلاف الريالات وأسابيع من الانتظار في الورش، ويمنحك سيولة نقدية فورية (كاش) لشراء سيارة بديلة.",
  },
  {
    title: "2. كيف تحصل على أعلى سعر كاش لسيارتك المصدومة في جدة والطائف ومكة؟",
    content:
      "للحصول على أعلى تسعيرة عادلة لسيارتك دون بخس في قيمتها، تجنب الوسطاء غير المعتمدين الذين يفرضون رسوم سطحة أو يماطلون في نقل الملكية. في «بيعها كاش» نعتمد تسعيراً شفافاً يقيّم الأجزاء السليمة في المركبة (المحركات، القير، الدفرنس، القطع الخارجية والداخلية) حسب موديل ونوع السيارة (تويوتا، هيونداي، كيا، جمس، فورد، والسيارات الصينية)، مما يضمن لك سعراً يفوق متوسط سوق التشليح التقليدي.",
  },
  {
    title:
      "3. الأوراق والإجراءات المطلوبة لبيع سيارة تشليح وإسقاط لوحاتها عبر أبشر",
    content:
      "أصبح بيع السيارة التالفة وإسقاط لوحاتها في المملكة العربية السعودية أسهل وأسرع من أي وقت مضى عبر منصة أبشر؛ حيث لا يُشترط وجود فحص دوري ساري المفعول، وحتى في حال انتهاء رخصة السير (الاستمارة) نتولى إنهاء إجراءات الإسقاط النظامي واستلام اللوحات لتسليمها للجهات المختصة في نفس يوم استلام السيارة، مما يخلي مسؤوليتك المرورية والقانونية فوراً.",
  },
];

const CHECKLIST_ITEMS = [
  "تصوير السيارة المصدومة أو المتعطلة من 4 جهات واضحة وإرسالها عبر واتساب (0562117196).",
  "تحديد نوع السيارة، سنة الصنع (الموديل)، وحالة المحرك والقير.",
  "إرسال موقع السيارة في جدة (الحمدانية، أبحر، الصفا...) أو مكة أو الطائف (الحوية، شهار...).",
  "تجهيز صورة الهوية الوطنية أو الإقامة وصورة الاستمارة لإتمام المبايعة وإسقاط اللوحات.",
  "استلام المبلغ كاش فوري أو تحويل بنكي مباشر قبل رفع السيارة على السطحة المجانية.",
];

export default function Ba3haCashBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://ba3hacash.com/blog#article-1",
        headline:
          "دليلك الشامل لبيع السيارات المصدومة والتالفة والتشليح في جدة والطائف ومكة بأعلى سعر كاش (دليل 2026)",
        description:
          "دليل عملي يوضح متى تبيع سيارتك المصدومة بدلاً من إصلاحها، وكيف تحصل على أعلى تثمين كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر في جدة ومكة والطائف.",
        datePublished: "2026-11-12T10:00:00+03:00",
        dateModified: "2026-11-12T10:00:00+03:00",
        author: {
          "@type": "Organization",
          name: "فريق خبراء تقييم السيارات — بيعها كاش",
          url: "https://ba3hacash.com/",
        },
        publisher: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://ba3hacash.com/blog",
        },
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
            name: "المدونة والدليل الإرشادي",
            item: "https://ba3hacash.com/blog",
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 ">
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
              المدونة والدليل الإرشادي لبيع السيارات المصدومة
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0284C7] mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>الدليل الإرشادي الشامل — المقال الأول</span>
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>تحديث نوفمبر 2026</span>
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>وقت القراءة: 3 دقائق</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-slate-900">
              دليلك الشامل لبيع السيارات المصدومة والتشليح في{" "}
              <span className="text-[#0284C7]">
                جدة والطائف ومكة بأعلى سعر كاش وإسقاط لوحاتها عبر أبشر
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              يواجه الكثير من ملاك السيارات بعد الحوادث المرورية أو الأعطال
              الميكانيكية الجسيمة تساؤلات مهمة حول{" "}
              <strong>
                أفضل طريقة لبيع السيارة المصدومة أو التالفة دون خسارة
              </strong>
              ، وكيفية ضمان نقل الملكية أو{" "}
              <strong>إسقاط اللوحات الفوري عبر أبشر</strong> بطريقة نظامية
              وآمنة. في هذا الدليل العملي نضع بين يديك خلاصة خبرتنا الميدانية في{" "}
              <strong>جدة ومكة المكرمة والطائف</strong>.
            </p>

            {/* Quick Summary Cards */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/60 flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    تثمين عادل ومجاني
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    نقيّم السيارة حسب حالة القطع السليمة وموديل المركبة
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/60 flex items-start gap-3">
                <Truck className="w-6 h-6 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    سحب مجاني بالسطحة
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    لا تتحمل أي تكلفة لنقل السيارة من موقع الحادث أو المنزل
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/60 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    إخلاء مسؤولية رسمي
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    إسقاط فوري للوحات عبر منصة أبشر في نفس اليوم
                  </p>
                </div>
              </div>
            </div>

            {/* Article Body Sections */}
            <div className="space-y-8 mt-8">
              {ARTICLE_SECTIONS.map((sec, idx) => (
                <section
                  key={idx}
                  className="rounded-2xl bg-slate-50/70 border border-slate-200/70 p-6 sm:p-8"
                >
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    {sec.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    {sec.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Checklist Box */}
            <section className="mt-8 rounded-3xl bg-sky-50/70 border border-sky-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>قائمة التحقق السريعة قبل البيع</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                5 خطوات لبيع سيارتك المصدومة واستلام الكاش خلال 30 دقيقة
              </h2>
              <ul className="space-y-3">
                {CHECKLIST_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Internal Links Hub to All Branches & Pages */}
            <section className="mt-10 pt-8 border-t border-slate-200">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                روابط سريعة لخدماتنا وفروعنا في المنطقة الغربية:
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/jeddah"
                  className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-all"
                >
                  فرع جدة (شراء سيارات مصدومة وتشليح)
                </Link>
                <Link
                  href="/makkah"
                  className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-all"
                >
                  فرع مكة المكرمة (تشليح مكة)
                </Link>
                <Link
                  href="/taif"
                  className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-all"
                >
                  فرع الطائف والحوية
                </Link>
                <Link
                  href="/scrap-car-brands"
                  className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-all"
                >
                  شراء جميع ماركات السيارات المصدومة
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-all"
                >
                  الصفحة الرئيسية — بيعها كاش
                </Link>
              </div>
            </section>

            {/* Bottom CTA Banner */}
            <div className="mt-10 rounded-3xl bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  هل ترغب في معرفة سعر سيارتك المصدومة الآن؟
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  أرسل صور السيارة عبر واتساب واحصل على تسعير فوري ومجاني خلال
                  دقائق.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-sm font-bold text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تقييم فوري واتساب</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-bold text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
