import { TrackedLink } from "@/components/analytics/TrackedLink";
import { communityPrayerCards } from "@/lib/prayer";

export function CommunityPrayer() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Pray with others</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Prayer is personal, and it is also communal.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Daily Oratory can help users ask for prayer, pray for others, and join prayer rooms.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {communityPrayerCards.map((card) => (
          <article key={card.id} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <div className="mt-5">
              <TrackedLink
                href={card.href}
                className="btn btn-secondary focus-ring justify-center"
                eventName="prayer_tool_click"
                eventParams={{
                  tool_name: card.title,
                  destination: card.href,
                  section: "community-prayer",
                  page_path: "/pray",
                }}
              >
                {card.cta}
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
