"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { searchGlossaryTerms } from "@/lib/explore";

export function CatholicGlossary() {
  const [query, setQuery] = useState("");
  const terms = useMemo(() => searchGlossaryTerms(query), [query]);

  return (
    <div className="space-y-8">
      <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
        <div className="max-w-3xl">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Glossary</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Catholic Terms Glossary
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Simple definitions of Catholic terms such as Mass, Eucharist, sacraments, confession, OCIA, saints, liturgy,
            Catechism, and more.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Search"
          title="Search the Glossary"
          summary="Use a word, topic, or short phrase. Search uses local state only."
        />
        <div className="dashboard-card mt-7 p-6 sm:p-8">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Search Catholic terms</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-field focus-ring"
              placeholder="Try: Eucharist, grace, parish, Rosary..."
            />
          </label>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {terms.map((term) => (
          <article key={term.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{term.category}</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-navy">{term.term}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{term.definition}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {term.relatedLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
