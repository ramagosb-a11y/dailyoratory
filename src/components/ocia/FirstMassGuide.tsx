import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const tips = [
  "You are welcome to attend.",
  "Sit where you feel comfortable.",
  "Follow what others do as you are able.",
  "Listen to the readings and prayers.",
  "Do not worry if you do not understand everything.",
  "If you are not Catholic or not prepared to receive Communion, remain in the pew and pray.",
  "Speak with a priest or OCIA coordinator after Mass if you have questions.",
];

export function FirstMassGuide() {
  return (
    <section>
      <SectionHeader
        eyebrow="First Mass visit"
        title="Going to Mass for the First Time"
        summary="A simple guide for people who are curious, visiting quietly, or nervous about stepping into a Catholic church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{tip}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href="/mass" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
          The Holy Mass
        </Link>
        <Link href="/sacraments/eucharist" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
          Eucharist
        </Link>
      </div>
    </section>
  );
}
