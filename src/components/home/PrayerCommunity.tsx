import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { events } from "@/data/resources";

export function PrayerCommunity() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Join a Prayer Community</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
            Pray and learn with others.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Local faith groups, events, and discussion prompts for parish and home communities.
          </p>
        </div>
        <Link href="/community/events" className="text-link focus-ring text-sm">
          View events
        </Link>
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {events.slice(0, 3).map((event) => (
          <EventCard key={event.slug} event={event} compact />
        ))}
      </div>
    </section>
  );
}
