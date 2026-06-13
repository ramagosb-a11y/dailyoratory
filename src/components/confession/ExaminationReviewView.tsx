"use client";

import Link from "next/link";
import { getAllExaminationPrompts } from "@/lib/examination";
import {
  clearExaminationSession,
  saveGeneralNotes,
  useExaminationSession,
} from "@/lib/examinationSessionStorage";

const promptTextById = new Map(getAllExaminationPrompts().map((prompt) => [prompt.id, prompt.text]));

export function ExaminationReviewView() {
  const session = useExaminationSession();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <aside className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Review</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Review only what helps you confess clearly. This page does not grade sins or decide gravity.
        </p>
        <div className="mt-5 grid gap-3">
          <Link href="/confession/examination/print" className="btn btn-primary focus-ring">
            Open print-safe page
          </Link>
          <Link href="/confession/how-to-go" className="btn btn-secondary focus-ring">
            How to go
          </Link>
          <button type="button" onClick={clearExaminationSession} className="btn btn-secondary focus-ring">
            Clear local session
          </button>
        </div>
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Marked for confession</p>
        {session.markedPromptIds.length ? (
          <ul className="mt-5 grid gap-4">
            {session.markedPromptIds.map((id) => (
              <li key={id} className="card p-4">
                <p className="text-sm font-bold leading-6 text-navy">{promptTextById.get(id) ?? id}</p>
                {session.noteByPromptId[id] ? (
                  <p className="mt-2 text-sm leading-7 text-muted">{session.noteByPromptId[id]}</p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 card-parchment p-5">
            <p className="text-sm leading-7 text-muted">No prompts are marked yet. You can still bring a simple confession and ask the priest for help.</p>
          </div>
        )}

        <label className="mt-6 grid gap-2">
          <span className="form-label">General private notes</span>
          <textarea
            value={session.generalNotes}
            onChange={(event) => saveGeneralNotes(event.target.value)}
            className="form-field textarea-field focus-ring"
            placeholder="Optional notes for clarity. Stored locally only."
          />
        </label>
      </section>
    </div>
  );
}
