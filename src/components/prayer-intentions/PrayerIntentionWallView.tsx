"use client";

import { useMemo, useState } from "react";
import { prayerIntentionTypeOptions } from "@/data/prayerIntentions";
import { getIntentionTypeLabel } from "@/lib/prayerIntentions";
import type { PrayerIntentionRecord, PrayerIntentionType } from "@/types/prayerIntentions";
import { PrayerIntentionCard } from "./PrayerIntentionCard";

type WallFilter = "all" | PrayerIntentionType;

export function PrayerIntentionWallView({
  intentions,
  emptyTitle = "No approved intentions are available here yet.",
  emptyDescription = "New submissions remain pending until a moderator reviews them.",
}: {
  intentions: PrayerIntentionRecord[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<WallFilter>("all");

  const filteredIntentions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return intentions.filter((intention) => {
      const matchesFilter = filter === "all" || intention.intentionType === filter;
      const searchableText = [
        intention.title,
        intention.description,
        intention.excerpt,
        intention.prayerPrompt,
        getIntentionTypeLabel(intention.intentionType),
        ...intention.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [filter, intentions, query]);

  return (
    <div className="grid gap-6">
      <div className="form-shell grid gap-4 p-4 sm:grid-cols-[1fr_16rem]">
        <label className="grid gap-2">
          <span className="form-label">Search approved intentions</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-field focus-ring"
            placeholder="Search by need, virtue, or prayer topic"
          />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Filter by type</span>
          <select value={filter} onChange={(event) => setFilter(event.target.value as WallFilter)} className="form-field focus-ring">
            <option value="all">All intentions</option>
            {prayerIntentionTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredIntentions.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredIntentions.map((intention) => (
            <PrayerIntentionCard key={intention.id} intention={intention} />
          ))}
        </div>
      ) : (
        <div className="dashboard-card p-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-navy">{emptyTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{emptyDescription}</p>
        </div>
      )}
    </div>
  );
}
