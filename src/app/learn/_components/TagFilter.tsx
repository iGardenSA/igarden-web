"use client";

import { tags, tagOrder, type TagSlug } from "../_data/tags";

interface TagFilterProps {
  selectedTag: TagSlug | "all";
  onSelectTag: (tag: TagSlug | "all") => void;
  articleCounts: Record<TagSlug | "all", number>;
}

export function TagFilter({
  selectedTag,
  onSelectTag,
  articleCounts,
}: TagFilterProps) {
  return (
    <div className="w-full overflow-x-auto" dir="rtl">
      <div className="flex flex-wrap gap-2 md:gap-3 pb-2">
        <button
          onClick={() => onSelectTag("all")}
          className={[
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all",
            selectedTag === "all"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-400",
          ].join(" ")}
        >
          <span>الكل</span>
          <span
            className={[
              "text-xs px-2 py-0.5 rounded-full",
              selectedTag === "all" ? "bg-white/20" : "bg-gray-100",
            ].join(" ")}
          >
            {articleCounts.all}
          </span>
        </button>

        {tagOrder.map((slug) => {
          const tag = tags[slug];
          const isActive = selectedTag === slug;
          const count = articleCounts[slug];

          return (
            <button
              key={slug}
              onClick={() => onSelectTag(slug)}
              className={[
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all",
                isActive
                  ? `${tag.color.bg} ${tag.color.text} ${tag.color.border} ring-2 ${tag.color.ring} ring-offset-1`
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400",
              ].join(" ")}
            >
              <span>{tag.label}</span>
              <span
                className={[
                  "text-xs px-2 py-0.5 rounded-full",
                  isActive ? "bg-white/40" : "bg-gray-100",
                ].join(" ")}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
