"use client";

import { useState } from "react";

export function PromptCopyBox({
  label,
  prompt,
}: {
  label: string;
  prompt: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-sm border border-stone bg-ivory p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">{label}</p>
        <button type="button" onClick={copyPrompt} className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
          {copied ? "Copied" : "Copy Prompt"}
        </button>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{prompt}</p>
    </div>
  );
}
