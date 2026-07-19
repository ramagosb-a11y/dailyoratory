import { catholicViewNote, catholicViewPoints } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function CatholicViewBible() {
  return (
    <BibleSection
      id="catholic-view"
      eyebrow="Catholic view"
      title="One Catholic Way to Approach the Bible"
      summary="This is one way Catholics may approach Sacred Scripture: receiving it as inspired by God, reading it with the Church's Tradition, praying with it, and letting it shape faith and daily life. Catholics may differ in translation, study habits, devotional style, and emphasis while sharing the Church's central beliefs about Scripture."
    >
      <BibleCardGrid columns="md:grid-cols-2 xl:grid-cols-4">
        {catholicViewPoints.map((point) => (
          <BibleCard key={point} title={point} />
        ))}
      </BibleCardGrid>
      <div className="card mt-5 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">A Catholic note</p>
        <p className="mt-3 text-sm leading-7 text-muted">{catholicViewNote}</p>
      </div>
    </BibleSection>
  );
}
