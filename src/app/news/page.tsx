import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicNewsSources } from "@/components/news/CatholicNewsSources";
import { FeaturedNewsResources } from "@/components/news/FeaturedNewsResources";
import { NewsCopyrightNote } from "@/components/news/NewsCopyrightNote";
import { NewsDiscernmentNotice } from "@/components/news/NewsDiscernmentNotice";
import { NewsFAQ } from "@/components/news/NewsFAQ";
import { NewsFocusSections } from "@/components/news/NewsFocusSections";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsReadingPlan } from "@/components/news/NewsReadingPlan";
import { NewsSourceGuide } from "@/components/news/NewsSourceGuide";
import { NewsToPrayerActions } from "@/components/news/NewsToPrayerActions";
import { OfficialChurchSources } from "@/components/news/OfficialChurchSources";
import { PrayTheNews } from "@/components/news/PrayTheNews";
import { RelatedNewsTools } from "@/components/news/RelatedNewsTools";
import { SpiritualNewsSources } from "@/components/news/SpiritualNewsSources";
import { TodaysFaithHeadlinesPlaceholder } from "@/components/news/TodaysFaithHeadlinesPlaceholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic News and Faith Updates",
  description:
    "Access Catholic news, Vatican updates, Church headlines, spiritual reflections, and prayerful discernment resources for Catholics and anyone who wants to follow the life of the Church.",
  path: "/news",
  keywords: [
    "Catholic news",
    "Vatican news",
    "Church news",
    "Catholic headlines",
    "Spirit Daily",
    "Catholic News Agency",
    "USCCB news",
    "Vatican updates",
    "Catholic reflections",
    "Catholic media",
  ],
});

export default function NewsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Catholic News" }]} />

        <div className="mt-8">
          <NewsHero />
        </div>

        <div className="mt-14">
          <NewsDiscernmentNotice />
        </div>

        <div className="mt-14">
          <OfficialChurchSources />
        </div>

        <div className="mt-14">
          <CatholicNewsSources />
        </div>

        <div className="mt-14">
          <SpiritualNewsSources />
        </div>

        <div className="mt-14">
          <NewsFocusSections />
        </div>

        <div className="mt-14">
          <TodaysFaithHeadlinesPlaceholder />
        </div>

        <div className="mt-14">
          <PrayTheNews />
        </div>

        <div className="mt-14">
          <NewsToPrayerActions />
        </div>

        <div className="mt-14">
          <NewsReadingPlan />
        </div>

        <div className="mt-14">
          <NewsSourceGuide />
        </div>

        <div className="mt-14">
          <FeaturedNewsResources />
        </div>

        <div className="mt-14">
          <RelatedNewsTools />
        </div>

        <div className="mt-14">
          <NewsFAQ />
        </div>

        <div className="mt-14">
          <NewsCopyrightNote />
        </div>
      </main>
    </div>
  );
}
