import { StrongholdsJourney } from "@/components/strongholds/StrongholdsJourney";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Strongholds Guided Prayer", description: "Recognize, identify, discern, surrender, act, and grow in a quiet six-step prayer.", path: "/strongholds/journey", image: "/images/strongholds/foundation.webp", noIndex: true });
export default function StrongholdsJourneyPage() { return <StrongholdsJourney />; }
