"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getCatechismStudyMethod } from "@/lib/catechism";

function formatMethodForCopy() {
  return getCatechismStudyMethod()
    .map((step, index) => `${index + 1}. ${step.title}\n${step.body}`)
    .join("\n\n");
}

export function CatechismStudyMethod() {
  const steps = getCatechismStudyMethod();
  const [copied, setCopied] = useState(false);

  async function copyMethod() {
    try {
      await navigator.clipboard.writeText(formatMethodForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Study method"
        title="Pray, Read, Reflect, Live"
        summary="Use a short, prayerful method so the Catechism becomes a guide for discipleship, not only information."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{index + 1}. {step.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button type="button" onClick={copyMethod} className="btn btn-secondary focus-ring justify-center">
          {copied ? "Method copied" : "Copy Method"}
        </button>
      </div>
    </section>
  );
}
