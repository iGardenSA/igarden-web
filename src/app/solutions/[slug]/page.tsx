import { redirect } from "next/navigation";

// Legacy /solutions/[slug] route — redirected to /products since
// "الحلول" was renamed to "المنتجات" per CLAUDE.md v2.0 navigation.
export default function SolutionSlugPage() {
  redirect("/products");
}
