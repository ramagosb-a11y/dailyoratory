import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyExternalReference } from "@/components/eschatology/EschatologyExternalReference";
import { EschatologyHero } from "@/components/eschatology/EschatologyHero";
import { EschatologyProphecySeriesCallout } from "@/components/eschatology/EschatologyProphecySeriesCallout";
import { EschatologyReflectionQuestions } from "@/components/eschatology/EschatologyReflectionQuestions";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { EschatologyScriptureSection } from "@/components/eschatology/EschatologyScriptureSection";
import { EschatologyWithoutFear } from "@/components/eschatology/EschatologyWithoutFear";
import { EternityPrayerCard } from "@/components/eschatology/EternityPrayerCard";
import { FourLastThingsCards } from "@/components/eschatology/FourLastThingsCards";
import { LivingInLightOfEternity } from "@/components/eschatology/LivingInLightOfEternity";
import { RelatedLastThingsCards } from "@/components/eschatology/RelatedLastThingsCards";
import { WhatIsEschatology } from "@/components/eschatology/WhatIsEschatology";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Eschatology | The Last Things | Daily Oratory",
  description:
    "A Catholic guide to the last things: death, judgment, Heaven, Hell, Purgatory, the resurrection of the body, the Second Coming of Christ, and eternal life.",
  path: "/formation/eschatology",
  keywords: [
    "Catholic eschatology",
    "last things",
    "death judgment heaven hell",
    "purgatory",
    "resurrection of the body",
    "second coming",
    "final judgment",
    "particular judgment",
    "eternal life",
    "Catholic formation",
  ],
});

export default function EschatologyPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Eschatology",
              description:
                "A Catholic guide to the Last Things: death, judgment, Heaven, Hell, Purgatory, the resurrection of the body, the Second Coming of Christ, and eternal life.",
              path: "/formation/eschatology",
            }),
            buildArticleStructuredData({
              headline: "Catholic Eschatology",
              description:
                "A Catholic guide to the Last Things: death, judgment, Heaven, Hell, Purgatory, the resurrection of the body, the Second Coming of Christ, and eternal life.",
              path: "/formation/eschatology",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Formation", path: "/formation" },
              { name: "Catholic Eschatology", path: "/formation/eschatology" },
            ]),
          ]}
        />
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Eschatology" },
          ]}
        />

        <div className="mt-8 grid gap-10">
          <EschatologyHero />
          <WhatIsEschatology />
          <FourLastThingsCards />
          <RelatedLastThingsCards />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related end-of-life formation</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catholic Burial and Funeral Rites</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Learn how Catholic burial, cremation, funeral rites, prayers for the dead, and reverent interment express hope in the resurrection and trust in Christ.
            </p>
            <div className="mt-6">
              <Link href="/formation/catholic-burial" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Catholic Burial
              </Link>
            </div>
          </section>
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Priority guides</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Keep Christian hope connected</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Let the Church&apos;s teaching on death and eternal life stay connected to prayer, practical help, and a simple Catholic path.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Catholic Life Roadmap", href: "/catholic-life" },
                { label: "Catholic Q&A", href: "/catholic-answers" },
                { label: "Sacramental Emergency", href: "/sacramental-emergency" },
                { label: "Prayer Library", href: "/prayers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
          <EschatologyWithoutFear />
          <LivingInLightOfEternity />
          <EschatologyScriptureSection />
          <EternityPrayerCard />
          <EschatologyReflectionQuestions />
          <EschatologyProphecySeriesCallout />
          <EschatologyExternalReference />
          <EschatologyRelatedLinks />
        </div>
      </main>
    </div>
  );
}
