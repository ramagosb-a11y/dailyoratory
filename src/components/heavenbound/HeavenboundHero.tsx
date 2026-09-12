import { OpenHeavenboundButton } from "@/components/heavenbound/OpenHeavenboundButton";

export function HeavenboundHero() {
  return (
    <section className="rounded-md border border-stone bg-navy p-6 text-ivory shadow-soft sm:p-8 lg:p-10">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Daily Oratory tool</p>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Heavenbound Spiritual Companion
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-parchment">
          Choose a Catholic spiritual path for today and continue the journey with the Heavenbound guide.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="https://notebook.google.com/notebook/24faf824-e6ff-4a7c-b7f8-fd1d51ee32f0?authuser=1" target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring justify-center">
            NotebookLM Library — external site
          </a>
          <OpenHeavenboundButton className="btn btn-outline-inverse focus-ring justify-center" />
        </div>
      </div>
    </section>
  );
}
