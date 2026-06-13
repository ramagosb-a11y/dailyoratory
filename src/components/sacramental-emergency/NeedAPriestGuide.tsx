"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const callScript = "Hello, I need a Catholic priest for an urgent sacramental need. Someone is seriously ill / in danger of death / requesting Confession / requesting Anointing of the Sick. Can you help us reach a priest?";

export function NeedAPriestGuide() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(callScript);
    trackEvent("sacramental_emergency_prayer_copy", { item: "call-script" });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="need-a-priest" className="scroll-mt-28 card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Need a Priest: Who To Contact</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-stone/70 bg-white/70 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy">First</p>
          <ul className="daily-card-readable mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>Call the person&apos;s parish.</li>
            <li>Listen to the voicemail menu for an emergency line.</li>
            <li>Check the parish website for sacramental emergency instructions.</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-stone/70 bg-white/70 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy">Next</p>
          <ul className="daily-card-readable mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>Call nearby Catholic parishes.</li>
            <li>Call the local Catholic hospital chaplaincy.</li>
            <li>Ask hospital staff to contact the Catholic priest or Catholic chaplain.</li>
            <li>Contact the diocesan office if parish lines are not working.</li>
            <li>If there is immediate medical danger, call emergency services first.</li>
          </ul>
        </article>
      </div>
      <div className="mt-6 rounded-[1.2rem] border border-gold/25 bg-white/75 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Script for calling</p>
        <p className="daily-readable mt-2 text-sm leading-7 text-muted">{callScript}</p>
        <button type="button" onClick={handleCopy} className="btn btn-secondary focus-ring daily-button-readable mt-4 min-h-12 justify-center">
          {copied ? "Copied." : "Copy Calling Script"}
        </button>
      </div>
    </section>
  );
}
