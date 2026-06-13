import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { AfterMassThanksgiving } from "@/components/mass/AfterMassThanksgiving";
import { AltarGuide } from "@/components/mass/AltarGuide";
import { AmboGuide } from "@/components/mass/AmboGuide";
import { BeforeMassGuide } from "@/components/mass/BeforeMassGuide";
import { CommunionRiteGuide } from "@/components/mass/CommunionRiteGuide";
import { ConcludingRitesGuide } from "@/components/mass/ConcludingRitesGuide";
import { FamiliesAtMass } from "@/components/mass/FamiliesAtMass";
import { HeavenOnEarthSection } from "@/components/mass/HeavenOnEarthSection";
import { IntroductoryRitesGuide } from "@/components/mass/IntroductoryRitesGuide";
import { LiturgicalColorsAtMass } from "@/components/mass/LiturgicalColorsAtMass";
import { LiturgyOfTheEucharistGuide } from "@/components/mass/LiturgyOfTheEucharistGuide";
import { LiturgyOfTheWordGuide } from "@/components/mass/LiturgyOfTheWordGuide";
import { MassAndDailyLife } from "@/components/mass/MassAndDailyLife";
import { MassCopyrightNote } from "@/components/mass/MassCopyrightNote";
import { MassFAQ } from "@/components/mass/MassFAQ";
import { MassForBeginners } from "@/components/mass/MassForBeginners";
import { MassHero } from "@/components/mass/MassHero";
import { MassPastoralNote } from "@/components/mass/MassPastoralNote";
import { MassRoadmap } from "@/components/mass/MassRoadmap";
import { MassVideoSection } from "@/components/mass/MassVideoSection";
import { ParticipateAtMassGuide } from "@/components/mass/ParticipateAtMassGuide";
import { RealPresenceSection } from "@/components/mass/RealPresenceSection";
import { RelatedMassTools } from "@/components/mass/RelatedMassTools";
import { SacredSpacesGuide } from "@/components/mass/SacredSpacesGuide";
import { SacredVesselsAndLinens } from "@/components/mass/SacredVesselsAndLinens";
import { TabernacleGuide } from "@/components/mass/TabernacleGuide";
import { VestmentsGuide } from "@/components/mass/VestmentsGuide";
import { WhyMassMatters } from "@/components/mass/WhyMassMatters";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import {
  getFeaturedMassVideos,
  getMassFaqs,
  getMassObjectsByType,
  getMassPartsBySection,
  getMassSections,
  getSacredSpaces,
} from "@/lib/mass";

export const metadata: Metadata = createPageMetadata({
  title: "The Holy Mass | Heaven on Earth | Daily Oratory",
  description:
    "Understand the Catholic Mass, what Catholics believe is happening, and how practicing Catholics, returning Catholics, and curious visitors can participate reverently and learn at their own pace.",
  path: "/mass",
  keywords: [
    "Catholic Mass",
    "Holy Mass",
    "Heaven on Earth",
    "parts of the Mass",
    "altar",
    "tabernacle",
    "ambo",
    "Eucharist",
    "Real Presence",
    "transubstantiation",
    "Liturgy of the Word",
    "Liturgy of the Eucharist",
    "Communion Rite",
    "sacred vessels",
    "liturgical colors",
  ],
});

const anchorLinks = [
  { label: "Roadmap", href: "#mass-roadmap" },
  { label: "Word", href: "#liturgy-of-the-word" },
  { label: "Eucharist", href: "#liturgy-of-the-eucharist" },
  { label: "Real Presence", href: "#real-presence" },
  { label: "Sacred Spaces", href: "#sacred-spaces" },
  { label: "Beginners", href: "#mass-for-beginners" },
];

const trustedSources = [
  {
    title: "Catechism of the Catholic Church",
    description: "See the Eucharist section and sacramental teaching in the Vatican edition of the Catechism.",
    href: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
  },
  {
    title: "USCCB Mass resources",
    description: "Helpful Catholic resources related to the Mass, liturgy, and the Order of Mass.",
    href: "https://www.usccb.org/prayer-and-worship/the-mass",
  },
  {
    title: "USCCB Daily Readings",
    description: "Read the daily Mass readings and pray with the lectionary of the Church.",
    href: "https://bible.usccb.org/",
  },
  {
    title: "General Instruction of the Roman Missal",
    description: "A major reference for understanding how the Roman Rite is celebrated.",
    href: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html",
  },
];

export default function MassPage() {
  const sections = getMassSections();
  const videos = getFeaturedMassVideos();
  const faqs = getMassFaqs();
  const spaces = getSacredSpaces();
  const vesselsAndLinens = [
    ...getMassObjectsByType("vessel"),
    ...getMassObjectsByType("linen"),
  ];
  const vestments = getMassObjectsByType("vestment");

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Holy Mass",
              description:
                "Understand the Catholic Mass, what Catholics believe is happening, and how practicing Catholics, returning Catholics, and curious visitors can participate reverently and learn at their own pace.",
              path: "/mass",
            }),
            buildArticleStructuredData({
              headline: "The Holy Mass",
              description:
                "Understand the Catholic Mass, what Catholics believe is happening, and how practicing Catholics, returning Catholics, and curious visitors can participate reverently and learn at their own pace.",
              path: "/mass",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "The Holy Mass", path: "/mass" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Holy Mass" }]} />

        <div className="mt-8">
          <MassHero />
        </div>

        <div className="mt-8">
          <SectionJumpNav
            ariaLabel="Mass page navigation"
            mobileTitle="Open the Mass guide outline"
            items={anchorLinks}
          />
        </div>

        <div className="mt-14">
          <WhyMassMatters />
        </div>

        <div className="mt-14">
          <HeavenOnEarthSection />
        </div>

        <div className="mt-14">
          <MassVideoSection videos={videos} />
        </div>

        <div className="mt-14">
          <MassRoadmap sections={sections} />
        </div>

        <div className="mt-14">
          <BeforeMassGuide parts={getMassPartsBySection("before-mass")} />
        </div>

        <div className="mt-14">
          <IntroductoryRitesGuide parts={getMassPartsBySection("introductory-rites")} />
        </div>

        <div className="mt-14">
          <LiturgyOfTheWordGuide parts={getMassPartsBySection("liturgy-of-the-word")} />
        </div>

        <div className="mt-14">
          <LiturgyOfTheEucharistGuide parts={getMassPartsBySection("liturgy-of-the-eucharist")} />
        </div>

        <div className="mt-14">
          <RealPresenceSection />
        </div>

        <div className="mt-14">
          <CommunionRiteGuide parts={getMassPartsBySection("communion-rite")} />
        </div>

        <div className="mt-14">
          <ConcludingRitesGuide parts={getMassPartsBySection("concluding-rites")} />
        </div>

        <div className="mt-14">
          <AfterMassThanksgiving parts={getMassPartsBySection("after-mass")} />
        </div>

        <div className="mt-14">
          <SacredSpacesGuide spaces={spaces} />
        </div>

        <div className="mt-14">
          <AltarGuide />
        </div>

        <div className="mt-14">
          <TabernacleGuide />
        </div>

        <div className="mt-14">
          <AmboGuide />
        </div>

        <div className="mt-14">
          <SacredVesselsAndLinens objects={vesselsAndLinens} />
        </div>

        <div className="mt-14">
          <VestmentsGuide vestments={vestments} />
        </div>

        <div className="mt-14">
          <LiturgicalColorsAtMass />
        </div>

        <div className="mt-14">
          <ParticipateAtMassGuide />
        </div>

        <div className="mt-14">
          <MassFAQ faqs={faqs} />
        </div>

        <div className="mt-14">
          <MassForBeginners />
        </div>

        <div className="mt-14">
          <FamiliesAtMass />
        </div>

        <div className="mt-14">
          <MassAndDailyLife />
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start here</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Mass in the Catholic Life</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              See how the Mass, Confession, prayer, Scripture, grace, family faith, and the liturgical year fit together
              as one Catholic way of life.
            </p>
            <div className="mt-6">
              <Link href="/catholic-life" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Open the Catholic Life Roadmap
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Trusted sources</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
              Continue with official and trusted references
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
              Daily Oratory summarizes Catholic teaching and links to official sources. It does not
              reproduce long copyrighted Church texts.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {trustedSources.map((source) => (
                <article key={source.href} className="card p-6">
                  <h3 className="font-display text-3xl font-semibold text-navy">{source.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{source.description}</p>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline"
                  >
                    Open source
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14">
          <RelatedMassTools />
        </div>

        <div className="mt-14 space-y-5">
          <MassPastoralNote />
          <MassCopyrightNote />
        </div>

        <div className="mt-14 rounded-[1.5rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(251,247,238,0.97),rgba(245,236,219,0.94))] p-6">
          <h2 className="font-display text-4xl font-semibold text-navy">A final encouragement</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
            The Mass should become more understandable as you keep returning to it, but it should
            never become small. Learn its structure, notice its symbols, and ask questions
            patiently. If you are new to the Mass, you are welcome to attend and observe without
            pressure. Then let the mystery remain larger than you, because that is where worship
            becomes wonder.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/sacraments/eucharist" className="btn btn-primary focus-ring justify-center">
              Return to the Eucharist
            </Link>
            <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">
              Pray the readings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
