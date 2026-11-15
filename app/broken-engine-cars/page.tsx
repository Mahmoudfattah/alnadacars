// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   Phone,
//   MessageCircle,
//   CheckCircle2,
//   Truck,
//   ShieldCheck,
//   Clock,
//   Wrench,
//   ArrowRight,
//   HelpCircle,
// } from "lucide-react";

// const PHONE_DISPLAY = "0562117196";
// const PHONE_TEL = "+966562117196";
// const WHATSAPP_LINK =
//   "https://wa.me/966562117196?text=" +
//   encodeURIComponent(
//     "السلام عليكم، لدي سيارة متعطلة (مكينة / قير / بدون فحص) وأرغب في تقييمها وبيعها كاش مع إسقاط اللوحات",
//   );

// export const metadata: Metadata = {
//   title:
//     "شراء سيارات متعطلة ومخبطة وبدون فحص في جدة ومكة والطائف كاش | بيعها كاش",
//   description:
//     "نشتري السيارات المتعطلة (تخبيط مكينة، عطل قير، عطل كهرباء) والسيارات المتوقفة بدون فحص دوري أو استمارة سارية في جدة ومكة والطائف بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر: 0562117196.",
//   keywords: [
//     "شراء سيارات متعطلة جدة",
//     "شراء سيارات مخبطة الطائف",
//     "شراء سيارات عطل قير ومكينة",
//     "بيع سيارة بدون فحص دوري",
//     "بيع سيارة استمارتها منتهية",
//     "شراء سيارات متوقفة مكة",
//     "بيعها كاش",
//   ],
//   alternates: {
//     canonical: "https://ba3hacash.com/broken-engine-cars",
//   },
//   openGraph: {
//     title:
//       "شراء سيارات متعطلة ومخبطة وبدون فحص في جدة ومكة والطائف | بيعها كاش",
//     description:
//       "سيارتك متعطلة في المكينة أو الجيربوكس أو بدون فحص واستمارة؟ نشتريها فوراً بأعلى تثمين كاش مع سحب مجاني بالسطحة وإسقاط اللوحات عبر أبشر.",
//     url: "https://ba3hacash.com/broken-engine-cars",
//     siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
//     locale: "ar_SA",
//     type: "website",
//   },
// };

// const BROKEN_SERVICES = [
//   {
//     title: "01. شراء سيارات مخبطة (عطل مكينة أو قير)",
//     desc: "سواء كانت السيارة تعاني من تخبيط في المحرك أو تلف في الجيربوكس أو الدفرنس أو الكمبيوتر، نشتريها بحالتها الراهنة بأعلى سعر كاش دون أن تتكلف بإصلاحها.",
//   },
//   {
//     title: "02. شراء سيارات بدون فحص أو استمارة منتهية",
//     desc: "لا يشترط وجود فحص دوري ساري أو استمارة مجددة؛ نشتري السيارات المتوقفة والقديمة ونتولى إنهاء إجراءات إسقاط لوحاتها رسمياً عبر منصة أبشر.",
//   },
//   {
//     title: "03. سحب مجاني من الورشة أو أمام المنزل",
//     desc: "نصلك بسطحة خاصة مجانية لاستلام السيارة المتعطلة من داخل الورشة أو من أمام منزلك في جدة ومكة المكرمة والطائف مع دفع المبلغ كاش فوري.",
//   },
// ];

// const FAULT_BADGES = [
//   "سيارات مكينتها مخبطة",
//   "سيارات عطل جيربوكس أوتوماتيك",
//   "سيارات بدون فحص دوري",
//   "سيارات استمارتها منتهية",
//   "سيارات متوقفة منذ سنوات",
//   "سيارات أعطال كهرباء وكمبيوتر",
//   "سيارات حرارة ورأس مكينة",
//   "سحب مجاني من الورش والمنازل",
// ];

// const FAQS_BROKEN = [
//   {
//     q: "سيارتي واقفة في الورشة ومكينتها مخبطة، هل تشترونها من الورشة؟",
//     a: "نعم بالتأكيد، نرسل لك مندوب التقييم والسطحة المجانية إلى الورشة مباشرة في جدة أو مكة أو الطائف، وندفع لك المبلغ كاش فوري وننقل السيارة دون أي رسوم عليك.",
//   },
//   {
//     q: "هل أحتاج إلى عمل فحص دوري لبيع سيارة متعطلة أو تشليح؟",
//     a: "لا تحتاج إلى فحص دوري على الإطلاق؛ نحن نشتري السيارات المتعطلة والتالفة ونُنهي إجراءات إسقاط لوحاتها عبر أبشر بدون اشتراط الفحص الدوري.",
//   },
//   {
//     q: "كيف يتم تحديد سعر السيارة المتعطلة في المكينة أو القير؟",
//     a: "نقيّم السيارة بناءً على موديلها ونظافة البودي والشاصي والقطع السليمة الأخرى، لنمنحك أعلى سعر كاش يتجاوز بيعها كحديد سكراب.",
//   },
//   {
//     q: "كم يستغرق استلام السيارة المتعطلة وإسقاط لوحاتها؟",
//     a: "يتم التثمين عبر واتساب خلال دقائق، وتصلك السطحة المجانية مع الدفع الكاش وإتمام إسقاط اللوحات عبر أبشر في نفس اليوم.",
//   },
// ];

// export default function BrokenEngineCarsPage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Service",
//         "@id": "https://ba3hacash.com/broken-engine-cars#service",
//         name: "شراء سيارات متعطلة ومخبطة وبدون فحص في جدة ومكة والطائف — بيعها كاش",
//         description:
//           "خدمة شراء السيارات المتعطلة في المكينة أو القير والسيارات المتوقفة بدون فحص دوري أو استمارة في جدة ومكة والطائف بأعلى سعر كاش مع سطحة مجانية وإسقاط لوحات.",
//         provider: {
//           "@id": "https://ba3hacash.com/#autodealer",
//         },
//         areaServed: [
//           { "@type": "City", name: "جدة" },
//           { "@type": "City", name: "مكة المكرمة" },
//           { "@type": "City", name: "الطائف" },
//         ],
//         url: "https://ba3hacash.com/broken-engine-cars",
//       },
//       {
//         "@type": "FAQPage",
//         "@id": "https://ba3hacash.com/broken-engine-cars#faq",
//         mainEntity: FAQS_BROKEN.map((item) => ({
//           "@type": "Question",
//           name: item.q,
//           acceptedAnswer: {
//             "@type": "Answer",
//             text: item.a,
//           },
//         })),
//       },
//       {
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "الرئيسية — بيعها كاش",
//             item: "https://ba3hacash.com/",
//           },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: "شراء سيارات متعطلة ومخبطة وبدون فحص",
//             item: "https://ba3hacash.com/broken-engine-cars",
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main
//         dir="rtl"
//         className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-16"
//       >
//         {/* Breadcrumb */}
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
//           <nav
//             aria-label="مسار الصفحة"
//             className="flex items-center gap-2 text-xs sm:text-sm text-slate-500"
//           >
//             <Link
//               href="/"
//               className="hover:text-[#0284C7] transition-colors flex items-center gap-1 font-medium"
//             >
//               <ArrowRight className="w-3.5 h-3.5" />
//               <span>الرئيسية (بيعها كاش)</span>
//             </Link>
//             <span>/</span>
//             <span className="text-[#0284C7] font-bold">
//               شراء سيارات متعطلة ومخبطة وبدون فحص
//             </span>
//           </nav>
//         </div>

//         {/* Hero Card (Unified Template) */}
//         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//           <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
//             <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
//               <Wrench className="w-4 h-4" />
//               <span>
//                 نشتري السيارات المتعطلة من الورش والمنازل بدون فحص دوري
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
//               شراء سيارات متعطلة ومخبطة (مكينة أو قير){" "}
//               <span className="text-[#0284C7]">
//                 في جدة والطائف ومكة بأعلى سعر كاش فوري
//               </span>
//             </h1>

//             <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
//               هل تعطلت سيارتك في <strong>المكينة أو الجيربوكس</strong> وأصبحت
//               تكلفة إصلاحها باهظة؟ أو لديك{" "}
//               <strong>سيارة متوقفة بدون فحص دوري أو باستمارة منتهية</strong> في{" "}
//               <strong>جدة أو مكة المكرمة أو الطائف</strong>؟ في{" "}
//               <strong>بيعها كاش</strong> نشتري سيارتك بحالتها الراهنة بأعلى
//               تثمين نقدي فوري، مع <strong>سطحة مجانية</strong> وإنهاء{" "}
//               <strong>إسقاط اللوحات عبر أبشر</strong> في نفس اليوم.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#16a34a] hover:bg-[#15803d] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 <span>أرسل تفاصيل العطل للتسعير الفوري واتساب</span>
//               </a>

//               <a
//                 href={`tel:${PHONE_TEL}`}
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-base font-bold text-white shadow-md transition-all"
//               >
//                 <Phone className="w-5 h-5 text-sky-400" />
//                 <span>اتصل الآن:</span>
//                 <span dir="ltr" className="text-sky-300">
//                   {PHONE_DISPLAY}
//                 </span>
//               </a>
//             </div>

//             {/* 3 Highlight Badges */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
//               <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
//                 <Clock className="w-7 h-7 text-[#0284C7] shrink-0" />
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     تثمين ودفع كاش خلال 30 دقيقة
//                   </h2>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     نشتري السيارة من الورشة أو المنزل بأعلى سعر نقدي
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
//                 <Truck className="w-7 h-7 text-[#0284C7] shrink-0" />
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     سطحة مجانية في جدة ومكة والطائف
//                   </h2>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     سحب مجاني للسيارات المتعطلة والمتوقفة على مدار 24 ساعة
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
//                 <ShieldCheck className="w-7 h-7 text-[#0284C7] shrink-0" />
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     بدون فحص دوري + إسقاط فوري
//                   </h2>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     إعفاء من الفحص الدوري وإسقاط رسمي عبر أبشر
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-Card Grid Section (Unified Template) */}
//         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//           <div className="text-center max-w-3xl mx-auto mb-8">
//             <span className="text-xs font-bold text-[#0284C7]">
//               لا داعي لخسارة آلاف الريالات في الورش
//             </span>
//             <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
//               نشتري جميع حالات السيارات المتعطلة والمتوقفة
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {BROKEN_SERVICES.map((srv, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
//               >
//                 <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold mb-4">
//                   <CheckCircle2 className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-3">
//                   {srv.title}
//                 </h3>
//                 <p className="text-sm text-slate-600 leading-relaxed">
//                   {srv.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Badges Box (Unified Template) */}
//         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//           <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
//             <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
//               أبرز الأعطال والحالات التي نشتريها فوراً بأعلى سعر كاش
//             </h2>
//             <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
//               مهما كانت حالة سيارتك الميكانيكية أو وضع استمارتها في جدة ومكة
//               والطائف، نشتريها فوراً:
//             </p>
//             <div className="flex flex-wrap gap-2.5">
//               {FAULT_BADGES.map((badge) => (
//                 <span
//                   key={badge}
//                   className="rounded-full bg-sky-50 border border-sky-200/80 px-4 py-2 text-xs sm:text-sm font-bold text-slate-800"
//                 >
//                   {badge}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 2-Column FAQ + Internal Links Row (Unified Template) */}
//         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//           <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
//             <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
//               <HelpCircle className="w-4 h-4" />
//               <span>أسئلة شائعة — السيارات المتعطلة والمخبطة</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
//               أسئلة متكررة حول بيع السيارات المتعطلة وبدون فحص
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {FAQS_BROKEN.map((item, i) => (
//                 <div
//                   key={i}
//                   className="rounded-2xl bg-slate-50 border border-slate-200/70 p-5"
//                 >
//                   <h3 className="text-base font-bold text-slate-900 mb-2">
//                     {item.q}
//                   </h3>
//                   <p className="text-sm text-slate-600 leading-relaxed">
//                     {item.a}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
//               <p className="text-sm font-bold text-slate-700">
//                 فروعنا وخدماتنا المتخصصة في جدة ومكة والطائف:
//               </p>
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <Link
//                   href="/jeddah"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   فرع جدة
//                 </Link>
//                 <Link
//                   href="/makkah"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   فرع مكة المكرمة
//                 </Link>
//                 <Link
//                   href="/taif"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   فرع الطائف
//                 </Link>
//                 <Link
//                   href="/isqat-lohat"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   إسقاط اللوحات عبر أبشر
//                 </Link>
//                 <Link
//                   href="/scrap-car-brands"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   ماركات السيارات
//                 </Link>
//                 <Link
//                   href="/blog"
//                   className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
//                 >
//                   المدونة
//                 </Link>
//                 <Link
//                   href="/"
//                   className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
//                 >
//                   الرئيسية
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }


import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Wrench,
  ArrowRight,
  HelpCircle,
  Gauge,
  Cpu,
  Flame,
  Cog,
  Calculator,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، لدي سيارة بها عطل ميكانيكي (مكينة / قير) وأرغب في معرفة سعر شرائها بحالتها",
  );

export const metadata: Metadata = {
  title:
    "تثمين وشراء السيارات المتعطلة (تخبيط مكينة أو عطل قير) في جدة والطائف ومكة | بيعها كاش",
  description:
    "هل تعاني سيارتك من تخبيط المكينة أو عطل الجيربوكس في جدة أو مكة أو الطائف؟ قارن بين تكلفة التوضيب وبيعها بحالتها الراهنة بأعلى تثمين نقدي مع سحب مجاني بالسطحة: 0562117196.",
  keywords: [
    "شراء سيارات مخبطة جدة",
    "شراء سيارات عطل قير ومكينة",
    "بيع سيارة مكينتها مخبطة الطائف",
    "شراء سيارات متعطلة مكة",
    "تقييم سيارة عطلانة",
    "بيعها كاش",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/broken-engine-cars",
  },
  openGraph: {
    title:
      "متى تبيع سيارتك المتعطلة في المكينة أو الجيربوكس بدلاً من توضيبها؟ | بيعها كاش",
    description:
      "نشتري السيارات ذات الأعطال الميكانيكية الجسيمة (محركات، جيربوكس، كمبيوتر) من الورش والمنازل في جدة ومكة والطائف بإجراءات نظامية سريعة.",
    url: "https://ba3hacash.com/broken-engine-cars",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const MECHANICAL_FAULTS = [
  {
    icon: Cog,
    title: "تخبيط المحرك (Engine Seizure)",
    symptom: "تلف عمود الكرنك أو البساتم أو خلط الزيت والماء نتيجة الحرارة.",
    solution:
      "بدلاً من دفع 8,000 إلى 20,000 ريال في مكينة مستوردة أو توضيب غير مضمون، نشتري السيارة بحالتها ونقيّم البودي والقير والقطع السليمة.",
  },
  {
    icon: Gauge,
    title: "أعطال الجيربوكس الأوتوماتيك وCVT",
    symptom: "فقدان التعشيق، نتعة قوية، أو تلف مخ القير والكلتشات.",
    solution:
      "نثمن المحرك السليم والشاصي والمقصورة الداخلية ونستلم السيارة بسطحة خاصة مجانية مباشرة من الورشة.",
  },
  {
    icon: Cpu,
    title: "أعطال الضفيرة والكمبيوتر والحساسات",
    symptom:
      "توقف السيارة عن التشغيل بسبب التماس كهربائي أو تلف وحدة التحكم ECU.",
    solution:
      "نوفر عليك شهوراً من البحث عن الفنيين والقطع الإلكترونية النادرة، ونشتري المركبة نقداً في نفس اليوم.",
  },
  {
    icon: Flame,
    title: "تلف رأس المكينة ودورة التبريد",
    symptom: "ارتفاع متكرر في الحرارة مع تلف الرديتر أو طرمبة الماء والوجه.",
    solution:
      "نقيّم المركبة بعدل وشفافية في جدة ومكة والطائف مع إنهاء إجراءات نقل الملكية أو الإسقاط النظامي.",
  },
];

const COST_TABLE = [
  {
    fault: "تخبيط كامل للمحرك (6 أو 8 سلندر)",
    repairCost: "من 9,000 إلى 22,000 ريال + 3 أسابيع بالورشة",
    ourValuation: "نخصم قيمة العطل فقط ونثمن القير والبودي والقطع كاملة",
    verdict: "البيع بحالتها أوفر وأضمن مالياً",
  },
  {
    fault: "تلف الجيربوكس الأوتوماتيك / CVT",
    repairCost: "من 6,000 إلى 15,000 ريال مع ضمان محدود",
    ourValuation: "تثمين مرتفع نظير سلامة المكينة والهيكل الخارجي",
    verdict: "البيع الفوري يوفر سيولة لشراء بديل",
  },
  {
    fault: "احتراق ضفيرة الكهرباء والكمبيوتر",
    repairCost: "تتجاوز 7,000 ريال مع صعوبة ضبط الحساسات",
    ourValuation: "شراء فوري وسحب مجاني من الورشة دون انتظار",
    verdict: "تجنب دوامة الورش المتكررة",
  },
];

const FAQS_MECHANICAL = [
  {
    q: "سيارتي موجودة حالياً داخل ورشة في الصناعية، كيف يتم استلامها؟",
    a: "بعد الاتفاق على السعر وإتمام الإجراء النظامي، يتوجه مندوبنا بالسطحة المجانية إلى الورشة في جدة أو مكة أو الطائف لاستلام السيارة مباشرة.",
  },
  {
    q: "ما هي الأوراق المطلوبة لبيع سيارة متعطلة ميكانيكياً؟",
    a: "يشترط سريان رخصة السير (الاستمارة) وسريان الهوية الوطنية أو الإقامة لمالك المركبة لإتمام المبايعة أو الإسقاط النظامي عبر منصة أبشر.",
  },
];

export default function BrokenEngineCarsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/broken-engine-cars#service",
        name: "تثمين وشراء السيارات المتعطلة ميكانيكياً في جدة والطائف ومكة — بيعها كاش",
        description:
          "شراء السيارات التي تعاني من تخبيط المكينة أو عطل الجيربوكس أو الكهرباء في جدة ومكة والطائف بإجراءات نظامية وسحب مجاني بالسطحة.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: [
          { "@type": "City", name: "جدة" },
          { "@type": "City", name: "مكة المكرمة" },
          { "@type": "City", name: "الطائف" },
        ],
        url: "https://ba3hacash.com/broken-engine-cars",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/broken-engine-cars#faq",
        mainEntity: FAQS_MECHANICAL.map((item) => ({
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
            name: "تقييم وشراء السيارات المتعطلة ميكانيكياً",
            item: "https://ba3hacash.com/broken-engine-cars",
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
              تقييم وشراء السيارات المتعطلة (مكينة أو قير)
            </span>
          </nav>
        </div>

        {/* Distinct Advisory Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-gradient-to-l from-slate-900 via-slate-800 to-sky-950 text-white p-6 sm:p-10 lg:p-14 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 border border-sky-400/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-sky-300 mb-5">
              <Wrench className="w-4 h-4" />
              <span>
                تقييم فني منصف لأعطال المحركات والجيربوكس في جدة ومكة والطائف
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-white max-w-4xl">
              متى يكون بيع سيارتك المتعطلة في المكينة أو القير{" "}
              <span className="text-sky-400">
                أوفر مالياً من توضيبها في الورش؟
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-200 max-w-3xl">
              عندما تتعطل المكينة أو الجيربوكس، غالباً ما تفاجأ بتكاليف إصلاح
              وقطع غيار تلتهم نصف قيمة السيارة مع عدم ضمان رجوعها لحالتها
              الأصلية. في <strong>بيعها كاش</strong> نمنحك بديلاً فورياً: نشتري
              سيارتك المتعطلة بحالتها الراهنة من الورشة أو المنزل في{" "}
              <strong>جدة ومكة المكرمة والطائف</strong> وفق الإجراءات النظامية
              المعتمدة.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#16a34a] hover:bg-[#15803d] px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>احصل على تسعيرة لسيارتك المتعطلة واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 px-8 py-4 text-base font-bold text-white transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2x2 Diagnostic Fault Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#0284C7]">
              تشخيص وتثمين الأعطال الكبرى
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              كيف نتعامل مع أبرز 4 أعطال ميكانيكية وكهربائية؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MECHANICAL_FAULTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200/70 rounded-xl px-3.5 py-2 mb-3">
                      الأعراض الشائعة: {item.symptom}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Financial Comparison Table: Repair vs Sell */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <Calculator className="w-4 h-4" />
              <span>حاسبة الجدوى الاقتصادية للمالك</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              مقارنة تكلفة التوضيب في الورش مقابل البيع الفوري بحالتها
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-extrabold text-slate-800">
                    <th className="p-4">نوع العطل الميكانيكي</th>
                    <th className="p-4 text-rose-700">
                      متوسط تكلفة الإصلاح بالورش
                    </th>
                    <th className="p-4 text-[#0284C7]">
                      طريقة تثميننا في بيعها كاش
                    </th>
                    <th className="p-4 text-emerald-700">النتيجة للمالك</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {COST_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/70">
                      <td className="p-4 font-bold text-slate-900">
                        {row.fault}
                      </td>
                      <td className="p-4 text-rose-600">{row.repairCost}</td>
                      <td className="p-4 text-slate-700">{row.ourValuation}</td>
                      <td className="p-4 font-bold text-emerald-700">
                        {row.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs + Internal Links */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              استفسارات الملاك حول بيع السيارات المتعطلة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_MECHANICAL.map((item, i) => (
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
                روابط سريعة لخدمات بيعها كاش:
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/jeddah"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع جدة
                </Link>
                <Link
                  href="/makkah"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع مكة
                </Link>
                <Link
                  href="/taif"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع الطائف
                </Link>
                <Link
                  href="/isqat-lohat"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  ضوابط إسقاط اللوحات
                </Link>
                <Link
                  href="/scrap-car-brands"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  ماركات السيارات
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  المدونة
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
