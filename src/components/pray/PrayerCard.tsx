"use client";

import { useState } from "react";
import { BodyText, SmallText } from "@/components/ui/Typography";
import { trackEvent } from "@/lib/analytics";
import { copyPrayerText } from "@/lib/prayer";
import type { PrayerPagePrayer } from "@/types/prayer";

export function PrayerCard({ prayer }: { prayer: PrayerPagePrayer }) {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(copyPrayerText(prayer));
      trackEvent("prayer_copy", {
        prayer_slug: prayer.slug,
        prayer_title: prayer.title,
        category: prayer.category,
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="card-parchment liturgical-card-accent flex h-full flex-col p-7 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-stone bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          {prayer.category}
        </span>
        <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
          {prayer.whenToPray}
        </span>
      </div>

      {prayer.subtitle ? (
        <p className="mt-4 text-base font-bold uppercase tracking-[0.16em] text-burgundy">{prayer.subtitle}</p>
      ) : null}
      <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{prayer.title}</h3>

      <div className="mt-6 space-y-5 text-[19px] leading-9 text-muted">
        {(prayer.paragraphs ?? []).map((paragraph) => (
          <BodyText key={paragraph} className="text-muted sm:text-[1.2rem] sm:leading-9">
            {paragraph}
          </BodyText>
        ))}
      </div>

      {prayer.bullets?.length ? (
        <ul className="mt-6 grid gap-4 text-[19px] leading-9 text-muted">
          {prayer.bullets.map((item) => (
            <li key={item} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {prayer.closing ? <SmallText className="mt-6 text-base leading-8 sm:text-lg">{prayer.closing}</SmallText> : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyPrayer} className="btn liturgical-button focus-ring w-full justify-center sm:w-auto">
          {copied ? "Prayer copied" : "Copy Prayer"}
        </button>
        <a href="#prayer-rhythm-builder" className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
          Add to Daily Rhythm
        </a>
      </div>
    </article>
  );
}
