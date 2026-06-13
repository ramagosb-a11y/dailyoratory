import { SectionHeader } from "@/components/section-header";

const points = [
  "Public revelation is fulfilled in Christ.",
  "The Church grows in understanding over time.",
  "Doctrinal development is not the same as inventing new doctrine.",
  "The Holy Spirit guides the Church into deeper understanding.",
  "Councils, creeds, saints, theologians, and pastors help clarify the faith.",
];

export function DepositOfFaith() {
  return (
    <section>
      <SectionHeader
        eyebrow="The deposit of faith"
        title="The Deposit of Faith"
        summary='The "deposit of faith" means the fullness of divine revelation entrusted to the apostles and handed on in the Church.'
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          The Church does not create new revelation, but grows in understanding and faithfully teaches what has been received.
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
