"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { AnalyticsEventName, AnalyticsParams } from "@/lib/analytics";
import type { RosaryLink } from "@/types/rosary";

export function RosaryPrayerRoomCTA({
  eyebrow = "Prayer room",
  title,
  description,
  buttonLabel,
  href,
  compact = false,
  quickLinks,
  eventName,
  eventParams,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  compact?: boolean;
  quickLinks?: RosaryLink[];
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsParams;
}) {
  return (
    <section
      className={`rounded-md border border-gold/45 bg-[linear-gradient(145deg,#f9f3e4_0%,#fffdfa_100%)] shadow-soft ${
        compact ? "p-5" : "p-6 sm:p-7"
      }`}
    >
      <div className={`grid gap-4 ${compact ? "lg:grid-cols-[1fr_auto] lg:items-end" : "lg:grid-cols-[1fr_auto] lg:items-center"}`}>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{eyebrow}</p>
          <h2 className={`font-display mt-2 font-semibold text-navy ${compact ? "text-3xl" : "text-4xl"}`}>
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{description}</p>
          {quickLinks?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <TrackedLink
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="rounded-full border border-stone bg-ivory px-3 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          ) : null}
        </div>
        <TrackedLink
          href={href}
          eventName={eventName}
          eventParams={eventParams}
          className="btn btn-gold focus-ring justify-center"
        >
          {buttonLabel}
        </TrackedLink>
      </div>
    </section>
  );
}
