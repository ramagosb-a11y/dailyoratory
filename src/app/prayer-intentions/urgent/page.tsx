import type { Metadata } from "next";
import { PrayerIntentionEmergencyNotice } from "@/components/prayer-intentions/PrayerIntentionNotices";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { PrayerIntentionWallView } from "@/components/prayer-intentions/PrayerIntentionWallView";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getUrgentPrayerIntentions } from "@/lib/prayerIntentions";

export const metadata: Metadata = createPageMetadata({
  title: "Urgent Prayer Intentions",
  description: "Approved urgent prayer intentions with an emergency disclaimer and local prayer recording.",
  path: "/prayer-intentions/urgent",
});

export default function UrgentPrayerIntentionsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <SectionHeader
          eyebrow="Urgent intentions"
          title="Pray with tenderness for urgent needs."
          summary="Urgent requests still require moderation. Prayer support does not replace emergency services or appropriate care."
        />
        <div className="mt-7">
          <PrayerIntentionEmergencyNotice />
        </div>
        <div className="mt-8">
          <PrayerIntentionWallView
            intentions={getUrgentPrayerIntentions()}
            emptyTitle="No approved urgent intentions are posted."
            emptyDescription="Urgent submissions should be reviewed by a moderator before appearing publicly."
          />
        </div>
      </section>
    </div>
  );
}
