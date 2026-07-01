const categories = [
  {
    name: "Updates",
    href: "/updates",
  },
  {
    name: "Guides",
    href: "/guides",
  },
  {
    name: "Taxes",
    href: "/taxes",
  },
  {
    name: "Mileage",
    href: "/mileage",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];

export default function CategoryPills() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Explore Spark Driver Hub
        </p>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
