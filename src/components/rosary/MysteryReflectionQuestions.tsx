"use client";

import { useState } from "react";
import type { RosaryMystery } from "@/types/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";

function formatQuestionsForCopy(mystery: RosaryMystery) {
  return [
    `Reflection Questions: ${mystery.title}`,
    "",
    ...mystery.reflectionQuestions.map((question, index) => `${index + 1}. ${question}`),
  ].join("\n");
}

export function MysteryReflectionQuestions({ mystery }: { mystery: RosaryMystery }) {
  const [copied, setCopied] = useState(false);

  async function copyQuestions() {
    try {
      await navigator.clipboard.writeText(formatQuestionsForCopy(mystery));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <RosarySection
      eyebrow="Reflection"
      title="Questions for Prayer"
      summary="Stay simple. Choose one question and carry it into your conversation with Jesus."
    >
      <div className="card-parchment p-6">
        <ol className="grid gap-3 text-sm leading-7 text-muted">
          {mystery.reflectionQuestions.map((question, index) => (
            <li key={question} className="grid grid-cols-[1.75rem_1fr] gap-3">
              <span className="font-bold text-burgundy">{index + 1}.</span>
              <span>{question}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={copyQuestions} className="btn btn-secondary focus-ring justify-center">
            {copied ? "Questions copied" : "Copy reflection questions"}
          </button>
        </div>
      </div>
    </RosarySection>
  );
}
