import { SectionHeader } from "@/components/section-header";

const overviewPoints = [
  "The Church year is not just a calendar.",
  "It is a school of prayer.",
  "It teaches us to live with Christ.",
  "Each season has its own color, tone, Scripture emphasis, and spiritual invitation.",
  "The seasons help Catholics prepare, celebrate, repent, rejoice, and persevere.",
];

export function LiturgicalYearOverview() {
  return (
    <section id="what-is-the-liturgical-year" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Overview"
        title="What Is the Liturgical Year?"
        summary="The liturgical year is the Church's annual rhythm of worship, remembrance, and participation in the mysteries of Christ."
      />
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="dashboard-card p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            Through Advent, Christmas, Ordinary Time, Lent, Holy Week, the Triduum, Easter, and
            Ordinary Time again, the Church forms us in expectation, incarnation, conversion,
            passion, resurrection, mission, and daily discipleship.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            The liturgical year does more than help us remember. It teaches us how to live the
            mysteries of Christ in time, so that our prayer, family life, sacrifices, joys, and
            hopes become more deeply joined to His.
          </p>
        </article>
        <aside className="dashboard-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Why it matters</p>
          <ul className="mt-4 grid gap-3">
            {overviewPoints.map((point) => (
              <li key={point} className="card-parchment px-4 py-3 text-sm leading-7 text-muted">
                {point}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
