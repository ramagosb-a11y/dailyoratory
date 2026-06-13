import { SectionHeader } from "@/components/section-header";
import { getHowDailyOratoryHelpsOcia } from "@/lib/ocia";

export function HowDailyOratoryHelpsOcia() {
  const items = getHowDailyOratoryHelpsOcia();

  return (
    <section>
      <SectionHeader
        eyebrow="Support"
        title="How Daily Oratory Can Help"
        summary="Daily Oratory can help you learn, pray, and prepare thoughtful questions while you stay connected to a real parish."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <div key={item} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
