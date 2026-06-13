import Link from "next/link";
import type { LibrarySearchResult } from "@/lib/search";
import { getContentHref } from "@/lib/content";

export function LibraryResultCard({ result }: { result: LibrarySearchResult }) {
  const { record, excerpt, typeLabel, season } = result;
  const href = getContentHref(record);

  return (
    <article className="card resource-card relative flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="liturgical-label text-xs font-bold">{record.category}</p>
        <div className="flex flex-wrap justify-end gap-2">
          <span className="season-pill liturgical-chip">{typeLabel}</span>
          {season ? <span className="season-pill liturgical-chip">{season}</span> : null}
        </div>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={href} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {record.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">{record.description}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-navy/80">{truncate(excerpt, 170)}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {record.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="season-pill liturgical-chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function truncate(value: string, limit: number) {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit).trim()}...`;
}
