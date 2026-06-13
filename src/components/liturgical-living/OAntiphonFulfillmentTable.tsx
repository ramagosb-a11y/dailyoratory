import type { OAntiphon } from "@/types/oAntiphons";

export function OAntiphonFulfillmentTable({ antiphons }: { antiphons: OAntiphon[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Advent to Christmas</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Advent longing and Christmas fulfillment</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-stone">
          <thead className="bg-ivory">
            <tr>
              <th className="border-b border-stone px-4 py-3 text-left text-sm font-semibold text-navy">Antiphon</th>
              <th className="border-b border-stone px-4 py-3 text-left text-sm font-semibold text-navy">Advent longing</th>
              <th className="border-b border-stone px-4 py-3 text-left text-sm font-semibold text-navy">Christmas fulfillment</th>
            </tr>
          </thead>
          <tbody>
            {antiphons.map((antiphon) => (
              <tr key={antiphon.id} className="bg-white/70">
                <td className="border-b border-stone px-4 py-4 font-display text-2xl font-semibold text-navy">{antiphon.title}</td>
                <td className="daily-card-readable border-b border-stone px-4 py-4 text-sm leading-7 text-muted">{antiphon.adventLonging}</td>
                <td className="daily-card-readable border-b border-stone px-4 py-4 text-sm leading-7 text-muted">{antiphon.christmasFulfillment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
