"use client";

import Link from "next/link";
import { useState } from "react";
import { getRecommendedMysterySetForDate } from "@/lib/rosary";
import type { RosaryMysterySetRecord } from "@/types/rosary";

export function RosaryDayRecommendation() {
  const [{ recommended, dayName }] = useState<{
    recommended: RosaryMysterySetRecord | null;
    dayName: string;
  }>(() => {
    const now = new Date();
    return {
      dayName: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now),
      recommended: getRecommendedMysterySetForDate(now),
    };
  });

  if (!recommended) {
    return (
      <div className="dashboard-card p-5">
        <p className="text-sm leading-7 text-muted">Loading today&apos;s Rosary recommendation...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Today&apos;s recommendation</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">{recommended.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        {dayName} is traditionally prayed with the {recommended.name} Mysteries.
      </p>
      <p className="mt-3 rounded-md border border-stone bg-parchment p-3 text-sm font-semibold leading-6 text-navy">
        {recommended.theme}
      </p>
      <Link href={`/rosary/${recommended.slug}`} className="btn btn-primary focus-ring mt-5">
        Pray today&apos;s mysteries
      </Link>
    </div>
  );
}
