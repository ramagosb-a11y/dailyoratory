import Link from "next/link";
import { fastingFaqs } from "@/data/lent";
import { TrackedLentPrayerCard } from "@/components/lent/TrackedLentPrayerCard";

const prayer = `Lord Jesus, receive this fast as an act of love and repentance. Keep me humble, healthy, and free from pride. Let this sacrifice open my heart to You and to those in need. Amen.`;

export function FastingGuideContent() {
  const alternatives = [
    "Fast from gossip.",
    "Fast from unnecessary media.",
    "Fast from complaining.",
    "Fast from luxury spending.",
    "Fast from resentment.",
    "Fast from procrastination.",
    "Give extra alms.",
    "Pray extra.",
    "Serve someone.",
  ];

  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is fasting?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Fasting is a form of self-denial that reduces food or another lawful comfort for the sake of repentance, humility, freedom, and deeper desire for God. It is not dieting, punishment, or self-harm.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is abstinence?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Abstinence usually means refraining from meat according to Church discipline. It is one concrete way the faithful share in a common penitential practice.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Why Catholics fast</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Fasting trains the heart to repent, resist sin, detach from lesser goods, and hunger more deeply for God. It becomes fruitful when joined to prayer, charity, and humility.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Common days of fasting and abstinence</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            In many places, Ash Wednesday and Good Friday are days of fasting and abstinence, and Fridays of Lent are days of abstinence from meat. Always verify your local bishops&apos; conference or diocese.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Who may be exempt</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Children, older adults, pregnant or nursing women, those with medical needs, those with eating disorders or a history of disordered eating, and those whose work or health makes fasting unsafe may be exempt or need a different approach. Anyone uncertain should ask a priest or medical professional as appropriate.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Healthy fasting and pastoral caution</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Fasting should never become self-harm, spiritual pride, or a hidden way of mistreating the body. The point is conversion, not damage. If food fasting is unsafe, choose another real but prudent form of penance.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Fasting from food and fasting from sin</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Food fasting is meaningful, but Lent also asks for fasting from habits that damage charity: harsh speech, gossip, resentment, pride, and compulsive distraction.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">What to do if you cannot fast from food</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {alternatives.map((alternative) => (
              <li key={alternative}>{alternative}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Friday penance</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Fridays remain a fitting day for penance because they keep the Passion of Christ before the heart. During Lent especially, Friday should become a day of simplicity, prayer, restraint, and remembrance of the Cross.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Fasting FAQ</h2>
        <div className="mt-6 grid gap-4">
          {fastingFaqs.map((faq) => (
            <article key={faq.id} className="rounded-2xl border border-stone bg-ivory/80 p-5">
              <h3 className="font-display text-2xl font-semibold text-navy">{faq.question}</h3>
              <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <TrackedLentPrayerCard title="Prayer Before Fasting" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/liturgical-living/lent" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Back to Lent
          </Link>
          <Link href="/indulgences/detachment-from-sin" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Detachment from Sin
          </Link>
          <Link href="/sin-and-temptation/resisting-temptation" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Resisting Temptation
          </Link>
        </div>
      </section>
    </div>
  );
}

