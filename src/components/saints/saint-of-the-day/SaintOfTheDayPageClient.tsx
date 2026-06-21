"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AboutSaintOfTheDay } from "@/components/saints/saint-of-the-day/AboutSaintOfTheDay";
import { BrowseMoreSaints } from "@/components/saints/saint-of-the-day/BrowseMoreSaints";
import { SaintExternalSources } from "@/components/saints/saint-of-the-day/SaintExternalSources";
import { SaintOfTheDayHero } from "@/components/saints/saint-of-the-day/SaintOfTheDayHero";
import { SaintOfTheDaySourceNote } from "@/components/saints/saint-of-the-day/SaintOfTheDaySourceNote";
import { SaintPracticeToday } from "@/components/saints/saint-of-the-day/SaintPracticeToday";
import { SaintPrayerCard } from "@/components/saints/saint-of-the-day/SaintPrayerCard";
import { ThisWeeksSaints } from "@/components/saints/saint-of-the-day/ThisWeeksSaints";
import { TodaySaintCard } from "@/components/saints/saint-of-the-day/TodaySaintCard";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

const fallbackSourceLinks = [
  {
    label: "Franciscan Media Calendar",
    href: "https://www.franciscanmedia.org/saint-of-the-day/calendar/",
    source: "Franciscan Media",
  },
  {
    label: "Franciscan Media Saint of the Day",
    href: "https://www.franciscanmedia.org/saint-of-the-day/",
    source: "Franciscan Media",
  },
  {
    label: "Vatican News Saints",
    href: "https://www.vaticannews.va/en/saints.html",
    source: "Vatican News",
  },
  {
    label: "Catholic Online Saint of the Day",
    href: "https://www.catholic.org/saints/sofd.php",
    source: "Catholic Online",
  },
] as const;

type SaintOfTheDayPageClientProps = {
  entries: SaintOfTheDayEntry[];
  todayDateKey: string;
};

export function SaintOfTheDayPageClient({ entries, todayDateKey }: SaintOfTheDayPageClientProps) {
  const searchParams = useSearchParams();
  const requestedDateKey = searchParams.get("date");
  const selectedDateKey = isValidDateKey(requestedDateKey) ? requestedDateKey : todayDateKey;
  const entry = entries.find((item) => item.dateKey === selectedDateKey);
  const fallbackLinks = getFallbackLinks(selectedDateKey);
  const upcoming = useMemo(() => getUpcomingSaints(entries, selectedDateKey, 7), [entries, selectedDateKey]);

  return (
    <>
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
    </>
  );
}

function getFallbackLinks(dateKey: string) {
  return fallbackSourceLinks.map((link) => ({ ...link, dateKey }));
}

function getUpcomingSaints(entries: SaintOfTheDayEntry[], dateKey: string, count: number) {
  const referenceDay = dateKeyToDayOfYear(dateKey);

  return [...entries]
    .map((entry) => {
      let delta = dateKeyToDayOfYear(entry.dateKey) - referenceDay;
      if (delta <= 0) delta += 366;
      return { entry, delta };
    })
    .filter((item) => item.delta > 0)
    .sort((a, b) => a.delta - b.delta)
    .slice(0, count)
    .map((item) => item.entry);
}

function dateKeyToDayOfYear(dateKey: string) {
  const [month, day] = dateKey.split("-").map((value) => Number.parseInt(value, 10));
  const base = new Date(2024, 0, 1);
  const current = new Date(2024, month - 1, day);
  return Math.floor((current.getTime() - base.getTime()) / 86400000);
}

function isValidDateKey(value: string | null): value is string {
  return Boolean(value && /^\d{2}-\d{2}$/.test(value));
}
