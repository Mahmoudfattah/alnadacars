
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Banknote,
  CarFront,
  Clock3,
} from "lucide-react";

const STATS = [
  {
    value: "+5,000",
    label: "سيارة تم شراؤها",
    icon: CarFront,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconRing: "ring-emerald-100",
  },
  {
    value: "30",
    unit: "دقيقة",
    label: "متوسط وقت المعاينة",
    icon: Clock3,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    iconRing: "ring-blue-100",
  },
  {
    value: "100%",
    label: "دفع نقدي فوري",
    icon: Banknote,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    iconRing: "ring-violet-100",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-[var(--color-bg-raised)]
      "
    >
      <div
        className="
          mx-auto grid max-w-[1400px]
          items-center
          gap-12
          px-6 py-10
          md:grid-cols-2
          md:gap-10
          md:px-10
          md:py-10
        "
      >
        {/* =====================================================
            TEXT COLUMN
        ====================================================== */}
        <div className="flex flex-col overflow-hidden items-start gap-6">
          {/* Badge */}
          <span
            className="
              inline-flex items-center gap-2
              rounded-[var(--radius-pill)]
              bg-[var(--color-primary)]/10
              px-4 py-2
              text-xs font-semibold
              text-[var(--color-primary)]
            "
          >
            <span
              className="
                h-2 w-2
                rounded-full
                bg-[var(--color-primary)]
              "
            />

            كاش فوري خلال 30 دقيقة
          </span>

          {/* Heading */}
          <h1
            className="
              text-balance
              text-4xl font-bold
              leading-[1.3]
              text-[var(--color-ink)]
              sm:text-4xl
              md:text-[40px]
            "
          >
           شراء سيارات مصدومة وتالف
            <br />
             في جدة ومكة
           
            نقداً وبأفضل سعر
          </h1>

          {/* Description */}
          <p
            className="
              max-w-md
              text-base
              leading-relaxed
              text-[var(--color-ink-soft)]
              md:text-lg
            "
          >
            نشتري سيارتك المصدومة أو التالفة أياً كانت حالتها، بمعاينة فورية
            وسعر عادل، مع سطحة مجانية لنقل السيارة من موقعك في جدة ومكة
            المكرمة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-[var(--radius-pill)]
                bg-[var(--color-cta)]
                px-8 py-4
                text-sm font-semibold
                text-white
                shadow-[var(--shadow-sm)]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[var(--color-cta-hover)]
                hover:shadow-[var(--shadow-md)]
              "
            >
              احصل على السعر الآن

              <ArrowLeft
                size={17}
                strokeWidth={2}
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#how-it-works"
              className="
                inline-flex items-center gap-2
                rounded-[var(--radius-pill)]
                border
                border-[var(--color-border)]
                px-8 py-4
                text-sm font-semibold
                text-[var(--color-ink)]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[var(--color-bg-soft)]
              "
            >
              كيف تعمل الخدمة
            </Link>
          </div>

          {/* =====================================================
              TRUST STATS
          ====================================================== */}
          <div
            className="
              mt-4 grid w-full
              grid-cols-3
              border-t
              border-[var(--color-border)]
              pt-6
            "
          >
            {STATS.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex items-center gap-2
                    px-2
                    sm:gap-3
                    sm:px-4
                    ${
                      index !== 0
                        ? "border-r border-[var(--color-border)]"
                        : ""
                    }
                  `}
                >
                
                  <div
                    className={`
                      flex h-10 w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${stat.iconBg}
                      ${stat.iconColor}
                      ring-1
                      ${stat.iconRing}
                      transition-all
                      duration-300
                      hover:scale-105
                    `}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Stat content */}
                  <div className="flex min-w-0 flex-col gap-1">
                    <span
                      className="
                        numeral
                        text-lg font-bold
                        text-[var(--color-ink)]
                        sm:text-sm
                        md:text-xl
                      "
                    >
                      {stat.value}

                      {stat.unit && (
                        <span
                          className="
                            mr-1
                            text-[10px]
                            font-medium
                            text-[var(--color-ink-soft)]
                            sm:text-xs
                          "
                        >
                          {stat.unit}
                        </span>
                      )}
                    </span>

                    <span
                      className="
                        text-[10px]
                        leading-relaxed
                        text-[var(--color-ink-soft)]
                        sm:text-xs
                        md:text-sm
                      "
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            IMAGE COLUMN
        ====================================================== */}
        <div
          className="
            relative
            mx-auto
            aspect-[4/3]
            w-full
            max-w-lg
            md:max-w-none
          "
        >
          {/* =================================================
              MAP BACKGROUND
          ================================================== */}
          <div
            className="
              absolute
              inset-x-0
              top-[-5%]
              z-0
              h-[55%]
              md:h-[58%]
            "
          >
            <Image
              src="/map.png"
              alt=""
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>

          {/* =================================================
              DAMAGED CAR
          ================================================== */}
          <Image
            src="/cardamage.png"
            alt="سيارة مصدومة جاهزة للبيع فوراً"
            fill
            priority
            className="
              relative
              z-10
              object-contain
              drop-shadow-2xl
            "
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}

