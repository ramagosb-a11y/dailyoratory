"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getOciaParishQuestions } from "@/lib/ocia";

function formatQuestionsForCopy(questions: string[]) {
  return ["Questions to Ask a Parish", "", ...questions.map((question) => `- ${question}`)].join("\n");
}

export function ParishQuestionsChecklist() {
  const questions = getOciaParishQuestions();
  const [copied, setCopied] = useState(false);

  async function copyQuestions() {
    try {
      await navigator.clipboard.writeText(formatQuestionsForCopy(questions));
      setCopied(true);
      trackEvent("ocia_parish_questions_copy", { page_path: "/ocia" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="parish-questions" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Practical next step"
        title="Questions to Ask Your Parish"
        summary="Use this checklist to help your first parish conversation feel calmer and clearer."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2">
          {questions.map((question) => (
            <li key={question} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {question}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={copyQuestions} className="btn liturgical-button focus-ring justify-center">
            {copied ? "Parish questions copied" : "Copy Parish Questions"}
          </button>
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
            Print Checklist
          </button>
        </div>
      </div>
    </section>
  );
}
