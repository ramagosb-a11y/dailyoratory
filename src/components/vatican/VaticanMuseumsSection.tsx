import { SectionHeader } from "@/components/section-header";
import { getVaticanMuseumHighlights } from "@/lib/vatican";

export function VaticanMuseumsSection() {
  const highlights = getVaticanMuseumHighlights();

  return (
    <section>
      <SectionHeader
        eyebrow="Museums"
        title="Vatican Museums"
        summary="The Vatican Museums preserve centuries of sacred art, cultural treasures, manuscripts, sculpture, and works that help tell the story of faith, beauty, history, and human creativity."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <article key={item} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item}</h3>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        Art can become prayer when it leads the heart to contemplate truth, beauty, and God.
      </p>
    </section>
  );
}
