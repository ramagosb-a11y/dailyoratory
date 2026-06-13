import Link from "next/link";
import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

export function LiturgyOfTheWordGuide({ parts }: { parts: MassPart[] }) {
  const extra = (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <article className="card-parchment p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">How to listen</h3>
        <ul className="mt-4 space-y-3">
          {[
            "Listen for one word or phrase.",
            "Ask what God reveals about Himself.",
            "Notice how the readings connect.",
            "Carry one action into the week.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="card p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">Pray with the readings</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">Scripture Prayer</Link>
          <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">Mass Readings Reflections</Link>
          <a
            href="https://bible.usccb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring justify-center"
          >
            USCCB Daily Readings
          </a>
        </div>
      </article>
    </div>
  );

  return (
    <MassPartSection
      id="liturgy-of-the-word"
      eyebrow="Liturgy of the Word"
      title="Christ speaks in the Scriptures"
      description="God speaks to His people through Sacred Scripture. The readings are not merely information; they are proclamation. Christ is present in His Word."
      parts={parts}
      extra={extra}
    />
  );
}
