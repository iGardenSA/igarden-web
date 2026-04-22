import type { Metadata, Viewport } from "next";
import { Tajawal, Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { COMPANY, CONTACT } from "@/lib/constants";
import "@/styles/globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title: {
    default: `${COMPANY.nameEn} — ${COMPANY.nameAr} | حلول زراعية ذكية`,
    template: `%s | ${COMPANY.nameEn}`,
  },
  description:
    "iGarden — الحديقة الذكية: حلول زراعية مدعومة بالذكاء الاصطناعي وإنترنت الأشياء، مصممة محلياً لمناخ المملكة. توفير 95% من المياه و3x زيادة في الإنتاجية.",
  keywords: [
    "iGarden",
    "الحديقة الذكية",
    "الزراعة الذكية",
    "AgriTech",
    "Hydroponics",
    "Aquaponics",
    "Aeroponics",
    "IoT الزراعي",
    "الذكاء الاصطناعي الزراعي",
    "الأمن الغذائي",
    "السعودية",
    "رؤية 2030",
  ],
  authors: [{ name: COMPANY.legalAr }],
  creator: COMPANY.legalAr,
  publisher: COMPANY.legalAr,

  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.nameEn,
    title: `${COMPANY.nameEn} — مستقبل الزراعة بين يديك`,
    description:
      "حلول زراعية ذكية مدعومة بالذكاء الاصطناعي وإنترنت الأشياء، مصممة محلياً لمناخ المملكة.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.nameEn} — ${COMPANY.nameAr}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.nameEn} — مستقبل الزراعة بين يديك`,
    description: "حلول زراعية ذكية مدعومة بالذكاء الاصطناعي وإنترنت الأشياء.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en-US": "/en",
    },
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
      <body>
        {/* JSON-LD: Organization Schema للسيو المحلي */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.legalEn,
              alternateName: [COMPANY.nameEn, COMPANY.nameAr, COMPANY.legalAr],
              url: `https://${COMPANY.domain}`,
              logo: `https://${COMPANY.domain}/logo.svg`,
              email: CONTACT.email,
              telephone: CONTACT.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jeddah",
                addressCountry: "SA",
              },
              areaServed: ["SA", "AE", "KW", "QA", "BH", "OM"],
              foundingDate: `${COMPANY.founded}`,
            }),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
