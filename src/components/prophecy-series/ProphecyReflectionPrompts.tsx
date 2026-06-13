"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesReflectionPrompts } from "@/data/prophecySeries";
import { trackEvent } from "@/lib/analytics";

export function ProphecyReflectionPrompts() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = prophecySeriesReflectionPrompts.map((prompt) => `- ${prompt}`).join("\n");
    await navigator.clipboard.writeText(text);
    trackEvent("prophecy_series_prayer_copy", { section: "reflection-prompts" });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Reflect"
        title="Reflection Questions After Each Episode"
        summary="Use these prompts to keep the series rooted in prayer, discernment, and concrete response."
      />
      <div className="card-parchment mt-7 p-6 sm:p-7">
        <ul className="space-y-4">
          {prophecySeriesReflectionPrompts.map((prompt) => (
            <li key={prompt} className="daily-card-readable flex gap-3 text-navy">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
              <span>{prompt}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-secondary daily-button-readable min-h-12 justify-center"
          >
            {copied ? "Reflection prompts copied" : "Copy Reflection Prompts"}
          </button>
        </div>
      </div>
    </section>
  );
}
