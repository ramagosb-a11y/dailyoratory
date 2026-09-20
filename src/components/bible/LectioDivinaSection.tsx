import { lectioDivinaMovements } from "@/data/biblePage";
import { BibleCard, BibleCardGrid } from "@/components/bible/BibleUi";

export function LectioDivinaSection() {
  return (
    <section
      id="lectio-divina"
      className="scroll-mt-28 rounded-[2rem] border border-gold/35 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,39,0.28),_transparent_42%),linear-gradient(135deg,_#10283a,_#18394a)] p-6 shadow-[0_18px_45px_rgba(11,35,52,0.18)] sm:p-8 lg:p-10"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Slow, reflective reading</p>
      <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
        Read Slowly with Lectio Divina
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-ivory/85 sm:text-lg">
        Use this flexible reading practice in full or in part. You can adapt it to your own tradition, or simply use it to slow down and listen closely to a passage.
      </p>
      <BibleCardGrid columns="mt-8 md:grid-cols-2 xl:grid-cols-3">
        {lectioDivinaMovements.map((movement) => (
          <BibleCard key={movement.title} title={movement.title} description={movement.description} className="bg-ivory/95" />
        ))}
      </BibleCardGrid>
    </section>
  );
}
