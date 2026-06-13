"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getAdorationPrayerPaths, getPrayerPathByNeed } from "@/lib/adoration";
import { trackEvent } from "@/lib/analytics";
import type { PrayerPathNeed } from "@/types/adoration";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function AdorationPrayerPathSelector() {
  const paths = getAdorationPrayerPaths();
  const [need, setNeed] = useState<PrayerPathNeed>("peace");
  const selected = getPrayerPathByNeed(need) ?? paths[0];
  const [copied, setCopied] = useState(false);

  async function copyPath() {
    try {
      await navigator.clipboard.writeText(
        [
          selected.need,
          "",
          `Prayer path: ${selected.description}`,
          `Scripture: ${selected.scriptureReference}`,
          `Prayer: ${selected.shortPrayer}`,
          "",
          ...selected.relatedLinks.map((link) => `${link.label}: ${link.href}`),
        ].join("\n"),
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Prayer paths"
        title="Choose a Prayer Path"
        summary="Pick a need and let the page suggest a simple way to pray before Jesus."
      />
      <div className="mt-7 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="card-parchment p-6">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            What do you need from this time?
            <select
              value={need}
              onChange={(event) => {
                const nextNeed = event.target.value as PrayerPathNeed;
                setNeed(nextNeed);
                trackEvent("adoration_prayer_path_select", { page_path: "/adoration", prayer_path: nextNeed });
              }}
              className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
            >
              {paths.map((path) => (
                <option key={path.slug} value={path.slug}>
                  {path.need}
                </option>
              ))}
            </select>
          </label>
          <p className="mt-5 text-sm leading-7 text-muted">
            This selector uses local state only and does not store or send personal prayer details.
          </p>
        </div>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">{selected.need}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{selected.description}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-stone bg-ivory px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Scripture</p>
              <p className="mt-2 text-sm leading-7 text-muted">{selected.scriptureReference}</p>
            </div>
            <div className="rounded-md border border-gold/30 bg-ivory px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Short prayer</p>
              <p className="mt-2 text-sm leading-7 text-muted">{selected.shortPrayer}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {selected.relatedLinks.map((link) => (
              <TrackedLink key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                {link.label}
              </TrackedLink>
            ))}
            <button type="button" onClick={copyPath} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Prayer path copied" : "Copy Prayer Path"}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
