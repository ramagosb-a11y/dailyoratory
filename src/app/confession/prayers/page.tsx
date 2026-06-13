import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationNotices } from "@/components/confession/ExaminationNotices";
import { ConfessionReportCta } from "@/components/confession/ConfessionReportCta";
import { SectionHeader } from "@/components/section-header";
import { getConfessionPrayers } from "@/lib/confession";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Confession Prayers",
  description:
    "Catholic prayers before examination, before confession, when returning after a long time, and after confession.",
  path: "/confession/prayers",
});

export default function ConfessionPrayersPage() {
  const prayers = getConfessionPrayers();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ConfessionNav />
        <Breadcrumbs items={[{ label: "Confession", href: "/confession" }, { label: "Prayers" }]} />
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="grid gap-6">
            <SectionHeader
              eyebrow="Prayer"
              title="Confession prayers"
              summary="Short prayers for preparing, confessing, returning after a long time, and giving thanks for mercy."
            />
            <ExaminationNotices compact />
            <Link href="/confession/examination/start" className="btn btn-primary focus-ring w-fit">
              Begin examination
            </Link>
            <ConfessionReportCta />
          </div>

          <div className="grid gap-4">
            {prayers.map((prayer) => (
              <article key={prayer.title} className="content-card p-5 sm:p-6">
                <p className="text-xs font-bold uppercase text-burgundy">{prayer.sourceNote}</p>
                <h2 className="font-display text-3xl font-semibold leading-tight text-navy">{prayer.title}</h2>
                <p className="prayer-text mt-4 text-navy">{prayer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
