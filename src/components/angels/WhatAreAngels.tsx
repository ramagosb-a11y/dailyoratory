import { SectionHeader } from "@/components/section-header";
import { getAngelTopics } from "@/lib/angels";

export function WhatAreAngels() {
  const topic = getAngelTopics()[0];

  return (
    <section id="what-are-angels" className="scroll-mt-28">
      <SectionHeader eyebrow="Foundations" title="What Are Angels?" summary={topic.description} />
      <div className="card-parchment mt-7 p-6 sm:p-8">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {topic.keyPoints.map((point) => (
            <div key={point} className="rounded-md border border-stone/80 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {point}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">
          The word <span className="font-semibold text-navy">angel</span> means messenger, but angels do
          more than deliver messages. They worship, guard, guide, announce, protect, and serve
          according to God's will.
        </p>
      </div>
    </section>
  );
}
