import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "resurrection-of-the-body")!;

export const metadata: Metadata = createPageMetadata({
  title: "The Resurrection of the Body | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on the resurrection of the body, the dignity of the whole person, and the hope rooted in Christ's Resurrection.",
  path: "/formation/eschatology/resurrection-of-the-body",
});

export default function EschatologyResurrectionPage() {
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
      summary="Christian hope concerns the whole person. God created both body and soul, Christ rose bodily, and the resurrection of the body belongs to the fullness of salvation."
      ctas={[
        { label: "Return to Eschatology", href: "/formation/eschatology" },
        { label: "Open Glorious Mysteries", href: "/devotions/holy-rosary/glorious-mysteries", variant: "secondary" },
        { label: "View Liturgical Seasons", href: "/liturgical-living/seasons", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What does the resurrection of the body mean?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The resurrection of the body means that at the end of time God will raise the dead. Human destiny is
          not an escape from the body, but the glorification of the whole person in Christ.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Christ's Resurrection as the foundation</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The Resurrection of Jesus is the foundation of Christian hope. Because He lives, those who belong
            to Him hope not only for the soul's life with God, but for final bodily glory.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">The dignity of the human body</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The resurrection affirms the dignity of the body. The body is not disposable; it belongs to the
            person whom God created, redeemed, and will raise.
          </p>
        </article>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Death is not the final word</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Death remains painful and real, but it does not have ultimate power over those who belong to
            Christ. Easter hope speaks even at the grave.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Resurrection, judgment, and new creation</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Bodily resurrection belongs to the final fulfillment of God's Kingdom, the judgment of history, and
            the renewal of creation in Christ.
          </p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">How this changes Christian life now</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          This hope teaches reverence for the human person, patience in suffering, and confidence that no act of
          fidelity in Christ is wasted.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Connected formation</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why Catholic Burial Matters</h2>
        <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
          Reverence for the body at death flows from Christian faith in resurrection, dignity, and the final fulfillment of the whole person in Christ.
        </p>
        <div className="mt-6">
          <a href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Learn About Catholic Burial
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
