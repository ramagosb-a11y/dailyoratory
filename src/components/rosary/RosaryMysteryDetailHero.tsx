"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import { trackEvent } from "@/lib/analytics";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function RosaryMysteryDetailHero({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  useEffect(() => {
    trackEvent("rosary_mystery_detail_open", {
      group_slug: group.slug,
      mystery_slug: mystery.slug,
    });
  }, [group.slug, mystery.slug]);

  return (
    <section className={`rounded-md border p-6 shadow-soft sm:p-8 ${getRosaryAccentClasses(group.colorAccent)}`}>
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{group.title}</p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {mystery.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-navy">
            {mystery.mysteryLabel} · {mystery.decadeLabel}
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">
            {mystery.scriptureReference}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-gold/35 bg-ivory/90 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Fruit of the mystery</p>
              <p className="mt-2 font-display text-3xl font-semibold text-navy">{mystery.fruitOfMystery}</p>
            </div>
            <div className="rounded-md border border-gold/35 bg-ivory/90 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Grace to ask</p>
              <p className="mt-2 text-sm leading-7 text-navy">{mystery.graceToAsk}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#seven-senses-meditation" className="btn btn-gold focus-ring justify-center">
              Begin the Meditation
            </Link>
            <Link href="#pray-this-decade" className="btn btn-gold focus-ring justify-center">
              Pray This Decade
            </Link>
            <TrackedLink
              href="/rosary"
              eventName="rosary_prayer_room_click"
              eventParams={{ group_slug: group.slug, mystery_slug: mystery.slug, destination: "/rosary" }}
              className="btn btn-secondary focus-ring justify-center"
            >
              Open Rosary Prayer Room
            </TrackedLink>
            <Link href={`/devotions/holy-rosary/${group.slug}`} className="btn btn-secondary focus-ring justify-center">
              Back to {group.shortTitle} Mysteries
            </Link>
          </div>
        </div>

        <aside className="card-parchment p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">This decade</p>
          <p className="mt-3 text-sm leading-7 text-muted">{mystery.decadeIntention}</p>
          <div className="mt-6 rounded-md border border-gold/35 bg-ivory/85 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Live this mystery today</p>
            <p className="mt-3 text-sm leading-7 text-navy">{mystery.practiceToday}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
