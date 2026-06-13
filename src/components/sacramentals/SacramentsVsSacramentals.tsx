import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function SacramentsVsSacramentals() {
  return (
    <section>
      <SectionHeader
        eyebrow="Clarity"
        title="Sacraments and Sacramentals: What Is the Difference?"
        summary="Sacraments are the central channels of grace. Sacramentals help us live sacramentally in daily life."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Sacraments</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>- Instituted by Christ</li>
            <li>- Seven in number</li>
            <li>- Confer grace in a unique way</li>
            <li>- Central to Catholic life</li>
            <li>- Include Baptism, Eucharist, Confession, and the other sacraments</li>
          </ul>
          <Link href="/sacraments" className="btn liturgical-button focus-ring mt-6 justify-center">
            Explore the Sacraments
          </Link>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Sacramentals</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>- Instituted by the Church</li>
            <li>- Many forms</li>
            <li>- Prepare us to receive grace</li>
            <li>- Sanctify ordinary life</li>
            <li>- Include holy water, blessings, rosaries, medals, scapulars, candles, and crucifixes</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
