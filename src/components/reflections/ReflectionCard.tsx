import Link from "next/link";
import { formatDate } from "@/lib/format";
import { getReflectionKindLabel, getReflectionPrimaryScripture } from "@/lib/reflections";
import type { DailyReflectionRecord } from "@/types/reflections";

export function ReflectionCard({
  reflection,
  emphasis = false,
  highlightLabel,
}: {
  reflection: DailyReflectionRecord;
  emphasis?: boolean;
  highlightLabel?: string;
}) {
  return (
    <article
      className={`card resource-card relative flex h-full min-w-0 flex-col p-5 ${
        emphasis ? "border-2 border-gold bg-parchment shadow-oratory" : ""
      }`}
    >
      {highlightLabel ? (
        <div className="mb-4 w-fit rounded-sm border border-gold bg-gold px-3 py-1.5 text-xs font-bold uppercase text-navy">
          {highlightLabel}
        </div>
      ) : null}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xs font-bold uppercase text-burgundy">{getReflectionKindLabel(reflection.reflectionKind)}</p>
        <span className="season-pill">{reflection.season}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={`/reflections/${reflection.slug}`} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {reflection.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm font-semibold text-gold">{formatDate(reflection.date)}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-navy">{reflection.liturgicalDay}</p>
      <p className="mt-3 text-sm italic text-burgundy">{getReflectionPrimaryScripture(reflection)}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{reflection.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {reflection.topics.slice(0, 3).map((topic) => (
          <span key={topic} className="season-pill">
            {topic}
          </span>
        ))}
      </div>
    </article>
  );
}
