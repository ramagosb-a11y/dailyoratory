import { SectionHeader } from "@/components/section-header";
import { prophecySeriesDiscernmentNote } from "@/data/prophecySeries";

export function ProphecyDiscernmentNote() {
  return (
    <section className="mt-14">
      <SectionHeader eyebrow="Discernment" title="A Note on Prophecy and Discernment" />
      <div className="card-parchment mt-7 p-6 sm:p-7">
        <p className="daily-readable text-navy">{prophecySeriesDiscernmentNote}</p>
      </div>
    </section>
  );
}
