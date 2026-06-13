"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { getMediaCategoryBySlug, getMediaFilterOptions, normalizeMediaSearch } from "@/lib/media-client";
import type { MediaCategory, MediaItem, MediaType } from "@/types/media";
import { MediaCard } from "./MediaCard";

export function MediaFilters({
  items,
  categories,
}: {
  items: MediaItem[];
  categories: MediaCategory[];
}) {
  const options = getMediaFilterOptions(items);
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [category, setCategory] = useState("");
  const [audience, setAudience] = useState("");
  const [topic, setTopic] = useState("");
  const [tag, setTag] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeMediaSearch(query);

    return items.filter((item) => {
      const searchable = normalizeMediaSearch(
        [item.title, item.shortDescription, item.description, item.topic, item.creator, item.sourceName, ...item.tags].join(" "),
      );

      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesType = !mediaType || item.mediaType === mediaType;
      const matchesCategory = !category || item.category === category;
      const matchesAudience = !audience || item.audience.includes(audience);
      const matchesTopic = !topic || item.topic === topic;
      const matchesTag = !tag || item.tags.includes(tag);

      return matchesQuery && matchesType && matchesCategory && matchesAudience && matchesTopic && matchesTag;
    });
  }, [audience, category, items, mediaType, query, tag, topic]);

  return (
    <section id="media-browser" className="scroll-mt-28">
      <div className="rounded-md border border-stone bg-ivory p-5 shadow-soft sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <FilterField label="Search">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onBlur={() => {
                if (query.trim()) trackEvent("media_filter_apply", { filter_name: "search", query_length: query.trim().length });
              }}
              placeholder="Search media"
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            />
          </FilterField>
          <FilterField label="Media type">
            <select
              value={mediaType}
              onChange={(event) => {
                setMediaType(event.target.value);
                trackEvent("media_filter_apply", { filter_name: "media_type", filter_value: event.target.value || "all" });
              }}
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            >
              <option value="">All types</option>
              {options.mediaTypes.map((option) => (
                <option key={option} value={option}>
                  {formatMediaTypeLabel(option)}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Category">
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                trackEvent("media_filter_apply", { filter_name: "category", filter_value: event.target.value || "all" });
              }}
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            >
              <option value="">All categories</option>
              {categories.map((option) => (
                <option key={option.id} value={option.slug}>
                  {option.title}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Audience">
            <select
              value={audience}
              onChange={(event) => {
                setAudience(event.target.value);
                trackEvent("media_filter_apply", { filter_name: "audience", filter_value: event.target.value || "all" });
              }}
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            >
              <option value="">All audiences</option>
              {options.audiences.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Topic">
            <select
              value={topic}
              onChange={(event) => {
                setTopic(event.target.value);
                trackEvent("media_filter_apply", { filter_name: "topic", filter_value: event.target.value || "all" });
              }}
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            >
              <option value="">All topics</option>
              {options.topics.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Tag">
            <select
              value={tag}
              onChange={(event) => {
                setTag(event.target.value);
                trackEvent("media_filter_apply", { filter_name: "tag", filter_value: event.target.value || "all" });
              }}
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            >
              <option value="">All tags</option>
              {options.tags.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-muted">
          {filtered.length} approved media item{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <MediaCard key={item.id} item={item} category={getMediaCategoryBySlug(item.category, categories)} />
        ))}
      </div>
    </section>
  );
}

function FilterField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      {children}
    </label>
  );
}

function formatMediaTypeLabel(mediaType: MediaType) {
  return mediaType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
