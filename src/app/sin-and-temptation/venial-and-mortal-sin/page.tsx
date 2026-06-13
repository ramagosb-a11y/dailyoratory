import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { gentleSinFaqs } from "@/data/sinAndTemptation";
import { GentleSinFAQ } from "@/components/sin-and-temptation/GentleSinFAQ";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";
import { VenialMortalComparison } from "@/components/sin-and-temptation/VenialMortalComparison";

export const metadata: Metadata = createPageMetadata({
  title: "Venial and Mortal Sin | Daily Oratory",
  description:
    "Understand venial and mortal sin with clarity, pastoral care, and confidence in God’s mercy.",
  path: "/sin-and-temptation/venial-and-mortal-sin",
});

export default function VenialAndMortalSinPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Venial and Mortal Sin" },
      ]}
      title="Venial and Mortal Sin"
      subtitle="Understanding the difference with clarity, humility, and hope in God’s mercy."
      summary="The Church speaks about venial and mortal sin not to frighten the soul, but to teach us to love God honestly and return quickly to grace when we fall."
      ctas={[
        { label: "Go to Confession Guide", href: "/confession", eventName: "confession_guide_click" },
        { label: "Open Examination", href: "/confession/examination", variant: "secondary" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary", eventName: "sin_topic_open" },
      ]}
    >
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">What is venial sin?</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Venial sin wounds charity but does not destroy the life of grace in the soul. It weakens love,
            inclines the heart toward disorder, and should not be ignored.
          </p>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>small deliberate uncharities</li>
            <li>impatience</li>
            <li>minor dishonesty</li>
            <li>careless prayer</li>
            <li>selfishness</li>
            <li>gossip or rash speech</li>
            <li>laziness in duty</li>
          </ul>
          <p className="daily-readable-muted mt-5 text-sm leading-7 text-muted">
            Examples depend on knowledge, consent, matter, and circumstances.
          </p>
        </article>

        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">What is mortal sin?</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Mortal sin is grave sin that destroys charity in the heart and separates the soul from sanctifying
            grace. The Church traditionally teaches three conditions: grave matter, full knowledge, and
            deliberate consent.
          </p>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>grave matter means the act is seriously contrary to God’s law</li>
            <li>full knowledge means the person knows it is seriously wrong</li>
            <li>deliberate consent means the person freely chooses it</li>
          </ul>
        </article>
      </section>

      <PastoralMercyNote>
        <p>
          If you are unsure whether something was mortal, do not panic. Bring it honestly to Confession and ask
          a priest. Mortal sin should be confessed before receiving Holy Communion, but God’s mercy is never far
          from the repentant soul.
        </p>
        <p>
          Venial sin still matters. Repeated venial sin can weaken the will, dull the conscience, and prepare
          the heart for more serious sin.
        </p>
      </PastoralMercyNote>

      <VenialMortalComparison />

      <GentleSinFAQ faqs={gentleSinFaqs} />

      <RelatedConversionLinks
        title="Helpful next steps"
        links={[
          {
            title: "Confession Guide",
            description: "See how Christ ordinarily restores the soul through Reconciliation.",
            href: "/confession",
          },
          {
            title: "Guided Examination of Conscience",
            description: "Prepare honestly without panic or guesswork.",
            href: "/confession/examination",
          },
          {
            title: "Habitual Sin",
            description: "Learn how repeated sin becomes a pattern and how grace begins to break it.",
            href: "/sin-and-temptation/habitual-sin",
          },
          {
            title: "Virtue and Healing",
            description: "Move beyond fear into growth, virtue, and deeper freedom.",
            href: "/sin-and-temptation/virtue-and-healing",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
