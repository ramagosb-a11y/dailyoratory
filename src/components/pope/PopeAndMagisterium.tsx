import { SectionHeader } from "@/components/section-header";

export function PopeAndMagisterium() {
  return (
    <section>
      <SectionHeader eyebrow="Teaching office" title="The Pope and the Magisterium" />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          The Magisterium is the teaching office of the Church. The Pope and bishops serve the Word of God by faithfully
          interpreting Scripture and Tradition.
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
          <li className="border-l-2 border-[var(--liturgical-primary)] pl-4">The Magisterium serves the Word of God.</li>
          <li className="border-l-2 border-[var(--liturgical-primary)] pl-4">It is not above divine revelation.</li>
          <li className="border-l-2 border-[var(--liturgical-primary)] pl-4">It helps preserve unity in faith.</li>
          <li className="border-l-2 border-[var(--liturgical-primary)] pl-4">It helps clarify doctrine when confusion arises.</li>
          <li className="border-l-2 border-[var(--liturgical-primary)] pl-4">It teaches with varying levels of authority depending on context.</li>
        </ul>
      </div>
    </section>
  );
}
