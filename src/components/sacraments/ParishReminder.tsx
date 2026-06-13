import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";
import { SacramentPastoralBoundaryNote } from "@/components/sacraments/SacramentPastoralBoundaryNote";

export function ParishReminder({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "" : ""}`}>
      <SacramentParishReminder />
      {!compact ? <SacramentPastoralBoundaryNote /> : null}
    </div>
  );
}
