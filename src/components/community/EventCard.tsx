import Link from "next/link";
import {
  formatEventDate,
  formatEventTimeRange,
  formatRecurrence,
  getEventHref,
  getEventLocationLabel,
} from "@/lib/community";
import type { EventRecord } from "@/types/content";

export function EventCard({ event, compact = false }: { event: EventRecord; compact?: boolean }) {
  return (
    <article className="card resource-card relative flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <span className="season-pill">{event.eventType}</span>
          <span className="season-pill">{getEventLocationLabel(event)}</span>
          {event.recurrence && event.recurrence.frequency !== "none" ? (
            <span className="season-pill">Recurring</span>
          ) : null}
        </div>
        {event.language ? <span className="text-xs font-semibold text-muted">{event.language}</span> : null}
      </div>

      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={getEventHref(event)} className="focus-ring rounded-sm hover:text-burgundy">
          <span className="absolute inset-0" aria-hidden="true" />
          {event.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{event.description}</p>

      <dl className="mt-5 grid gap-3 rounded-md border border-stone bg-parchment p-4 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">When</dt>
          <dd className="mt-1 font-semibold text-navy">{formatEventDate(event)}</dd>
          <dd className="text-muted">{formatEventTimeRange(event)}</dd>
        </div>
        {!compact ? (
          <>
            <div>
              <dt className="text-xs font-bold uppercase text-burgundy">Where</dt>
              <dd className="mt-1 text-muted">{event.locationName}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-burgundy">Rhythm</dt>
              <dd className="mt-1 text-muted">{formatRecurrence(event)}</dd>
            </div>
          </>
        ) : null}
      </dl>

      <div className="mt-5 flex flex-col gap-3 border-t border-stone pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">{event.hostName ?? "Daily Oratory community"}</p>
        <span className="btn btn-secondary focus-ring pointer-events-none relative z-10">View event</span>
      </div>
    </article>
  );
}
