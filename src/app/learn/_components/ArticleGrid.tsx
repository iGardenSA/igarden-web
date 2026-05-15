"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "./TagFilter";
import { ArticleCard } from "./ArticleCard";
import { sortedArticles } from "../_data/articles";
import { tagOrder, type TagSlug } from "../_data/tags";

export function ArticleGrid() {
  const [selectedTag, setSelectedTag] = useState<TagSlug | "all">("all");

  const articleCounts = useMemo(() => {
    const counts: Record<string, number> = { all: sortedArticles.length };
    tagOrder.forEach((tag) => {
      counts[tag] = sortedArticles.filter((a) => a.tags.includes(tag)).length;
    });
    return counts as Record<TagSlug | "all", number>;
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedTag === "all") return sortedArticles;
    return sortedArticles.filter((a) => a.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="space-y-8">
      <TagFilter
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
        articleCounts={articleCounts}
      />

      <p className="text-sm text-gray-500" dir="rtl">
        {filteredArticles.length === sortedArticles.length
          ? `${sortedArticles.length} مقالات`
          : `${filteredArticles.length} من ${sortedArticles.length} مقالات`}
      </p>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div
          className="text-center py-16 bg-gray-50 rounded-xl"
          dir="rtl"
        >
          <p className="text-gray-600">لا مقالات في هذا التصنيف حالياً.</p>
        </div>
      )}
    </div>
  );
}
