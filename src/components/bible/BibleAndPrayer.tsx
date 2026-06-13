import { biblePrayerMethods } from "@/data/biblePage";
import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function BibleAndPrayer() {
  return (
    <BibleSection
      id="bible-and-prayer"
      eyebrow="Prayer"
      title="Turning Scripture into Prayer"
      summary="The Bible is not only read for information. It is prayed. The Psalms teach us to praise, lament, repent, trust, and hope. The Gospels teach us to encounter Jesus."
    >
      <div className="card-parchment p-6">
        <ul className="space-y-2 text-sm leading-7 text-muted">
          {biblePrayerMethods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
        <div className="mt-5">
          <BibleLinkPills
            links={[
              { label: "Pray", href: "/pray" },
              { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
              { label: "Scripture Prayer", href: "/library/scripture-prayer" },
            ]}
          />
        </div>
      </div>
    </BibleSection>
  );
}
