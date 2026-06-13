import { SectionHeader } from "@/components/section-header";
import { getFirstSevenCouncils } from "@/lib/councils";

export function FirstSevenCouncils() {
  const councils = getFirstSevenCouncils();

  return (
    <section id="first-seven-councils" className="scroll-mt-28">
      <SectionHeader
        eyebrow="First seven"
        title="The First Seven Councils"
        summary="The first seven ecumenical councils are especially important for understanding the Trinity, Jesus Christ, Mary, and sacred images."
      />
      <div className="mt-7 grid gap-4">
        {councils.map((council) => (
          <article key={council.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {council.name} • {council.years}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">What question was being asked?</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{council.majorIssue}</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-md border border-stone bg-ivory/80 p-4">
                <p className="text-sm font-semibold text-navy">What the Church clarified</p>
                <p className="mt-2 text-sm leading-7 text-muted">{council.simpleTakeaway}</p>
              </div>
              <div className="rounded-md border border-stone bg-ivory/80 p-4">
                <p className="text-sm font-semibold text-navy">Why it matters today</p>
                <p className="mt-2 text-sm leading-7 text-muted">{council.whyItMattersToday}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {council.relatedDailyOratoryLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
