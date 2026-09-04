"use client";

import { useEffect, useState } from "react";
import { TodaySaintCompanionCard } from "@/components/home/TodaySaintCompanionCard";
import { homeLiturgicalSurfaceThemes } from "@/components/home/homeLiturgicalSurface";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { LiturgicalThemeBadge } from "@/components/theme/LiturgicalThemeBadge";
import {
  getStaticLiturgicalDashboardModelForIsoDate,
  getCurrentSiteIsoDate,
  getStaticSaintForDateKey,
  isoDateToDateKey,
} from "@/lib/staticDailyContent";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";
import type { LiturgicalColor } from "@/types/liturgicalLiving";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

type TodayInTheChurchClientProps = {
  initialIsoDate: string;
  saintEntries: SaintOfTheDayEntry[];
};

export function TodayInTheChurchClient({
  initialIsoDate,
  saintEntries,
}: TodayInTheChurchClientProps) {
  const [isoDate, setIsoDate] = useState(initialIsoDate);

  useEffect(() => {
    function refreshToday() {
      setIsoDate(getCurrentSiteIsoDate());
    }

    refreshToday();
    const intervalId = window.setInterval(refreshToday, 15 * 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const model = getStaticLiturgicalDashboardModelForIsoDate(isoDate);
  const today = model.day;
  const liturgicalTheme = getLiturgicalThemeForToday(model.day);
  const primaryColor = liturgicalTheme.liturgicalColor === "default" ? "gold" : liturgicalTheme.liturgicalColor;
  const theme = todaySectionThemes[primaryColor];
  const saintEntry = getStaticSaintForDateKey(saintEntries, isoDateToDateKey(model.isoDate));

  return (
    <section className={`${theme.sectionClassName} py-12`}>
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className={`text-xs font-bold uppercase ${theme.eyebrowClassName}`}>Today in the Church</p>
            <LiturgicalThemeBadge
              theme={liturgicalTheme}
              seasonLabel={model.season.title}
              day={today}
              className={theme.cardClassName.replace("bg-ivory/10", "bg-transparent").replace("bg-white/10", "bg-transparent")}
            />
          </div>
          <h2 className={`font-display mt-2 max-w-[11ch] text-3xl font-semibold leading-tight sm:max-w-xl sm:text-5xl ${theme.headingClassName}`}>
            {today.title}
          </h2>
          <p className={`mt-3 max-w-[32ch] text-sm leading-7 sm:max-w-2xl ${theme.copyClassName}`}>{today.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="https://bible.usccb.org/daily-bible-reading"
              external
              className={`focus-ring inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.primaryButtonClassName}`}
              eventName="external_resource_click"
              eventParams={{
                resource_name: "USCCB Daily Bible Reading",
                resource_url: "https://bible.usccb.org/daily-bible-reading",
                page_path: "/",
                section: "today-in-the-church",
              }}
            >
              Daily readings
            </TrackedLink>
            <TrackedLink
              href="/reflections/mass-readings"
              className={`focus-ring inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${theme.secondaryButtonClassName}`}
              eventName="reflection_open"
              eventParams={{
                reflection_slug: "mass-readings-index",
                source_section: "today-in-the-church",
              }}
            >
              Daily Scripture reflections
            </TrackedLink>
          </div>
        </div>
        <div>
          <TodaySaintCompanionCard
            entry={saintEntry}
            cardClassName={theme.cardClassName}
            cardEyebrowClassName={theme.cardEyebrowClassName}
            cardHeadingClassName={theme.cardHeadingClassName}
            cardCopyClassName={theme.cardCopyClassName}
            cardLinkClassName={theme.cardLinkClassName}
          />
        </div>
      </div>
    </section>
  );
}

const todaySectionThemes: Record<LiturgicalColor, (typeof homeLiturgicalSurfaceThemes)[LiturgicalColor]> = homeLiturgicalSurfaceThemes;
