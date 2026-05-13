import Link from "next/link";
import { tags } from "../_data/tags";
import type { Article } from "../_data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const publishDate = new Date(article.publishedAt).toLocaleDateString(
    "ar-SA",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link
      href={article.href}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all"
      dir="rtl"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tagSlug) => {
          const tag = tags[tagSlug];
          return (
            <span
              key={tagSlug}
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${tag.color.bg} ${tag.color.text}`}
            >
              {tag.label}
            </span>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
        {article.title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
        <time dateTime={article.publishedAt}>{publishDate}</time>
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {article.readTime} دقائق قراءة
        </span>
      </div>
    </Link>
  );
}
