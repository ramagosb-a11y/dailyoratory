import { LiturgicalColorPill, LiturgicalSubnav } from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import { liturgicalSeasonRecords } from "@/data/liturgicalLiving";

const usccbSeasonLinks = [
  {
    title: "Advent",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/advent",
    description: "Prepare for the coming of Christ with watchful hope, prayer, and conversion.",
  },
  {
    title: "Lent",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/lent",
    description: "Enter the season of prayer, fasting, almsgiving, repentance, and renewal.",
  },
  {
    title: "Christmas",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/christmas",
    description: "Celebrate the Nativity of the Lord and the mystery of the Incarnation.",
  },
  {
    title: "Easter Triduum",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/triduum",
    description: "Pray through the Lord's Passion, Death, burial, and Resurrection.",
  },
  {
    title: "Easter",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/easter",
    description: "Live the fifty days of resurrection joy, baptismal renewal, and mission.",
  },
  {
    title: "Ordinary Time",
    href: "https://www.usccb.org/prayer-worship/liturgical-year/ordinary-time",
    description: "Grow in discipleship through the public life, teaching, and ministry of Christ.",
  },
];

const usccbSeasonLinkByTitle = new Map([
  ...usccbSeasonLinks.map((link) => [link.title, link] as const),
  ["Easter Season", usccbSeasonLinks.find((link) => link.title === "Easter")] as const,
]);

export function LiturgicalSeasonsView() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <SectionHeader
          eyebrow="Liturgical Living"
          title="Seasons of the Church"
          summary="Season records hold spiritual focus, colors, dates, and simple practices for homes, groups, and individuals."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {liturgicalSeasonRecords.map((season) => (
            <article key={season.id} className="dashboard-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-burgundy">Season</p>
                  <h2 className="font-display mt-2 text-4xl font-semibold text-navy">{season.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {season.colors.map((color) => (
                    <LiturgicalColorPill key={`${season.id}-${color}`} color={color} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{season.description}</p>
              {usccbSeasonLinkByTitle.has(season.title) ? (
                <a
                  href={usccbSeasonLinkByTitle.get(season.title)?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary focus-ring mt-5 w-fit"
                >
                  Read USCCB guide
                </a>
              ) : null}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <SeasonFact label="Begins" value={season.startsWith ?? "Varies by calendar"} />
                <SeasonFact label="Ends" value={season.endsWith ?? "Varies by calendar"} />
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase text-burgundy">Spiritual focus</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {season.spiritualFocus.map((focus) => (
                    <span key={focus} className="season-pill bg-ivory">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {season.practices.map((practice) => (
                  <div key={practice.title} className="card-parchment p-4">
                    <p className="text-xs font-bold uppercase text-burgundy">{practice.audience}</p>
                    <h3 className="mt-1 text-sm font-bold text-navy">{practice.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{practice.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 dashboard-card p-6 sm:p-8">
          <SectionHeader
            eyebrow="USCCB season guides"
            title="Learn the rhythm of the Church's year"
            summary="Open the United States Conference of Catholic Bishops guides for each major liturgical season."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usccbSeasonLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-parchment focus-ring block p-5 transition hover:-translate-y-0.5 hover:shadow-oratory"
              >
                <h3 className="font-display text-3xl font-semibold leading-tight text-navy">{link.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{link.description}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-burgundy">Open USCCB guide</span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

function SeasonFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-parchment p-4">
      <p className="text-xs font-bold uppercase text-burgundy">{label}</p>
      <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}
