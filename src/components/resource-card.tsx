import Link from "next/link";
import type { Resource } from "@/content/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="card resource-card group relative flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <p className="liturgical-label text-xs font-bold">{resource.category}</p>
        <span className="season-pill liturgical-chip bg-parchment">
          {resource.minutes} min
        </span>
      </div>
      <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-navy">
        <Link href={`/library/${resource.slug}`} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {resource.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{resource.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {resource.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="season-pill liturgical-chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
