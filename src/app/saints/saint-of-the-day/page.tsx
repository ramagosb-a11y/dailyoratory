import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AboutSaintOfTheDay } from "@/components/saints/saint-of-the-day/AboutSaintOfTheDay";
import { BrowseMoreSaints } from "@/components/saints/saint-of-the-day/BrowseMoreSaints";
import { SaintExternalSources } from "@/components/saints/saint-of-the-day/SaintExternalSources";
import { SaintOfTheDayHero } from "@/components/saints/saint-of-the-day/SaintOfTheDayHero";
import { SaintOfTheDaySourceNote } from "@/components/saints/saint-of-the-day/SaintOfTheDaySourceNote";
import { SaintPracticeToday } from "@/components/saints/saint-of-the-day/SaintPracticeToday";
import { SaintPrayerCard } from "@/components/saints/saint-of-the-day/SaintPrayerCard";
import { ThisWeeksSaints } from "@/components/saints/saint-of-the-day/ThisWeeksSaints";
import { TodaySaintCard } from "@/components/saints/saint-of-the-day/TodaySaintCard";
import { createPageMetadata } from "@/lib/metadata";
import {
  getFallbackSaintOfTheDayLinks,
  getSaintByDateKey,
  getSaintForDate,
  getSiteDate,
  getUpcomingSaints,
  isValidDateKey,
} from "@/lib/saintOfTheDay";

export const dynamic = "force-dynamic";

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

export default async function SaintOfTheDayPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const requestedDateKey =
    typeof params.date === "string" && isValidDateKey(params.date) ? params.date : undefined;
  const siteDate = getSiteDate(new Date());
  const entry = requestedDateKey ? await getSaintByDateKey(requestedDateKey) : await getSaintForDate(siteDate);
  const fallbackDate = requestedDateKey
    ? new Date(2026, Number.parseInt(requestedDateKey.slice(0, 2), 10) - 1, Number.parseInt(requestedDateKey.slice(3, 5), 10))
    : siteDate;
  const fallbackLinks = getFallbackSaintOfTheDayLinks(fallbackDate);
  const upcoming = await getUpcomingSaints(fallbackDate, 7);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Saints", href: "/saints" }, { label: "Saint of the Day" }]} />
        {entry ? (
          <>
            <div className="mt-8">
              <TodaySaintCard entry={entry} />
            </div>
            <div className="mt-14">
              <SaintOfTheDayHero entry={entry} fallbackLinks={fallbackLinks} />
            </div>
            <div className="mt-14">
              <SaintPrayerCard entry={entry} />
            </div>
            <div className="mt-14">
              <SaintPracticeToday entry={entry} />
            </div>
          </>
        ) : (
          <div className="mt-8">
            <SaintOfTheDayHero entry={entry} fallbackLinks={fallbackLinks} />
          </div>
        )}
        <div className="mt-14">
          <SaintExternalSources entry={entry} fallbackLinks={fallbackLinks} />
        </div>
        <div className="mt-14">
          <ThisWeeksSaints entries={upcoming} />
        </div>
        <div className="mt-14">
          <BrowseMoreSaints saintSlug={entry?.slug} dateKey={entry?.dateKey} />
        </div>
        <div className="mt-14">
          <AboutSaintOfTheDay />
        </div>
        <div className="mt-14">
          <SaintOfTheDaySourceNote />
        </div>
      </main>
    </div>
  );
}
