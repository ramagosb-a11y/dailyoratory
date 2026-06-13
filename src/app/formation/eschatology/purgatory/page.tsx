import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "purgatory")!;

export const metadata: Metadata = createPageMetadata({
  title: "Purgatory and Final Purification | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on Purgatory as final purification, hope for the faithful departed, and prayer for the dead.",
  path: "/formation/eschatology/purgatory",
});

export default function EschatologyPurgatoryPage() {
  return (
    <EschatologyTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Catholic Eschatology", href: "/formation/eschatology" },
        { label: topic.title },
      ]}
      title={topic.title}
      subtitle={topic.subtitle}
      summary="Purgatory is not a rival to mercy, but one expression of it: God's final purification for those who die in His grace and friendship yet still need healing."
      ctas={[
        { label: "Learn About Indulgences", href: "/indulgences" },
        { label: "Indulgence Prayers and Devotions", href: "/indulgences/prayers-and-devotions", variant: "secondary" },
        { label: "Return to Eschatology", href: "/formation/eschatology", variant: "secondary" },
        { label: "Pray the Penitential Psalms", href: "/prayers/seven-penitential-psalms", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is Purgatory?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Purgatory is the final purification of those who die in God's grace and friendship but still need to be
          made fully ready for Heaven.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Why purification is needed</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Nothing unclean enters the full vision of God. Purgatory reflects the truth that grace heals,
            purifies, and completes what still needs restoration.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Purgatory and hope</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Purgatory is hopeful because those in it are being made ready for Heaven. It is not despair but
            merciful purification.
          </p>
        </article>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Praying for the dead</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Catholics pray for the faithful departed out of charity and hope. The Church encourages prayer,
            Masses, works of mercy, and indulgences offered for them.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Common misunderstandings</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Purgatory is not a second chance after death. It is for those who die in God's grace but still need
            purification before the vision of Heaven.
          </p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer for the dead</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Prayers for the Dead</h2>
        <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
          Continue loving the faithful departed by praying for their purification and entrusting them to the mercy of Christ.
        </p>
        <div className="mt-6">
          <a href="/formation/catholic-burial/prayers-for-the-dead" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Pray for the Dead
          </a>
        </div>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          {topic.reflectionQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>
      <EschatologyRelatedLinks />
    </EschatologyTopicPage>
  );
}
