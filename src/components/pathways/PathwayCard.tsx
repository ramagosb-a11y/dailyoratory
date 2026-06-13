import Link from "next/link";
import type { SpiritualGrowthPathwayRecord } from "@/types/pathways";
import { getPathwayHref } from "@/lib/pathways";

export function PathwayCard({
  pathway,
  actionLabel = "View pathway",
}: {
  pathway: SpiritualGrowthPathwayRecord;
  actionLabel?: string;
}) {
  return (
    <article className="card resource-card flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xs font-bold uppercase text-burgundy">{pathway.stage}</p>
        <div className="flex flex-wrap justify-end gap-2">
          <span className="season-pill">{pathway.estimatedDuration}</span>
          <span className="season-pill">{pathway.pace}</span>
        </div>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={getPathwayHref(pathway)} className="focus-ring rounded-sm hover:text-burgundy">
          {pathway.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">{pathway.description}</p>
      <div className="mt-4 card-parchment p-4">
        <p className="text-xs font-bold uppercase text-burgundy">Spiritual goal</p>
        <p className="mt-1 text-sm font-semibold leading-6 text-navy">{pathway.spiritualGoal}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {pathway.bestFor.slice(0, 3).map((item) => (
          <span key={item} className="season-pill">
            {item}
          </span>
        ))}
      </div>
      <Link href={getPathwayHref(pathway)} className="btn btn-secondary focus-ring mt-5">
        {actionLabel}
      </Link>
    </article>
  );
}
