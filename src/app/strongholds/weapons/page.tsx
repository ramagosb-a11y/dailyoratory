import { StrongholdsWeapons } from "@/components/strongholds/StrongholdsWeapons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Strongholds — Spiritual Weapons",
  description: "Explore prayer, Scripture, and resources from the life of the Church. Draft editorial preview.",
  path: "/strongholds/weapons",
  image: "/images/strongholds/foundation.webp",
  noIndex: true,
});

export default function StrongholdsWeaponsPage() { return <StrongholdsWeapons />; }
