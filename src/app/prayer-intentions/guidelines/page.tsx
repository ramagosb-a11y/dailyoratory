import type { Metadata } from "next";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { PrayerIntentionWorkflowView } from "@/components/prayer-intentions/PrayerIntentionWorkflowView";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Prayer Intention Guidelines",
  description: "Privacy, emergency, moderation, Google Sheets, and Supabase planning notes for Prayer Intentions.",
  path: "/prayer-intentions/guidelines",
});

export default function PrayerIntentionGuidelinesPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <PrayerIntentionWorkflowView />
      </section>
    </div>
  );
}
