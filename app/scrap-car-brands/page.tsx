// app/scrap-car-brands/page.tsx (مشروع ba3hacash.com)
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
  HelpCircle,
  Car,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تثمين وبيع سيارتي المصدومة حسب الماركة والموديل",
  );

export const metadata: Metadata = {
  title:
    "شراء سيارات تويوتا وهيونداي وجمس مصدومة وتشليح بجدة ومكة والطائف | بيعها كاش 0562117196",
  description:
    "نشتري جميع ماركات السيارات المصدومة والتالفة والتشليح في جدة ومكة والطائف بأعلى سعر كاش: تويوتا كامري، هايلوكس، كورولا، هيونداي إلنترا، سوناتا، جمس يوكن، فورد مع سطحة مجانية وإسقاط لوحات فوري.",
  keywords: [
    "شراء سيارات مصدومة حسب الماركة",
    "تشليح تويوتا مكة جدة الطائف",
    "شراء هيونداي وكيا مصدومة",
    "تشليح جمس وفورد وشيفروليه",
    "بيعها كاش ماركات السيارات",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/scrap-car-brands",
  },
  openGraph: {
    title: "شراء سيارات تويوتا وهيونداي وجمس مصدومة وتشليح بجدة ومكة والطائف | بيعها كاش",
    description:
      "نشتري جميع ماركات السيارات اليابانية، الكورية، الأمريكية، والصينية المصدومة والمتعطلة بأعلى تثمين نقدي فوري مع سطحة مجانية وإسقاط لوحات.",
    url: "https://ba3hacash.com/scrap-car-brands",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const BRAND_CATEGORIES = [
  {
    title: "1. السيارات اليابانية (تويوتا، نيسان، مازدا، إيسوزو)",
    models:
      "كامري، كورولا، يارس، هايلوكس، لاندكروزر، أفالون، فورتشنر، راف فور، نيسان باترول، صني، ألتيما، ددسن، مازدا 6، إيسوزو ديمكس.",
    details:
      "تتصدر السيارات اليابانية وخاصة تويوتا أعلى فئات التثمين النقدي عند البيع مصدومة أو تشليح نظراً لقيمة محركاتها وهياكلها العالية في جدة ومكة والطائف.",
  },
  {
    title: "2. السيارات الكورية (هيونداي وكيا)",
    models:
      "هيونداي إلنترا، سوناتا، أكسنت، توسان، سنتافي، أزيرا، كيا أوبتيما (K5)، سيراتو، ريو، سبورتاج، كادينزا.",
    details:
      "نشتري جميع موديلات هيونداي وكيا سواء تعرضت لحادث أمامي أو خلفي، أو كانت متعطلة بسبب تخبيط المكينة أو عطل القير، مع سحبها مجاناً من موقعك.",
  },
  {
    title: "3. السيارات الأمريكية والعائلية (جمس، شيفروليه، فورد)",
    models:
      "جمس يوكن، سييرا، شيفروليه تاهو، سوبربان، كابرس، ماليبو، سيلفرادو، فورد تورس، إكسبلورر، إكسبيديشن، كراون فكتوريا.",
    details:
      "تقييم خاص ومرتفع لسيارات الدفع الرباعي والعائلية الأمريكية المصدومة أو المتوقفة لفترة طويلة حتى لو كانت استمارتها منتهية.",
  },
  {
    title: "4. السيارات الصينية الحديثة (شانجان، إم جي، جيلي، هافال)",
    models:
      "شانجان ألسفن، إيدو، يوني تي، إم جي 5، إم جي 6، إم جي ZS، جيلي كول راي، إمجراند، هافال جوليان وH6.",
    details:
      "بسبب ارتفاع تكلفة إصلاح الحوادث للسيارات الصينية في الوكالات، نوفر لملاكها حلاً فورياً بشرائها بحالتها الراهنة نقداً وإسقاط لوحاتها عبر أبشر.",
  },
];

const FAQS_BRANDS = [
  {
    q: "لماذا يختلف سعر شراء السيارة المصدومة من ماركة لأخرى؟",
    a: "يعتمد تثمين السيارة المصدومة أو التالفة على مدى الطلب على أجزائها السليمة في السوق السعودي وموديل المركبة وحالة المحرك والجيربوكس والشاصي. السيارات الأكثر انتشاراً مثل تويوتا وهيونداي والجمس تحصل على تسعيرة نقدية مرتفعة جداً.",
  },
  {
    q: "هل تشترون السيارات الصينية المصدومة أو المتعطلة في جدة والطائف ومكة؟",
    a: "نعم، نشتري كافة السيارات الصينية المصدومة أو المتعطلة مثل شانجان، إم جي (MG)، جيلي، وهافال بجميع موديلاتها مع توفير سطحة مجانية وإسقاط اللوحات الفوري.",
  },
];

export default function ScrapCarBrandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/scrap-car-brands#service",
        name: "شراء جميع ماركات السيارات المصدومة والتشليح في جدة ومكة والطائف — بيعها كاش",
        description:
          "شراء سيارات تويوتا وهيونداي وكيا وجمس وفورد والسيارات الصينية المصدومة والمتعطلة والتشليح بأعلى تثمين نقدي فوري.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: ["جدة", "مكة المكرمة", "الطائف"],
        url: "https://ba3hacash.com/scrap-car-brands",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/scrap-car-brands#faq",
        mainEntity: FAQS_BRANDS.map((item) => ({
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
            name: "ماركات السيارات المصدومة والتشليح التي نشتريها",
            item: "https://ba3hacash.com/scrap-car-brands",
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
              ماركات السيارات المصدومة والتشليح التي نشتريها
            </span>
          </nav>
        </div>

        {/* Hero Card */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
              <Car className="w-4 h-4" />
              <span>تثمين عادل حسب نوع وموديل المركبة في جدة ومكة والطائف</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
              شراء جميع ماركات السيارات المصدومة والتالفة والتشليح{" "}
              <span className="text-[#0284C7]">بأعلى سعر كاش فوري</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
              سواء كانت سيارتك تويوتا، هيونداي، كيا، جمس، فورد، أو سيارة صينية
              تعرضت لحادث مروري أو عطل ميكانيكي كبير في المكينة أو القير؛ نحن نقدر
              القيمة الفعلية لماركة سيارتك وموديلها ولا نسعرها كحديد سكراب فقط.
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
                <span>أرسل نوع وموديل سيارتك عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>اتصل للتثمين الفوري:</span>
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
                    أعلى تثمين نقدي أو تحويل بنكي فوري بالمنطقة الغربية
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
                <Truck className="w-7 h-7 text-[#0284C7] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    سطحة مجانية للسيارات
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    سحب مجاني من موقعك في جدة ومكة والطائف
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

        {/* Brand Categories Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7]">
              التصنيفات والماركات المستهدفة
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              أبرز ماركات وموديلات السيارات التي نشتريها
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRAND_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#0284C7] bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                  أبرز الموديلات: {cat.models}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cat.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              كيف نحدد سعر شراء سيارتك حسب نوعها وحالتها؟
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-700 bg-slate-50">
                    <th className="p-4 font-bold text-sm">حالة المركبة عند البيع</th>
                    <th className="p-4 font-bold text-sm">العامل الأساسي في رفع السعر</th>
                    <th className="p-4 font-bold text-sm">الخدمة المشمولة مجاناً</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      صدمة أمامية أو خلفية (موديل حديث)
                    </td>
                    <td className="p-4">
                      سلامة المحرك أو الجيربوكس والأبواب والداخلية
                    </td>
                    <td className="p-4">سطحة مجانية + نقل ملكية أو إسقاط فوري</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      عطل مكينة (مخبطة) أو جيربوكس
                    </td>
                    <td className="p-4">
                      نظافة البودي والشاصي والقطع الخارجية والداخلية
                    </td>
                    <td className="p-4">سحب من الورشة أو المنزل بدون فحص دوري</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      تالف كلي / انقلاب / تشليح قديم
                    </td>
                    <td className="p-4">
                      نوع السيارة والقطع الميكانيكية القابلة للاستفادة
                    </td>
                    <td className="p-4">
                      إسقاط لوحات فوري عبر أبشر في نفس اليوم
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة حول ماركات السيارات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              أسئلة متكررة حول تسعير وشراء الماركات المختلفة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_BRANDS.map((item, i) => (
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

            {/* Regional Links & Navigation Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="font-bold text-sm text-slate-700">
                تصفح فروعنا الإقليمية المباشرة:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/jeddah"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
                >
                  فرع جدة
                </Link>
                <Link
                  href="/makkah"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
                >
                  فرع مكة المكرمة
                </Link>
                <Link
                  href="/taif"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-500 transition-all"
                >
                  فرع الطائف
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-sky-50 border border-sky-200 px-5 py-2.5 text-sm font-bold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  الرئيسية
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}