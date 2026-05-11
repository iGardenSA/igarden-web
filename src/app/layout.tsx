import type { Metadata, Viewport } from "next";
import { Tajawal, Poppins } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";
import { COMPANY, CONTACT } from "@/lib/constants";
import "@/styles/globals.css";
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
    "شركة سعودية ريادية مُرخّصة من وزارة الاستثمار، تقدّم حلول الزراعة المُحكَمة بتقنيات IoT والذكاء الاصطناعي، مُختبَرة في مرفق R&D بعسفان. منذ 2024.",
  keywords: [
    "iGarden",
    "الحديقة الذكية",
    "زراعة ذكية",
    "IoT الزراعي",
    "ذكاء اصطناعي زراعي",
    "زراعة مائية",
    "Smart OS",
    "محطة عسفان",
    "شركة ريادية سعودية",
    "الأمن الغذائي",
    "رؤية 2030",
    "السعودية",
  ],
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
      "شركة سعودية ريادية مُرخّصة · حلول IoT والذكاء الاصطناعي للزراعة المُحكَمة · مُختبَرة في مرفق عسفان.",
    images: [
      {
        url: "/images/og/home.jpg",
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
      "شركة سعودية ريادية مُرخّصة · حلول IoT والذكاء الاصطناعي للزراعة المُحكَمة.",
    images: ["/images/og/home.jpg"],
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

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
