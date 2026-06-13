"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { purchaseChecklist } from "@/data/sacramentalsPage";
import { formatPurchaseChecklistForCopy } from "@/lib/sacramentals";

export function PurchaseDiscernmentGuide() {
  const [copied, setCopied] = useState(false);

  async function copyChecklist() {
    try {
      await navigator.clipboard.writeText(formatPurchaseChecklistForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Discernment" title="How to Choose Sacramentals Wisely" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {purchaseChecklist.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <button type="button" onClick={copyChecklist} className="btn btn-secondary focus-ring mt-6 justify-center">
        {copied ? "Checklist copied" : "Copy Purchase Discernment Checklist"}
      </button>
    </section>
  );
}
