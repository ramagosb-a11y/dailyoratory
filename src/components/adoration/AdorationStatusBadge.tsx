import { getAdorationStatusMeta } from "@/lib/adoration";
import type { AdorationStreamStatus } from "@/types/adoration";

export function AdorationStatusBadge({ status }: { status: AdorationStreamStatus }) {
  const meta = getAdorationStatusMeta(status);

  return <span className={`season-pill ${meta.className}`}>{meta.label}</span>;
}
