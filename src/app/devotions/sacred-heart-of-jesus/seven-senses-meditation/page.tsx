import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/devotions/sacred-heart-of-jesus/seven-senses-meditation";
const pageTitle = "Sacred Heart of Jesus Seven Senses Meditation";
const pageDescription =
  "A 20-minute guided Sacred Heart of Jesus meditation journey through Calvary, the pierced Heart of Christ, and personal surrender.";
const heroImagePath = "/images/sacred-heart/sacred-heart-jesus.png";
const symbolImagePath = "/images/sacred-heart/sacred-heart-symbols.png";
const heroImageAlt = "Sacred Heart of Jesus with Christ holding His radiant Heart.";

const pageKeywords = [
  "Sacred Heart of Jesus meditation",
  "Seven Senses meditation",
  "Sacred Heart prayer",
  "Catholic meditation",
  "Calvary meditation",
  "pierced Heart of Jesus",
  "First Friday devotion",
];

const baseMetadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: heroImagePath,
  imageAlt: heroImageAlt,
  keywords: pageKeywords,
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: `${pageTitle} | Daily Oratory`,
    description: pageDescription,
    images: [
      {
        url: getAbsoluteUrl(heroImagePath),
        width: 1086,
        height: 1448,
        alt: heroImageAlt,
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: `${pageTitle} | Daily Oratory`,
    description: pageDescription,
    images: [getAbsoluteUrl(heroImagePath)],
  },
};

type ScriptureLine = {
  reference: string;
  text: string;
};

type MeditationStep = {
  id: string;
  eyebrow: string;
  title: string;
  duration: string;
  paragraphs: readonly string[];
  scripture?: readonly ScriptureLine[];
  prompts?: readonly string[];
  prayer?: readonly string[];
};

const jumpLinks = [
  { label: "Prepare", href: "#prepare" },
  { label: "Scene", href: "#scene" },
  { label: "Sight", href: "#sight" },
  { label: "Hearing", href: "#hearing" },
  { label: "Smell", href: "#smell" },
  { label: "Touch", href: "#touch" },
  { label: "Emotion", href: "#emotion" },
  { label: "Spirit", href: "#spiritual-awareness" },
  { label: "Closing", href: "#closing" },
] as const;

const openingPrayer = [
  "Lord Jesus Christ,",
  "open the eyes of my soul.",
  "Let me enter deeply into the mystery of Your Sacred Heart.",
  "Remove distractions, quiet my thoughts,",
  "and allow me to encounter the infinite love flowing from Your Heart.",
  "",
  "I desire not simply to think about You,",
  "but to know You, love You, and remain with You.",
  "",
  "Sacred Heart of Jesus, draw me into Yourself.",
  "Amen.",
] as const;

const surrenderPrayer = [
  "Jesus, take my heart.",
  "Purify what is impure.",
  "Heal what is wounded.",
  "Burn away what is selfish.",
  "Remove everything that separates me from You.",
  "",
  "I no longer desire to belong to myself.",
  "I belong entirely to You.",
  "",
  "Place my heart inside Your Sacred Heart forever.",
  "Amen.",
] as const;

const closingPrayer = [
  "O Sacred Heart of Jesus,",
  "fountain of mercy,",
  "abyss of love,",
  "throne of divine charity,",
  "I surrender my whole being to You.",
  "",
  "Hide me inside Your pierced Heart.",
  "Teach me humility.",
  "Teach me obedience.",
  "Teach me sacrifice.",
  "Teach me love.",
  "",
  "May every heartbeat within me beat only for Your glory.",
  "",
  "Let me never be separated from You.",
  "",
  "Sacred Heart of Jesus,",
  "I trust in Thee.",
  "",
  "Amen.",
] as const;

const meditationSteps: readonly MeditationStep[] = [
  {
    id: "scene",
    eyebrow: "Step 1",
    title: "Enter the Scene",
    duration: "2 minutes",
    paragraphs: [
      "Place yourself at Calvary. It is Good Friday. Christ hangs upon the Cross. The sky is darkened. The earth trembles.",
      "You stand directly beneath Him. Our Lady stands nearby. Jesus Christ looks down upon the world He is saving. His Heart burns with love, even now.",
      "Do not force imagination. Simply enter.",
    ],
    prompts: ['Ask quietly: "Jesus, allow me to see Your Heart."'],
  },
  {
    id: "sight",
    eyebrow: "Step 2",
    title: "Sight",
    duration: "3 minutes",
    paragraphs: [
      "Observe carefully. Look at Jesus crucified.",
      "Notice the crown of thorns pressed into His Sacred Head, blood flowing from His hands, His wounded feet nailed to the wood, His exhausted breathing, and the Sacred Heart hidden within His chest.",
      "Now watch. A Roman soldier approaches. He lifts the spear. The spear enters. The Sacred Heart is pierced. His Heart opens, not in anger, but in love.",
      "Remain here.",
    ],
    scripture: [
      {
        reference: "John 19:34",
        text: "One of the soldiers with a spear opened His side, and immediately there came out blood and water.",
      },
    ],
    prompts: ["What part of my own heart remains closed to Christ?", "Silence."],
  },
  {
    id: "hearing",
    eyebrow: "Step 3",
    title: "Hearing",
    duration: "3 minutes",
    paragraphs: [
      "Listen. Do not think. Hear.",
      "What sounds fill Calvary? Wind moving over Golgotha. Hammer strikes earlier in the crucifixion. Soldiers murmuring. The quiet weeping of Our Lady. The sound of Christ struggling for breath.",
      "Now hear His words. Hear Him say this directly to you. He thirsts for souls. He thirsts for your love. He thirsts for your surrender.",
      "Now hear His final words.",
    ],
    scripture: [
      { reference: "John 19:28", text: "I thirst." },
      { reference: "Luke 23:46", text: "Father, into thy hands I commend my spirit." },
    ],
    prompts: ["Have I truly given Jesus everything?", "Listen interiorly. What is He saying?", "Wait."],
  },
  {
    id: "smell",
    eyebrow: "Step 4",
    title: "Smell",
    duration: "2 minutes",
    paragraphs: [
      "Become aware of the atmosphere.",
      "What do you smell? Dry earth beneath the Cross. Dust carried by the wind. Blood flowing from Christ's wounds. Sweat from exhaustion. The scent of wood from the Cross itself.",
      "Now imagine another fragrance emerging: a supernatural fragrance, the fragrance of divine love. The Heart of Christ burns like incense rising to the Father.",
    ],
    scripture: [
      { reference: "2 Corinthians 2:15", text: "For we are the good odor of Christ unto God." },
    ],
    prompts: [
      "Does my life carry the fragrance of holiness?",
      "Or have I allowed sin to corrupt what God desires to make pure?",
      "Remain.",
    ],
  },
  {
    id: "touch",
    eyebrow: "Step 5",
    title: "Touch",
    duration: "3 minutes",
    paragraphs: [
      "Feel the environment.",
      "What touches you? Cold wind striking your face. Rough stones beneath your feet. The trembling ground during the earthquake. The heaviness in your chest seeing Christ suffer.",
      "Now approach the Cross. Kneel. Place your hand spiritually against the wounded side of Christ. Touch the opening created by the spear. Touch the Sacred Heart.",
      "What do you feel? Warmth. Mercy. Fire. Infinite tenderness. No rejection. No condemnation. Only love.",
      "Hear Him say:",
    ],
    scripture: [
      { reference: "Matthew 11:29", text: "Learn of me, because I am meek and humble of heart." },
    ],
    prompts: ["What wounds in me need to be placed inside His wounds?", "Place them there."],
  },
  {
    id: "emotion",
    eyebrow: "Step 6",
    title: "Emotion",
    duration: "3 minutes",
    paragraphs: [
      "Look into His face. Become aware of what rises within you.",
      "What emotions are there? Sorrow? Gratitude? Shame over sin? Love? Desire for conversion? Longing for intimacy with God?",
      "Now realize something. Every suffering Christ endured, He willingly accepted out of love for you personally.",
      "Stay there. Allow yourself to feel sorrow for sin. But deeper still, feel loved. Not abstractly. Personally.",
    ],
    scripture: [
      { reference: "Isaiah 53:5", text: "He was wounded for our iniquities." },
    ],
    prayer: ["Jesus, You loved me before I loved You.", "Repeat. Again. Do not rush."],
  },
  {
    id: "spiritual-awareness",
    eyebrow: "Step 7",
    title: "Spiritual Awareness",
    duration: "4 minutes",
    paragraphs: [
      "Now leave external senses behind. Enter the soul.",
      "The Sacred Heart stands before you: burning, radiant, alive. See the Heart crowned with thorns, wounded, yet full of fire. It speaks without words.",
      "Now surrender completely. Imagine placing your own heart into His Sacred Heart. Every attachment. Every fear. Every ambition. Every wound. Every sin. Every desire. Place all of it inside Him.",
      "Remain in silence. No words. Simply stay with Him.",
    ],
    prompts: ["Jesus, what do You want from me?", "Remain silent. Wait. Do not force answers. Simply receive."],
    prayer: surrenderPrayer,
  },
] as const;

const symbolDetails = [
  "The flame invites love in return.",
  "The cross recalls redemption and sacrifice.",
  "The crown of thorns names suffering accepted in love.",
  "The blood and wounds reveal mercy poured out.",
  "The radiance points to grace flowing from the Heart of Christ.",
] as const;

const relatedLinks = [
  { label: "Sacred Heart of Jesus", href: "/devotions/sacred-heart-of-jesus" },
  { label: "Sacred Heart Novena", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Adoration", href: "/adoration" },
] as const;

export default function SacredHeartSevenSensesMeditationPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: pageTitle,
              description: pageDescription,
              path: pagePath,
            }),
            buildArticleStructuredData({
              headline: pageTitle,
              description: pageDescription,
              path: pagePath,
              keywords: pageKeywords,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Devotions", path: "/devotions" },
              { name: "Sacred Heart of Jesus", path: "/devotions/sacred-heart-of-jesus" },
              { name: "Seven Senses Meditation", path: pagePath },
            ]),
          ]}
        />

        <Breadcrumbs
          items={[
            { label: "Pray", href: "/pray" },
            { label: "Devotions", href: "/devotions" },
            { label: "Sacred Heart of Jesus", href: "/devotions/sacred-heart-of-jesus" },
            { label: "Seven Senses Meditation" },
          ]}
        />

        <header className="liturgical-page-hero mt-8 overflow-hidden rounded-3xl bg-[#2a140c] text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1.03fr_0.97fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Sacred Heart of Jesus</p>
              <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Seven Senses Deep Meditation Journey
              </h1>
              <p className="daily-readable mt-5 max-w-3xl text-base leading-8 text-white/85">
                A 20-minute guided meditation that enters Calvary through the senses and ends in surrender to the
                pierced, burning, merciful Heart of Christ.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white">20 minutes</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white">Seven senses</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white">Calvary</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#prepare" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                  Begin in Silence
                </Link>
                <Link href="/devotions/sacred-heart-of-jesus" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                  Back to Sacred Heart
                </Link>
              </div>
            </div>
            <figure className="relative min-h-[430px] bg-[#1f1208] sm:min-h-[520px] lg:min-h-full">
              <Image
                src={heroImagePath}
                alt={heroImageAlt}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </figure>
          </div>
        </header>

        <div className="mt-8">
          <SectionJumpNav ariaLabel="Sacred Heart meditation sections" items={jumpLinks} />
        </div>

        <div className="grid gap-10">
          <section id="prepare" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Preparation</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Begin Recollected</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>Begin by making the Sign of the Cross.</p>
              <p>Sit in silence. Breathe slowly. Ask the Holy Spirit for recollection.</p>
            </div>
            <PrayerBlock title="Opening Prayer" lines={openingPrayer} />
            <p className="daily-readable-muted mt-6 text-base leading-8 text-muted">Remain still.</p>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <figure className="overflow-hidden rounded-3xl bg-[#1f1208] p-4 shadow-soft sm:p-6">
              <Image
                src={symbolImagePath}
                alt="Explanation of the Sacred Heart symbols: flame, cross, crown of thorns, blood, wounds, and radiance."
                width={1254}
                height={1254}
                className="h-auto w-full rounded-2xl"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </figure>
            <div className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Icon of love</p>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy">
                Let the Image Teach the Prayer
              </h2>
              <p className="daily-readable-muted mt-5 text-base leading-8 text-muted">
                The meditation keeps returning to what the Sacred Heart shows: love that burns, suffers, forgives,
                redeems, and pours grace into the soul.
              </p>
              <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
                {symbolDetails.map((detail) => (
                  <li key={detail} className="rounded-2xl border border-stone bg-white/70 px-4 py-3">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {meditationSteps.map((step) => (
            <MeditationStepCard key={step.id} step={step} />
          ))}

          <section id="closing" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Closing prayer</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Remain With Him</h2>
            <PrayerBlock title="Closing Prayer" lines={closingPrayer} />
            <div className="liturgical-callout liturgical-callout-prayer mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Carry this prayer</p>
              <p className="daily-readable mt-3 text-2xl font-semibold leading-9 text-navy">
                &quot;Jesus, make my heart like unto Thine.&quot;
              </p>
              <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">
                Saint Margaret Mary Alacoque, pray for us.
              </p>
            </div>
            <p className="daily-readable-muted mt-6 text-base leading-8 text-muted">
              Remain in silence for a few minutes.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Continue praying</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Related Sacred Heart Resources</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="focus-ring season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function MeditationStepCard({ step }: { step: MeditationStep }) {
  return (
    <section id={step.id} className="scroll-mt-24 card-parchment p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{step.eyebrow}</p>
        <span className="season-pill">{step.duration}</span>
      </div>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{step.title}</h2>
      <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
        {step.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {step.scripture?.length ? (
        <div className="mt-7 grid gap-4">
          {step.scripture.map((scripture) => (
            <blockquote key={scripture.reference} className="liturgical-callout border-l-4 border-burgundy bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{scripture.reference}</p>
              <p className="daily-readable mt-3 text-xl leading-8 text-navy">&quot;{scripture.text}&quot;</p>
            </blockquote>
          ))}
        </div>
      ) : null}

      {step.prompts?.length ? (
        <div className="liturgical-callout liturgical-callout-prayer mt-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Ask</p>
          <div className="daily-readable-muted mt-4 grid gap-3 text-base leading-8 text-muted">
            {step.prompts.map((prompt) => (
              <p key={prompt}>{prompt}</p>
            ))}
          </div>
        </div>
      ) : null}

      {step.prayer?.length ? <PrayerBlock title="Pray slowly" lines={step.prayer} /> : null}
    </section>
  );
}

function PrayerBlock({ title, lines }: { title: string; lines: readonly string[] }) {
  return (
    <div className="liturgical-callout liturgical-callout-prayer mt-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{title}</p>
      <div className="daily-readable mt-4 whitespace-pre-line text-xl leading-9 text-navy">{lines.join("\n")}</div>
    </div>
  );
}
