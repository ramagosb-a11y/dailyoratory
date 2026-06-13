import { SectionHeader } from "@/components/section-header";

export function OciaPreview() {
  return (
    <section>
      <SectionHeader
        eyebrow="OCIA"
        title="Thinking About Becoming Catholic?"
        summary="OCIA is a parish-based journey of inquiry, formation, prayer, discernment, and sacramental preparation. You can begin by asking questions and contacting a local parish."
      />
      <a href="/ocia" className="btn liturgical-button focus-ring mt-7 justify-center">
        Learn About OCIA
      </a>
    </section>
  );
}
