import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import {
  formatEventDate,
  formatEventDateTime,
  formatEventTimeRange,
  formatRecurrence,
  getEventLocationLabel,
} from "@/lib/community";
import { getRelatedContent } from "@/lib/content";
import type { EventRecord } from "@/types/content";

export function EventDetail({ event }: { event: EventRecord }) {
  const related = getRelatedContent(event);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Community", href: "/community" },
            { label: "Events", href: "/community/events" },
            { label: event.title },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
          <article className="content-card p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              <span className="season-pill">{event.eventType}</span>
              <span className="season-pill">{getEventLocationLabel(event)}</span>
              {event.recurrence && event.recurrence.frequency !== "none" ? (
                <span className="season-pill">Recurring</span>
              ) : null}
            </div>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{event.description}</p>

            <div className="sacred-divider my-8" />

            <div className="content-prose resource-markdown space-y-6">
              {event.body?.map((block, index) => {
                if (block.type === "heading") return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
                if (block.type === "paragraph") return <p key={`${block.type}-${index}`}>{block.text}</p>;
                if (block.type === "callout") {
                  return (
                    <aside key={`${block.type}-${index}`} className="card-parchment p-5">
                      <h2>{block.title}</h2>
                      <p>{block.text}</p>
                    </aside>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={`${block.type}-${index}`} className="list-disc space-y-2">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              })}
            </div>
          </article>

          <aside className="grid gap-4">
            <section className="dashboard-card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Event details</p>
              <dl className="mt-4 grid gap-4 text-sm">
                <div>
                  <dt className="font-bold text-navy">Date</dt>
                  <dd className="mt-1 text-muted">{formatEventDate(event)}</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Time</dt>
                  <dd className="mt-1 text-muted">{formatEventTimeRange(event)}</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Location</dt>
                  <dd className="mt-1 text-muted">{event.locationName}</dd>
                  {event.venueAddress ? <dd className="text-muted">{event.venueAddress}</dd> : null}
                </div>
                <div>
                  <dt className="font-bold text-navy">Rhythm</dt>
                  <dd className="mt-1 text-muted">{formatRecurrence(event)}</dd>
                </div>
                {event.hostName ? (
                  <div>
                    <dt className="font-bold text-navy">Host</dt>
                    <dd className="mt-1 text-muted">{event.hostName}</dd>
                  </div>
                ) : null}
              </dl>
              {event.registrationUrl ? (
                <Link href={event.registrationUrl} className="btn btn-primary focus-ring mt-5 w-full">
                  Join or register
                </Link>
              ) : (
                <Link href="/community/contact" className="btn btn-secondary focus-ring mt-5 w-full">
                  Ask about this event
                </Link>
              )}
            </section>

            <section className="card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Prepare peacefully</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                {(event.preparationNotes ?? [`Add ${event.title} to your calendar for ${formatEventDateTime(event)}.`]).map(
                  (note) => (
                    <li key={note} className="rounded-md border border-stone bg-ivory p-3">
                      {note}
                    </li>
                  ),
                )}
              </ul>
            </section>
          </aside>
        </div>
      </main>
      <RelatedContent records={related} />
    </div>
  );
}
