import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { AfterDeathNextSteps } from "@/components/sacramental-emergency/AfterDeathNextSteps";
import { AfterHoursParishContact } from "@/components/sacramental-emergency/AfterHoursParishContact";
import { AnointingUrgentGuide } from "@/components/sacramental-emergency/AnointingUrgentGuide";
import { ApostolicPardonExplainer } from "@/components/sacramental-emergency/ApostolicPardonExplainer";
import { MedicalEmergencyNotice } from "@/components/sacramental-emergency/MedicalEmergencyNotice";
import { NeedAPriestGuide } from "@/components/sacramental-emergency/NeedAPriestGuide";
import { PrayerIfPriestCannotArrive } from "@/components/sacramental-emergency/PrayerIfPriestCannotArrive";
import { QuickActionCards } from "@/components/sacramental-emergency/QuickActionCards";
import { SacramentalEmergencyChecklist } from "@/components/sacramental-emergency/SacramentalEmergencyChecklist";
import { SacramentalEmergencyHero } from "@/components/sacramental-emergency/SacramentalEmergencyHero";
import { SacramentalEmergencyRelatedLinks } from "@/components/sacramental-emergency/SacramentalEmergencyRelatedLinks";
import { SomeoneIsDyingSteps } from "@/components/sacramental-emergency/SomeoneIsDyingSteps";
import { UrgentConfessionGuide } from "@/components/sacramental-emergency/UrgentConfessionGuide";
import { ViaticumExplainer } from "@/components/sacramental-emergency/ViaticumExplainer";

export const metadata: Metadata = createPageMetadata({
  title: "Sacramental Emergency Guide | Catholic Help in Urgent Moments | Daily Oratory",
  description:
    "A practical Catholic guide for urgent sacramental needs: someone is dying, Anointing of the Sick, urgent Confession, finding a priest, Viaticum, and prayers when a priest cannot arrive.",
  path: "/sacramental-emergency",
  keywords: [
    "sacramental emergency",
    "need a priest",
    "Catholic emergency",
    "someone is dying",
    "Anointing of the Sick urgent",
    "urgent Confession",
    "Viaticum",
    "Apostolic Pardon",
    "Last Rites",
    "Catholic hospital chaplain",
    "what to pray if priest cannot arrive",
    "Catholic dying prayer",
  ],
});

export default function SacramentalEmergencyPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Sacramental Emergency Guide",
              description:
                "A practical Catholic guide for urgent sacramental needs: someone is dying, Anointing of the Sick, urgent Confession, finding a priest, Viaticum, and prayers when a priest cannot arrive.",
              path: "/sacramental-emergency",
            }),
            buildArticleStructuredData({
              headline: "Sacramental Emergency Guide",
              description:
                "A practical Catholic guide for urgent sacramental needs: someone is dying, Anointing of the Sick, urgent Confession, finding a priest, Viaticum, and prayers when a priest cannot arrive.",
              path: "/sacramental-emergency",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Start Here", path: "/catholic-life" },
              { name: "Sacramental Emergency Guide", path: "/sacramental-emergency" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Start Here", href: "/catholic-life" }, { label: "Sacramental Emergency Guide" }]} />

        <div className="mt-8 grid gap-10">
          <SacramentalEmergencyHero />
          <MedicalEmergencyNotice />
          <QuickActionCards />
          <SomeoneIsDyingSteps />
          <AnointingUrgentGuide />
          <UrgentConfessionGuide />
          <NeedAPriestGuide />
          <ViaticumExplainer />
          <ApostolicPardonExplainer />
          <PrayerIfPriestCannotArrive />
          <AfterHoursParishContact />
          <SacramentalEmergencyChecklist />
          <AfterDeathNextSteps />
          <SacramentalEmergencyRelatedLinks />
        </div>
      </main>
    </div>
  );
}
