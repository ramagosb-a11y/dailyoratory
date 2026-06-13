import type { Metadata } from "next";
import Link from "next/link";
import { SectionPage } from "@/components/section-page";
import { sectionPages } from "@/content/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Learn",
  description: "Confession, Mass, sacraments, saints, devotions, and spiritual formation.",
  path: "/learn",
});

export default function LearnPage() {
  const section = sectionPages.find((entry) => entry.slug === "learn")!;

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 pt-12 sm:px-8 lg:px-10">
        <article className="card-parchment grid gap-5 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">New in Learn</p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              The Bible
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Learn how Catholics read Sacred Scripture with the Church, pray with the Mass readings,
              choose Catholic translations, and let the Word of God shape daily life.
            </p>
          </div>
          <div className="flex items-start lg:justify-end">
            <Link href="/bible" className="btn btn-secondary focus-ring">
              Learn the Bible
            </Link>
          </div>
        </article>
      </section>
      <SectionPage section={section} />
    </div>
  );
}
