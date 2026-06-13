"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { getAngelPrayers, formatAngelPrayerForCopy } from "@/lib/angels";
import { trackEvent } from "@/lib/analytics";

export function GuardianAngelsSection() {
  const prayer = getAngelPrayers().find((item) => item.slug === "guardian-angel-prayer");

  async function copyPrayer() {
    if (!prayer) return;
    await navigator.clipboard.writeText(formatAngelPrayerForCopy(prayer));
    trackEvent("angels_prayer_copy", { prayer_slug: prayer.slug, page_path: "/angels" });
  }

  return (
    <section id="guardian-angels" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Guardian angels"
        title="Guardian Angels"
        summary="Catholics believe God entrusts each person to the care of angels. Guardian angels remind us that God's providence is personal and loving."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card-parchment p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            Guardian angels are signs of God's care. They help guard, guide, and assist us according
            to God's will.
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted">
            <li>Guardian angels are signs of God's care.</li>
            <li>They do not replace God.</li>
            <li>They do not remove human freedom.</li>
            <li>They help us toward holiness.</li>
            <li>They can be asked for protection and guidance.</li>
            <li>We should thank God for their care.</li>
          </ul>
        </div>
        {prayer ? (
          <PrayerCard
            eyebrow="Traditional prayer"
            title={prayer.title}
            prayer={prayer.body}
            note="Copyright note: This is a traditional Catholic prayer."
            onCopy={copyPrayer}
          />
        ) : null}
      </div>
    </section>
  );
}
