import { ChurchFatherCard } from "@/components/church-fathers/ChurchFatherCard";
import type { ChurchFather } from "@/types/churchFathers";

export function ChurchFatherGroupSection({
  id,
  title,
  description,
  fathers,
}: {
  id: string;
  title: string;
  description: string;
  fathers: ChurchFather[];
}) {
  return (
    <section id={id}>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Groups of Fathers</p>
          <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{description}</p>
        </div>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fathers.map((father) => (
          <ChurchFatherCard key={father.id} father={father} />
        ))}
      </div>
    </section>
  );
}
