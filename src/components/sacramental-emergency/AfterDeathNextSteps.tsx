export function AfterDeathNextSteps() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">After Death: What To Do Next</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        After a loved one dies, continue to pray. Contact the parish about funeral rites, contact a funeral home,
        and ask about Catholic burial or cremation guidance. Request Masses for the deceased if possible.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <a href="/formation/catholic-burial/prayers-for-the-dead" className="rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-4 text-sm font-semibold text-navy">Prayers for the Dead</a>
        <a href="/formation/catholic-burial" className="rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-4 text-sm font-semibold text-navy">Catholic Burial</a>
        <a href="/formation/catholic-burial/planning-a-catholic-funeral" className="rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-4 text-sm font-semibold text-navy">Planning a Catholic Funeral</a>
        <a href="/formation/eschatology/purgatory" className="rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-4 text-sm font-semibold text-navy">Purgatory</a>
      </div>
    </section>
  );
}
