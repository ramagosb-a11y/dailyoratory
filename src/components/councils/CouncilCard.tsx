import Link from "next/link";
import type { ChurchCouncil } from "@/types/councils";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function CouncilCard({
  council,
  compact = false,
}: {
  council: ChurchCouncil;
  compact?: boolean;
}) {
  return (
    <article className="card-parchment p-5">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
        Council {council.number} • {council.years} • {council.location}
      </p>
      <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{council.name}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{council.majorIssue}</p>
      <p className="mt-3 rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
        Takeaway: {council.simpleTakeaway}
      </p>
      {!compact ? (
        <details className="mt-4 rounded-md border border-stone/80 bg-parchment px-4 py-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-navy">Learn more</summary>
          <p className="mt-3 text-sm leading-7 text-muted">{council.description}</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-muted">
            {council.keyTeachings.map((item) => (
              <li key={item} className="rounded-md border border-stone/60 bg-ivory/70 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-7 text-muted">{council.whyItMattersToday}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {council.relatedDailyOratoryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {council.officialResourceLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                external
                className="btn btn-secondary focus-ring justify-center"
                eventName="council_resource_click"
                eventParams={{ resource_name: council.name, resource_url: link.href, page_path: "/councils", section: "councils-timeline" }}
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </details>
      ) : null}
    </article>
  );
}
