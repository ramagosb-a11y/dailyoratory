export function SacramentPastoralBoundaryNote({ kind = "general" }: { kind?: "general" | "medical" | "canonical" | "vocation" }) {
  const copy =
    kind === "medical"
      ? "Daily Oratory does not provide medical advice or emergency triage. If there is an immediate medical emergency, contact emergency services first. For urgent sacramental care, contact your parish, hospital chaplain, or local Catholic emergency priest line if available."
      : kind === "canonical"
        ? "Daily Oratory does not provide canonical eligibility, annulment, dispensation, sacramental validity, or legal marriage advice. Bring those questions to your parish priest, deacon, diocesan office, or tribunal."
        : kind === "vocation"
          ? "Daily Oratory does not determine a vocation or readiness for seminary or diaconate. Use prayer, spiritual direction, priestly counsel, and diocesan vocation guidance."
          : "Daily Oratory supports learning and preparation but does not replace parish formation, priestly counsel, diocesan guidance, or the Church's sacramental judgment.";

  return (
    <aside className="rounded-3xl border border-burgundy/20 bg-burgundy/5 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pastoral Boundary</p>
      <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
    </aside>
  );
}
