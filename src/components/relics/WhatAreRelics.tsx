import { SectionHeader } from "@/components/section-header";
import { getRelicTopics } from "@/lib/relics";
import { RelicBulletGrid } from "@/components/relics/shared";

export function WhatAreRelics() {
  const basics = getRelicTopics()[0];

  return (
    <section id="what-are-relics">
      <SectionHeader
        eyebrow="Foundations"
        title="What Are Relics?"
        summary="A relic is a physical object connected with Jesus Christ or with a saint. Relics may be part of a saint's body, something the saint used, or something touched to a saint or shrine."
      />
      <RelicBulletGrid items={basics.keyPoints} />
      <p className="mt-6 rounded-2xl border border-gold/30 bg-ivory/85 p-5 text-sm leading-7 text-muted">
        The Christian faith is not only spiritual in an abstract way. God created the body, the Word
        became flesh, Christ rose bodily, and the saints served God in their bodies.
      </p>
    </section>
  );
}
