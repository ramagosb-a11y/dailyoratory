import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { BibleHero } from "@/components/bible/BibleHero";
import { BibleBookInvitations } from "@/components/bible/BibleBookInvitations";
import { BooksOfBibleOverview } from "@/components/bible/BooksOfBibleOverview";
import { HowToReadBibleCatholic } from "@/components/bible/HowToReadBibleCatholic";
import { LectioDivinaSection } from "@/components/bible/LectioDivinaSection";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const baseMetadata = createPageMetadata({
  title: "The Bible and Sacred Scripture | Daily Oratory",
  description:
    "A calm, welcoming guide for beginning, returning to, and understanding the Bible one passage at a time.",
  path: "/bible",
  keywords: [
    "Sacred Scripture",
    "how to read the Bible",
    "daily Mass readings",
    "Lectio Divina",
    "books of the Bible",
    "Bible for beginners",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "The Bible",
    description:
      "A calm, welcoming guide for beginning, returning to, and understanding the Bible one passage at a time.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "The Bible",
    description:
      "A calm, welcoming guide for beginning, returning to, and understanding the Bible one passage at a time.",
  },
};

export default function BiblePage() {
  return (
    <div className="paper-texture bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,39,0.08),transparent_34rem)]">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Bible and Sacred Scripture",
              description:
                "A calm, welcoming guide for beginning, returning to, and understanding the Bible one passage at a time.",
              path: "/bible",
            }),
            buildArticleStructuredData({
              headline: "The Bible and Sacred Scripture",
              description:
                "A calm, welcoming guide for beginning, returning to, and understanding the Bible one passage at a time.",
              path: "/bible",
              keywords: baseMetadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Bible", path: "/bible" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Bible" }]} />

        <div className="mt-8">
          <BibleHero />
        </div>

        <nav aria-label="Bible reading path" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 px-1 text-sm font-semibold text-navy sm:gap-x-7">
          <a href="#how-to-begin" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">1. Begin with care</a>
          <a href="#lectio-divina" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">2. Read slowly</a>
          <a href="#books-of-the-bible" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">3. Find a book</a>
        </nav>

        <div className="mt-14">
          <HowToReadBibleCatholic />
        </div>

        <div className="mt-14">
          <LectioDivinaSection />
        </div>

        <div className="mt-14">
          <BooksOfBibleOverview />
        </div>

        <div className="mt-14">
          <BibleBookInvitations />
        </div>
      </main>
    </div>
  );
}
