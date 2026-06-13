"use client";

import { useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { dailyReadingsMethod } from "@/data/biblePage";
import { formatDailyReadingsMethodForCopy } from "@/lib/bible";
import { trackEvent } from "@/lib/analytics";
import { BibleSection } from "@/components/bible/BibleUi";

export function DailyReadingsMethod() {
  const [copied, setCopied] = useState(false);

  async function copyMethod() {
    try {
      await navigator.clipboard.writeText(formatDailyReadingsMethodForCopy());
      trackEvent("bible_reading_plan_copy", {
        category: "daily-readings-method",
        item_slug: "daily-readings-method",
        source: "/bible",
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <BibleSection
      id="daily-readings-method"
      eyebrow="10-minute pattern"
      title="A Simple Daily Readings Method"
      summary="A short, practical way to let the Church's daily readings shape prayer and daily life."
    >
      <div className="card-parchment p-6">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {dailyReadingsMethod.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={copyMethod} className="btn btn-primary focus-ring justify-center">
            {copied ? "Method copied" : "Copy Method"}
          </button>
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
            Print Method
          </button>
          <TrackedLink
            href="https://bible.usccb.org/daily-bible-reading"
            external
            className="btn btn-secondary focus-ring justify-center"
            eventName="bible_resource_click"
            eventParams={{
              category: "daily-readings-method",
              item_slug: "usccb-daily-bible-reading",
              source: "/bible",
              destination: "https://bible.usccb.org/daily-bible-reading",
            }}
          >
            Open Today&apos;s Readings
          </TrackedLink>
        </div>
      </div>
    </BibleSection>
  );
}
