"use client";

import {
  savePromptNote,
  toggleMarkedPrompt,
  useExaminationSession,
} from "@/lib/examinationSessionStorage";
import type { ExaminationSection } from "@/types/examination";

export function ExaminationPromptList({ sections }: { sections: ExaminationSection[] }) {
  const session = useExaminationSession();
  const marked = new Set(session.markedPromptIds);

  return (
    <div className="grid gap-6">
      {sections.map((section) => (
        <section key={section.id} className="dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">{section.title}</p>
          <p className="mt-2 text-sm leading-7 text-muted">{section.description}</p>
          <div className="mt-5 grid gap-4">
            {section.prompts.map((prompt) => {
              const checked = marked.has(prompt.id);

              return (
                <article key={prompt.id} className="card p-4">
                  <label className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleMarkedPrompt(prompt.id)}
                      className="mt-1 h-4 w-4 accent-gold"
                    />
                    <span>
                      <span className="block text-sm font-bold leading-6 text-navy">{prompt.text}</span>
                      <span className="mt-2 flex flex-wrap gap-2">
                        {prompt.relatedVirtue ? <span className="season-pill">Virtue: {prompt.relatedVirtue}</span> : null}
                        {prompt.relatedVice ? <span className="season-pill">Vice: {prompt.relatedVice}</span> : null}
                      </span>
                    </span>
                  </label>
                  <label className="mt-4 grid gap-2">
                    <span className="form-label">Private note</span>
                    <textarea
                      value={session.noteByPromptId[prompt.id] ?? ""}
                      onChange={(event) => savePromptNote(prompt.id, event.target.value)}
                      className="form-field textarea-field focus-ring"
                      placeholder="Optional note for confession preparation. Stored locally only."
                    />
                  </label>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
