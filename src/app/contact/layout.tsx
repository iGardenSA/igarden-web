import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا — اطلب تقييم مزرعتك | iGarden",
  description:
    "تواصل مع فريق الحديقة الذكية لتقييم مزرعتك، طلب عرض سعر، أو حجز استشارة مجانية. نردّ خلال يوم عمل.",
  alternates: { canonical: "https://igarden.sa/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
