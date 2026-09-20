export function TraditionHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_88%_12%,rgba(226,193,94,0.28),transparent_19rem),radial-gradient(circle_at_4%_100%,rgba(72,122,121,0.3),transparent_24rem),linear-gradient(135deg,#0a1d2c,#142e40)] p-7 shadow-[0_24px_60px_rgba(8,27,41,0.26)] sm:p-10 lg:p-14">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Explore the Christian inheritance</p>
        <h1 className="font-display mt-4 text-5xl font-semibold leading-[0.96] text-ivory sm:text-6xl lg:text-7xl">Sacred Tradition</h1>
        <div aria-hidden="true" className="mt-6 h-px w-24 bg-gold/75" />
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/95">
          Understanding the faith handed on.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/75">
          What do Christians mean by Tradition? How is faith passed from one generation to the next, and how can it remain
          faithful while its expression develops? Explore the meaning, history, and examples of Tradition, with clear
          explanations for readers of every background.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#meaning" className="btn btn-gold focus-ring justify-center">
            Start with the meaning
          </a>
          <a href="#creed-example-lesson" className="btn border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10 focus-ring justify-center">
            Explore an example
          </a>
        </div>
      </div>
    </section>
  );
}
