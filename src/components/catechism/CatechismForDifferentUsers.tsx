import { SectionHeader } from "@/components/section-header";
import { getCatechismDifferentUsers } from "@/lib/catechism";

export function CatechismForDifferentUsers() {
  const users = getCatechismDifferentUsers();

  return (
    <section>
      <SectionHeader
        eyebrow="Different users"
        title="How Different People Can Use It"
        summary="The Catechism serves different readers in different ways, from seekers to catechists."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => (
          <article key={user.title} className="card-parchment p-5">
            <h3 className="text-lg font-semibold text-navy">{user.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{user.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
