import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ConfessionPreparationChecklist } from "@/components/sin-and-temptation/ConfessionPreparationChecklist";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";

export const metadata: Metadata = createPageMetadata({
  title: "Examination, Contrition, and Confession | Daily Oratory",
  description:
    "Learn how to examine your conscience, form contrition, and bring your sins honestly to Jesus in Confession.",
  path: "/sin-and-temptation/examination-and-confession",
});

export default function ExaminationAndConfessionPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Examination and Confession" },
      ]}
      title="Examination, Contrition, and Confession"
      subtitle="How to bring sin honestly to Jesus and receive His mercy."
      summary="Examination of conscience and Confession are not meant to trap the soul in fear. They are meant to open the heart to truth, contrition, absolution, healing, and peace."
      ctas={[
        { label: "Go to Confession Guide", href: "/confession", eventName: "confession_guide_click" },
        { label: "Open Examination", href: "/confession/examination", variant: "secondary" },
        { label: "Daily Examen", href: "/daily-examen", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why examine your conscience?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          An examination of conscience helps the soul see where it needs mercy, healing, and conversion. It is a
          moment of honest light before God, not self-hatred.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Daily Examen</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>short daily review</li>
            <li>gratitude</li>
            <li>noticing grace and sin</li>
            <li>resolve for tomorrow</li>
          </ul>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Confession preparation</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>more direct review of sins</li>
            <li>mortal and venial sins</li>
            <li>number and kind when needed</li>
            <li>contrition</li>
            <li>purpose of amendment</li>
          </ul>
        </article>
      </section>

      <PastoralMercyNote>
        <p>
          Contrition is sorrow for sin and a turning back toward God. A firm purpose of amendment means
          sincerely intending to avoid sin and near occasions. It does not mean you can guarantee you will never
          fall again.
        </p>
      </PastoralMercyNote>

      <ConfessionPreparationChecklist />

      <RelatedConversionLinks
        links={[
          {
            title: "Confession Guide",
            description: "Walk through the sacrament itself with prayer and practical help.",
            href: "/confession",
          },
          {
            title: "Guided Examination of Conscience",
            description: "Use the private examination flow for more direct preparation.",
            href: "/confession/examination",
          },
          {
            title: "Daily Examen",
            description: "Keep a smaller daily rhythm of repentance and gratitude.",
            href: "/daily-examen",
          },
          {
            title: "Virtue and Healing",
            description: "Look beyond the fall toward the grace that rebuilds the soul.",
            href: "/sin-and-temptation/virtue-and-healing",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
