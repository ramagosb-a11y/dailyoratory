import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { ChooseDevotionByNeed } from "@/components/devotions/ChooseDevotionByNeed";
import { DevotionCategoryCards } from "@/components/devotions/DevotionCategoryCards";
import { DevotionOfMonth } from "@/components/devotions/DevotionOfMonth";
import { DevotionsAndLiturgy } from "@/components/devotions/DevotionsAndLiturgy";
import { DevotionsHero } from "@/components/devotions/DevotionsHero";
import { DevotionsLibraryGrid } from "@/components/devotions/DevotionsLibraryGrid";
import { FeaturedDevotions } from "@/components/devotions/FeaturedDevotions";
import { StartSmallGuide } from "@/components/devotions/StartSmallGuide";
import { WhatAreDevotions } from "@/components/devotions/WhatAreDevotions";
import { createPageMetadata } from "@/lib/metadata";
import { getApprovedDevotions, getDevotionCategories, getDevotionOfMonth, getFeaturedDevotions } from "@/lib/devotions";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Devotions Library",
  description:
    "Discover Catholic devotions including the Rosary, Divine Mercy Chaplet, Eucharistic Adoration, and other prayer practices explained for Catholics, returning Catholics, and curious learners.",
  path: "/devotions",
});

export default function DevotionsPage() {
  const approved = getApprovedDevotions();
  const categories = getDevotionCategories();
  const featured = getFeaturedDevotions().filter((devotion) =>
    [
      "holy-rosary",
      "divine-mercy-chaplet",
      "eucharistic-adoration",
      "sacred-heart-of-jesus",
      "immaculate-heart-of-mary",
      "stations-of-the-cross",
      "saint-joseph",
      "holy-souls-in-purgatory",
    ].includes(devotion.id),
  );
  const devotionOfMonth = getDevotionOfMonth();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Devotions Library",
              description:
                "Discover Catholic devotions including the Rosary, Divine Mercy Chaplet, Eucharistic Adoration, and other prayer practices explained for Catholics, returning Catholics, and curious learners.",
              path: "/devotions",
            }),
            buildArticleStructuredData({
              headline: "Catholic Devotions Library",
              description:
                "Discover Catholic devotions including the Rosary, Divine Mercy Chaplet, Eucharistic Adoration, and other prayer practices explained for Catholics, returning Catholics, and curious learners.",
              path: "/devotions",
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Devotions", path: "/devotions" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Devotions" }]} />

        <div className="mt-8">
          <DevotionsHero />
        </div>

        <div className="mt-14">
          <WhatAreDevotions />
        </div>

        <div className="mt-14">
          <DevotionsAndLiturgy />
        </div>

        <div className="mt-14">
          <DevotionCategoryCards categories={categories} devotions={approved} />
        </div>

        <div className="mt-14">
          <FeaturedDevotions devotions={featured} />
        </div>

        <div className="mt-14">
          <ChooseDevotionByNeed />
        </div>

        <div className="mt-14">
          <StartSmallGuide />
        </div>

        <div className="mt-14">
          <DevotionOfMonth devotion={devotionOfMonth} />
        </div>

        <div className="mt-14">
          <DevotionsLibraryGrid devotions={approved} />
        </div>
      </main>
    </div>
  );
}
