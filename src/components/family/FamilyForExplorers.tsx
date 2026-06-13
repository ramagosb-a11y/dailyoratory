import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function FamilyForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="For seekers"
        title="Family for People Exploring Catholicism"
        summary="Catholic family life may include practices that feel unfamiliar, but you can begin simply."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-8 text-muted">
          Catholic family life may include Sunday Mass, blessings, saints, family prayer, confession, holy days, and
          devotions. You can begin simply by learning what Catholics believe about the family, attending Mass, asking
          questions, and praying for the Holy Spirit's guidance.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <Link href="/ocia" className="btn liturgical-button focus-ring justify-center">
            Explore OCIA
          </Link>
          <Link href="/mass" className="btn btn-secondary focus-ring justify-center">
            Attend the Mass
          </Link>
          <Link href="/sacraments" className="btn btn-secondary focus-ring justify-center">
            Learn the Sacraments
          </Link>
          <Link href="/pray" className="btn btn-secondary focus-ring justify-center">
            Begin Prayer
          </Link>
          <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">
            Read the Catechism
          </Link>
          <Link href="/formation" className="btn btn-secondary focus-ring justify-center">
            Open Formation
          </Link>
        </div>
      </div>
    </section>
  );
}
