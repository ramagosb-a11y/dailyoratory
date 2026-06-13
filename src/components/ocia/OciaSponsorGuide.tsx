import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const discussionQuestions = [
  "What first drew you to the Catholic faith?",
  "What questions still feel important?",
  "How can I pray for you this week?",
  "What has been your experience of Mass or parish life so far?",
  "What would help you feel supported without pressure?",
];

export function OciaSponsorGuide() {
  return (
    <section>
      <SectionHeader
        eyebrow="Sponsors and godparents"
        title="Sponsors and Godparents"
        summary="A sponsor or godparent accompanies someone with prayer, example, encouragement, and faithful witness. Your parish will explain requirements and responsibilities."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">What a sponsor does</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>Prays for the person entering or returning to the Church.</li>
            <li>Offers faithful Catholic example and encouragement.</li>
            <li>Walks with patience, honesty, and charity.</li>
            <li>Supports participation in parish life and sacramental preparation.</li>
          </ul>
          <h3 className="font-display mt-6 text-3xl font-semibold text-navy">How to choose a sponsor</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Choose someone who practices the faith, knows you well enough to accompany you, and can
            witness with steadiness rather than pressure.
          </p>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Questions to discuss</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {discussionQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-muted">
            Prayer: Lord, bless the candidate or catechumen and the sponsor who walks beside them.
            Give them patience, courage, honesty, and joy in the Holy Spirit. Amen.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/sacraments/sponsor-godparent" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
              Sponsor and Godparent Guide
            </Link>
            <Link href="/saints/finder" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
              Saint Companion Finder
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
