import { StrongholdsMyJourney } from "@/components/strongholds/StrongholdsMyJourney";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "My Journey — Strongholds", description: "Private, explicitly saved Strongholds reflections on this browser. Local draft.", path: "/strongholds/my-journey", image: "/images/strongholds/foundation.webp", noIndex: true });
export default function MyJourneyPage() { return <StrongholdsMyJourney />; }
