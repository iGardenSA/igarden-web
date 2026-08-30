import type { Metadata, Viewport } from "next";
import { Tajawal, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";
import { COMPANY } from "@/lib/constants";
import "@/styles/globals.css";
import { FirstTouchCapture } from "@/components/shared/FirstTouchCapture";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title: {
    default: "iGarden · الحديقة الذكية — حلول الزراعة الذكية في السعودية",
    template: "%s · iGarden",
  },
  description:
    "شركة سعودية متخصصة في التقنيات الزراعية، تقدّم منظومات متكاملة تشمل أنظمة الإنتاج والتحكم والأتمتة وبيانات التشغيل.",
  authors: [{ name: COMPANY.legalAr }],
  creator: COMPANY.legalAr,
  publisher: COMPANY.legalAr,
  formatDetection: { email: false, address: false, telephone: false },

  icons: {
    icon: [
      { url: "/favicons/favicon-16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicons/favicon-32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/favicons/favicon-96.png",  sizes: "96x96",  type: "image/png" },
      { url: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicons/favicon.ico",     sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicons/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicons/android-chrome-512x512.png" },
      { rel: "mask-icon",      url: "/favicons/maskable-512.png" },
    ],
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.nameEn,
    title: `${COMPANY.nameEn} · الحديقة الذكية`,
    description:
      "شركة سعودية متخصصة في التقنيات الزراعية · منظومات متكاملة تشمل أنظمة الإنتاج والتحكم والأتمتة وبيانات التشغيل.",
    images: [
      {
        url: "/api/og?title=iGarden+%E2%80%94+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%A7%D8%B2%D8%B1%D8%B9+%D8%A8%D8%B0%D9%83%D8%A7%D8%A1",
        width: 1200,
        height: 630,
        alt: `${COMPANY.nameEn} — ازرع بذكاء`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.nameEn} · الحديقة الذكية`,
    description:
      "شركة سعودية متخصصة في التقنيات الزراعية · منظومات متكاملة للإنتاج والتحكم والأتمتة وبيانات التشغيل.",
    images: ["/api/og?title=iGarden+%E2%80%94+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%A7%D8%B2%D8%B1%D8%B9+%D8%A8%D8%B0%D9%83%D8%A7%D8%A1"],
  },

  alternates: {
    canonical: `https://${COMPANY.domain}`,
    languages: { "ar-SA": `https://${COMPANY.domain}` },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F3D2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <OrganizationSchema />
        <WebSiteSchema />
        {/* Attribution Bridge — يلتقط أول صفحة وصول وأول UTM عند أوّل تحميل. */}
        <FirstTouchCapture />

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
