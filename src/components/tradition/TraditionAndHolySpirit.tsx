import { SectionHeader } from "@/components/section-header";
import { TraditionPrayerCard } from "@/components/tradition/TraditionPrayerCard";

export function TraditionAndHolySpirit() {
  return (
    <section>
      <SectionHeader
        eyebrow="The Holy Spirit"
        title="The Holy Spirit Guides the Church"
        summary="Catholics believe the Holy Spirit continues to guide the Church in preserving, teaching, and living the faith handed on from the apostles."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            Tradition is living because the Holy Spirit keeps leading the Church into deeper faithfulness to Christ. The
            Spirit does not replace the Gospel with something new, but keeps the Church rooted in what she has received while
            growing in understanding, clarity, and holiness.
          </p>
        </article>
        <TraditionPrayerCard />
      </div>
    </section>
  );
}
