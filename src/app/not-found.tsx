import Link from "next/link";

export default function NotFound() {
  return (
    <div className="paper-texture">
      <section className="mx-auto grid min-h-[56vh] w-full max-w-3xl place-items-center px-5 py-16 text-center sm:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-burgundy">Not Found</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            This page is not in the library.
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            The resource may have moved during migration. Try the searchable library.
          </p>
          <Link
            href="/library"
            className="focus-ring mt-8 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-bold text-ivory hover:bg-navy-soft"
          >
            Search Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
