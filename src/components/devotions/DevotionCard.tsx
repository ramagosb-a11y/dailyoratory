import Link from "next/link";
import type { Devotion } from "@/types/devotions";
import { getRelatedCategoryForDevotion } from "@/lib/devotions";

export function DevotionCard({ devotion, compact = false }: { devotion: Devotion; compact?: boolean }) {
  const category = getRelatedCategoryForDevotion(devotion);

  return (
    <article className="card resource-card relative flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="season-pill">{category?.title ?? "Devotion"}</span>
        <span className="season-pill">{devotion.timeNeeded}</span>
      </div>
      <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={`/devotions/${devotion.slug}`} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {devotion.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{devotion.shortDescription}</p>
      {!compact ? (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            {devotion.spiritualFruits.slice(0, 3).map((fruit) => (
              <span key={fruit} className="season-pill">
                {fruit}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-burgundy">
            Spiritual fruit: {devotion.spiritualFruits.slice(0, 2).join(", ")}
          </p>
        </>
      ) : null}
      <div className="mt-5 flex items-center gap-3">
        {devotion.beginnerFriendly === "yes" ? (
          <span className="rounded-sm border border-gold bg-gold px-3 py-1 text-xs font-bold uppercase text-navy">
            Beginner-friendly
          </span>
        ) : null}
      </div>
    </article>
  );
}
