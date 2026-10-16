import { StrongholdsHelp } from "@/components/strongholds/StrongholdsHelp";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Strongholds — Help Me Right Now", description: "Pause, pray, receive a word of Scripture, and choose one small response. Draft editorial preview.", path: "/strongholds/help-now", image: "/images/strongholds/foundation.webp", noIndex: true });
export default function StrongholdsHelpPage() { return <StrongholdsHelp />; }
