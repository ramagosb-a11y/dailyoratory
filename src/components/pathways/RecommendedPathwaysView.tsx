"use client";

import Link from "next/link";
import { PathwayCard } from "@/components/pathways/PathwayCard";
import { usePathwayProgressStore } from "@/lib/pathwayProgressStorage";
import { getRecommendedPathways } from "@/lib/pathways";

export function RecommendedPathwaysView() {
  const store = usePathwayProgressStore();
  const recommendations = getRecommendedPathways(store.settings, 6);

  return (
    <div className="grid gap-6">
      <div className="dashboard-card p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Recommended pathways</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              These suggestions are shaped by your local settings. They are invitations, not assignments.
            </p>
          </div>
          <Link href="/pathways/settings" className="btn btn-secondary focus-ring">
            Adjust settings
          </Link>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {recommendations.map((pathway) => (
          <PathwayCard key={pathway.slug} pathway={pathway} actionLabel="Open pathway" />
        ))}
      </div>
    </div>
  );
}
