"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { familyTechnologyIdeas } from "@/data/familyPage";

export function FamilyTechnologyRule() {
  const [boundary, setBoundary] = useState<string>(familyTechnologyIdeas[0]);
  const [copied, setCopied] = useState(false);

  async function copyBoundary() {
    try {
      await navigator.clipboard.writeText(`This week our family will: ${boundary}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Attention"
        title="Technology and the Domestic Church"
        summary="Technology can serve family life or fracture it. A simple rule can protect attention, purity, peace, sleep, and conversation."
      />
      <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="card-parchment p-6">
          <ul className="grid gap-3 md:grid-cols-2">
            {familyTechnologyIdeas.map((idea) => (
              <li key={idea} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {idea}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-parchment p-6">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Choose one technology boundary for the week
            <select
              value={boundary}
              onChange={(event) => setBoundary(event.target.value)}
              className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
            >
              {familyTechnologyIdeas.map((idea) => (
                <option key={idea} value={idea}>
                  {idea}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-5 rounded-md border border-gold/30 bg-ivory px-4 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">This week our family will...</p>
            <p className="mt-2 text-sm leading-7 text-muted">{boundary}</p>
          </div>
          <button type="button" onClick={copyBoundary} className="btn liturgical-button focus-ring mt-5 justify-center">
            {copied ? "Technology boundary copied" : "Copy Technology Boundary"}
          </button>
        </div>
      </div>
    </section>
  );
}
