import Link from "next/link";
import { SaintSaveButton } from "@/components/saints/SaintSaveButton";
import { formatFeastDate } from "@/lib/saints";
import type { SaintRecord } from "@/types/saints";

export function SaintCard({ saint, reason }: { saint: SaintRecord; reason?: string }) {
  return (
    <article className="card-parchment liturgical-card-accent relative flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
          {saint.feastDayDisplay || formatFeastDate(saint.feastDay)}
        </p>
        <span className="rounded-full border border-stone bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          {saint.century}
        </span>
      </div>
      <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={`/saints/${saint.slug}`} className="focus-ring rounded-sm">
          <span className="absolute inset-0" aria-hidden="true" />
          {saint.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm font-semibold text-navy">{saint.traditionGroup}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{saint.shortDescription}</p>
      {reason ? <p className="mt-4 text-sm font-semibold leading-7 text-navy">{reason}</p> : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {saint.keyVirtues.slice(0, 3).map((virtue) => (
          <span key={virtue} className="season-pill">
            {virtue}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm leading-7 text-muted">
        <p>
          <span className="font-semibold text-navy">Patronage:</span>{" "}
          {saint.patronages.slice(0, 2).join(", ") || "Holiness in daily life"}
        </p>
      </div>
      <div className="relative z-10 mt-5 flex flex-col gap-3 sm:flex-row">
        <Link href={`/saints/${saint.slug}`} className="btn btn-primary focus-ring justify-center">
          Learn More
        </Link>
        <SaintSaveButton saintId={saint.id} />
      </div>
    </article>
  );
}
