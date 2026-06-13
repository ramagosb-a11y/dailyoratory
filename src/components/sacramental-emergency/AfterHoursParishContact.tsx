"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const voicemailScript =
  "My name is [name]. I need a Catholic priest urgently for Anointing of the Sick / danger of death / Confession / Viaticum. We are at [location]. Please call me back at [phone number].";

export function AfterHoursParishContact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(voicemailScript);
    trackEvent("sacramental_emergency_prayer_copy", { item: "voicemail-script" });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact-after-hours" className="scroll-mt-28 card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">How To Contact a Parish After Hours</h2>
      <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        <li>Call the parish office number.</li>
        <li>Listen for an emergency line or priest emergency option.</li>
        <li>Check the parish website for sacramental emergency instructions.</li>
        <li>Try nearby Catholic parishes.</li>
        <li>If in a hospital, ask staff for the Catholic chaplain or priest on call.</li>
        <li>Search for your diocese and priest emergency or hospital chaplain.</li>
        <li>Leave a clear voicemail with your name, callback number, location, and urgent sacramental need.</li>
        <li>Keep your phone available for return calls.</li>
      </ol>
      <div className="mt-6 rounded-[1.2rem] border border-gold/25 bg-white/75 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">What to say in voicemail</p>
        <p className="daily-readable mt-2 text-sm leading-7 text-muted">{voicemailScript}</p>
        <p className="daily-readable-muted mt-3 text-xs leading-6 text-muted">
          Do not include sensitive medical details unless needed. Keep the message clear and brief.
        </p>
        <button type="button" onClick={handleCopy} className="btn btn-secondary focus-ring daily-button-readable mt-4 min-h-12 justify-center">
          {copied ? "Copied." : "Copy Voicemail Script"}
        </button>
      </div>
    </section>
  );
}
