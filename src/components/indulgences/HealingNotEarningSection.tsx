import { BulletCardList, IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

const points = [
  "God's mercy is the source.",
  "Confession is still necessary for forgiveness of mortal sin.",
  "Indulgences are connected to repentance, prayer, charity, and communion with the Church.",
  "The practice should lead to deeper love, not anxiety.",
];

export function HealingNotEarningSection() {
  return (
    <IndulgenceSection
      id="healing-not-earning"
      eyebrow="Pastoral clarity"
      title="Indulgences Are About Healing, Not Earning"
      summary="This part of Catholic life is meant to deepen trust in Christ, not create fear or spiritual bookkeeping."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <article className="content-card p-6 sm:p-8">
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              Indulgences are not about earning God&apos;s love or buying forgiveness. They are a gift
              of Christ&apos;s mercy, given through the Church, to help heal the effects of sin and draw
              the soul deeper into conversion.
            </p>
            <p>
              Confession forgives the guilt of sin through sacramental absolution. Indulgences concern
              the temporal effects of sin and help the faithful grow in purification, charity, and
              holiness.
            </p>
          </div>
        </article>
        <div className="grid gap-5">
          <BulletCardList items={points} />
          <NotePanel title="A gentle guardrail">
            If this devotion is making you more anxious than prayerful, slow down, return to simple trust,
            and speak with a priest when needed.
          </NotePanel>
        </div>
      </div>
    </IndulgenceSection>
  );
}
