import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "المدن التي نخدمها", href: "#cities" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

const WHATSAPP_NUMBER = "966562117196";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-0">
        <div className="relative mx-auto mt-1.5 max-w-7xl">
          <div className="nav-glass pointer-events-none absolute inset-0 -z-10 rounded-[14px] bg-white/85 backdrop-blur-md" />
          <div className="nav-border pointer-events-none absolute inset-0 -z-10 rounded-[14px] border-l border-r border-b border-(--color-border)" />

          <div className="mx-auto flex items-center justify-between px-6 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-3 min-[940px]:px-10 min-[940px]:py-4">
            <div className="flex justify-start">
              <Link
                href="/"
                aria-label="بيعها كاش - الصفحة الرئيسية"
                className="logo flex shrink-0 items-center gap-2 md:gap-1.5 min-[940px]:gap-2"
              >
                <Image
                  src="/logocut.webp"
                  alt="بيعها كاش - شراء السيارات المصدومة والتشليح في جدة ومكة والطائف"
                  width={100}
                  height={100}
                  priority
                  className="object-contain md:h-16 md:w-16 min-[940px]:h-25 min-[940px]:w-25"
                />
                <span className="hidden font-bold text-(--color-cta) sm:block md:text-sm min-[940px]:text-base">
                  بيعها كاش — شراء السيارات المصدومة
                </span>
              </Link>
            </div>

            <nav
              aria-label="التنقل الرئيسي"
              className="hidden items-center justify-center gap-4 md:flex min-[940px]:gap-7"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav whitespace-nowrap text-sm font-medium text-(--color-ink) transition-colors hover:text-(--color-primary) min-[940px]:text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden justify-end md:flex">
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex shrink-0 items-center gap-2 rounded-(--radius-pill) bg-(--color-cta) px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-(--color-cta-hover) min-[940px]:px-6 min-[940px]:py-3 min-[940px]:text-sm hover:shadow-md hover:-translate-y-1!"
              >
                تواصل معنا
              </Link>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border text-(--color-ink) md:hidden">
              <Menu size={19} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
