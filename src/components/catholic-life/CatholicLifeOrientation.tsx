import { TrackedLink } from "@/components/analytics/TrackedLink";
import { catholicLifeOrientationLinks } from "@/data/catholicLifeRoadmap";

export function CatholicLifeOrientation() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">One Faithful Step at a Time</h2>
      <p className="daily-readable mt-5 max-w-4xl text-base leading-8 text-muted">
        You do not need to master everything at once. Start where you are. Pray honestly. Return to mercy.
        Come to Mass. Learn slowly. Let Jesus lead you into a deeper life of grace.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-gold/20 bg-white/75 p-4">
        <p className="daily-readable-muted text-sm leading-7 text-muted">
          If you are new, returning, grieving, struggling, or unsure where to begin, start with one small step and keep going.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {catholicLifeOrientationLinks.map((link) => (
          <TrackedLink
            key={link.id}
            href={link.href}
            className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
            eventName="catholic_life_related_link_click"
            eventParams={{ destination: link.href, source: "orientation" }}
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
