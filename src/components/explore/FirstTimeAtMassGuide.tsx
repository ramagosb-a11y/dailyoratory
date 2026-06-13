import { SectionHeader } from "@/components/section-header";

const sections = [
  {
    title: "You are welcome",
    body: "If you are exploring, you are welcome to attend Mass and pray respectfully even if much feels unfamiliar.",
  },
  {
    title: "What happens at Mass",
    body: "Catholics gather to hear Scripture, offer prayer, and celebrate the Eucharist. Much of the Mass follows a steady pattern from week to week.",
  },
  {
    title: "When people stand, sit, and kneel",
    body: "You can simply follow the congregation as you are comfortable. If you are unsure, it is fine to remain seated quietly.",
  },
  {
    title: "What to do during Communion",
    body: "If you are not Catholic, or if you are Catholic but not prepared to receive, remain in the pew and pray quietly during Communion.",
  },
  {
    title: "What to wear",
    body: "Dress respectfully and simply. You do not need to be elaborate to be welcome.",
  },
  {
    title: "Bringing children",
    body: "Children are welcome at Mass. Parents do not need perfection to begin teaching reverence.",
  },
  {
    title: "What to do after Mass",
    body: "If you feel comfortable, ask a Catholic friend, parish staff member, or priest one question that came up for you.",
  },
  {
    title: "Common questions",
    body: "It is normal not to understand everything right away. Catholics themselves grow into the Mass over time.",
  },
];

const prayer = `Lord Jesus,
as I come to Mass,
give me reverence, peace, and openness.

Help me listen well,
pray honestly,
and receive whatever You want to show me.

Amen.`;

export function FirstTimeAtMassGuide() {
  return (
    <div className="space-y-14">
      <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
        <div className="max-w-3xl">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Mass guide</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">First Time at Mass</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            A gentle guide for visitors attending Catholic Mass for the first time, including what to expect, what to do
            during Communion, and how to participate respectfully.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="card-parchment p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <section>
        <SectionHeader eyebrow="Prayer" title="Prayer Before Attending Mass" />
        <div className="card-parchment mt-7 p-6 sm:p-8">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-8 text-muted">{prayer}</pre>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <a href="/mass" className="btn liturgical-button focus-ring justify-center">The Holy Mass</a>
        <a href="/ocia" className="btn btn-secondary focus-ring justify-center">OCIA</a>
      </section>
    </div>
  );
}
