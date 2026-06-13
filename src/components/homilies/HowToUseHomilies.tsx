import { SectionHeader } from "@/components/section-header";

const steps = [
  ["Begin with prayer", "Ask the Holy Spirit to open your heart."],
  ["Listen for one word or phrase", "Do not try to remember everything. Notice what stirs your conscience or hope."],
  ["Connect it to Scripture", "Look up the Mass readings or Gospel if available."],
  ["Ask what Jesus is inviting", "Ask what Christ is asking you to believe, surrender, or practice."],
  ["Choose one action", "Let the homily become charity, repentance, prayer, or service."],
  ["Return to the Mass", "Let homilies deepen your love for the Eucharist and parish worship."],
] as const;

export function HowToUseHomilies() {
  return (
    <section id="how-to-use-homilies" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Prayer and Formation"
        title="How to Use Homilies for Prayer and Formation"
        summary="A homily is not just information. It is meant to help the Word of God take root, lead the heart to conversion, and draw listeners deeper into Christ."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {steps.map(([title, copy], index) => (
          <article key={title} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
