import Link from "next/link";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";
import type { Sacrament } from "@/types/sacraments";

type SacramentCardProps =
  | { companion: SacramentCompanionRecord; sacrament?: never }
  | { sacrament: Sacrament; companion?: never };

export function SacramentCard(props: SacramentCardProps) {
  if (props.sacrament) {
    const sacrament = props.sacrament;
    return (
      <article className="card resource-card flex h-full min-w-0 flex-col p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="liturgical-label text-xs font-bold">{groupLabel(sacrament.group)}</p>
          <span className="season-pill liturgical-chip">{sacrament.featured ? "Featured" : "Learn"}</span>
        </div>
        <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
          <Link href={`/sacraments/${sacrament.slug}`} className="focus-ring rounded-sm transition hover:text-[var(--liturgical-primary-dark)]">
            {sacrament.name}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">{sacrament.shortDescription}</p>
        <div className="mt-4 liturgical-inline-panel p-4">
          <p className="liturgical-label text-xs font-bold">Grace focus</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-navy">{sacrament.graceFocus}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/sacraments/${sacrament.slug}`} className="btn btn-primary focus-ring">
            Learn more
          </Link>
          <Link href="/sacraments/prepare" className="btn btn-secondary focus-ring">
            Preparation
          </Link>
        </div>
      </article>
    );
  }

  const { companion } = props;
  return (
    <article className="card resource-card flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="liturgical-label text-xs font-bold">{companion.sacrament}</p>
        <span className="season-pill liturgical-chip">{companion.bestFor[0]}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={companion.route} className="focus-ring rounded-sm transition hover:text-[var(--liturgical-primary-dark)]">
          {companion.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">{companion.description}</p>
      <div className="mt-4 liturgical-inline-panel p-4">
        <p className="liturgical-label text-xs font-bold">Preparation supports</p>
        <p className="mt-1 text-sm font-semibold leading-6 text-navy">{companion.preparationFor.slice(0, 2).join(", ")}</p>
      </div>
      <Link href={companion.route} className="btn btn-secondary focus-ring mt-5">
        Open companion
      </Link>
    </article>
  );
}

function groupLabel(group: Sacrament["group"]) {
  if (group === "initiation") return "Initiation";
  if (group === "healing") return "Healing";
  return "Service and communion";
}
