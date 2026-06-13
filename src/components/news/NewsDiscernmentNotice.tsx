import { SectionHeader } from "@/components/section-header";

const discernmentPoints = [
  {
    title: "Verify important claims with official sources",
    description:
      "When something matters deeply, start with the Vatican, your bishops' conference, diocese, or parish.",
  },
  {
    title: "Distinguish news from commentary",
    description:
      "Reporting, analysis, and opinion all have their place, but they should not be treated as the same thing.",
  },
  {
    title: "Avoid outrage-driven reading",
    description:
      "Headlines can stir fear or anger quickly. Read slowly enough to keep your heart peaceful and honest.",
  },
  {
    title: "Pray before reacting",
    description:
      "A short prayer can create the space needed for prudence, charity, and right judgment.",
  },
  {
    title: "Remember the Church is larger than headlines",
    description:
      "The Church's daily hidden holiness, prayer, and sacramental life rarely make the news, but they remain real and central.",
  },
  {
    title: "Bring concerns to prayer and mercy",
    description:
      "Let troubling news become intercession, fasting, works of mercy, and renewed fidelity rather than gossip or despair.",
  },
];

export function NewsDiscernmentNotice() {
  return (
    <section>
      <SectionHeader
        eyebrow="Prayerful discernment"
        title="Read the News with Prayerful Discernment"
        summary="Catholic news can inform the mind and move the heart to prayer, but it should not become a source of fear, anger, or division. Begin with official sources when possible, distinguish reporting from opinion, and ask the Holy Spirit for wisdom, charity, and peace."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {discernmentPoints.map((point) => (
          <article key={point.title} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{point.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
