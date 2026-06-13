"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { classifyTraditionItem, getTraditionClassifierItems } from "@/lib/tradition";
import { trackEvent } from "@/lib/analytics";

const categoryLabels = {
  "sacred-tradition": "Sacred Tradition",
  doctrine: "Doctrine",
  discipline: "Discipline",
  devotion: "Devotion",
  custom: "Custom",
  mixed: "More than one category",
} as const;

export function TraditionClassifier() {
  const items = getTraditionClassifierItems();
  const [selectedSlug, setSelectedSlug] = useState(items[0]?.slug ?? "");

  const item = useMemo(() => classifyTraditionItem(selectedSlug) ?? items[0], [items, selectedSlug]);

  return (
    <section>
      <SectionHeader
        eyebrow="Interactive tool"
        title="What Kind Is It?"
        summary="This local-only tool gives a simple starting classification. Some Catholic realities involve more than one category at once."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose a Catholic practice or idea</span>
            <select
              value={selectedSlug}
              onChange={(event) => {
                const next = event.target.value;
                setSelectedSlug(next);
                trackEvent("tradition_classifier_use", { selected_slug: next, page_path: "/tradition" });
              }}
              className="form-field focus-ring"
            >
              {items.map((entry) => (
                <option key={entry.id} value={entry.slug}>
                  {entry.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this classifier uses local state only. It does not store or send your selection anywhere.
          </div>
        </form>
        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Starter classification</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{item?.title}</h3>
          {item ? (
            <>
              <p className="mt-3 inline-flex rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                {categoryLabels[item.category]}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.explanation}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.relatedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
