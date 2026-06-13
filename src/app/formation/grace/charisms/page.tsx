import type { Metadata } from "next";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceTopicPage } from "@/components/grace/GraceTopicPage";
import { createPageMetadata } from "@/lib/metadata";

const prayer =
  "Holy Spirit, purify my intentions and teach me to use every gift for the glory of God and the good of His people. Keep me humble, obedient, charitable, and discerning. Amen.";

const examples = [
  "teaching",
  "encouragement",
  "administration",
  "service",
  "hospitality",
  "wisdom",
  "knowledge",
  "healing",
  "prophecy",
  "discernment of spirits",
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Charisms and Special Graces | Catholic Formation | Daily Oratory",
  description:
    "Learn about charisms as gifts of the Holy Spirit for service, humility, discernment, and the building up of the Church.",
  path: "/formation/grace/charisms",
});

export default function CharismsPage() {
  return (
    <GraceTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Grace", href: "/formation/grace" },
        { label: "Charisms" },
      ]}
      title="Charisms and Special Graces"
      subtitle="Gifts of the Holy Spirit for the building up of the Church."
      summary="Charisms are not badges of spiritual status. They are gifts given for service, mission, and the good of others, and they should always be approached with humility, obedience, and discernment."
      ctas={[
        { label: "Return to Grace Overview", href: "/formation/grace" },
        { label: "Open Formation", href: "/formation", variant: "secondary" },
        { label: "Open Prophecy Series", href: "/prophecy-series", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What are charisms?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Charisms are gifts of the Holy Spirit given for the building up of the Church. Some are ordinary and quiet,
          while others may seem more striking. All should serve charity and mission.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Charisms are for service, not spiritual pride</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            A gift from the Holy Spirit is never meant to make a person feel superior. The test is whether it bears
            humility, charity, fidelity, and real service to the Church.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Ordinary and extraordinary gifts</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Many charisms are ordinary and essential: teaching, hospitality, encouragement, administration, and
            service. Some gifts may appear more extraordinary, but they too require discernment and obedience.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Examples of charisms</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {examples.map((example) => (
            <span key={example} className="season-pill bg-ivory px-4 py-2 text-sm font-semibold text-navy">
              {example}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Discernment with humility</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            Gifts should be discerned prayerfully, with humility and with attention to Scripture, Church teaching, and
            wise pastoral guidance.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Charisms and the common good</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            Charisms exist for the benefit of others, not merely for private spiritual satisfaction.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Using gifts in the Church</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">
            The healthiest place for charisms to mature is within the life of the Church: in prayer, service,
            discernment, accountability, and obedience.
          </p>
        </article>
      </section>

      <div className="rounded-2xl border border-gold/40 bg-white/80 p-5">
        <p className="daily-readable text-base leading-8 text-muted">
          Extraordinary gifts should be approached with humility, discernment, obedience to the Church, and pastoral
          guidance.
        </p>
      </div>

      <GracePrayerCard title="Prayer to Use Gifts Well" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>What gifts has God placed in my life for the good of others?</li>
          <li>Am I using those gifts with humility and obedience?</li>
          <li>Where do I need greater discernment and charity?</li>
        </ul>
      </section>

      <GraceRelatedLinks
        title="Related Links"
        links={[
          { title: "Grace", description: "Return to the main guide on grace and holiness.", href: "/formation/grace" },
          { title: "Formation", description: "Keep gifts rooted in doctrine, prayer, and discipleship.", href: "/formation" },
          { title: "Prayer", description: "Discern charisms through a steady prayer life.", href: "/pray" },
          { title: "Prophecy Series", description: "A related media page where discernment and Catholic framing matter.", href: "/prophecy-series" },
        ]}
      />
    </GraceTopicPage>
  );
}
