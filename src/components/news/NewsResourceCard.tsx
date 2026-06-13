"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { CatholicNewsResource } from "@/types/news";

type NewsResourceCardProps = {
  resource: CatholicNewsResource;
  section: string;
  eventName?: "news_resource_click" | "official_news_click" | "spiritual_news_click";
  compact?: boolean;
};

function getDefaultEventName(resource: CatholicNewsResource): NewsResourceCardProps["eventName"] {
  if (resource.official) return "official_news_click";
  if (resource.sourceType === "spiritual-news-aggregation") return "spiritual_news_click";
  return "news_resource_click";
}

export function NewsResourceCard({
  resource,
  section,
  eventName,
  compact = false,
}: NewsResourceCardProps) {
  const isPlaceholder = resource.url === "#";
  const trackingEvent = eventName ?? getDefaultEventName(resource);

  return (
    <article className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-display font-semibold text-navy ${compact ? "text-xl" : "text-2xl"}`}>
          {resource.title}
        </h3>
        <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
          {resource.badge}
        </span>
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-stone bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          {resource.region}
        </span>
        <span className="rounded-full border border-stone bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          {isPlaceholder ? "Local placeholder" : "External resource"}
        </span>
        {resource.official ? (
          <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
            Official Church source
          </span>
        ) : null}
      </div>
      <div className="mt-6">
        {isPlaceholder ? (
          <div className="rounded-md border border-dashed border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
            Replace this card later with your local diocesan news page.
          </div>
        ) : (
          <TrackedLink
            href={resource.url}
            external
            className="btn btn-secondary focus-ring justify-center"
            eventName={trackingEvent}
            eventParams={{
              resource_name: resource.title,
              resource_url: resource.url,
              page_path: "/news",
              section,
              source_type: resource.sourceType,
              official: resource.official,
            }}
          >
            Visit Resource
          </TrackedLink>
        )}
      </div>
    </article>
  );
}
