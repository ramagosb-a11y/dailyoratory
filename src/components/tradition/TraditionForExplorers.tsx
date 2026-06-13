import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const steps = [
  "Attend Mass and notice how much Scripture is used.",
  "Read about the Eucharist.",
  "Learn what Catholics mean by Sacred Tradition.",
  "Explore the Church Fathers.",
  "Read the Catechism slowly.",
  "Ask questions at a parish or OCIA program.",
] as const;

export function TraditionForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="For explorers"
        title="If You Are Exploring the Catholic Faith"
        summary="If you are new to Catholicism, Tradition can feel confusing at first. Begin with the basics: Jesus Christ, the apostles, Scripture, the Mass, the sacraments, and the early Church."
      />
      <div className="card-parchment mt-7 p-6">
        <ol className="space-y-3 text-sm leading-7 text-muted">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="mr-2 font-semibold text-navy">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/ocia" className="btn btn-secondary focus-ring">
            OCIA
          </Link>
          <Link href="/mass" className="btn btn-secondary focus-ring">
            The Holy Mass
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring">
            Catechism
          </Link>
          <Link href="/church-fathers" className="btn btn-secondary focus-ring">
            Church Fathers
          </Link>
        </div>
      </div>
    </section>
  );
}
