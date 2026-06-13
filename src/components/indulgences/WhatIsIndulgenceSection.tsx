import { ExternalSourceLink, IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function WhatIsIndulgenceSection() {
  return (
    <IndulgenceSection
      id="what-is-an-indulgence"
      eyebrow="Foundations"
      title="What is an indulgence?"
      summary="A simple Catholic explanation rooted in mercy, confession, purification, and communion with the Church."
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr]">
        <article className="content-card p-6 sm:p-8">
          <p className="text-base leading-8 text-navy">
            An indulgence is the remission before God of temporal punishment due to sins whose guilt
            has already been forgiven.
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
            <p>
              In plain language: sin brings both guilt and consequences. Confession forgives guilt
              through sacramental absolution. God also heals and purifies the remaining disorder caused
              by sin.
            </p>
            <p>
              Indulgences are connected to repentance, prayer, charity, and communion with the Church.
              They are not buying forgiveness. They do not replace confession. They are meant to draw
              the soul deeper into conversion, mercy, and holiness.
            </p>
            <p>
              For the formal doctrine, consult{" "}
              <ExternalSourceLink
                href="https://www.vatican.va/content/paul-vi/en/apost_constitutions/documents/hf_p-vi_apc_01011967_indulgentiarum-doctrina.html"
                label="Indulgentiarum Doctrina"
              />
              ,{" "}
              <ExternalSourceLink
                href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/x_indulgences.html"
                label="the Catechism"
              />
              , and the Manual of Indulgences.
            </p>
          </div>
        </article>
        <NotePanel title="Keep this clear">
          <p>
            Indulgences concern temporal punishment due to sin after guilt has been forgiven. They do
            not replace confession, and they do not guarantee a spiritual outcome that only God fully
            sees.
          </p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
