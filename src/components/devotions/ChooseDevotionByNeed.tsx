"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DevotionCard } from "@/components/devotions/DevotionCard";
import { getRecommendedDevotionsByNeed, getRecommendationNeeds } from "@/lib/devotions";

export function ChooseDevotionByNeed() {
  const needs = getRecommendationNeeds();
  const [selectedNeed, setSelectedNeed] = useState(needs[0]?.slug ?? "");

  const recommendation = useMemo(() => getRecommendedDevotionsByNeed(selectedNeed), [selectedNeed]);

  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Discern a starting point</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Choose a devotion for your season of life
        </h2>
      </div>
      <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-parchment p-5">
          <div className="grid gap-3">
            {needs.map((need) => (
              <button
                key={need.id}
                type="button"
                onClick={() => setSelectedNeed(need.slug)}
                className={`focus-ring rounded-md border px-4 py-3 text-left text-sm leading-7 ${
                  selectedNeed === need.slug
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-stone bg-ivory text-muted"
                }`}
              >
                <span className="block font-semibold text-navy">{need.title}</span>
                <span className="mt-1 block">{need.description}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Recommended</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">
              {recommendation.need?.title ?? "Choose a need"}
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {recommendation.devotions.map((devotion) => (
                <DevotionCard key={devotion.id} devotion={devotion} compact />
              ))}
            </div>
          </div>
          <div className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory links</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {recommendation.need?.relatedLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="focus-ring season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
