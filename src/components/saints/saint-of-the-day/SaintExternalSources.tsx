"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";
import { SaintDayExternalLink } from "@/components/saints/saint-of-the-day/shared";

export function SaintExternalSources({
  entry,
  fallbackLinks,
}: {
  entry?: SaintOfTheDayEntry;
  fallbackLinks: readonly { label: string; href: string; source: string; dateKey: string }[];
}) {
  const cards = entry
    ? [
        { title: "Franciscan Media profile", href: entry.franciscanMediaUrl, source: "Franciscan Media", description: "Primary Saint of the Day calendar reference and full external profile." },
        { title: "Vatican News Saints", href: entry.vaticanNewsUrl, source: "Vatican News", description: "Official Vatican saint coverage and additional Catholic context." },
        { title: "Catholic Online Saint of the Day", href: entry.catholicOnlineUrl, source: "Catholic Online", description: "Additional external saint reference for the day." },
      ]
    : fallbackLinks.map((link) => ({
        title: link.label,
        href: link.href,
        source: link.source,
        description: "Use this trusted external calendar or saint reference while Daily Oratory expands its local entries.",
      }));

  function handleClick(destination: string, source: string, saintSlug?: string, dateKey?: string) {
    trackEvent("saint_of_day_external_click", {
      saint_slug: saintSlug,
      date_key: dateKey,
      destination,
      source,
    });
  }

  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Read More</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Read More About Today&apos;s Saint</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={`${card.source}-${card.href}`} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">{card.source}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <SaintDayExternalLink
              href={card.href}
              onClick={() => handleClick(card.href, card.source, entry?.slug, entry?.dateKey)}
              className="btn btn-secondary focus-ring mt-5 inline-flex justify-center"
            >
              Open External Source
            </SaintDayExternalLink>
          </article>
        ))}
        {entry ? (
          <article className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Daily Oratory</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">Saints Library</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Browse more saint profiles, feast days, virtues, and related prayer resources.</p>
            <Link
              href="/saints"
              onClick={() =>
                trackEvent("saint_of_day_related_click", {
                  saint_slug: entry.slug,
                  date_key: entry.dateKey,
                  destination: "/saints",
                  source: "Daily Oratory",
                })
              }
              className="btn liturgical-button focus-ring mt-5 inline-flex justify-center"
            >
              Browse Saints Library
            </Link>
          </article>
        ) : null}
      </div>
    </section>
  );
}
