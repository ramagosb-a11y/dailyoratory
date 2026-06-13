import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActualGraceDailyLife } from "@/components/grace/ActualGraceDailyLife";
import { CooperatingWithGraceSteps } from "@/components/grace/CooperatingWithGraceSteps";
import { FormsOfGraceCards } from "@/components/grace/FormsOfGraceCards";
import { GraceAndSacraments } from "@/components/grace/GraceAndSacraments";
import { GraceAndSin } from "@/components/grace/GraceAndSin";
import { GraceCatechismReferences } from "@/components/grace/GraceCatechismReferences";
import { GraceExternalReference } from "@/components/grace/GraceExternalReference";
import { GraceHero } from "@/components/grace/GraceHero";
import { GracePathway } from "@/components/grace/GracePathway";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceReflectionTool } from "@/components/grace/GraceReflectionTool";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceScriptureSection } from "@/components/grace/GraceScriptureSection";
import { WhatIsGrace } from "@/components/grace/WhatIsGrace";
import {
  graceCatechismReferences,
  graceForms,
  graceRelatedLinks,
  graceScriptureReferences,
  sacramentalGraceCards,
} from "@/data/grace";
import { createPageMetadata } from "@/lib/metadata";

const prayerForGrace = `Come, Holy Spirit,
fill my heart with the grace of God.

Where I am weak, strengthen me.
Where I am wounded, heal me.
Where I am confused, enlighten me.
Where I am tempted, help me choose the good.
Where I am proud, make me humble.
Where I am afraid, teach me to trust.

Lord Jesus,
increase sanctifying grace within my soul.
Help me recognize actual graces in daily life.
Teach me to receive the sacraments with reverence,
to cooperate with Your will,
and to become holy by Your mercy.

Father,
let Your grace bear fruit in me:
faith, hope, charity, humility, purity, patience, courage, and peace.

Mary, Mother of Grace,
pray for me.

Amen.`;

export const metadata: Metadata = createPageMetadata({
  title: "Grace | Catholic Formation | Daily Oratory",
  description:
    "A Catholic guide to grace, including sanctifying grace, actual grace, sacramental grace, charisms, cooperation with grace, prayer, sacraments, and growth in holiness.",
  path: "/formation/grace",
  keywords: [
    "Catholic grace",
    "sanctifying grace",
    "actual grace",
    "sacramental grace",
    "charisms",
    "grace and sacraments",
    "Catholic formation",
    "Holy Spirit",
    "cooperation with grace",
    "grace and holiness",
  ],
});

export default function GracePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Grace" },
          ]}
        />

        <div className="mt-8 grid gap-8">
          <GraceHero />
          <WhatIsGrace />
          <FormsOfGraceCards forms={graceForms} />
          <GraceAndSacraments cards={sacramentalGraceCards} />
          <GraceAndSin />
          <ActualGraceDailyLife />
          <CooperatingWithGraceSteps />
          <GracePathway />
          <GraceReflectionTool />
          <GracePrayerCard title="Prayer for Grace" prayer={prayerForGrace} anchorId="prayer-for-grace" />
          <GraceScriptureSection references={graceScriptureReferences} />
          <GraceCatechismReferences references={graceCatechismReferences} />
          <GraceExternalReference />
          <GraceRelatedLinks links={graceRelatedLinks} />
        </div>
      </main>
    </div>
  );
}
