import Link from "next/link";
import type { MassSection } from "@/types/mass";

const anchorMap: Record<string, string> = {
  "before-mass": "#before-mass",
  "introductory-rites": "#introductory-rites",
  "liturgy-of-the-word": "#liturgy-of-the-word",
  "liturgy-of-the-eucharist": "#liturgy-of-the-eucharist",
  "communion-rite": "#communion-rite",
  "concluding-rites": "#concluding-rites",
  "after-mass": "#after-mass",
};

const summaryMap: Record<string, string> = {
  "before-mass": "Preparation, silence, intention, and readiness for worship.",
  "introductory-rites": "The Church gathers as one body and turns toward worship.",
  "liturgy-of-the-word": "God speaks through Scripture and the Church responds in faith.",
  "liturgy-of-the-eucharist": "Christ's sacrifice is sacramentally made present on the altar.",
  "communion-rite": "The faithful prepare to receive the Eucharist and give thanks.",
  "concluding-rites": "The Church is blessed and sent into the world on mission.",
  "after-mass": "Thanksgiving and daily mission flow from what has been received.",
};

const actionMap: Record<string, string> = {
  "before-mass": "Arrive early, quiet distractions, offer intentions.",
  "introductory-rites": "Stand, respond, and enter the liturgy with humility.",
  "liturgy-of-the-word": "Listen for one phrase, one truth, and one action.",
  "liturgy-of-the-eucharist": "Offer your life with the gifts and adore in faith.",
  "communion-rite": "Receive reverently and make thanksgiving.",
  "concluding-rites": "Receive the blessing as a real sending.",
  "after-mass": "Carry the grace of the Eucharist into work, home, and mercy.",
};

export function MassRoadmap({ sections }: { sections: MassSection[] }) {
  return (
    <section id="mass-roadmap" className="scroll-mt-28">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Walk through the Mass</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        A simple roadmap from preparation to mission
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section, index) => (
          <article key={section.id} className="card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
              {index + 1}. {section.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{summaryMap[section.slug] ?? section.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Key action:</span> {actionMap[section.slug]}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Spiritual meaning:</span> {section.description}
            </p>
            <Link href={anchorMap[section.slug] ?? "#"} className="btn btn-secondary focus-ring mt-5 justify-center">
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
