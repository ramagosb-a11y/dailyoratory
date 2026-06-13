import { SectionHeader } from "@/components/section-header";

export function FamilySafetyNote() {
  return (
    <section>
      <SectionHeader eyebrow="Safety" title="When Safety Is at Risk" summary="Catholic family life never justifies abuse, coercion, violence, intimidation, or spiritual manipulation." />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-8 text-muted">
          No one should use faith, authority, marriage, parenting, or family roles to excuse abuse, violence, coercion,
          intimidation, or spiritual manipulation. If you or someone in your home is in danger, seek immediate help from
          emergency services, trusted local authorities, a domestic violence hotline, parish leadership, or qualified
          professionals.
        </p>
        <p className="mt-4 text-sm leading-8 text-muted">
          Daily Oratory is a prayer and formation resource, not an emergency service, counseling provider, legal advisor,
          or substitute for professional help.
        </p>
      </div>
    </section>
  );
}
