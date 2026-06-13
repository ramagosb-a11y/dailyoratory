import Link from "next/link";
import type { SearchItem } from "@/types/search";

export function SearchResultCard({ item, query }: { item: SearchItem; query: string }) {
  const snippet = buildSnippet(item, query);

  return (
    <article className="card resource-card relative flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="liturgical-label text-xs font-bold tracking-[0.16em]">{item.category}</p>
        <span className="season-pill liturgical-chip">{formatTypeLabel(item.type)}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={item.href} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {item.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-navy/80">{snippet}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="season-pill liturgical-chip">
            {tag}
          </span>
        ))}
      </div>
      <div className="liturgical-accent-text mt-5 text-sm font-semibold">Open</div>
    </article>
  );
}

function buildSnippet(item: SearchItem, query: string) {
  if (!query.trim()) {
    return truncate(item.content || item.description, 170);
  }

  const haystack = `${item.description} ${item.content}`.trim();
  const lowerHaystack = haystack.toLowerCase();
  const lowerQuery = query.trim().toLowerCase();
  const index = lowerHaystack.indexOf(lowerQuery);

  if (index < 0) {
    return truncate(haystack, 170);
  }

  const start = Math.max(0, index - 50);
  const end = Math.min(haystack.length, index + lowerQuery.length + 110);
  const prefix = start > 0 ? "... " : "";
  const suffix = end < haystack.length ? " ..." : "";
  return `${prefix}${haystack.slice(start, end).trim()}${suffix}`;
}

function truncate(value: string, limit: number) {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit).trim()}...`;
}

function formatTypeLabel(type: SearchItem["type"]) {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
