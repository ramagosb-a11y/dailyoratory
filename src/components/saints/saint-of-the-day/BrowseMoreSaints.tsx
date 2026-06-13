"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { getRelatedSaintOfTheDayTools } from "@/lib/saintOfTheDay";

export function BrowseMoreSaints({ saintSlug, dateKey }: { saintSlug?: string; dateKey?: string }) {
  const tools = getRelatedSaintOfTheDayTools();

  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Browse More</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Browse More Saints</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            onClick={() =>
              trackEvent("saint_of_day_related_click", {
                saint_slug: saintSlug,
                date_key: dateKey,
                destination: tool.href,
                source: "Daily Oratory",
              })
            }
            className="card-parchment p-5"
          >
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
