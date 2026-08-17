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
  metadataBase: new URL("https://example.com"), // TODO: عدّل للدومين الفعلي
  title: {
    default: "شراء سيارات مصدومة بأفضل سعر | كاش فوري وسطحة مجانية",
    template: "%s | [اسم البراند]",
  },
  description:
    "نشتري سيارتك المصدومة أو التالفة بأفضل سعر فوري، في جميع مدن السعودية. احصل على تقدير سعر فوري أونلاين، دفع كاش، وسطحة مجانية لنقل السيارة.",
  keywords: [
    "شراء سيارات مصدومة",
    "بيع سيارات مصدومة",
    "سيارات تشليح",
    "شراء سيارات تالفة السعودية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "[اسم البراند]",
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}