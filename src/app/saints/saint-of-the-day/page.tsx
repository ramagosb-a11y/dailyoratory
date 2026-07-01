import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SaintOfTheDayPageClient } from "@/components/saints/saint-of-the-day/SaintOfTheDayPageClient";
import { createPageMetadata } from "@/lib/metadata";
import { getApprovedSaintEntries, getTodayDateKey } from "@/lib/saintOfTheDay";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Saint of the Day",
  description:
    "Meet today's saint, learn a short Catholic reflection, pray for their intercession, practice a virtue, and follow trusted saint calendars.",
  path: "/saints/saint-of-the-day",
  keywords: [
    "Saint of the Day",
    "Catholic saints",
    "daily saint",
    "Franciscan Media Saint of the Day",
    "Vatican News saints",
    "Catholic saint calendar",
    "saints and virtues",
    "saint prayer",
  ],
});

export default async function SaintOfTheDayPage() {
  const entries = await getApprovedSaintEntries();
  const todayDateKey = getTodayDateKey();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Saints", href: "/saints" }, { label: "Saint of the Day" }]} />
        <Suspense fallback={<div className="card-parchment mt-8 min-h-48 p-6" />}>
          <SaintOfTheDayPageClient entries={entries} todayDateKey={todayDateKey} />
        </Suspense>
      </main>
    </div>
  );
}
