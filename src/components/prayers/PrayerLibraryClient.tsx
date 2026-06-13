"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PrayerCard } from "@/components/ui/PrayerCard";
import type { PrayerItem, PrayerNeedCard } from "@/types/prayersLibrary";

type PrayerLibraryClientProps = {
  prayers: PrayerItem[];
  categories: readonly string[];
  needCards: PrayerNeedCard[];
};

export function PrayerLibraryClient({ prayers, categories, needCards }: PrayerLibraryClientProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPrayers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return prayers.filter((prayer) => {
      const matchesCategory = activeCategory === "All" || prayer.category === activeCategory;
      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const haystack = [
        prayer.title,
        prayer.alternateTitles?.join(" ") ?? "",
        prayer.category,
        prayer.summary,
        prayer.text ?? "",
        prayer.needTags.join(" "),
        prayer.seasonalTags?.join(" ") ?? "",
        prayer.searchKeywords?.join(" ") ?? "",
        prayer.externalSource ? `${prayer.externalSource.label} ${prayer.externalSource.href}` : "",
        prayer.relatedLinks?.map((link) => `${link.label} ${link.href}`).join(" ") ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, prayers, query]);

  function findPrayer(prayerId: string) {
    return prayers.find((item) => item.id === prayerId);
  }

  return (
    <>
      <section id="prayer-search" className="card-parchment p-6 sm:p-8">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Search and filter</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Find a Prayer</h2>
            <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">
              Search by title, need, or category. Start small and choose one prayer you can return to faithfully.
            </p>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Search prayers</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search prayer, mercy, anxiety, family, Rosary..."
                className="focus-ring rounded-2xl border border-stone bg-ivory px-4 py-3 text-base text-navy placeholder:text-muted"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              {["All", ...categories].map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={
                      active
                        ? "focus-ring rounded-full border border-gold bg-gold-soft px-4 py-2 text-sm font-semibold text-navy"
                        : "focus-ring rounded-full border border-stone bg-ivory px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-sm leading-7 text-muted">
              Showing <span className="font-semibold text-navy">{filteredPrayers.length}</span> prayer
              {filteredPrayers.length === 1 ? "" : "s"}.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-6 xl:grid-cols-2">
          {filteredPrayers.map((prayer) => (
            <article key={prayer.id} className="card-parchment p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                  {prayer.category}
                </span>
                {prayer.needTags.slice(0, 2).map((tag) => (
                  <span key={`${prayer.id}-${tag}`} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{prayer.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{prayer.summary}</p>

              {prayer.text ? (
                <div className="mt-6">
                  <PrayerCard prayer={prayer.text} copyLabel="Copy Prayer" copiedLabel="Copied." />
                </div>
              ) : null}

              {prayer.href ? (
                <div className="mt-6">
                  <Link href={prayer.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                    Open Guide
                  </Link>
                </div>
              ) : null}

              {prayer.externalSource ? (
                <div className="mt-4">
                  <a
                    href={prayer.externalSource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                  >
                    {prayer.externalSource.label}
                  </a>
                </div>
              ) : null}

              {prayer.relatedLinks?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {prayer.relatedLinks.map((link) => (
                    <Link
                      key={`${prayer.id}-${link.href}`}
                      href={link.href}
                      className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer by need</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Start With What You Need Right Now</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {needCards.map((card) => (
            <article key={card.id} className="rounded-3xl border border-stone bg-ivory/80 p-5">
              <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
              <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
              <div className="mt-4 grid gap-2">
                {card.prayerIds
                  .map(findPrayer)
                  .filter((item): item is PrayerItem => Boolean(item))
                  .map((prayer) => (
                    <button
                      key={`${card.id}-${prayer.id}`}
                      type="button"
                      onClick={() => {
                        setQuery(prayer.title);
                        setActiveCategory("All");
                        document.getElementById("prayer-search")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="focus-ring rounded-2xl border border-stone px-4 py-3 text-left text-sm font-semibold text-navy transition hover:border-gold"
                    >
                      {prayer.title}
                    </button>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
