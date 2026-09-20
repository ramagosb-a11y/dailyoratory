import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { TraditionHero } from "@/components/tradition/TraditionHero";
import { TraditionGuide } from "@/components/tradition/TraditionGuide";

export const metadata: Metadata = createPageMetadata({
  title: "Sacred Tradition: Understanding the Faith Handed On",
  description:
    "Explore the meaning, transmission, history, and development of Sacred Tradition through five clear lessons and a sourced example of the Nicene Creed.",
  path: "/tradition",
  keywords: [
    "Sacred Tradition",
    "Catholic Tradition",
    "Scripture and Tradition",
    "Magisterium",
    "deposit of faith",
    "apostolic succession",
    "Catholic teaching",
    "Church Fathers",
    "Dei Verbum",
    "Catholic faith",
    "Catholic doctrine",
  ],
});

export default function TraditionPage() {
  return (
    <div className="paper-texture bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,39,0.08),transparent_34rem)]">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Sacred Tradition" }]} />

        <div className="mt-8">
          <TraditionHero />
        </div>
        <TraditionGuide />
      </main>
    </div>
  );
}
