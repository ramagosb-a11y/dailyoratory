import type { Metadata } from "next";
import { LitanyPrayerShelf, type LitanyShelfItem } from "@/components/contemplative-litanies/LitanyPrayerShelf";
import { litanyCatalog } from "@/components/contemplative-litanies/data/litanyRegistry";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pageMetadata = createPageMetadata({
  title: "Catholic Litanies | Daily Oratory",
  description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  path: "/prayers/litanies",
  keywords: [
    "Catholic litanies",
    "Litany of Loreto",
    "Litany of Humility",
    "Litany of the Saints",
    "St. Joseph litany",
    "Sacred Heart litany",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Catholic Litanies",
    description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Catholic Litanies",
    description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
  },
};

const contemplativeLitanyShelf: LitanyShelfItem[] = litanyCatalog
  .filter((litany) => litany.status === "available" && Boolean(litany.image))
  .map((litany) => ({
    id: litany.id,
    title: litany.title,
    subtitle: litany.subtitle,
    shortDescription: litany.shortDescription,
    movementsCount: litany.movementsCount,
    href: `/prayers/litanies/${litany.slug}`,
    image: litany.image as string,
    imageAlt: `${litany.title} devotional holy card`,
    accent: litany.colorTheme.primary,
    border: litany.colorTheme.cardBorder,
  }));

export default function LitaniesPage() {
  return (
    <div className="paper-texture">
      <StructuredDataScript
        data={[
          buildWebPageStructuredData({
            name: "Catholic Litanies",
            description: "Explore Daily Oratory's collection of contemplative Catholic litanies.",
            path: "/prayers/litanies",
          }),
          buildBreadcrumbList([
            { name: "Pray", path: "/pray" },
            { name: "Prayer Library", path: "/prayers" },
            { name: "Catholic Litanies", path: "/prayers/litanies" },
          ]),
        ]}
      />

      <main aria-label="Catholic litanies">
        <LitanyPrayerShelf litanies={contemplativeLitanyShelf} />
      </main>
    </div>
  );
}
