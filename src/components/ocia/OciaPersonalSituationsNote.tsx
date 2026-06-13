import { SectionHeader } from "@/components/section-header";

export function OciaPersonalSituationsNote() {
  return (
    <section>
      <SectionHeader
        eyebrow="Pastoral questions"
        title="Personal Situations and Pastoral Questions"
        summary="Some people entering OCIA have questions about marriage, previous marriages, annulments, baptismal records, family concerns, or personal circumstances. These questions are common and should be discussed with a parish priest, deacon, or OCIA coordinator."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Please bring these questions to your parish early. The Church wants to walk with you
          truthfully and pastorally.
        </p>
      </div>
    </section>
  );
}
