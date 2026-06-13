"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import { getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function MysteryDetailHero({
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
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {mystery.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="season-pill">Decade {mystery.decadeNumber}</span>
            <span className="season-pill">{mystery.virtue}</span>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
            {mystery.scriptureReference}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href="/rosary"
              eventName="rosary_prayer_room_click"
              eventParams={{ group_slug: group.slug, mystery_slug: mystery.slug, destination: "/rosary" }}
              className="btn btn-gold focus-ring justify-center"
            >
              Pray this decade
            </TrackedLink>
            <Link href={`/devotions/holy-rosary/${group.slug}`} className="btn btn-secondary focus-ring justify-center">
              Back to mysteries
            </Link>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Fruit of the mystery</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{mystery.virtue}</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Let this fruit become the grace you ask for while you pray the decade slowly with Mary.
          </p>
        </aside>
      </div>
    </section>
  );
}
