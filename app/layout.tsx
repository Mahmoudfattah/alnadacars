import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

/* Display font — headings, hero, CTAs */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

/* Body font — paragraphs, labels, nav */
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ba3hacash.com"),
  title: {
    default: "شراء سيارات مصدومة وتالفة وتشليح في جدة ومكة والطائف | بيعها كاش",
    template: "%s | بيعها كاش",
  },
  description:
    "نشتري السيارات المصدومة والتالفة والمتعطلة والتشليح في جدة ومكة المكرمة والطائف بأعلى سعر كاش فوري خلال 30 دقيقة مع سطحة مجانية. تواصل الآن: 0562117196",
  keywords: [
    "شراء سيارات مصدومة جدة",
    "شراء سيارات مصدومة مكة",
    "شراء سيارات مصدومة الطائف",
    "شراء سيارات تشليح جدة",
    "شراء سيارات تالفة ومكبس",
    "شراء سيارات متعطلة وسكراب",
    "بيع سيارة مصدومة كاش",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://ba3hacash.com",
    siteName: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    title: "شراء سيارات مصدومة وتالفة وتشليح في جدة ومكة والطائف | بيعها كاش",
    description:
      "نشتري سيارتك المصدومة أو التالفة أو المتعطلة في جدة ومكة والطائف بأفضل سعر فوري كاش مع سطحة مجانية لنقل السيارة من موقعك. اتصل الآن: 0562117196",
  },
  twitter: {
    card: "summary_large_image",
    title: "شراء سيارات مصدومة وتالفة وتشليح في جدة ومكة والطائف | بيعها كاش",
    description:
      "نشتري السيارات المصدومة والتالفة والتشليح في جدة ومكة والطائف كاش فوري وسطحة مجانية — 0562117196",
  },
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "بيعها كاش لشراء السيارات المصدومة والتشليح",
    url: "https://ba3hacash.com",
    telephone: "+966562117196",
    description:
      "شراء سيارات مصدومة وتالفة وتشليح ومتعطلة في جدة ومكة المكرمة والطائف نقداً وبأفضل سعر فوري مع سطحة مجانية.",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "جدة" },
      { "@type": "City", name: "مكة المكرمة" },
      { "@type": "City", name: "الطائف" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "جدة",
      addressRegion: "منطقة مكة المكرمة",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://haraj.com.sa/users/%D8%AA%D8%B4%D9%84%D9%8A%D8%AD%20%D8%A7%D9%84%D9%86%D8%AF%D9%89%20%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/",
    ],
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${plexArabic.variable}`}
    >
      <body
        suppressHydrationWarning={true}
        className="bg-white text-[var(--color-ink)] antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
