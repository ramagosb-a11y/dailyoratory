import { SectionHeader } from "@/components/section-header";

const points = [
  "It is a journey, not just a class.",
  "It includes prayer, learning, questions, parish life, and discernment.",
  "It is usually guided by a parish team.",
  "It may include rites celebrated with the parish community.",
  "It leads some people to Baptism, Confirmation, and Eucharist.",
  "For others, it may lead to reception into full communion or completion of initiation.",
  "The timeline varies.",
];

export function WhatIsOcia() {
  return (
    <section id="what-is-ocia" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Introduction"
        title="What Is OCIA?"
        summary="OCIA stands for the Order of Christian Initiation of Adults. It is the Catholic Church’s process for adults who are exploring the faith, preparing for Baptism, seeking full communion with the Catholic Church, or completing the sacraments of initiation."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Many people still use the older term <span className="font-semibold text-navy">RCIA</span>.
          OCIA is the current preferred term in many places, especially in the United States.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{point}</p>
          </div>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          If you are unsure whether OCIA is for you, contact a local Catholic parish and ask to
          speak with the OCIA coordinator.
        </p>
      </div>
    </section>
  );
}
