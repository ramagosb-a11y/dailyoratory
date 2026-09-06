import type { Metadata } from "next";
import { WayOfCrossQuietRoom } from "@/components/way-of-cross/WayOfCrossQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Way of the Cross",
  description:
    "Walk with Jesus from judgment to the tomb through an immersive Stations of the Cross meditation, or pray the historical St. Alphonsus form.",
  path: "/way-of-cross",
});

export default function WayOfCrossPage() {
  return (
    <div className="way-of-cross-root min-h-[100svh]">
      <WayOfCrossQuietRoom />
    </div>
  );
}
