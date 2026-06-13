"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { familyConversationStarters } from "@/data/familyPage";
import { formatConversationCardsForCopy } from "@/lib/family";

export function FamilyConversationStarters() {
  const [copied, setCopied] = useState(false);

  async function copyCards() {
    try {
      await navigator.clipboard.writeText(formatConversationCardsForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Conversation" title="Family Faith Conversations" summary="Simple questions can keep faith close to daily life without making the home feel like a classroom." />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {familyConversationStarters.map((item) => (
          <article key={item} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyCards} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Conversation cards copied" : "Copy Conversation Cards"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Conversation Cards
        </button>
      </div>
    </section>
  );
}
