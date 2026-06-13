import Link from "next/link";
import { searchCategories } from "@/data/searchIndex";
import type { SearchItemType } from "@/types/search";
import type { ReactNode } from "react";

export function SearchCategoryFilters({
  query,
  category,
  type,
}: {
  query: string;
  category?: string;
  type?: SearchItemType | "";
}) {
  const categories = [...searchCategories].sort((a, b) => a.sortOrder - b.sortOrder);
  const typeOptions: Array<{ label: string; value: SearchItemType }> = [
    { label: "Pages", value: "page" },
    { label: "Prayers", value: "prayer" },
    { label: "Reflections", value: "reflection" },
    { label: "Media", value: "media" },
    { label: "Saints", value: "saint" },
    { label: "Devotions", value: "devotion" },
    { label: "Sacraments", value: "sacrament" },
    { label: "Guides", value: "guide" },
    { label: "Tools", value: "tool" },
    { label: "Resources", value: "resource" },
  ];

  return (
    <div className="dashboard-card p-4">
      <div className="grid gap-4">
        <div>
          <p className="liturgical-label text-xs font-bold tracking-[0.16em]">Browse by category</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip href={buildSearchHref(query, "", type)} active={!category}>
              All
            </FilterChip>
            {categories.map((item) => (
              <FilterChip
                key={item.slug}
                href={buildSearchHref(query, item.title, type)}
                active={item.title === category}
              >
                {item.title}
              </FilterChip>
            ))}
          </div>
        </div>
        <div>
          <p className="liturgical-label text-xs font-bold tracking-[0.16em]">Filter by type</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip href={buildSearchHref(query, category ?? "", "")} active={!type}>
              All types
            </FilterChip>
            {typeOptions.map((item) => (
              <FilterChip
                key={item.value}
                href={buildSearchHref(query, category ?? "", item.value)}
                active={item.value === type}
              >
                {item.label}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function buildSearchHref(query: string, category: string, type: SearchItemType | "" | undefined) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (type) params.set("type", type);
  const serialized = params.toString();
  return serialized ? `/search?${serialized}` : "/search";
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`focus-ring season-pill liturgical-chip transition ${
        active ? "liturgical-chip-active" : ""
      }`}
    >
      {children}
    </Link>
  );
}
