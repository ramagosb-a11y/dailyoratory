import type { Metadata } from "next";
import Link from "next/link";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const holyHourPlan = [
  {
    title: "Begin in silence",
    description: "Make the Sign of the Cross, greet Jesus simply, and place yourself before Him without hurry.",
  },
  {
    title: "Read a little Scripture",
    description: "Choose one Gospel passage, stay with it slowly, and ask what the Lord is showing you.",
  },
  {
    title: "Pray honestly",
    description: "Offer thanksgiving, repentance, intercession, and whatever is really on your heart.",
  },
  {
    title: "Rest quietly",
    description: "Let there be a few minutes of silence where you simply remain with Christ in trust.",
  },
  {
    title: "End with gratitude",
    description: "Thank the Lord, ask for grace to live faithfully, and carry that peace into the day.",
  },
] as const;

const shortVisitHelp = [
  "If you only have 10 to 15 minutes, begin anyway.",
  "A shorter visit made faithfully is better than waiting for a perfect hour that never comes.",
  "You can build toward a full Holy Hour over time.",
] as const;

const relatedLinks = [
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "Live Adoration Streams", href: "/adoration/live" },
  { label: "Adoration Prayers", href: "/adoration/prayers" },
  { label: "The Holy Mass", href: "/mass" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Catholic Q&A", href: "/catholic-answers" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "How to Make a Holy Hour | Eucharistic Adoration Guide | Daily Oratory",
  description:
    "A simple Catholic guide to making a Holy Hour in Eucharistic Adoration, with a practical structure, help for beginners, and encouragement for shorter visits.",
  path: "/adoration/holy-hour",
  keywords: [
    "how to make a holy hour",
    "Holy Hour",
    "Eucharistic Adoration guide",
    "how to pray in adoration",
    "holy hour prayer",
  ],
});

export default function HolyHourPage() {
  const description =
    "A simple Catholic guide to making a Holy Hour in Eucharistic Adoration, with a practical structure, help for beginners, and encouragement for shorter visits.";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "How to Make a Holy Hour",
              description,
              path: "/adoration/holy-hour",
            }),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: "How to Make a Holy Hour", path: "/adoration/holy-hour" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Adoration", href: "/adoration" }, { label: "Holy Hour" }]} />
        <AdorationNav />

        <header className="mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eucharistic Adoration</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            How to Make a Holy Hour
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-lg leading-8 text-navy">
            A simple Catholic guide to spending one hour with Jesus in the Blessed Sacrament.
          </p>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A Holy Hour is not about filling every minute perfectly. It is about giving Christ your time with
            reverence, honesty, and a willing heart. If a full hour feels difficult, begin simply and grow steadily.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/adoration/live" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Enter Live Adoration
            </Link>
            <Link href="/adoration/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Adoration Prayers
            </Link>
          </div>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">A simple Holy Hour structure</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {holyHourPlan.map((step) => (
              <article key={step.title} className="card bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">If you are easily distracted</h2>
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Bring one small plan with you: a Gospel passage, a prayer intention, or one simple question for the Lord.
              When your mind wanders, return gently without harshness. A distracted Holy Hour can still be a faithful one.
            </p>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">If you only have a short visit</h2>
            <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
              {shortVisitHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">For your first Holy Hour</h2>
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            Keep your first Holy Hour simple. Begin with silence, open a short Scripture passage, pray a little, and
            allow a few quiet minutes with Jesus. You do not need to force deep feelings. Faithful presence is already prayer.
          </p>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Related guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card dashboard-card focus-ring flex min-h-24 items-center p-5 transition hover:-translate-y-0.5 hover:border-gold">
                <span className="font-display text-2xl font-semibold leading-tight text-navy">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
