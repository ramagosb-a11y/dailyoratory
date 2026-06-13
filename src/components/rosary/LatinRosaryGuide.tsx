import { getLatinRosarySteps } from "@/lib/rosary";
import { RosaryPrayersPanel } from "./RosaryPrayersPanel";

export function LatinRosaryGuide() {
  return (
    <div className="grid gap-10">
      <section className="content-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase text-burgundy">Latin Rosary Guide</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
          Pray familiar Rosary prayers in the language of the Roman Church.
        </h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Begin slowly. It is better to pray one prayer reverently than to rush unfamiliar words. Use the English cue
          to keep your attention on the mystery of Christ.
        </p>
      </section>

      <section className="grid gap-4">
        {getLatinRosarySteps().map((step) => (
          <article key={step.id} className="prayer-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">English guide</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{step.englishCue}</h2>
            <p className="mt-1 text-sm font-semibold text-muted">{step.title}</p>
            <p className="mt-4 text-xs font-bold uppercase text-burgundy">Latin text</p>
            <p className="prayer-text mt-3">{step.latin}</p>
            <p className="mt-4 text-xs font-bold uppercase text-burgundy">Pronunciation help</p>
            <p className="mt-4 rounded-md border border-stone bg-parchment p-3 text-sm leading-7 text-muted">
              {step.pronunciationHelp}
            </p>
          </article>
        ))}
      </section>

      <RosaryPrayersPanel />
    </div>
  );
}
