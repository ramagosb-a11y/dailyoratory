import { RosaryLinkPills, RosarySection } from "@/components/rosary/RosaryUi";

export function RosaryGospelPrayer() {
  return (
    <RosarySection
      eyebrow="Scripture"
      title="The Rosary Is a Gospel Prayer"
      summary="The Rosary is deeply connected to Scripture and helps the faithful walk through the mysteries of salvation."
    >
      <div className="card-parchment p-6">
        <p className="text-sm leading-8 text-muted">
          The Rosary is deeply connected to Scripture. The mysteries lead us through the Annunciation,
          Nativity, Baptism of Jesus, Passion, Resurrection, Pentecost, and the hope of heaven. This is why
          the Rosary is more than a string of prayers. It is a Gospel path, prayed slowly, with Mary beside us.
        </p>
        <div className="mt-6">
          <RosaryLinkPills
            links={[
              { label: "Bible", href: "/bible" },
              { label: "Scripture Prayer", href: "/library/scripture-prayer" },
              { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            ]}
          />
        </div>
      </div>
    </RosarySection>
  );
}
