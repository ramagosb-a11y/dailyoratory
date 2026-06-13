import { BibleSection } from "@/components/bible/BibleUi";

export function BibleCopyrightNote() {
  return (
    <BibleSection
      eyebrow="Source and copyright note"
      title="A Reverent Use Note"
      summary="Daily Oratory provides original summaries, prayer methods, and formation guides. It links to official Bible resources for full Scripture texts and approved translations. Do not copy long passages from copyrighted Bible translations or study notes without permission."
    >
      <div className="card-parchment p-6">
        <p className="text-sm leading-7 text-muted">
          This page is meant to help people begin and continue reading Sacred Scripture with the Church. It does not replace approved Bible editions, official Church documents, or copyrighted study materials.
        </p>
      </div>
    </BibleSection>
  );
}
