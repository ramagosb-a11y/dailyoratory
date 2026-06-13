import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getBodySoulSpiritResources } from "@/lib/bodySoulSpirit";
import { BodySoulSpiritResourceSourceType } from "@/types/bodySoulSpirit";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function BodySoulSpiritResources() {
  const resources = getBodySoulSpiritResources();

  return (
    <BodySoulSpiritSection
      eyebrow="Official and helpful"
      title="Official and Helpful Sources"
      summary="Daily Oratory links to official Church sources for doctrine, grace, sin, reconciliation, prayer, and Scripture."
    >
      <BodySoulSpiritCardGrid>
        {resources.map((resource) => (
          <BodySoulSpiritCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            meta={resource.badge}
          >
            <p className="text-sm leading-7 text-muted">
              {resource.sourceType === BodySoulSpiritResourceSourceType.DailyOratory
                ? "Daily Oratory resource"
                : "External source"}
              {resource.official ? " | Official Church source" : ""}
            </p>
            <div className="mt-4">
              {resource.url.startsWith("http") ? (
                <TrackedLink
                  href={resource.url}
                  external
                  className="btn btn-secondary focus-ring justify-center"
                >
                  Open Resource
                </TrackedLink>
              ) : (
                <TrackedLink
                  href={resource.url}
                  className="btn btn-secondary focus-ring justify-center"
                >
                  Open Resource
                </TrackedLink>
              )}
            </div>
          </BodySoulSpiritCard>
        ))}
      </BodySoulSpiritCardGrid>
    </BodySoulSpiritSection>
  );
}
