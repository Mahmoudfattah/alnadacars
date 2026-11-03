"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question:
      "كيف يتم تقييم وشراء السيارات المصدومة والتالفة في جدة ومكة والطائف؟",
    answer:
      "بمجرد تواصلك معنا عبر واتساب أو الاتصال المباشر على الرقم 0562117196 وإرسال صور السيارة ونوعها وموديلها، يقوم فريق التقييم المختص بتقديم عرض سعر فوري وعادل خلال دقائق، ثم نصل إليك في موقعك داخل جدة أو مكة المكرمة أو الطائف للمعاينة السريعة وإتمام الشراء.",
  },
  {
    question:
      "هل تشترون السيارات التالفة بالكامل أو المتعطلة التي لا تعمل (تشليح ومكبس)؟",
    answer:
      "نعم، نشتري جميع حالات السيارات بغض النظر عن حجم الضرر، سواء كانت سيارات مصدومة بحوادث، سيارات متعطلة ميكانيكياً أو كهربائياً، سيارات قديمة، أو سيارات تالفة بالكامل ومخصصة للتشليح والاسكراب والمكبس، ولا يشترط إصلاح السيارة أو تشغيلها قبل البيع.",
  },
  {
    question: "من يتحمل تكلفة السطحة لنقل السيارة المصدومة من موقعي؟",
    answer:
      "نحن نوفر سطحة خاصة مجانية تماماً (0 ريال على البائع) لسحب ونقل السيارة المصدومة أو المتعطلة من أمام منزلك أو من الورشة أو موقع الحادث في جميع أحياء جدة ومكة المكرمة والطائف.",
  },
  {
    question: "كيف يتم دفع المبلغ وإجراءات نقل الملكية أو إسقاط اللوحات؟",
    answer:
      "يتم الدفع نقداً (كاش فوري) أو بتحويل بنكي فوري ومباشر لحسابك عند استلام السيارة في نفس اليوم وخلال 30 دقيقة من المعاينة، مع التكفل بإنهاء كافة الإجراءات الرسمية المعتمدة لنقل الملكية أو إسقاط اللوحات للتشليح بشكل نظامي وموثوق.",
  },
  {
    question:
      "ما هي أنواع وموديلات السيارات التي تشترونها في جدة ومكة والطائف؟",
    answer:
      "نشتري كافة أنواع وماركات السيارات (اليابانية، الكورية، الأمريكية، الأوروبية، والألمانية الفارهة والسيارات الصينية) بجميع موديلاتها الحديثة والقديمة، سواء كانت سيارات سيدان، دفع رباعي وعائلية، أو سيارات تجارية.",
  },
  {
    question:
      "هل يشترط وجود فحص دوري ساري أو استمارة مجددة لبيع السيارة تشليح؟",
    answer:
      "لا يشترط وجود فحص دوري ساري عند بيع السيارة المصدومة أو المتعطلة للتشليح، ونساعدك في إتمام إجراءات المبايعة النظامية أو إسقاط اللوحات بسهولة وشفافية تامة دون أي تعقيد.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      dir="rtl"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[var(--color-bg)] py-16 sm:py-24"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-0 top-1/4
          h-96 w-96 rounded-full
          bg-[var(--color-primary-tint)]/70
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 bottom-20
          h-80 w-80 rounded-full
          bg-[var(--color-bg-soft)]
          blur-3xl
        "
      />

      <div className="container-custom relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Content + CTA */}
          <div
            className="
              flex flex-col gap-6
              lg:sticky lg:top-32
              lg:col-span-5 lg:self-start
            "
          >
            {/* Section Badge */}
            <div
              className="
                inline-flex w-fit items-center gap-2
                rounded-full border border-[var(--color-border)]
                bg-[var(--color-bg-raised)]
                px-4 py-1.5 shadow-sm
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2 w-2 rounded-full
                  bg-[var(--color-primary)]
                  animate-pulse
                "
              />

              <span className="text-sm font-bold text-[var(--color-primary)]">
                الأسئلة الشائعة
              </span>
            </div>

            {/* Heading */}
            <h2
              id="faq-heading"
              className="
                text-3xl font-extrabold
                leading-[1.3] tracking-tight
                text-[var(--color-ink)]
                sm:text-4xl lg:text-5xl
              "
            >
              كل ما تود معرفته عن بيع سيارتك
              <br />
              المصدومة أو التشليح
            </h2>

            {/* Description */}
            <p
              className="
                max-w-md text-base leading-relaxed
                text-[var(--color-ink-soft)]
                sm:text-lg
              "
            >
              إجابات واضحة وسريعة حول خطوات التقييم الفوري، السطحة المجانية،
              الدفع النقدي، وإجراءات نقل الملكية وإسقاط اللوحات في جدة ومكة
              والطائف.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966562117196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا عبر واتساب لتقييم سيارتك"
              className="
                group mt-2 flex w-fit items-center gap-4
                rounded-full border border-[var(--color-border)]
                bg-[var(--color-bg-raised)]
                py-1.5 pl-1.5 pr-6 shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-[var(--color-primary)]
                hover:shadow-[var(--shadow-md)]
                focus-visible:ring-2
                focus-visible:ring-[var(--color-primary)]
                focus-visible:ring-offset-2
              "
            >
              <span
                className="
                  text-sm font-bold
                  text-[var(--color-ink)]
                  transition-colors duration-300
                  group-hover:text-[var(--color-primary)]
                "
              >
                تواصل معنا عبر واتساب
              </span>

              <span
                aria-hidden="true"
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[var(--color-primary)]
                  text-white
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <MessageCircle size={22} strokeWidth={2.2} />
              </span>
            </a>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={index}
                  className={`
                    group relative overflow-hidden
                    rounded-[24px] border
                    transition-all duration-500 ease-out
                    ${
                      isOpen
                        ? `
                          border-[var(--color-primary)]/40
                          bg-[var(--color-bg-soft)]
                          shadow-[0_8px_30px_rgba(0,113,227,0.06)]
                        `
                        : `
                          border-[var(--color-border)]
                          bg-[var(--color-bg-raised)]
                          hover:border-[var(--color-primary)]/30
                          hover:bg-[var(--color-bg-soft)]
                        `
                    }
                  `}
                >
                  {/* Question Button */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    id={buttonId}
                    className="
                      flex w-full items-center justify-between
                      gap-4 px-6 py-5 text-right
                      outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--color-primary)]
                      focus-visible:ring-inset
                      sm:px-8 sm:py-6
                    "
                  >
                    <span
                      className={`
                        pr-1 text-base font-bold
                        leading-relaxed
                        transition-colors duration-300
                        sm:text-lg
                        ${
                          isOpen
                            ? "text-[var(--color-primary-dark)]"
                            : "text-[var(--color-ink)] group-hover:text-[var(--color-primary-dark)]"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                    {/* Chevron */}
                    <span
                      aria-hidden="true"
                      className={`
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        transition-all duration-500
                        ${
                          isOpen
                            ? `
                              rotate-180
                              bg-[var(--color-primary)]
                              text-white
                              shadow-[0_4px_14px_rgba(0,113,227,0.3)]
                            `
                            : `
                              bg-[var(--color-bg)]
                              text-[var(--color-ink)]
                              shadow-sm
                              group-hover:scale-105
                            `
                        }
                      `}
                    >
                      <ChevronDown size={22} strokeWidth={2.5} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      grid transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          relative px-6 pb-6
                          sm:px-8 sm:pb-7
                        "
                      >
                        {/* Accent Line */}
                        <span
                          aria-hidden="true"
                          className={`
                            absolute right-2 top-1 bottom-8
                            w-0.5 rounded-full
                            transition-all duration-500
                            sm:right-6
                            ${
                              isOpen
                                ? "bg-[var(--color-primary)]/40"
                                : "bg-transparent"
                            }
                          `}
                        />

                        <p
                          className="
                            pr-5 text-[15px]
                            leading-[1.9]
                            text-[var(--color-ink-soft)]
                            sm:pr-7 sm:text-base
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </section>
  );
}
