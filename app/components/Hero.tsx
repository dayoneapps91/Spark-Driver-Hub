import Image from "next/image";

const heroCategories = [
  { name: "Updates", href: "/updates" },
  { name: "Guides", href: "/guides" },
  { name: "Tools", href: "/tools" },
  { name: "Taxes", href: "/taxes" },
  { name: "Mileage", href: "/mileage" },
  { name: "Articles", href: "/articles" },
];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <Image
                src="/images/gigmiles/gigmileslogo.png"
                alt="GigMiles"
                width={46}
                height={46}
                className="rounded-2xl shadow-lg shadow-slate-950/20"
              />

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                  Powered by
                </p>

                <p className="text-sm font-black text-blue-200">GigMiles</p>
              </div>
            </div>

            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
              Independent Spark driver resource
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Spark Driver Hub
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Updates, taxes, mileage tracking, earnings tools, and resources
              for Walmart Spark drivers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/gigmiles"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Track miles with GigMiles
              </a>

              <a
                href="/guides"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-black text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Browse Spark guides
              </a>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Explore by topic
              </p>

              <div className="flex flex-wrap gap-3">
                {heroCategories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden rounded-[2rem] bg-white/10 p-5 shadow-2xl ring-1 ring-white/15 backdrop-blur md:block">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Built for drivers who want better records
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-3xl bg-white p-5 text-slate-950 shadow-lg shadow-slate-950/10">
                <h2 className="font-black">Mileage tracking</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keep cleaner mileage records for your Spark driving.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 text-slate-950 shadow-lg shadow-slate-950/10">
                <h2 className="font-black">Tax preparation</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn what records drivers should organize before tax season.
                </p>
              </div>

              <div className="rounded-3xl bg-orange-400 p-5 text-slate-950 shadow-lg shadow-slate-950/10">
                <h2 className="font-black">Driver updates</h2>

                <p className="mt-2 text-sm leading-6 text-slate-900">
                  Follow Spark-related updates, guides, and practical resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
