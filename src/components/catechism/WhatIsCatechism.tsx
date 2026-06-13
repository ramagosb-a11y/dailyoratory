import { SectionHeader } from "@/components/section-header";

const points = [
  "It helps answer “What does the Church teach?”",
  "It is organized for learning and reference.",
  "It connects doctrine, worship, morality, and prayer.",
  "It draws from Scripture, Tradition, councils, saints, and Church teaching.",
  "It is useful for Catholics and for anyone exploring Catholicism.",
  "It is not only for scholars; it can guide prayer and daily life.",
];

export function WhatIsCatechism() {
  return (
    <section>
      <SectionHeader
        eyebrow="Introduction"
        title="What Is the Catechism of the Catholic Church?"
        summary="The Catechism of the Catholic Church is a comprehensive summary of Catholic teaching. It explains the faith the Church professes, the sacraments the Church celebrates, the moral life the Church teaches, and the prayer that shapes Christian life."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{point}</p>
          </div>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          The Catechism is often abbreviated as <span className="font-semibold text-navy">CCC</span>.
          For example, <span className="font-semibold text-navy">CCC 1324</span> means paragraph 1324
          of the Catechism.
        </p>
      </div>
    </section>
  );
}
