import {
  ActionCard,
  DashboardResourceCard,
  LiturgicalSubnav,
  VerificationNote,
} from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import { liturgicalSeasonRecords } from "@/data/liturgicalLiving";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";

export function FamilyLiturgicalLivingView() {
  const model = getLiturgicalDashboardModel();
  const familyPractices = liturgicalSeasonRecords.flatMap((season) =>
    season.practices
      .filter((practice) => practice.audience === "family")
      .map((practice) => ({ ...practice, season: season.title })),
  );

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <SectionHeader
          eyebrow="Domestic Church"
          title="Family liturgical living"
          summary="Simple practices for homes that want to pray with the Church without turning faith into noise or pressure."
        />
        <div className="mt-6">
          <VerificationNote note={model.verificationNote} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            <ActionCard eyebrow="Today at home" action={model.day.familyPrayerIdea} />
            <ActionCard eyebrow="Works of mercy" action={model.day.worksOfMercySuggestion} />
          </div>
          <section className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Seasonal family practices</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">A quiet rhythm for the home</h2>
            <div className="mt-5 grid gap-3">
              {familyPractices.map((practice) => (
                <article key={`${practice.season}-${practice.title}`} className="card-parchment p-4">
                  <p className="text-xs font-bold uppercase text-burgundy">{practice.season}</p>
                  <h3 className="mt-1 text-sm font-bold text-navy">{practice.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{practice.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8">
          <p className="text-xs font-bold uppercase text-burgundy">Helpful resources</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Build a daily rule of life</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {model.featuredResources.map((resource) => (
              <DashboardResourceCard key={resource.id} record={resource} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
