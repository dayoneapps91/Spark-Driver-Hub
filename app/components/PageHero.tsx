type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          {eyebrow}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
          {description}
        </p>
      </div>
    </section>
  );
}
