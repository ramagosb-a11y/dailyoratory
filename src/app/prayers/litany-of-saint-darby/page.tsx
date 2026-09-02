import type { Metadata } from "next";
import { ContemplativeLitanyShell } from "@/components/contemplative-litanies/ContemplativeLitanyShell";
import { saintDarbyLitany } from "@/components/contemplative-litanies/data/litanies/saintDarby";
import { LitanyPrayerShelf, type LitanyShelfItem } from "@/components/contemplative-litanies/LitanyPrayerShelf";
import { litanyCatalog } from "@/components/contemplative-litanies/data/litanyRegistry";
import { createPageMetadata } from "@/lib/metadata";

const pageMetadata = createPageMetadata({
  title: "Litany of Saint Darby | Personal Devotional Prayer | Daily Oratory",
  description: "A personal devotional litany shared in friendship and prayer.",
  path: "/prayers/litany-of-saint-darby",
});

export const metadata: Metadata = {
  ...pageMetadata,
  robots: { index: false, follow: false },
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

export default function LitanyOfSaintDarbyPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <ContemplativeLitanyShell litany={saintDarbyLitany} exitHref="/prayers" />
      <section aria-label="Explore other contemplative litanies" className="border-t border-[#D8CDB9] bg-[#FFFDF7] px-0 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-5 lg:px-10">
          <LitanyPrayerShelf litanies={contemplativeLitanyShelf} />
        </div>
      </section>
    </div>
  );
}
