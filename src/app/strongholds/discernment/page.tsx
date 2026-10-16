import { StrongholdsDiscernment } from "@/components/strongholds/StrongholdsDiscernment";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Strongholds — Discernment", description: "Educational reflection prompts and original summaries of the fourteen first-week Ignatian rules.", path: "/strongholds/discernment", image: "/images/strongholds/foundation.webp", noIndex: true });

export default function StrongholdsDiscernmentPage() { return <StrongholdsDiscernment />; }
