import type { FaithEvent } from "@/content/types";
import { formatEventDay, formatEventMonth } from "@/lib/format";

export function EventCard({
  event,
  compact = false,
}: {
  event: FaithEvent;
  compact?: boolean;
}) {
  return (
    <article className="card flex gap-4 p-4">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-stone bg-background text-center">
        <span className="block text-xs font-bold uppercase text-burgundy">
          {formatEventMonth(event.date)}
        </span>
        <span className="font-display -mt-2 block text-3xl font-semibold text-navy">
          {formatEventDay(event.date)}
        </span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase text-gold">{event.type}</p>
        <h3 className="font-display mt-1 text-2xl font-semibold leading-tight text-navy">
          {event.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-muted">
          {event.time} at {event.location}
        </p>
        {!compact ? <p className="mt-3 text-sm leading-7 text-muted">{event.description}</p> : null}
      </div>
    </article>
  );
}
