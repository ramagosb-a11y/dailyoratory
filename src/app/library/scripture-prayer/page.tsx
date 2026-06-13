import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FamilyScripturePrayer } from "@/components/scripture-prayer/FamilyScripturePrayer";
import { HowToPrayWithScripture } from "@/components/scripture-prayer/HowToPrayWithScripture";
import { LectioDivinaGuide } from "@/components/scripture-prayer/LectioDivinaGuide";
import { RelatedScriptureTools } from "@/components/scripture-prayer/RelatedScriptureTools";
import { ScriptureAndMass } from "@/components/scripture-prayer/ScriptureAndMass";
import { ScriptureAndTradition } from "@/components/scripture-prayer/ScriptureAndTradition";
import { ScriptureCopyrightNote } from "@/components/scripture-prayer/ScriptureCopyrightNote";
import { ScriptureIndulgenceGuide } from "@/components/scripture-prayer/ScriptureIndulgenceGuide";
import { ScriptureMistakesToAvoid } from "@/components/scripture-prayer/ScriptureMistakesToAvoid";
import { ScripturePrayerCard } from "@/components/scripture-prayer/ScripturePrayerCard";
import { ScripturePrayerFAQ } from "@/components/scripture-prayer/ScripturePrayerFAQ";
import { ScripturePrayerHero } from "@/components/scripture-prayer/ScripturePrayerHero";
import { ScriptureReadingPaths } from "@/components/scripture-prayer/ScriptureReadingPaths";
import { ScriptureResources } from "@/components/scripture-prayer/ScriptureResources";
import { ScriptureThemeCards } from "@/components/scripture-prayer/ScriptureThemeCards";
import { ThirtyMinuteScriptureBuilder } from "@/components/scripture-prayer/ThirtyMinuteScriptureBuilder";
import { WhatIsWordOfGod } from "@/components/scripture-prayer/WhatIsWordOfGod";
import { WhyPrayWithScripture } from "@/components/scripture-prayer/WhyPrayWithScripture";
import { createPageMetadata } from "@/lib/metadata";
import { getScripturePrayerFaqs, getScriptureReadingPaths, getScriptureResources, getScriptureThemes } from "@/lib/scripturePrayer";

export const metadata: Metadata = createPageMetadata({
  title: "Scripture Prayer | Pray with the Word of God",
  description:
    "Learn how Catholics pray with Scripture, read the USCCB Bible, practice Lectio Divina, and follow the Mass readings, with guidance for returning Catholics and anyone exploring Catholic prayer.",
  path: "/library/scripture-prayer",
  keywords: [
    "Scripture prayer",
    "Word of God",
    "Catholic Bible",
    "USCCB Bible",
    "Daily Mass readings",
    "Lectio Divina",
    "Bible reading indulgence",
    "30 minute Scripture indulgence",
    "Catholic Scripture reading",
  ],
});

const prayerBeforeReading = `Come, Holy Spirit,
open my mind and heart to the Word of God.

Help me read with reverence,
listen with humility,
receive with faith,
and live with courage.

Lord Jesus,
speak to me through the Scriptures
and make Your Word fruitful in my life.

Amen.`;

const prayerAfterReading = `Lord Jesus,
thank You for speaking through Your holy Word.

Let what I have read take root in my heart.
Heal what is wounded,
strengthen what is weak,
correct what is false,
and lead me in the way of holiness.

May Your Word bear fruit in love,
mercy, obedience, and peace.

Amen.`;

const indulgencePrayer = `Heavenly Father,
I desire to read Your holy Word
with reverence, faith, and love.

Through this time of Scripture prayer,
draw me closer to Christ,
detach my heart from sin,
and make Your Word fruitful in my life.

I unite this prayer
with sacramental confession,
Holy Communion,
prayers for the intentions of the Holy Father,
and the indulgenced work,
according to the teaching of Your Church.

If it is Your holy will,
apply any indulgence I may gain
to my soul or to a soul in purgatory.

Amen.`;

export default function ScripturePrayerPage() {
  const resources = getScriptureResources();
  const paths = getScriptureReadingPaths();
  const themes = getScriptureThemes();
  const faqs = getScripturePrayerFaqs();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Library", href: "/library" },
            { label: "Scripture Prayer" },
          ]}
        />

        <div className="mt-8">
          <ScripturePrayerHero />
        </div>

        <div className="mt-14">
          <WhatIsWordOfGod />
        </div>

        <div className="mt-14">
          <WhyPrayWithScripture />
        </div>

        <div className="mt-14">
          <ScriptureAndMass />
        </div>

        <div className="mt-14">
          <HowToPrayWithScripture />
        </div>

        <div className="mt-14">
          <LectioDivinaGuide />
        </div>

        <div className="mt-14">
          <ScriptureIndulgenceGuide />
        </div>

        <div className="mt-14">
          <ThirtyMinuteScriptureBuilder />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <ScripturePrayerCard title="Prayer Before Reading Scripture" prayer={prayerBeforeReading} />
          <ScripturePrayerCard title="Prayer After Reading Scripture" prayer={prayerAfterReading} />
          <ScripturePrayerCard
            title="Prayer Before a 30-Minute Scripture Reading"
            prayer={indulgencePrayer}
            note="This prayer expresses intention and devotion. It does not replace the usual conditions for a plenary indulgence."
          />
        </div>

        <div className="mt-14">
          <ScriptureResources resources={resources} />
        </div>

        <div className="mt-14">
          <ScriptureReadingPaths paths={paths} />
        </div>

        <div className="mt-14">
          <ScriptureThemeCards themes={themes} />
        </div>

        <div className="mt-14">
          <ScriptureAndTradition />
        </div>

        <div className="mt-14">
          <ScriptureMistakesToAvoid />
        </div>

        <div className="mt-14">
          <ScripturePrayerFAQ faqs={faqs} />
        </div>

        <div className="mt-14">
          <FamilyScripturePrayer />
        </div>

        <div className="mt-14">
          <RelatedScriptureTools />
        </div>

        <div className="mt-14">
          <ScriptureCopyrightNote />
        </div>
      </main>
    </div>
  );
}
