"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { getHomilySeasonOptions, getHomilyTopicOptions, isAudioHomily, isPlaylistHomily } from "@/lib/homilies";
import type { HomilyItem } from "@/types/homilies";
import { AudioHomilies } from "./AudioHomilies";
import { HomilyCard } from "./HomilyCard";

export function HomilyFilters({ items }: { items: HomilyItem[] }) {
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [topic, setTopic] = useState("");
  const [season, setSeason] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [audience, setAudience] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const topics = getHomilyTopicOptions();
  const seasons = getHomilySeasonOptions();
  const speakers = Array.from(new Set(items.map((item) => item.creator))).sort();
  const audiences = Array.from(new Set(items.flatMap((item) => item.audience))).sort();

  function clearFilters() {
    setQuery("");
    setMediaType("");
    setTopic("");
    setSeason("");
    setSpeaker("");
    setAudience("");
    setFeaturedOnly(false);
  }

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = items.filter((item) => {
      const searchable = [
        item.title,
        item.shortDescription,
        item.description,
        item.topic,
        item.homilyTopic ?? "",
        item.liturgicalSeason ?? "",
        item.liturgicalDay ?? "",
        item.creator,
        item.sourceName,
        ...(item.scriptureReferences ?? []),
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesMediaType =
        !mediaType ||
        (mediaType === "audio" ? isAudioHomily(item) : mediaType === "youtube-playlist" ? isPlaylistHomily(item) : item.mediaType === mediaType);
      const matchesTopic =
        !topic ||
        [item.homilyTopic, item.topic, ...item.tags].some((value) => (value ?? "").toLowerCase().includes(topic.toLowerCase()));
      const matchesSeason =
        !season ||
        (item.liturgicalSeason ?? "").toLowerCase().includes(season.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(season.toLowerCase()));
      const matchesSpeaker = !speaker || item.creator === speaker || item.sourceName === speaker;
      const matchesAudience = !audience || item.audience.includes(audience);
      const matchesFeatured = !featuredOnly || item.featured;

      return (
        matchesQuery &&
        matchesMediaType &&
        matchesTopic &&
        matchesSeason &&
        matchesSpeaker &&
        matchesAudience &&
        matchesFeatured
      );
  });

  const playlistItems = filtered.filter((item) => isPlaylistHomily(item));
  const audioItems = filtered.filter((item) => isAudioHomily(item));
  const otherItems = filtered.filter((item) => !isPlaylistHomily(item) && !isAudioHomily(item));

  return (
    <section className="grid gap-8">
      <div className="rounded-md border border-stone bg-ivory p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <FilterField label="Search">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search homilies, speakers, topics, seasons..."
              className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy"
            />
          </FilterField>
          <FilterField label="Media type">
            <select value={mediaType} onChange={(event) => setMediaType(event.target.value)} className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy">
              <option value="">All media</option>
              <option value="youtube-video">YouTube video</option>
              <option value="youtube-playlist">YouTube playlist</option>
              <option value="audio">Audio</option>
            </select>
          </FilterField>
          <FilterField label="Speaker/source">
            <select value={speaker} onChange={(event) => setSpeaker(event.target.value)} className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy">
              <option value="">All speakers</option>
              {speakers.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Audience">
            <select value={audience} onChange={(event) => setAudience(event.target.value)} className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy">
              <option value="">Everyone</option>
              {audiences.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Topic">
            <select value={topic} onChange={(event) => setTopic(event.target.value)} className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy">
              <option value="">All topics</option>
              {topics.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Liturgical season">
            <select value={season} onChange={(event) => setSeason(event.target.value)} className="focus-ring w-full rounded-md border border-stone bg-ivory px-3 py-2 text-sm text-navy">
              <option value="">All seasons</option>
              {seasons.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-navy">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(event) => {
                setFeaturedOnly(event.target.checked);
                trackEvent("homily_filter_apply", { filter_name: "featured_only", filter_value: event.target.checked });
              }}
            />
            Featured only
          </label>
          <p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-semibold text-muted">{filtered.length} approved homily item{filtered.length === 1 ? "" : "s"}</p>
          <button type="button" onClick={clearFilters} className="btn btn-secondary focus-ring justify-center">Clear filters</button>
        </div>
      </div>

      {filtered.length === 0 && <div className="rounded-lg border border-stone bg-ivory p-6 sm:p-8">
        <h3 className="font-display text-3xl font-semibold text-navy">No homilies match these filters.</h3>
        <p className="mt-3 text-base leading-8 text-muted">Try a shorter search, choose a different topic, or clear the filters to see every available item.</p>
        <button type="button" onClick={clearFilters} className="btn btn-primary focus-ring mt-5 justify-center">Show all homilies</button>
      </div>}

      {playlistItems.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playlistItems.map((item) => (
            <HomilyCard key={item.id} item={item} />
          ))}
        </div>
      ) : null}

      {otherItems.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherItems.map((item) => (
            <HomilyCard key={item.id} item={item} />
          ))}
        </div>
      ) : null}

      <AudioHomilies items={audioItems} />
    </section>
  );
}

function FilterField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      {children}
    </label>
  );
}
