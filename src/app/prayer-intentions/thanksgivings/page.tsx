import type { Metadata } from "next";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { PrayerIntentionWallView } from "@/components/prayer-intentions/PrayerIntentionWallView";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getThanksgivingIntentions } from "@/lib/prayerIntentions";

export const metadata: Metadata = createPageMetadata({
  title: "Thanksgiving Intentions",
  description: "Approved thanksgiving intentions from the Daily Oratory prayer wall.",
  path: "/prayer-intentions/thanksgivings",
});

export default function ThanksgivingIntentionsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <SectionHeader
          eyebrow="Thanksgivings"
          title="Give thanks for answered prayer and daily providence."
          summary="Hold gratitude before the Lord with the same reverence as petition."
        />
        <div className="mt-8">
          <PrayerIntentionWallView
            intentions={getThanksgivingIntentions()}
            emptyTitle="No approved thanksgivings are posted."
            emptyDescription="Thanksgivings appear here after moderation."
          />
        </div>
      </section>
    </div>
  );
}
