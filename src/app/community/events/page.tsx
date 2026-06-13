import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EventCard } from "@/components/community/EventCard";
import { SectionHeader } from "@/components/section-header";
import { getLivePrayerEvents, getUpcomingEvents } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Events",
  description: "Upcoming Daily Oratory prayer, formation, and local Catholic community events.",
  path: "/community/events",
});

export default function CommunityEventsPage() {
  const events = getUpcomingEvents();
  const livePrayerEvents = getLivePrayerEvents();

  return (
    <main className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Community", href: "/community" }, { label: "Events" }]} />
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Events</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Upcoming gatherings
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Browse Catholic prayer, formation, and community gatherings, including trusted external events and Daily Oratory resources.
            </p>
          </div>
          <Link href="/community/contact" className="btn btn-secondary focus-ring">
            Submit an event question
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Live prayer events"
          title="Join a devotion with others"
          summary="Find Rosaries, chaplets, and other live prayer opportunities that invite peaceful participation."
        />
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {livePrayerEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="All events"
            title="Prayer, formation, and local gatherings"
            summary="This calendar includes one-time and recurring Catholic events, with clear schedules and direct links to the official hosts."
          />
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
