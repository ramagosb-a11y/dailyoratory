"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { formatHomilyReflectionPromptsForCopy } from "@/lib/homilies";
import { SectionHeader } from "@/components/section-header";

const prompts = [
  "What word or phrase stayed with me?",
  "What did this teach me about Jesus?",
  "What Scripture passage was connected to the homily?",
  "Where do I need conversion?",
  "What virtue is God inviting me to practice?",
  "Who should I pray for after hearing this?",
  "What is one action I can take today?",
];

export function HomilyReflectionPrompts() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(formatHomilyReflectionPromptsForCopy());
    setCopied(true);
    trackEvent("homily_reflection_prompts_copy", { page_path: "/homilies" });
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section>
      <SectionHeader eyebrow="After Listening" title="Reflection Prompts" summary="Use one or two of these prompts to let a good homily become prayer and concrete discipleship." />
      <div className="mt-8 rounded-md border border-stone bg-ivory p-6 shadow-soft">
        <ul className="grid gap-3 text-sm leading-7 text-muted">
          {prompts.map((prompt) => (
            <li key={prompt} className="rounded-2xl border border-stone/70 bg-parchment/40 px-4 py-3">
              {prompt}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={handleCopy} className="btn btn-primary focus-ring">
            {copied ? "Copied" : "Copy Reflection Prompts"}
          </button>
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring">
            Print Reflection Prompts
          </button>
        </div>
      </div>
    </section>
  );
}
