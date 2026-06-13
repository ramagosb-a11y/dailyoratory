import { catholicViewNote, catholicViewPoints } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function CatholicViewBible() {
  return (
    <BibleSection
      id="catholic-view"
      eyebrow="Catholic view"
      title="How Catholics Understand the Bible"
      summary="Catholics believe Sacred Scripture is inspired by God and entrusted to the Church. Scripture is proclaimed in the Mass, prayed in the Liturgy of the Hours, studied with the help of Tradition, and lived through faith, hope, and charity."
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
