"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { getPatronages, getSaintById } from "@/lib/saints";

export function PatronSaintsDirectory() {
  const [query, setQuery] = useState("");
  const items = getPatronages();

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter((item) =>
      [item.title, item.description, item.notes ?? ""].join(" ").toLowerCase().includes(normalized),
    );
  }, [items, query]);

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Patron saints</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Patron Saints</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Patronage language is devotional and traditional. It means a saint is often invoked in that
        area of life; it does not mean guaranteed outcomes.
      </p>
      <div className="mt-6 max-w-xl">
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            trackEvent("saint_search", { page_path: "/saints/patron-saints", query_length: event.target.value.length });
          }}
          className="form-field focus-ring"
          placeholder="Search patron saints by need or vocation"
        />
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.id} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            {item.notes ? <p className="mt-3 text-xs leading-6 text-muted">{item.notes}</p> : null}
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {item.saintIds
                .map((id) => getSaintById(id))
                .filter(Boolean)
                .map((saint) => (
                  <li key={saint!.id}>
                    <Link href={`/saints/${saint!.slug}`} className="font-semibold text-navy underline decoration-gold underline-offset-4">
                      {saint!.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

