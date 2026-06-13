"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { formatDecadeGuideForCopy } from "@/lib/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function PrayThisDecade({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  const [copied, setCopied] = useState(false);

  async function copyGuide() {
    try {
      await navigator.clipboard.writeText(formatDecadeGuideForCopy(mystery));
      trackEvent("rosary_decade_guide_copy", {
        group_slug: group.slug,
        mystery_slug: mystery.slug,
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <RosarySection
      id="pray-this-decade"
      eyebrow="Pray this decade"
      title="Pray This Decade"
      summary="Keep the steps simple, ask for the grace of the mystery, and let silence have a place too."
    >
      <article className="overflow-hidden rounded-md border border-stone bg-parchment shadow-soft">
        <div className="px-7 py-7 sm:px-8">
          <p className="daily-readable rounded-md border border-gold/35 bg-ivory/85 px-5 py-5">
            <span className="font-semibold">For this decade, ask:</span> {mystery.decadeIntention}
          </p>
          <ol className="mt-6 space-y-4">
            {mystery.howToPrayThisDecade.map((step, index) => (
              <li key={step.id} className="grid gap-3 border-b border-stone/70 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[2rem_1fr]">
                <span className="font-bold text-burgundy">{index + 1}.</span>
                <div>
                  <p className="text-base font-semibold uppercase tracking-[0.16em] text-burgundy md:text-[17px]">{step.title}</p>
                  <p className="daily-readable-muted mt-3">{step.instruction}</p>
                  {step.prayerText ? <p className="daily-readable mt-3 font-semibold">{step.prayerText}</p> : null}
                </div>
              </li>
            ))}
          </ol>
          <p className="daily-readable-muted mt-6">{mystery.closingPrayer}</p>
        </div>
        <div className="border-t border-stone/70 bg-ivory/70 px-7 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyGuide} className="btn btn-primary focus-ring w-full justify-center sm:w-auto">
              {copied ? "Decade guide copied" : "Copy Decade Guide"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
              Print Decade Guide
            </button>
          </div>
        </div>
      </article>
    </RosarySection>
  );
}
