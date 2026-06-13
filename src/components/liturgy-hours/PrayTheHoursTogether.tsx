import Link from "next/link";

const roomLinks = [
  { label: "Join Morning Prayer Room", href: "/community/prayer-rooms", note: "Coming soon" },
  { label: "Join Evening Prayer Room", href: "/community/prayer-rooms", note: "Coming soon" },
  { label: "Join Night Prayer Room", href: "/community/prayer-rooms", note: "Coming soon" },
  { label: "Start a Prayer Room", href: "/community/prayer-rooms/start", note: "When available" },
];

export function PrayTheHoursTogether() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Prayer rooms</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Pray the hours together
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Daily Oratory can later host group prayer rooms for Morning Prayer, Evening Prayer, and
        Night Prayer. Until then, this page helps you begin personally and points toward shared
        prayer when those rooms are available.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roomLinks.map((room) => (
          <Link key={room.label} href={room.href} className="card flex flex-col p-5 transition hover:border-gold">
            <span className="text-xs font-bold uppercase text-burgundy">{room.note}</span>
            <span className="font-display mt-2 text-3xl font-semibold text-navy">{room.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
