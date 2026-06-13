import { SectionHeader } from "@/components/section-header";

const healthy = [
  "Prayerful responsibility",
  "Sacrificial love",
  "Protection of the vulnerable",
  "Teaching by example",
  "Mercy and forgiveness",
  "Clear moral guidance",
  "Service before self",
  "Respect for each person's dignity",
  "Openness to the Holy Spirit",
];

const unhealthy = [
  "Domination",
  "Fear-based control",
  "Spiritual manipulation",
  "Excusing abuse",
  "Silencing others",
  "Using faith as a weapon",
  "Ignoring conscience or dignity",
  "Replacing pastoral, professional, or emergency help",
];

export function FamilyAuthorityAsService() {
  return (
    <section>
      <SectionHeader
        eyebrow="Spiritual leadership"
        title="Family Authority as Loving Service"
        summary="Authority as service, not control."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <h3 className="font-display text-2xl font-semibold text-navy">Christian family leadership is...</h3>
          <ul className="mt-5 grid gap-3">
            {healthy.map((item) => (
              <li key={item} className="rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-2xl font-semibold text-navy">Christian family leadership is not...</h3>
          <ul className="mt-5 grid gap-3">
            {unhealthy.map((item) => (
              <li key={item} className="rounded-md border border-burgundy/20 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="card-parchment mt-6 border-burgundy/30 p-6">
        <p className="text-sm leading-8 text-muted">
          In a Christian home, authority is not domination. It is responsibility before God to love, protect, teach,
          forgive, guide, and serve. True spiritual leadership reflects Christ, who leads through truth, humility,
          sacrifice, mercy, and love.
        </p>
        <p className="mt-4 text-sm leading-8 text-burgundy">
          If someone is experiencing abuse, violence, coercive control, or danger, they should seek immediate help from
          trusted local authorities, emergency services, a domestic violence hotline, parish leadership, or qualified
          professionals.
        </p>
      </div>
    </section>
  );
}
