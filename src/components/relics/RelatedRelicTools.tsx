"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getRelatedRelicTools } from "@/lib/relics";

export function RelatedRelicTools() {
  const tools = getRelatedRelicTools();

  function handleClick(itemSlug: string, destination: string) {
    trackEvent("relic_related_tool_click", { item_slug: itemSlug, destination });
  }

  return (
    <section>
      <SectionHeader eyebrow="Related tools" title="Related Daily Oratory Tools" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            onClick={() => handleClick(tool.title.toLowerCase().replaceAll(" ", "-"), tool.href)}
            className="card-parchment p-5"
          >
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
