export function MedicalEmergencyNotice() {
  return (
    <section className="rounded-[1.75rem] border border-gold/30 bg-white/80 p-6 sm:p-8" aria-labelledby="medical-emergency-title">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">First things first</p>
      <h2 id="medical-emergency-title" className="font-display mt-3 text-4xl font-semibold text-navy">
        If There Is Immediate Medical Danger
      </h2>
      <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
        If someone is in immediate medical danger, call local emergency services first. Then contact a Catholic priest,
        parish emergency line, hospital chaplain, or local diocese as soon as possible.
      </p>
    </section>
  );
}
