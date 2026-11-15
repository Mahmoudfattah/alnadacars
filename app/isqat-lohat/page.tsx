// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   Phone,
//   MessageCircle,
//   CheckCircle2,
//   Truck,
//   ShieldCheck,
//   Clock,
//   FileCheck2,
//   ArrowRight,
//   HelpCircle,
// } from "lucide-react";

// const PHONE_DISPLAY = "0562117196";
// const PHONE_TEL = "+966562117196";
// const WHATSAPP_LINK =
//   "https://wa.me/966562117196?text=" +
//   encodeURIComponent(
//     "السلام عليكم، أرغب في بيع سيارتي المصدومة أو التالفة مع إسقاط اللوحات الفوري عبر أبشر",
//   );

// export const metadata: Metadata = {
//   title:
//     "إسقاط لوحات السيارات التالفة والمصدومة فوراً عبر أبشر في جدة ومكة والطائف | بيعها كاش",
//   description:
//     "نشتري سيارتك المصدومة أو التالفة أو المتعطلة في جدة ومكة والطائف بأعلى سعر كاش فوري مع إنهاء إجراءات إسقاط اللوحات ونقل الملكية عبر منصة أبشر مجاناً في نفس اليوم: 0562117196.",
//   keywords: [
//     "اسقاط لوحات سيارات جدة",
//     "اسقاط لوحات سيارات الطائف",
//     "اسقاط لوحات سيارات مكة",
//     "طريقة اسقاط اللوحات ابشر",
//     "شراء سيارات تشليح واسقاط لوحات",
//     "بيع سيارة بدون فحص دوري او استمارة",
//     "بيعها كاش",
//   ],
//   alternates: {
//     canonical: "https://ba3hacash.com/isqat-lohat",
//   },
//   openGraph: {
//     title:
//       "إسقاط لوحات السيارات التالفة والمصدومة فوراً عبر أبشر | بيعها كاش 0562117196",
//     description:
//       "خدمة شراء السيارات المصدومة والتشليح في جدة ومكة والطائف مع التكفل الكامل بإجراءات إسقاط اللوحات الفوري عبر أبشر وسحب السيارة بسطحة مجانية.",
//     url: "https://ba3hacash.com/isqat-lohat",
//     siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
//     locale: "ar_SA",
//     type: "website",
//   },
// };

// const STEPS_ISQAT = [
//   {
//     title: "01. إرسال بيانات وصور السيارة واتساب",
//     desc: "صوّر سيارتك المصدومة أو التالفة وأرسلها مع صورة الاستمارة والهوية على الرقم 0562117196 لنقدم لك أعلى تسعير كاش فوري خلال دقائق.",
//   },
//   {
//     title: "02. استلام الكاش وسحب مجاني بالسطحة",
//     desc: "نصلك في جدة أو مكة أو الطائف بسطحة خاصة مجانية، ونسلمك قيمة السيارة كاملة كاش أو تحويل بنكي فوري قبل رفع السيارة.",
//   },
//   {
//     title: "03. إسقاط فوري للوحات عبر أبشر",
//     desc: "نُنهي إجراءات إسقاط المركبة واللوحات رسمياً عبر منصة أبشر ومراكز التشليح المعتمدة في نفس اليوم ونزودك بإثبات إخلاء المسؤولية.",
//   },
// ];

// const CASES_BADGES = [
//   "إسقاط سيارات الحوادث المصدومة",
//   "إسقاط سيارات تالفة وتشليح",
//   "سيارات استمارتها منتهية",
//   "سيارات بدون فحص دوري ساري",
//   "سيارات عطل مكينة أو قير",
//   "سيارات متوقفة منذ سنوات",
//   "سيارات محروقة أو غارقة",
//   "إخلاء مسؤولية فوري عبر أبشر",
// ];

// const FAQS_ISQAT = [
//   {
//     q: "هل توجد أي رسوم على إسقاط اللوحات عند بيع السيارة لكم؟",
//     a: "لا توجد أي رسوم على الإطلاق؛ نتكفل بكافة إجراءات إسقاط اللوحات عبر منصة أبشر وأجور السطحة مجاناً 100% عند شرائنا لسيارتك في جدة أو مكة أو الطائف.",
//   },
//   {
//     q: "هل يمكن إسقاط لوحات السيارة إذا كانت الاستمارة منتهية أو بدون فحص؟",
//     a: "نعم بالتأكيد، نشتري السيارات المصدومة والتالفة والمتوقفة ونُنهي إجراءات إسقاط لوحاتها رسمياً حتى لو كانت الاستمارة منتهية أو بدون فحص دوري.",
//   },
//   {
//     q: "كم يستغرق إتمام إسقاط المركبة من اسمي في أبشر؟",
//     a: "يتم إنهاء إجراءات الإسقاط الفوري واستلام اللوحات في نفس يوم استلام السيارة ودفع المبلغ، وتصلك رسالة تأكيد إسقاط المركبة عبر أبشر.",
//   },
//   {
//     q: "ما هي المدن المشمولة بخدمة شراء السيارات وإسقاط اللوحات؟",
//     a: "نغطي كافة أحياء محافظة جدة، العاصمة المقدسة مكة المكرمة، ومحافظة الطائف والحوية على مدار 24 ساعة بسطحات خاصة مجانية.",
//   },
// ];

// export default function Ba3haCashIsqatPage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Service",
//         "@id": "https://ba3hacash.com/isqat-lohat#service",
//         name: "إسقاط لوحات السيارات التالفة والمصدومة فوراً عبر أبشر — بيعها كاش",
//         description:
//           "خدمة شراء السيارات المصدومة والتالفة والمتعطلة في جدة ومكة والطائف مع إتمام إجراءات إسقاط اللوحات الفوري عبر أبشر مجاناً وسحب بالسطحة.",
//         provider: {
//           "@id": "https://ba3hacash.com/#autodealer",
//         },
//         areaServed: [
//           { "@type": "City", name: "جدة" },
//           { "@type": "City", name: "مكة المكرمة" },
//           { "@type": "City", name: "الطائف" },
//         ],
//         url: "https://ba3hacash.com/isqat-lohat",
//       },
//       {
//         "@type": "FAQPage",
//         "@id": "https://ba3hacash.com/isqat-lohat#faq",
//         mainEntity: FAQS_ISQAT.map((item) => ({
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
//             name: "إسقاط لوحات السيارات الفوري عبر أبشر",
//             item: "https://ba3hacash.com/isqat-lohat",
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
//               إسقاط لوحات السيارات التالفة والمصدومة عبر أبشر
//             </span>
//           </nav>
//         </div>

//         {/* Hero Card (Unified Template) */}
//         <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//           <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
//             <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
//               <FileCheck2 className="w-4 h-4" />
//               <span>إسقاط نظامي فوري عبر منصة أبشر في جدة ومكة والطائف بدون رسوم</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-slate-900 max-w-4xl">
//               إسقاط لوحات السيارات التالفة والمصدومة{" "}
//               <span className="text-[#0284C7]">
//                 فوراً عبر أبشر مع شراء سيارتك بأعلى سعر كاش
//               </span>
//             </h1>

//             <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
//               هل ترغب في بيع سيارتك المصدومة أو التالفة أو المتعطلة في{" "}
//               <strong>جدة أو مكة المكرمة أو الطائف</strong> وضمان{" "}
//               <strong>إسقاط لوحاتها فوراً من اسمك في أبشر</strong>؟ في{" "}
//               <strong>بيعها كاش</strong> نشتري سيارتك بأعلى تثمين نقدي فوري خلال 30 دقيقة، ونتكفل بسحبها{" "}
//               <strong>بسطحة خاصة مجانية</strong> وإنهاء كافة إجراءات الإسقاط الرسمي وإخلاء مسؤوليتك في نفس اليوم.
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
//                 <span>اطلب شراء السيارة وإسقاط لوحاتها واتساب</span>
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
//                 <ShieldCheck className="w-7 h-7 text-[#0284C7] shrink-0" />
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     إخلاء مسؤولية فوري عبر أبشر
//                   </h2>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     إسقاط رسمي للوحات والمركبة في نفس يوم الشراء
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
//                     نقل وسحب السيارة التالفة من أمام منزلك مجاناً
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60">
//                 <Clock className="w-7 h-7 text-[#0284C7] shrink-0" />
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     دفع كاش فوري خلال 30 دقيقة
//                   </h2>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     أعلى سعر شراء نقدي أو تحويل بنكي مباشر
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
//               خطوات نظامية سريعة ومضمونة
//             </span>
//             <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
//               كيف نشتري سيارتك التالفة ونُسقط لوحاتها في 3 خطوات؟
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {STEPS_ISQAT.map((srv, idx) => (
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
//               حالات السيارات المشمولة بخدمة الشراء الفوري وإسقاط اللوحات
//             </h2>
//             <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
//               لا يشترط وجود فحص دوري ساري أو استمارة مجددة؛ نتولى شراء السيارة وإنهاء إجراءات إسقاطها في كافة الحالات التالية:
//             </p>
//             <div className="flex flex-wrap gap-2.5">
//               {CASES_BADGES.map((badge) => (
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
//               <span>أسئلة شائعة — إسقاط اللوحات ونقل الملكية</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
//               أسئلة متكررة حول إسقاط لوحات السيارات التالفة والمصدومة
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {FAQS_ISQAT.map((item, i) => (
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
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  ClipboardCheck,
  Scale,
} from "lucide-react";

const PHONE_DISPLAY = "0562117196";
const PHONE_TEL = "+966562117196";
const WHATSAPP_LINK =
  "https://wa.me/966562117196?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في الاستفسار عن إجراءات شراء سيارتي التالفة وإسقاط لوحاتها النظامي عبر أبشر",
  );

export const metadata: Metadata = {
  title:
    "الدليل النظامي لإسقاط لوحات المركبات التالفة عبر أبشر في جدة ومكة والطائف | بيعها كاش",
  description:
    "تعرف على الشروط والخطوات النظامية لإسقاط لوحات السيارات المصدومة والتالفة عبر منصة أبشر في جدة ومكة والطائف، مع خدمة شراء المركبة وسحبها مجاناً: 0562117196.",
  keywords: [
    "شروط اسقاط اللوحات ابشر",
    "إجراءات إسقاط المركبات التالفة",
    "اسقاط لوحات سيارات جدة",
    "اسقاط لوحات سيارات الطائف",
    "اسقاط لوحات سيارات مكة",
    "مركز معتمد اسقاط مركبات",
    "بيعها كاش",
  ],
  alternates: {
    canonical: "https://ba3hacash.com/isqat-lohat",
  },
  openGraph: {
    title:
      "الشروط والإجراءات النظامية لإسقاط لوحات السيارات التالفة عبر أبشر | بيعها كاش",
    description:
      "دليلك الكامل لإخلاء مسؤوليتك المرورية وإسقاط لوحات سيارتك المصدومة أو التالفة بطريقة نظامية 100% عبر أبشر عند بيعها في جدة ومكة والطائف.",
    url: "https://ba3hacash.com/isqat-lohat",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const OFFICIAL_REQUIREMENTS = [
  "سريان رخصة السير (الاستمارة) الخاصة بالمركبة وقت إتمام الإجراء النظامي.",
  "حضور مالك المركبة شخصياً أو وجود مفوض رسمي بموجب تفويض أو وكالة سارية.",
  "سريان الهوية الوطنية للمواطن أو هوية مقيم (الإقامة) مع وجود حساب نشط في منصة أبشر.",
  "خلو سجل المركبة والمالك من أي قيود أمنية أو إيقاف خدمات يمنع إتمام العملية.",
  "تسليم لوحتي المركبة (الأمامية والخلفية) ليتم تسليمها رسمياً للجهات المختصة.",
];

const TIMELINE_STEPS = [
  {
    step: "المرحلة الأولى",
    title: "التحقق من البيانات النظامية وتثمين المركبة",
    desc: "نتحقق من جاهزية بيانات المركبة وسريان الاستمارة، ونقدم لك تسعيراً عادلاً بناءً على حالة السيارة وموديلها عبر واتساب (0562117196).",
  },
  {
    step: "المرحلة الثانية",
    title: "وصول السطحة واستلام المركبة واللوحات",
    desc: "يصلك مندوبنا في جدة أو مكة أو الطائف لفك لوحات المركبة بمحضر استلام رسمي وتحميل السيارة على السطحة الخاصة مجاناً.",
  },
  {
    step: "المرحلة الثالثة",
    title: "سداد قيمة المركبة وتنفيذ طلب أبشر",
    desc: "يتم تحويل مبلغ الشراء المتفق عليه لحسابك البنكي أو تسليمه نقداً، وإدخال طلب إسقاط المركبة عبر المنصة النظامية المعتمدة.",
  },
  {
    step: "المرحلة الرابعة",
    title: "تأكيد رمز التحقق وإخلاء المسؤولية النهائي",
    desc: "يصلك رمز التحقق على جوالك المسجل في أبشر لإتمام الإسقاط الفوري، وبذلك تسقط المركبة نهائياً من سجلك المروري.",
  },
];

const COMPARISON_ROWS = [
  {
    point: "المسؤولية المرورية والقانونية",
    withIsqat: "إخلاء مسؤولية فوري ونهائي من اسم المالك في أبشر",
    withoutIsqat: "تظل السيارة مسجلة باسمك وتتحمل أي التزامات عليها",
  },
  {
    point: "رسوم التجديد والتأمين المستقبلي",
    withIsqat: "تتوقف كافة رسوم التجديد السنوية فور إسقاط اللوحات",
    withoutIsqat: "تستمر مطالبتك بتجديد رخصة السير طالما المركبة نشطة",
  },
  {
    point: "تكلفة نقل المركبة المتعطلة",
    withIsqat: "نتكفل بسحبها بسطحة مجانية من موقعك",
    withoutIsqat: "يتحمل المالك أجور السطحة أو مخالفات الوقوف الطويل",
  },
  {
    point: "الاستفادة المالية من المركبة",
    withIsqat: "تحصل على سيولة نقدية فورية مقابل قيمة السيارة",
    withoutIsqat: "تتآكل قيمة القطع السليمة مع الوقوف الطويل تحت الشمس",
  },
];

const FAQS_ISQAT = [
  {
    q: "ما هي الشروط الأساسية لإتمام إسقاط لوحات السيارة عبر أبشر؟",
    a: "يشترط سريان رخصة السير (الاستمارة) والهوية الوطنية أو الإقامة، وخلو المركبة من القيود النظامية، مع تسليم اللوحات المعدنية ومشاركة رمز التحقق المرسل من أبشر.",
  },
  {
    q: "هل توجد رسوم إضافية على خدمة إسقاط اللوحات عند بيع السيارة لكم؟",
    a: "لا توجد أي رسوم إضافية؛ عند شرائنا لسيارتك المصدومة أو التالفة نتكفل بإجراءات الإسقاط النظامي وسحب السيارة بالسطحة مجاناً.",
  },
  {
    q: "كيف أتأكد أن السيارة سقطت رسمياً من اسمي؟",
    a: "تصلك رسالة نصية رسمية من منصة أبشر تفيد بإسقاط المركبة، كما يمكنك الدخول لحسابك في أبشر والتحقق من اختفاء المركبة من قائمة المركبات المسجلة باسمك.",
  },
];

export default function Ba3haCashIsqatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ba3hacash.com/isqat-lohat#service",
        name: "خدمة شراء المركبات التالفة وإسقاط لوحاتها النظامي عبر أبشر — بيعها كاش",
        description:
          "إجراءات نظامية لشراء السيارات المصدومة والتالفة وإنهاء إسقاط لوحاتها عبر منصة أبشر في جدة ومكة والطائف وفق ضوابط المرور السعودي.",
        provider: {
          "@id": "https://ba3hacash.com/#autodealer",
        },
        areaServed: [
          { "@type": "City", name: "جدة" },
          { "@type": "City", name: "مكة المكرمة" },
          { "@type": "City", name: "الطائف" },
        ],
        url: "https://ba3hacash.com/isqat-lohat",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ba3hacash.com/isqat-lohat#faq",
        mainEntity: FAQS_ISQAT.map((item) => ({
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
            name: "الدليل النظامي لإسقاط اللوحات عبر أبشر",
            item: "https://ba3hacash.com/isqat-lohat",
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
              الدليل النظامي لإسقاط اللوحات عبر أبشر
            </span>
          </nav>
        </div>

        {/* Hero + Official Requirements Split Layout */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Right Column: Main Intro */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0284C7] mb-5">
                  <FileCheck2 className="w-4 h-4" />
                  <span>إجراءات رسمية معتمدة 100% وفق ضوابط منصة أبشر</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold leading-[1.3] text-slate-900">
                  الدليل النظامي لإسقاط لوحات المركبات التالفة{" "}
                  <span className="text-[#0284C7]">
                    عبر منصة أبشر عند بيعها تشليح
                  </span>
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  عند تعرض المركبة لحادث جسيم أو تلف يجعل إصلاحها غير مجدٍ
                  اقتصادياً، يحتاج المالك إلى جهة موثوقة تشتري المركبة وتُنهي{" "}
                  <strong>إجراءات إسقاط اللوحات رسمياً عبر منصة أبشر</strong>{" "}
                  لإخلاء مسؤوليته النظامية والمرورية في{" "}
                  <strong>جدة ومكة المكرمة والطائف</strong>.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>استفسر عن إجراءات الإسقاط واتساب</span>
                </a>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-900 hover:bg-slate-800 px-7 py-3.5 text-sm sm:text-base font-bold text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>

            {/* Left Column: Official Absher Checklist Box */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold mb-3">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>الضوابط والمتطلبات النظامية</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                  الشروط الرسمية لإتمام إسقاط المركبة في أبشر
                </h2>
                <ul className="space-y-3.5">
                  {OFFICIAL_REQUIREMENTS.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed">
                  نلتزم في «بيعها كاش» بتطبيق كافة الضوابط الرسمية المعتمدة
                  لضمان سلامة الموقف القانوني للبائع والمشتري.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Process Timeline */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#0284C7]">
                خطوات متسلسلة وواضحة
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                مراحل شراء المركبة التالفة وإسقاط لوحاتها (4 مراحل)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full bg-sky-100 text-[#0284C7] px-3 py-1 text-xs font-extrabold mb-3">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table: Official Drop vs Leaving Car Registered */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <Scale className="w-4 h-4" />
              <span>لماذا يهمك الإسقاط الفوري؟</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              مقارنة بين البيع مع الإسقاط النظامي وترك المركبة التالفة دون إجراء
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-extrabold text-slate-800">
                    <th className="p-4 rounded-tr-2xl">وجه المقارنة</th>
                    <th className="p-4 text-[#0284C7]">
                      عند البيع لـ «بيعها كاش» مع إسقاط أبشر
                    </th>
                    <th className="p-4 text-slate-500 rounded-tl-2xl">
                      ترك السيارة التالفة متوقفة بدون إسقاط
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="p-4 font-bold text-slate-900">
                        {row.point}
                      </td>
                      <td className="p-4 text-emerald-700 font-semibold">
                        {row.withIsqat}
                      </td>
                      <td className="p-4 text-slate-500">{row.withoutIsqat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3 Focused FAQs + Internal Links */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#0284C7] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>استفسارات نظامية متكررة</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              أسئلة شائعة حول ضوابط إسقاط اللوحات
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FAQS_ISQAT.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-50 border border-slate-200/70 p-5"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-bold text-slate-700">
                تصفح أقسامنا الأخرى في المنطقة الغربية:
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
                  فرع مكة المكرمة
                </Link>
                <Link
                  href="/taif"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  فرع الطائف
                </Link>
                <Link
                  href="/broken-engine-cars"
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:bg-sky-100 transition-all"
                >
                  تقييم أعطال المحركات والقير
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