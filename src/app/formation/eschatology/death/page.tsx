import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "death")!;
const prayer = "Lord Jesus, be with me at the hour of my death. Teach me to live today with faith, repentance, hope, and love. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Death and Christian Hope | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on death, Christian hope, preparation for a holy death, and the sacraments that strengthen the soul.",
  path: "/formation/eschatology/death",
});

export default function EschatologyDeathPage() {
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
      summary="Catholic teaching sees death with realism and hope. Death remains serious, but Jesus Christ has entered it, transformed it, and opened the path to eternal life."
      ctas={[
        { label: "Return to Eschatology", href: "/formation/eschatology" },
        { label: "Anointing of the Sick", href: "/sacraments/anointing", variant: "secondary" },
        { label: "Go to Confession", href: "/confession", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What death is</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Death is the end of earthly life. It is part of the human condition after sin, and it remains a real
          separation of body and soul. Yet in Christ, death is no longer the final word.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Death as consequence of sin and transformed by Christ</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Christ entered death willingly and conquered it by His Passion, Death, and Resurrection. Because of
          Him, Christians can face death with faith, repentance, and hope.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Preparing for death with faith</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Stay close to Confession and the Eucharist.</li>
          <li>Pray daily and keep short accounts with God.</li>
          <li>Forgive others and ask forgiveness where needed.</li>
          <li>Entrust your future to Jesus Christ without fear.</li>
        </ul>
      </section>
      <section className="grid gap-5 lg:grid-cols-3">
        <article className="card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Confession</h2>
          <p className="daily-card-readable mt-4 text-base leading-7 text-muted">Return to mercy and live in grace.</p>
        </article>
        <article className="card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Eucharist / Viaticum</h2>
          <p className="daily-card-readable mt-4 text-base leading-7 text-muted">Christ gives Himself as food for the final journey.</p>
        </article>
        <article className="card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Anointing of the Sick</h2>
          <p className="daily-card-readable mt-4 text-base leading-7 text-muted">The Lord grants peace, courage, and grace in suffering and weakness.</p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Catholic Burial and Funeral Rites</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Catholic funeral and burial practices honor the body, pray for the soul, comfort the living, and proclaim hope in the resurrection.
        </p>
        <div className="mt-6">
          <a href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Learn About Catholic Burial
          </a>
        </div>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Urgent sacramental help</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Urgent Sacramental Help</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          If someone is dying or seriously ill, contact a priest early and ask about Confession,
          Anointing of the Sick, Viaticum, and prayer for the dying.
        </p>
        <div className="mt-6">
          <a href="/sacramental-emergency" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
            Sacramental Emergency Guide
          </a>
        </div>
      </section>
      <PrayerCard title="Prayer for a Holy Death" eyebrow="Prayer" prayer={prayer} />
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
