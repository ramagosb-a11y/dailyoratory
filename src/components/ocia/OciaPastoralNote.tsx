import { SectionHeader } from "@/components/section-header";

export function OciaPastoralNote() {
  return (
    <section>
      <SectionHeader
        eyebrow="Pastoral note"
        title="A Gentle Word for Seekers"
        summary="If you are nervous, uncertain, or carrying a complicated story, you are not alone."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          Many people begin OCIA with questions, mixed feelings, or practical concerns. The Church's
          hope is not to rush you, but to help you encounter Jesus Christ in truth, mercy, prayer,
          and the life of the parish.
        </p>
      </div>
    </section>
  );
}
