export type TagSlug =
  | "hydroponics"
  | "control-systems"
  | "fundamentals"
  | "comparisons";

export interface Tag {
  slug: TagSlug;
  label: string;
  description: string;
  color: {
    bg: string;
    text: string;
    border: string;
    ring: string;
  };
}

export const tags: Record<TagSlug, Tag> = {
  hydroponics: {
    slug: "hydroponics",
    label: "الزراعة المائية",
    description: "تقنيات الزراعة بدون تربة",
    color: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      ring: "ring-emerald-500",
    },
  },
  "control-systems": {
    slug: "control-systems",
    label: "التحكم والأنظمة",
    description: "أنظمة التحكم الذكية و IoT",
    color: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      ring: "ring-blue-500",
    },
  },
  fundamentals: {
    slug: "fundamentals",
    label: "الأساسيات",
    description: "المفاهيم الأساسية للزراعة الذكية",
    color: {
      bg: "bg-sky-50",
      text: "text-sky-700",
      border: "border-sky-200",
      ring: "ring-sky-500",
    },
  },
  comparisons: {
    slug: "comparisons",
    label: "مقارنات",
    description: "مقارنات بين التقنيات والأنظمة",
    color: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      ring: "ring-purple-500",
    },
  },
};

export const tagOrder: TagSlug[] = [
  "hydroponics",
  "fundamentals",
  "control-systems",
  "comparisons",
];
