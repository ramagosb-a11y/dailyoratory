import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const sacraments = [
  {
    title: "Baptism",
    description: "New life in Christ, forgiveness of sin, and entrance into the Church.",
    href: "/sacraments/baptism",
  },
  {
    title: "Confirmation",
    description: "Strengthening by the Holy Spirit for witness and mission.",
    href: "/sacraments/confirmation",
  },
  {
    title: "Eucharist",
    description: "Communion with Christ, the source and summit of Christian life.",
    href: "/sacraments/eucharist",
  },
];

export function SacramentsOfInitiation() {
  return (
    <section>
      <SectionHeader
        eyebrow="Sacraments"
        title="The Sacraments of Initiation"
        summary="Christian initiation is centered on Baptism, Confirmation, and the Eucharist. Through these sacraments, a person is brought into new life in Christ, strengthened by the Holy Spirit, and nourished by the Body and Blood of Christ."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {sacraments.map((sacrament) => (
          <Link key={sacrament.href} href={sacrament.href} className="card-parchment p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{sacrament.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{sacrament.description}</p>
          </Link>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          The exact sacramental path depends on your baptismal status and parish or diocesan guidance.
        </p>
      </div>
    </section>
  );
}
