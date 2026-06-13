"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";

function formatDecadeGuideForCopy(mystery: RosaryMystery) {
  return [
    `How to Pray This Decade: ${mystery.title}`,
    "",
    "1. Announce the mystery.",
    "2. Read or recall the Scripture scene.",
    "3. Pray one Our Father.",
    "4. Pray ten Hail Marys slowly.",
    "5. Pray one Glory Be.",
    `6. Ask for the fruit of the mystery: ${mystery.virtue}.`,
  ].join("\n");
}

export function PrayThisDecadeGuide({
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
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <RosarySection
      eyebrow="Pray this decade"
      title="How to Pray This Decade"
      summary="Keep the steps simple and ask for the fruit of the mystery as you pray."
    >
      <div className="card-parchment p-6">
        <ol className="grid gap-3 text-sm leading-7 text-muted">
          {[
            "Announce the mystery.",
            "Read or recall the Scripture scene.",
            "Pray one Our Father.",
            "Pray ten Hail Marys slowly.",
            "Pray one Glory Be.",
            `Ask for the fruit of the mystery: ${mystery.virtue}.`,
          ].map((step, index) => (
            <li key={step} className="grid grid-cols-[1.75rem_1fr] gap-3">
              <span className="font-bold text-burgundy">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={copyGuide} className="btn btn-secondary focus-ring justify-center">
            {copied ? "Guide copied" : "Copy how to pray this decade"}
          </button>
        </div>
      </div>
    </RosarySection>
  );
}
