"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getSacramentalJourneyRecommendations, getSacramentalJourneyPrompts, getSacramentLearningNeeds } from "@/lib/sacraments";

export function SacramentalJourneySelector() {
  const needs = getSacramentLearningNeeds();
  const prompts = getSacramentalJourneyPrompts();
  const [selectedNeed, setSelectedNeed] = useState(needs[0]?.slug ?? "");
  const [answers, setAnswers] = useState({
    baptized: true,
    firstCommunion: true,
    confirmed: true,
    returningToConfession: false,
    preparingForMarriage: false,
    discerningVocation: false,
    supportingChildOrCandidate: false,
  });

  const needRecommendation = needs.find((item) => item.slug === selectedNeed) ?? needs[0];
  const journey = useMemo(() => getSacramentalJourneyRecommendations(answers), [answers]);

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Which Sacrament Are You Learning About?</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Choose a starting point</h2>
        <div className="mt-6 grid gap-3">
          {needs.map((need) => (
            <button
              key={need.id}
              type="button"
              onClick={() => setSelectedNeed(need.slug)}
              className={`rounded-3xl border px-4 py-4 text-left transition ${
                selectedNeed === need.slug
                  ? "border-gold bg-ivory text-navy"
                  : "border-stone-200 bg-white/70 text-muted hover:border-gold"
              }`}
            >
              <span className="block text-sm font-semibold">{need.title}</span>
              <span className="mt-1 block text-sm leading-7">{need.description}</span>
            </button>
          ))}
        </div>
        {needRecommendation ? (
          <div className="mt-6 rounded-3xl border border-stone-200 bg-ivory/70 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Recommended next steps</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {needRecommendation.suggestedSacramentIds.map((id) => (
                <Link key={id} href={`/sacraments/${id === "matrimony" ? "matrimony" : id}`} className="season-pill bg-ivory px-3 py-2 text-navy">
                  {labelize(id)}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {needRecommendation.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Where Am I in My Sacramental Journey?</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">A local-only learning selector</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          This tool suggests learning paths only. For sacramental readiness or eligibility, contact your parish.
        </p>
        <div className="mt-6 grid gap-4">
          {prompts.map((prompt) => {
            const fieldKey = mapPromptToField(prompt.id);
            return (
              <div key={prompt.id} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4">
                <p className="text-sm font-semibold text-navy">{prompt.question}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {prompt.options.map((option) => {
                    const active = Boolean(answers[fieldKey]) === (option.id.endsWith("yes"));
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setAnswers((current) => ({ ...current, [fieldKey]: option.id.endsWith("yes") }))}
                        className={`rounded-full border px-3 py-2 text-sm transition ${
                          active ? "border-gold bg-ivory text-navy" : "border-stone-200 text-muted hover:border-gold"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {[
            ["returningToConfession", "Are you returning to confession?"],
            ["preparingForMarriage", "Are you preparing for marriage?"],
            ["discerningVocation", "Are you discerning a vocation?"],
            ["supportingChildOrCandidate", "Are you supporting a child or candidate?"],
          ].map(([key, label]) => (
            <label key={key} className="flex items-start gap-3 rounded-3xl border border-stone-200 bg-ivory/70 px-4 py-3 text-sm leading-7 text-navy">
              <input
                type="checkbox"
                checked={Boolean(answers[key as keyof typeof answers])}
                onChange={(event) => setAnswers((current) => ({ ...current, [key]: event.target.checked }))}
                className="mt-1 h-4 w-4 rounded border-stone-300"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white/70 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Suggested next pages</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {journey.sacraments.map((sacrament) => (
              <Link key={sacrament.id} href={`/sacraments/${sacrament.slug}`} className="season-pill bg-ivory px-3 py-2 text-navy">
                {sacrament.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {journey.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{journey.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

function labelize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function mapPromptToField(promptId: string) {
  if (promptId === "journey-baptized") return "baptized" as const;
  if (promptId === "journey-first-communion") return "firstCommunion" as const;
  return "confirmed" as const;
}
