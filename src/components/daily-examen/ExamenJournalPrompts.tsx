"use client";

import { useState } from "react";
import { examenJournalPrompts } from "@/data/dailyExamenPage";
import { formatJournalPromptsForCopy } from "@/lib/dailyExamen";
import { trackEvent } from "@/lib/analytics";
import { ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function ExamenJournalPrompts() {
  const [copied, setCopied] = useState(false);

  async function copyPrompts() {
    try {
      await navigator.clipboard.writeText(formatJournalPromptsForCopy());
      trackEvent("examen_journal_prompt_copy", {
        category: "journal-prompts",
        item_slug: "daily-examen-journal-prompts",
        source: "/daily-examen",
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ExamenSection
      id="journal-prompts"
      eyebrow="Journal prompts"
      title="Daily Examen Journal Prompts"
      summary="Use these prompts slowly. You do not need to answer every one each night."
    >
      <div className="card-parchment p-6 sm:p-8">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {examenJournalPrompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={copyPrompts} className="btn btn-primary focus-ring justify-center">
            {copied ? "Prompts copied" : "Copy Journal Prompts"}
          </button>
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
            Print Journal Prompts
          </button>
        </div>
      </div>
    </ExamenSection>
  );
}

