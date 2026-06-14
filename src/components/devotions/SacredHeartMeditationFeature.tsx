import Image from "next/image";
import Link from "next/link";

const meditationHref = "/devotions/sacred-heart-of-jesus/seven-senses-meditation";

export function SacredHeartMeditationFeature() {
  return (
    <section className="card-parchment overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#1f1208] p-4 sm:p-6">
          <Image
            src="/images/sacred-heart/sacred-heart-symbols.png"
            alt="Sacred Heart symbol guide showing the flame, cross, crown of thorns, blood, wounds, and radiance."
            width={1254}
            height={1254}
            className="h-full max-h-[540px] w-full rounded-2xl object-contain"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Guided meditation</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy">
            Seven Senses Deep Meditation Journey
          </h2>
          <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">
            A 20-minute Sacred Heart meditation that walks through Calvary with sight, hearing, smell, touch,
            emotion, and spiritual surrender.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="season-pill">20 minutes</span>
            <span className="season-pill">Calvary</span>
            <span className="season-pill">Sacred Heart</span>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={meditationHref} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Begin the Meditation
            </Link>
            <Link href="/prayers/novena-to-the-sacred-heart-of-jesus" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Sacred Heart Novena
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
