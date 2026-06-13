"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { formatMysteryPrayerForCopy } from "@/lib/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function RosaryDecadePrayer({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(formatMysteryPrayerForCopy(mystery));
      trackEvent("rosary_mystery_prayer_copy", {
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
      eyebrow="Prayer for this mystery"
      title="Prayer for This Mystery"
      summary="Turn the decade into a direct prayer for grace and faithful response."
    >
      <article className="card-parchment p-6">
        <pre className="whitespace-pre-wrap text-sm leading-8 text-navy">{mystery.decadePrayer}</pre>
        <div className="mt-6">
          <button type="button" onClick={copyPrayer} className="btn btn-secondary focus-ring justify-center">
            {copied ? "Prayer copied" : "Copy Prayer"}
          </button>
        </div>
      </article>
    </RosarySection>
  );
}
