import { SectionHeader } from "@/components/section-header";
import { familyPrayerStarterRhythms } from "@/data/familyPage";

export function FamilyPrayerStarter() {
  return (
    <section id="family-prayer" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Prayer"
        title="How to Start Family Prayer"
        summary="Family prayer does not need to be long or perfect. Begin with a short, peaceful rhythm that can actually be repeated."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {familyPrayerStarterRhythms.map((rhythm) => (
          <article key={rhythm.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{rhythm.title}</h3>
            <ul className="mt-4 grid gap-2">
              {rhythm.steps.map((step) => (
                <li key={step} className="rounded-md border border-stone bg-ivory px-3 py-2 text-sm leading-7 text-muted">
                  {step}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
