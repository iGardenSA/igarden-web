import type { Metadata, Viewport } from "next";
import { Tajawal, Poppins } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import { COMPANY, CONTACT } from "@/lib/constants";
import "@/styles/globals.css";

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
    default: `${COMPANY.nameEn} — ${COMPANY.nameAr} | أنظمة الزراعة الذكية`,
    template: `%s | ${COMPANY.nameEn}`,
  },
  description:
    "iGarden — الحديقة الذكية: شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ننفّذ ونُوطّن ونُطوّر — تأسّست 2024، إطلاق رسمي 2026. توفير 95% من المياه و3x زيادة في الإنتاجية.",
  keywords: [
    "iGarden",
    "الحديقة الذكية",
    "الزراعة الذكية",
    "AgriTech سعودية",
    "Smart Controllers",
    "Hydroponics",
    "Aquaponics",
    "أنظمة الزراعة المائية",
    "محطة عسفان",
    "البيوت المحمية الذكية",
    "الأمن الغذائي",
    "رؤية 2030",
    "جدة",
    "السعودية",
  ],
  authors: [{ name: COMPANY.legalAr }],
  creator: COMPANY.legalAr,
  publisher: COMPANY.legalAr,

  icons: {
    icon: [
      { url: "/favicons/favicon-16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicons/favicon-32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/favicons/favicon-96.png",  sizes: "96x96",  type: "image/png" },
      { url: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon.ico",     sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicons/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicons/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: `https://${COMPANY.domain}`,
    siteName: `${COMPANY.nameEn} — ${COMPANY.nameAr}`,
    title: `${COMPANY.nameEn} — ننفّذ · نُوطّن · نُطوّر`,
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات محلية — ازرع بذكاء · Plant Smart.",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.nameEn} — أنظمة الزراعة الذكية · ازرع بذكاء`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.nameEn} — ننفّذ · نُوطّن · نُطوّر`,
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ازرع بذكاء · Plant Smart.",
    images: ["/og/home.jpg"],
  },

  alternates: {
    canonical: `https://${COMPANY.domain}`,
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
        {/* JSON-LD: Organization Schema للسيو المحلي */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.legalEn,
              legalName: COMPANY.legalFull,
              alternateName: [COMPANY.nameEn, COMPANY.nameAr, COMPANY.legalAr],
              url: `https://${COMPANY.domain}`,
              logo: `https://${COMPANY.domain}/logo/icon-only.svg`,
              email: CONTACT.email,
              telephone: CONTACT.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jeddah",
                addressCountry: "SA",
              },
              areaServed: ["SA", "AE", "KW", "QA", "BH", "OM"],
              foundingDate: `${COMPANY.founded}`,
              slogan: COMPANY.tagline,
            }),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
