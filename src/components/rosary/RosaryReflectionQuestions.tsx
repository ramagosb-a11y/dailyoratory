"use client";

import { useState } from "react";
import { formatReflectionQuestionsForCopy } from "@/lib/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery } from "@/types/rosary";

export function RosaryReflectionQuestions({ mystery }: { mystery: RosaryMystery }) {
  const [copied, setCopied] = useState(false);

  async function copyQuestions() {
    try {
      await navigator.clipboard.writeText(formatReflectionQuestionsForCopy(mystery));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <RosarySection
      eyebrow="Reflection questions"
      title="Reflection Questions"
      summary="Choose one question and carry it into prayer instead of trying to answer everything at once."
    >
      <article className="card-parchment p-7 sm:p-8">
        <ol className="daily-question-readable space-y-5">
          {mystery.reflectionQuestions.map((question, index) => (
            <li key={question} className="grid grid-cols-[1.75rem_1fr] gap-3">
              <span className="font-bold text-burgundy">{index + 1}.</span>
              <span>{question}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <button type="button" onClick={copyQuestions} className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
            {copied ? "Questions copied" : "Copy Reflection Questions"}
          </button>
        </div>
      </article>
    </RosarySection>
  );
}
