"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatVirtualPilgrimageForPrint, formatVirtualPilgrimagePrayerForCopy, getVirtualPilgrimageSteps } from "@/lib/vatican";
import { trackEvent } from "@/lib/analytics";

export function VirtualPilgrimage() {
  const [copied, setCopied] = useState(false);
  const steps = getVirtualPilgrimageSteps();
  const prayer = formatVirtualPilgrimagePrayerForCopy();

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayer);
      setCopied(true);
      trackEvent("virtual_pilgrimage_prayer_copy", { page_path: "/vatican", section: "virtual-pilgrimage" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function printPlan() {
    const content = formatVirtualPilgrimageForPrint();
    const popup = window.open("", "_blank", "width=900,height=700");
    if (!popup) return;
    popup.document.write(`<pre style="white-space:pre-wrap;font-family:Georgia,serif;padding:32px;line-height:1.7;">${content}</pre>`);
    popup.document.close();
    popup.focus();
    popup.print();
    trackEvent("virtual_pilgrimage_print", { page_path: "/vatican", section: "virtual-pilgrimage" });
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Virtual pilgrimage"
        title="Make a Virtual Pilgrimage"
        summary="A simple way to pray with the Vatican from afar when you cannot travel."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_0.95fr]">
        <article className="card-parchment p-6">
          <ol className="space-y-3 text-sm leading-7 text-muted">
            {steps.map((step, index) => (
              <li key={step}>
                <span className="mr-2 font-semibold text-navy">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={printPlan} className="btn liturgical-button focus-ring justify-center">
              Print Virtual Pilgrimage Plan
            </button>
          </div>
        </article>
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Prayer for a virtual pilgrimage</p>
          <p className="mt-4 text-sm leading-7 whitespace-pre-line text-muted">{prayer}</p>
          <button type="button" onClick={copyPrayer} className="btn btn-secondary focus-ring mt-6 justify-center">
            {copied ? "Prayer copied" : "Copy Virtual Pilgrimage Prayer"}
          </button>
        </article>
      </div>
    </section>
  );
}
