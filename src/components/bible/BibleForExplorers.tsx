import { explorerBeginnerPath } from "@/data/biblePage";
import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function BibleForExplorers() {
  return (
    <BibleSection
      eyebrow="Exploring Catholicism"
      title="If You Are Exploring the Catholic Faith"
      summary="The Catholic approach to the Bible may feel different if you come from another Christian tradition or no religious background. Begin with Jesus, the Gospels, the Mass readings, and the question of how Scripture lives in the Church."
    >
      <div className="card-parchment p-6">
        <ol className="space-y-2 text-sm leading-7 text-muted">
          {explorerBeginnerPath.map((step, index) => (
            <li key={step}>{index + 1}. {step}</li>
          ))}
        </ol>
        <div className="mt-5">
          <BibleLinkPills
            links={[
              { label: "Explore the Catholic Faith", href: "/explore" },
              { label: "OCIA", href: "/ocia" },
              { label: "The Holy Mass", href: "/mass" },
              { label: "Sacred Tradition", href: "/tradition" },
              { label: "Catechism", href: "/catechism" },
            ]}
          />
        </div>
      </div>
    </BibleSection>
  );
}
