"use client";

import { useState } from "react";
import { formatWordJournalForCopy } from "@/lib/bible";
import { trackEvent } from "@/lib/analytics";
import { BibleSection } from "@/components/bible/BibleUi";

export function BibleWordJournalTool() {
  const [reference, setReference] = useState("");
  const [wordOrPhrase, setWordOrPhrase] = useState("");
  const [stoodOut, setStoodOut] = useState("");
  const [invitation, setInvitation] = useState("");
  const [action, setAction] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyReflection() {
    try {
      await navigator.clipboard.writeText(
        formatWordJournalForCopy({ reference, wordOrPhrase, stoodOut, invitation, action }),
      );
      trackEvent("bible_word_journal_copy", {
        category: "word-journal",
        item_slug: "word-journal",
        source: "/bible",
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearForm() {
    setReference("");
    setWordOrPhrase("");
    setStoodOut("");
    setInvitation("");
    setAction("");
    setCopied(false);
  }

  return (
    <BibleSection
      eyebrow="Local-only tool"
      title="My Word from the Readings"
      summary="Capture one word or phrase from Scripture without sending your private reflection to the server or analytics."
    >
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Today&apos;s passage or reference</span>
              <input value={reference} onChange={(event) => setReference(event.target.value)} className="form-field focus-ring" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Word or phrase</span>
              <input value={wordOrPhrase} onChange={(event) => setWordOrPhrase(event.target.value)} className="form-field focus-ring" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">What stood out?</span>
              <textarea value={stoodOut} onChange={(event) => setStoodOut(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">What might Jesus be inviting me to do?</span>
              <textarea value={invitation} onChange={(event) => setInvitation(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">One action today</span>
              <textarea value={action} onChange={(event) => setAction(event.target.value)} className="form-field focus-ring min-h-20" />
            </label>
            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              Privacy note: stored in local state only for this page view. Your text is not sent to the server or analytics.
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Generated reflection</p>
          <pre className="mt-4 whitespace-pre-wrap text-sm leading-7 text-muted">
            {formatWordJournalForCopy({ reference, wordOrPhrase, stoodOut, invitation, action })}
          </pre>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyReflection} className="btn btn-primary focus-ring justify-center">
              {copied ? "Reflection copied" : "Copy Reflection"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Reflection
            </button>
            <button type="button" onClick={clearForm} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </aside>
      </div>
    </BibleSection>
  );
}
