"use client";

import { useState } from "react";
import Link from "next/link";
import { RosarySection, getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import { getMysteriesForToday, getRosaryMysteryGroup } from "@/lib/rosary";

export function TodaysRosaryMysteries() {
  const [{ dayName, mysteries }] = useState(() => {
    const now = new Date();
    const todayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "America/Chicago",
    }).format(now);

    return {
      dayName: todayName,
      mysteries: getMysteriesForToday(now),
    };
  });

  const group = mysteries[0] ? getRosaryMysteryGroup(mysteries[0].groupSlug) : undefined;
  if (!group) return null;

  return (
    <RosarySection
      eyebrow="Today's mysteries"
      title={`Today's Rosary Mysteries: ${group.title}`}
      summary={`${dayName} is traditionally prayed with the ${group.shortTitle} Mysteries.`}
    >
      <section className={`rounded-md border p-6 shadow-soft ${getRosaryAccentClasses(group.colorAccent)}`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm leading-8 text-muted">{group.theme}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={`/devotions/holy-rosary/${group.slug}`} className="btn btn-secondary focus-ring justify-center">
                Explore {group.title}
              </Link>
              <Link href="/rosary" className="btn btn-gold focus-ring justify-center">
                Pray the Rosary Live
              </Link>
            </div>
          </div>
          <ul className="space-y-3">
            {mysteries.map((mystery) => (
              <li key={mystery.id}>
                <Link
                  href={mystery.fullPath}
                  className="flex flex-col rounded-md border border-stone/80 bg-ivory/85 px-4 py-3 transition hover:border-gold"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                    {mystery.decadeLabel}
                  </span>
                  <span className="mt-1 text-base font-semibold text-navy">{mystery.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </RosarySection>
  );
}
