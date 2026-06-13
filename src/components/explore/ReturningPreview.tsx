import { SectionHeader } from "@/components/section-header";

export function ReturningPreview() {
  return (
    <section>
      <SectionHeader
        eyebrow="Returning"
        title="Returning After Time Away"
        summary="If you were baptized Catholic but have been away, you are not alone. Begin gently. A parish priest can help you know the next step, especially with Confession, Mass, and sacramental questions."
      />
      <a href="/returning" className="btn liturgical-button focus-ring mt-7 justify-center">
        Coming Home Guide
      </a>
    </section>
  );
}
