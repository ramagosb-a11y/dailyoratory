import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { catholicAnswers } from "@/data/catholicAnswers";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import type { CatholicAnswer } from "@/types/catholicAnswers";

const supplementalAnswers: CatholicAnswer[] = [
  {
    id: "what-is-prayer",
    question: "What is prayer?",
    slug: "what-is-prayer",
    shortAnswer:
      "Prayer is turning the heart toward God. It includes praise, thanksgiving, repentance, petition, silence, and simple conversation with the Lord. Prayer is not performance. It is a relationship of trust with God who first loved us.",
    category: "Prayer",
    tags: ["prayer", "beginner", "daily prayer"],
    learnMoreLabel: "Prayer Library",
    learnMoreHref: "/prayers",
    relatedLinks: [
      { id: "prayer-prayers", label: "Prayer Library", href: "/prayers", description: "Find simple Catholic prayers for daily life.", sortOrder: 1 },
      { id: "prayer-roadmap", label: "Catholic Life Roadmap", href: "/catholic-life", description: "See how prayer fits into Catholic life.", sortOrder: 2 },
    ],
    sortOrder: 0,
  },
  {
    id: "how-do-i-start-praying",
    question: "How do I start praying?",
    slug: "how-do-i-start-praying",
    shortAnswer:
      "Start small and stay steady. Begin with the Sign of the Cross, speak honestly to God, pray one traditional prayer slowly, and end by asking for grace to live faithfully today. The goal is not impressiveness, but faithfulness.",
    category: "Prayer",
    tags: ["start praying", "daily prayer", "beginner"],
    learnMoreLabel: "Prayer Library",
    learnMoreHref: "/prayers",
    relatedLinks: [
      { id: "start-praying-prayers", label: "Prayer Library", href: "/prayers", description: "Find a first prayer for the day.", sortOrder: 1 },
      { id: "start-praying-next-step", label: "What Should I Do?", href: "/what-should-i-do", description: "Find the next faithful step if you feel unsure.", sortOrder: 2 },
    ],
    sortOrder: 0,
  },
  {
    id: "how-do-i-return-to-mass",
    question: "How do I return to Mass?",
    slug: "how-do-i-return-to-mass",
    shortAnswer:
      "Begin simply. Look up a Sunday Mass time, pray for peace before you go, and return one faithful step at a time. If you also need to return to Confession or are unsure about Communion, speak with a priest and let mercy steady you.",
    category: "Returning to the Church",
    tags: ["return to mass", "returning catholic", "mass", "beginner"],
    learnMoreLabel: "Returning to Mass",
    learnMoreHref: "/returning-to-mass",
    relatedLinks: [
      { id: "return-mass-mass", label: "The Holy Mass", href: "/mass", description: "Learn what the Mass is and how to follow it.", sortOrder: 1 },
      { id: "return-mass-confession", label: "Confession Guide", href: "/confession", description: "Return to the sacrament of mercy with peace.", sortOrder: 2 },
      { id: "return-mass-returning", label: "Returning to the Church", href: "/returning", description: "Take a broader coming-home path.", sortOrder: 3 },
    ],
    sortOrder: 0,
  },
  {
    id: "what-is-a-holy-hour",
    question: "What is a Holy Hour?",
    slug: "what-is-a-holy-hour",
    shortAnswer:
      "A Holy Hour is a period of prayer spent with Jesus, especially in Eucharistic Adoration. It usually includes silence, Scripture, thanksgiving, repentance, and intercession. It is not about doing everything perfectly, but about remaining with Christ faithfully.",
    category: "Prayer",
    tags: ["holy hour", "adoration", "eucharist", "prayer", "beginner"],
    learnMoreLabel: "How to Make a Holy Hour",
    learnMoreHref: "/adoration/holy-hour",
    relatedLinks: [
      { id: "holy-hour-adoration", label: "Eucharistic Adoration", href: "/adoration", description: "Learn the larger meaning of Adoration.", sortOrder: 1 },
      { id: "holy-hour-live", label: "Live Adoration Streams", href: "/adoration/live", description: "Enter a chapel that is available now.", sortOrder: 2 },
      { id: "holy-hour-prayers", label: "Adoration Prayers", href: "/adoration/prayers", description: "Use simple prayers to begin your visit.", sortOrder: 3 },
    ],
    sortOrder: 0,
  },
];

const desiredQuestionOrder = [
  "What is prayer?",
  "How do I start praying?",
  "What is a Holy Hour?",
  "What is Confession?",
  "Why confess to a priest?",
  "What is mortal sin?",
  "What is venial sin?",
  "What is the difference between temptation and sin?",
  "What is grace?",
  "What is sanctifying grace?",
  "What is actual grace?",
  "What is the Eucharist?",
  "What is the Rosary?",
  "What is Purgatory?",
  "What happens when we die?",
  "What is Heaven?",
  "What is Hell?",
  "What is an indulgence?",
  "What is detachment from sin?",
  "Can Catholics be cremated?",
  "How do I return to the Church?",
  "How do I return to Mass?",
  "What is Lent?",
  "What are the O Antiphons?",
  "What is the Apostolic Pardon?",
  "What should I do if a loved one is dying?",
];

const categoryChips = [
  "Prayer",
  "Sacraments",
  "Sin and Mercy",
  "Grace",
  "Mary and Rosary",
  "Death and Hope",
  "Liturgical Year",
  "Catholic Life",
] as const;

const displayedAnswers = desiredQuestionOrder
  .map((question) => supplementalAnswers.find((item) => item.question === question) ?? catholicAnswers.find((item) => item.question === question))
  .filter((item): item is CatholicAnswer => Boolean(item));

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: displayedAnswers.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.shortAnswer,
    },
  })),
};

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Q&A | Beginner Catholic Answers | Daily Oratory",
  description:
    "Short Catholic answers about prayer, Confession, grace, sin, the Eucharist, the Rosary, Purgatory, death, Lent, indulgences, and returning to the Church.",
  path: "/catholic-answers",
  keywords: [
    "Catholic answers",
    "Catholic Q&A",
    "what is mortal sin",
    "what is grace",
    "what is Confession",
    "what is the Eucharist",
    "what is Purgatory",
    "indulgences",
    "Rosary",
    "return to Church",
  ],
});

export default function CatholicAnswersPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Q&A",
              description:
                "Short Catholic answers about prayer, Confession, grace, sin, the Eucharist, the Rosary, Purgatory, death, Lent, indulgences, and returning to the Church.",
              path: "/catholic-answers",
            }),
            buildArticleStructuredData({
              headline: "Catholic Q&A",
              description:
                "Short Catholic answers about prayer, Confession, grace, sin, the Eucharist, the Rosary, Purgatory, death, Lent, indulgences, and returning to the Church.",
              path: "/catholic-answers",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Catholic Q&A", path: "/catholic-answers" },
            ]),
            faqStructuredData,
          ]}
        />

        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Catholic Q&A" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Questions</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Catholic Q&amp;A</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            Short, plain-language Catholic answers with links to deeper Daily Oratory guides.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            This page is for beginners, returning Catholics, and anyone who wants a simple first answer before reading more deeply.
          </p>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Browse by topic</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {categoryChips.map((chip) => (
              <span key={chip} className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {displayedAnswers.map((item) => (
            <article key={item.id} className="card-parchment p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{item.category}</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-navy">{item.question}</h2>
              <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{item.shortAnswer}</p>
              <div className="mt-6">
                <Link href={item.learnMoreHref} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                  {item.learnMoreLabel}
                </Link>
              </div>
              {item.relatedLinks.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {item.relatedLinks.map((link) => (
                    <Link
                      key={`${item.id}-${link.href}`}
                      href={link.href}
                      className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Still not sure where to begin?</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Start with one clear next step.</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            If you still feel unsure, choose a starting point below and let Daily Oratory guide you gently into prayer, mercy, and Catholic life.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "What Should I Do?", href: "/what-should-i-do" },
              { label: "Catholic Life Roadmap", href: "/catholic-life" },
              { label: "Prayer Library", href: "/prayers" },
              { label: "Confession Guide", href: "/confession" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 text-base font-semibold text-navy transition hover:border-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
