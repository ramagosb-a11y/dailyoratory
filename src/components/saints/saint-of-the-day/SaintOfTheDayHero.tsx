"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";
import { SaintDayExternalLink } from "@/components/saints/saint-of-the-day/shared";

export function SaintOfTheDayHero({
  entry,
  fallbackLinks,
}: {
  entry: SaintOfTheDayEntry | undefined;
  fallbackLinks: readonly { label: string; href: string; source: string; dateKey: string }[];
}) {
  function handleExternalClick(destination: string, source: string, saintSlug?: string, dateKey?: string) {
    trackEvent("saint_of_day_external_click", {
      saint_slug: saintSlug,
      date_key: dateKey,
      destination,
      source,
    });
  }

  return (
    <section className="rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_42%),linear-gradient(180deg,rgba(255,252,244,0.96),rgba(250,245,232,0.98))] p-8 shadow-soft sm:p-10 lg:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Saint of the Day</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <h2 className="font-display text-5xl font-semibold leading-none text-navy sm:text-6xl">Today&apos;s Saint</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            A daily witness to help you pray, grow in virtue, and follow Christ.
          </p>
          {entry ? (
            <>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{entry.name}</p>
              <p className="mt-2 max-w-3xl text-sm leading-8 text-muted">{entry.shortDescription}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#todays-saint" className="btn liturgical-button focus-ring justify-center">
                  Read Daily Oratory Reflection
                </Link>
                <SaintDayExternalLink
                  href={entry.franciscanMediaUrl}
                  onClick={() =>
                    handleExternalClick(entry.franciscanMediaUrl, "Franciscan Media", entry.slug, entry.dateKey)
                  }
                  className="btn btn-secondary focus-ring justify-center"
                >
                  Read Full Franciscan Media Profile
                </SaintDayExternalLink>
              </div>
            </>
          ) : (
            <>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
                Daily Oratory is building its Saint of the Day library. For today&apos;s full saint profile,
                visit Franciscan Media&apos;s Saint of the Day calendar or Vatican News.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {fallbackLinks.slice(0, 2).map((link, index) => (
                  <SaintDayExternalLink
                    key={link.href}
                    href={link.href}
                    onClick={() => handleExternalClick(link.href, link.source, undefined, link.dateKey)}
                    className={
                      index === 0
                        ? "btn liturgical-button focus-ring justify-center"
                        : "btn btn-secondary focus-ring justify-center"
                    }
                  >
                    {link.label}
                  </SaintDayExternalLink>
                ))}
              </div>
            </>
          )}
        </div>
        <aside className="rounded-2xl border border-gold/40 bg-ivory/85 p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Today&apos;s note</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Saints are witnesses to Christ. We ask their prayers, imitate their virtue, and worship God
            alone.
          </p>
        </aside>
      </div>
    </section>
  );
}
