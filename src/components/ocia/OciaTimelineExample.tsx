import { SectionHeader } from "@/components/section-header";
import { getOciaTimelineExample } from "@/lib/ocia";

export function OciaTimelineExample() {
  const timeline = getOciaTimelineExample();

  return (
    <section>
      <SectionHeader
        eyebrow="Example only"
        title="What Might the Timeline Look Like?"
        summary="This is only a common example. Some parishes use year-round inquiry, some have different schedules, and individual situations vary."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {timeline.map(([season, description]) => (
          <div key={season} className="card-parchment p-5">
            <p className="text-sm font-semibold text-navy">{season}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
