"use client";

import { useRouter } from "next/navigation";
import { spiritualGrowthPathways } from "@/data/pathways";
import { startPathway, updatePathwaySettings } from "@/lib/pathwayProgressStorage";
import { getPathwayHref } from "@/lib/pathways";
import type { PathwaySettingsRecord } from "@/types/pathways";

const startingPoints: {
  title: string;
  description: string;
  pathwaySlug: string;
  settings: Partial<Omit<PathwaySettingsRecord, "version" | "updatedAt">>;
}[] = [
  {
    title: "I want to begin in prayer",
    description: "Start with a small daily rhythm of offering, Scripture, and review.",
    pathwaySlug: "beginning-again-in-prayer",
    settings: { spiritualSeason: "begin", availablePace: "gentle", focusTags: ["prayer"] },
  },
  {
    title: "I need to return to confession",
    description: "Prepare for the sacrament of mercy with peace and clarity.",
    pathwaySlug: "returning-to-confession",
    settings: { spiritualSeason: "return", availablePace: "gentle", focusTags: ["confession", "mercy"] },
  },
  {
    title: "I want to understand the Mass",
    description: "Enter Sunday worship with more attention, gratitude, and reverence.",
    pathwaySlug: "understanding-the-mass",
    settings: { spiritualSeason: "learn", availablePace: "steady", focusTags: ["mass", "eucharist"] },
  },
  {
    title: "I want my home to pray",
    description: "Build a peaceful domestic Church rhythm for family life.",
    pathwaySlug: "family-prayer-at-home",
    settings: { spiritualSeason: "begin", availablePace: "gentle", household: "family", focusTags: ["family", "prayer"] },
  },
  {
    title: "I am seeking healing",
    description: "Bring habitual sin or discouragement into mercy, support, and practical safeguards.",
    pathwaySlug: "healing-from-habitual-sin",
    settings: { spiritualSeason: "heal", availablePace: "steady", focusTags: ["healing", "confession"] },
  },
  {
    title: "I am ready to serve",
    description: "Let prayer bear fruit in works of mercy, witness, and charity.",
    pathwaySlug: "works-of-mercy-and-service",
    settings: { spiritualSeason: "serve", availablePace: "steady", focusTags: ["mission", "service"] },
  },
];

export function PathwayStartView() {
  const router = useRouter();

  function choosePathway(pathwaySlug: string, settings: Partial<Omit<PathwaySettingsRecord, "version" | "updatedAt">>) {
    const pathway = spiritualGrowthPathways.find((item) => item.slug === pathwaySlug);
    if (!pathway) return;

    updatePathwaySettings(settings);
    startPathway(pathway.slug, pathway.modules[0]?.slug);
    router.push(getPathwayHref(pathway));
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {startingPoints.map((item) => (
        <article key={item.pathwaySlug} className="dashboard-card p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Starting point</p>
          <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{item.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          <button
            type="button"
            onClick={() => choosePathway(item.pathwaySlug, item.settings)}
            className="btn btn-primary focus-ring mt-6"
          >
            Begin here
          </button>
        </article>
      ))}
    </div>
  );
}
