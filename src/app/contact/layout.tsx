import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا — احجز استشارة | iGarden",
  description:
    "تواصل مع فريق iGarden لتقييم مشروعك أو طلب عرض سعر. نسمع، نسأل، ونقترح — أو نصارحك إن كان المشروع غير جاهز. نردّ خلال يوم عمل.",
  alternates: { canonical: "https://igarden.sa/contact" },
  openGraph: {
    title: "تواصل معنا — احجز استشارة | iGarden",
    description: "نسمع مشروعك ونقترح المسار الأنسب. هاتف أو واتساب أو زيارة لعسفان.",
    images: [{ url: "/api/og?title=%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%E2%80%94+iGarden&sub=%D8%A7%D8%B7%D9%84%D8%A8+%D8%AA%D9%82%D9%8A%D9%8A%D9%85+%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%83", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | iGarden",
    description: "احجز استشارة — نردّ خلال يوم عمل.",
    images: ["/api/og?title=%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%86%D8%A7"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
