"use client";

import { useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { buildBibleTranslationRecommendation } from "@/lib/bible";
import { trackEvent } from "@/lib/analytics";
import { BibleUseCase } from "@/types/bible";
import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

const options = [
  { value: BibleUseCase.Beginner, label: "I am new to the Bible" },
  { value: BibleUseCase.MassReadings, label: "I want to follow Mass readings" },
  { value: BibleUseCase.Study, label: "I want study notes" },
  { value: BibleUseCase.TraditionalLanguage, label: "I want traditional language" },
  { value: BibleUseCase.Academic, label: "I want academic study" },
  { value: BibleUseCase.Family, label: "I want family reading" },
  { value: BibleUseCase.Prayer, label: "I want prayer / Lectio Divina" },
  { value: BibleUseCase.Ocia, label: "I am in OCIA" },
  { value: BibleUseCase.Audio, label: "I want audio readings" },
];

export function BibleTranslationFinder() {
  const [selectedNeed, setSelectedNeed] = useState<BibleUseCase>(BibleUseCase.Beginner);
  const recommendation = buildBibleTranslationRecommendation(selectedNeed);

  return (
    <BibleSection
      eyebrow="Local-only tool"
      title="Which Catholic Bible Should I Use?"
      summary="This selector uses local state only. It does not require login or send your choice to the server."
    >
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose what you need most</span>
            <select
              value={selectedNeed}
              onChange={(event) => {
                const next = event.target.value as BibleUseCase;
                setSelectedNeed(next);
                trackEvent("bible_translation_finder_use", {
                  category: "translation-finder",
                  item_slug: next,
                  source: "/bible",
                  destination: "local-tool",
                });
              }}
              className="form-field focus-ring"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this recommendation runs in local state only.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommendation</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{recommendation.recommendation}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{recommendation.explanation}</p>
          <div className="mt-4 rounded-md border border-stone bg-ivory p-4">
            <p className="text-sm font-semibold text-navy">How to start</p>
            <p className="mt-2 text-sm leading-7 text-muted">{recommendation.howToStart}</p>
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Related Daily Oratory links</p>
            <div className="mt-3">
              <BibleLinkPills links={recommendation.relatedLinks.filter((link) => !link.external)} />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {recommendation.officialLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                external
                className="btn btn-secondary focus-ring justify-center"
                eventName="bible_resource_click"
                eventParams={{
                  category: "translation-finder",
                  item_slug: selectedNeed,
                  source: "/bible",
                  destination: link.href,
                }}
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </aside>
      </div>
    </BibleSection>
  );
}
