import { notFound } from "next/navigation";
import { StrongholdsProvider } from "@/components/strongholds/StrongholdsProvider";
import { StrongholdsShell } from "@/components/strongholds/StrongholdsShell";
import { strongholdsPublished } from "@/data/strongholds";

export default function StrongholdsLayout({ children }: { children: React.ReactNode }) {
  // Editorial hold: allow local dev/start, prevent accidental Vercel publication.
  if (!strongholdsPublished && process.env.VERCEL === "1") notFound();
  return <StrongholdsProvider><StrongholdsShell>{children}</StrongholdsShell></StrongholdsProvider>;
}
