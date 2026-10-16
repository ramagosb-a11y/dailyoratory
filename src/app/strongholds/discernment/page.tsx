import { StrongholdsDiscernment } from "@/components/strongholds/StrongholdsDiscernment";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Strongholds — Discernment", description: "Educational reflection prompts and original draft summaries of the fourteen first-week Ignatian rules. Draft editorial preview.", path: "/strongholds/discernment", image: "/images/strongholds/foundation.webp", noIndex: true });

export default function StrongholdsDiscernmentPage() { return <StrongholdsDiscernment />; }
