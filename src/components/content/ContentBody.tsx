import type { ReactNode } from "react";
import type { DailyOratoryContentRecord } from "@/lib/content";
import { getContentExcerpt } from "@/lib/search";
import type { ContentBlock } from "@/types/content";

export function ContentBody({ record }: { record: DailyOratoryContentRecord }) {
  return (
    <div className="content-prose resource-markdown mt-8 space-y-6">
      <p>{getContentExcerpt(record)}</p>
      {"body" in record && isContentBlockArray(record.body) ? <ContentBlocks blocks={record.body} /> : null}
      {"text" in record ? (
        <div className="prayer-card p-6">
          <p className="prayer-text">{record.text}</p>
          {record.response ? <p className="prayer-response mt-5">{record.response}</p> : null}
        </div>
      ) : null}
      {"mysteries" in record ? (
        <ContentSection title="Mysteries">
          <div className="grid gap-4 sm:grid-cols-2">
            {record.mysteries.map((mystery) => (
              <article key={mystery.id} className="card p-4">
                <p className="text-xs font-bold uppercase text-burgundy">{mystery.set}</p>
                <h2>{mystery.title}</h2>
                <p>{mystery.meditationPrompt}</p>
                {mystery.fruitOfTheMystery ? <p className="text-sm font-bold text-muted">Fruit: {mystery.fruitOfTheMystery}</p> : null}
              </article>
            ))}
          </div>
        </ContentSection>
      ) : null}
      {"chapletSteps" in record ? <ContentList title="Chaplet guide" items={record.chapletSteps} /> : null}
      {"preparationSteps" in record ? (
        <ContentList
          title="Preparation"
          items={record.preparationSteps.map((step) => (typeof step === "string" ? step : `${step.title}: ${step.description}`))}
        />
      ) : null}
      {"prompts" in record ? <ContentList title="Reflection prompts" items={record.prompts} /> : null}
      {"practices" in record && Array.isArray(record.practices) ? (
        <ContentList
          title="Practices"
          items={record.practices.map((practice) => `${practice.title}: ${practice.description}`)}
        />
      ) : null}
      {record.contentType === "examination-of-conscience" ? (
        <ContentSection title="Examination sections">
          {record.sections.map((section) => (
            <article key={section.id} className="card p-5">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <ul className="list-disc space-y-2">
                {section.prompts.map((prompt) => (
                  <li key={prompt.id}>{prompt.text}</li>
                ))}
              </ul>
            </article>
          ))}
        </ContentSection>
      ) : null}
      {"shortBiography" in record ? (
        <ContentSection title="Saint companion">
          <p>{record.shortBiography}</p>
          <ContentList title="Virtue focus" items={record.virtueFocus} />
          <blockquote>{record.prayerPrompt}</blockquote>
        </ContentSection>
      ) : null}
      {"modules" in record ? (
        <ContentSection title="Pathway modules">
          {record.modules.map((module) => (
            <article key={module.id} className="card p-5">
              <h2>{module.title}</h2>
              <p>{module.description}</p>
              <p className="text-sm font-bold text-burgundy">{module.practice}</p>
            </article>
          ))}
        </ContentSection>
      ) : null}
      {"reviewQuestions" in record ? <ContentList title="Review questions" items={record.reviewQuestions} /> : null}
      {"examenQuestions" in record ? <ContentList title="Examen questions" items={record.examenQuestions} /> : null}
      {"guidelines" in record && Array.isArray(record.guidelines) ? (
        <ContentList title="Room guidelines" items={record.guidelines.filter((item): item is string => typeof item === "string")} />
      ) : null}
      {"reverenceGuidelines" in record ? <ContentList title="Reverence guidelines" items={record.reverenceGuidelines} /> : null}
      {"steps" in record ? <ContentList title="Prayer room steps" items={record.steps.map((step) => `${step.title}: ${step.instruction}`)} /> : null}
      {"focusAreas" in record ? <ContentList title="Focus areas" items={record.focusAreas} /> : null}
    </div>
  );
}

function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "heading") return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
        if (block.type === "quote") {
          return (
            <blockquote key={`${block.text}-${index}`}>
              {block.text}
              {block.cite ? <cite className="mt-2 block text-sm not-italic">{block.cite}</cite> : null}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={`list-${index}`} className="list-disc space-y-2">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          return (
            <div key={`${block.title}-${index}`} className="card-parchment p-5">
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          );
        }
        if (block.type === "prayer") {
          return (
            <div key={`${block.text}-${index}`} className="prayer-card p-6">
              <p className="prayer-text">{block.text}</p>
              {block.response ? <p className="prayer-response mt-5">{block.response}</p> : null}
            </div>
          );
        }

        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      })}
    </>
  );
}

function isContentBlockArray(value: unknown): value is ContentBlock[] {
  return Array.isArray(value) && value.every((block) => typeof block === "object" && block !== null && "type" in block);
}

function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ContentSection title={title}>
      <ul className="list-disc space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ContentSection>
  );
}
