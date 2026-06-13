import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function BibleAndHomilies() {
  return (
    <BibleSection
      eyebrow="Preaching"
      title="Listening to the Word Through Homilies"
      summary="Homilies help Catholics hear Scripture as a living word for faith and daily life. They should lead us to Christ, the Mass, conversion, and charity."
    >
      <div className="card-parchment p-6">
        <BibleLinkPills
          links={[
            { label: "Homilies", href: "/homilies" },
            { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            { label: "The Holy Mass", href: "/mass" },
          ]}
        />
      </div>
    </BibleSection>
  );
}
