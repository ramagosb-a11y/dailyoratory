import { getLiveAdorationStreams } from "@/lib/adoration";
import { AdorationQuietRoom } from "./AdorationQuietRoom";

export function AdorationPortal() {
  const liveStreams = getLiveAdorationStreams();

  return (
    <AdorationQuietRoom streams={liveStreams} />
  );
}
