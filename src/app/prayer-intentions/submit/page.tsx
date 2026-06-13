import type { Metadata } from "next";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { PrayerIntentionSubmitForm } from "@/components/prayer-intentions/PrayerIntentionSubmitForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Submit a Prayer Intention",
  description: "Submit a prayer intention for moderation with privacy warnings and reverent Catholic guidance.",
  path: "/prayer-intentions/submit",
});

export default function PrayerIntentionSubmitPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <PrayerIntentionSubmitForm />
      </section>
    </div>
  );
}
