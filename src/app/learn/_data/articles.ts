import type { TagSlug } from "./tags";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number;
  publishedAt: string;
  tags: TagSlug[];
  href: string;
}

export const articles: Article[] = [
  {
    slug: "when-do-you-need-smart-controller",
    title: "متى تحتاج مزرعتك إلى Smart Controller؟",
    excerpt:
      "ليست كل مزرعة بحاجة إلى وحدة تحكم ذكية اليوم. خمس علامات واضحة تدلّك على أن الوقت قد حان للتحول من المراقبة اليدوية إلى أنظمة التحكم الذكي.",
    readTime: 7,
    publishedAt: "2026-05-05",
    tags: ["control-systems"],
    href: "/learn/when-do-you-need-smart-controller",
  },
  {
    slug: "why-hydroponic-fail-summer",
    title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟",
    excerpt:
      "الصيف السعودي تحدٍّ حقيقي لأنظمة الزراعة المائية. أربعة أسباب رئيسية للفشل في الحرارة الشديدة وكيف تتجنّبها قبل أن تبدأ الموسم.",
    readTime: 8,
    publishedAt: "2026-05-01",
    tags: ["hydroponics", "fundamentals"],
    href: "/learn/why-hydroponic-fail-summer",
  },
  {
    slug: "hydroponic-vs-traditional",
    title: "الفرق بين الزراعة المائية والزراعة التقليدية",
    excerpt:
      "ليست الأفضل أو الأسوأ — كل منهما مناسب لظروف مختلفة. مقارنة موضوعية تُساعدك على اختيار النظام الزراعي المناسب لوضعك الفعلي.",
    readTime: 9,
    publishedAt: "2026-04-25",
    tags: ["hydroponics", "comparisons"],
    href: "/learn/hydroponic-vs-traditional",
  },
  {
    slug: "operational-logs-farm-decisions",
    title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟",
    excerpt:
      "البيانات بدون تسجيل حكمة ضائعة. كيف تُحوّل سجلات التشغيل مزرعتك من عمليّة تعتمد على الذاكرة إلى نظام متعلّم يُحسّن قراراته بمرور الوقت.",
    readTime: 6,
    publishedAt: "2026-04-20",
    tags: ["control-systems", "fundamentals"],
    href: "/learn/operational-logs-farm-decisions",
  },
  {
    slug: "daily-measurements-smart-farm",
    title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
    excerpt:
      "ليست كل القراءات متساوية الأهمية. تعرّف على المؤشرات الأساسية التي يجب رصدها يومياً في المزارع الهيدروبونيكية والمحميات الذكية — وتلك التي يمكن تأجيلها.",
    readTime: 5,
    publishedAt: "2026-04-15",
    tags: ["fundamentals", "control-systems"],
    href: "/learn/daily-measurements-smart-farm",
  },
];

export const sortedArticles = [...articles].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
