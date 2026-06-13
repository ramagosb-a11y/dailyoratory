import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const steps = [
  "Start with Nicaea I to understand Jesus as truly God.",
  "Read about Ephesus to understand why Mary is called Mother of God.",
  "Learn Chalcedon to understand Jesus as true God and true man.",
  "Explore Trent to understand sacraments and Catholic identity.",
  "Explore Vatican II to understand the Church, Scripture, liturgy, and mission today.",
];

export function CouncilsForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="For seekers"
        title="If You Are Exploring the Catholic Faith"
        summary="Councils can seem complicated, but they help answer basic questions: Who is Jesus? What is the Church? Why does the Mass matter? How does the Church preserve the faith?"
      />
      <div className="mt-7 grid gap-4">
        {steps.map((step, index) => (
          <div key={step} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/ocia" className="btn btn-secondary focus-ring justify-center">OCIA</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Tradition</Link>
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Mass</Link>
      </div>
    </section>
  );
}
