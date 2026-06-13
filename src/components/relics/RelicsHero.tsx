import Link from "next/link";
import { relicsHeroLinks } from "@/data/relicsPage";

export function RelicsHero() {
  return (
    <section className="rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_42%),linear-gradient(180deg,rgba(255,252,244,0.96),rgba(250,245,232,0.98))] p-8 shadow-soft sm:p-10 lg:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Relics</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Catholic Relics</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Holy reminders that the saints were real, embodied witnesses of Christ.
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
            Relics are physical objects connected with Christ or the saints. Catholics do not worship
            relics. We venerate them because they remind us that God's grace transforms real human
            lives, that the saints are alive in Christ, and that our bodies are called to resurrection.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {relicsHeroLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={index === 0 ? "btn liturgical-button focus-ring justify-center" : "btn btn-secondary focus-ring justify-center"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <aside className="rounded-2xl border border-gold/40 bg-ivory/85 p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Hero note</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Relics should always lead us to Jesus Christ, the sacraments, prayer, conversion, and
            imitation of the saints.
          </p>
        </aside>
      </div>
    </section>
  );
}
