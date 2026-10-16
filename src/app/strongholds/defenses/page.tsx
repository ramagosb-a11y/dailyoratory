import { StrongholdsFormation } from "@/components/strongholds/StrongholdsFormation";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Strongholds — Daily Defenses", description: "Seven original daily invitations to prayer, virtue, and practical care. Draft editorial preview.", path: "/strongholds/defenses", image: "/images/strongholds/foundation.webp", noIndex: true });

export default function StrongholdsDefensesPage() { return <StrongholdsFormation />; }
