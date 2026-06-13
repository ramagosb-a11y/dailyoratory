"use client";

import { saveSacramentReflectionAnswer, useSacramentPreparationStore } from "@/lib/sacramentPreparationStorage";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";

export function SacramentReflectionFields({ companion }: { companion: SacramentCompanionRecord }) {
  const store = useSacramentPreparationStore();
  const progress = store.preparations[companion.slug];

  return (
    <section className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Reflection prompts</p>
      <div className="mt-4 grid gap-4">
        {companion.reflectionPrompts.map((item) => (
          <label key={item.id} className="grid gap-2">
            <span className="form-label">{item.prompt}</span>
            <span className="form-helper">{item.context}</span>
            <textarea
              value={progress?.reflectionAnswers[item.id] ?? ""}
              onChange={(event) => saveSacramentReflectionAnswer(companion.slug, item.id, event.target.value)}
              className="form-field textarea-field focus-ring"
              placeholder="Write a brief note for prayer or parish conversation."
            />
          </label>
        ))}
      </div>
    </section>
  );
}
