import Image from "next/image";

const heroCategories = [
  { name: "Updates", href: "/updates" },
  { name: "Guides", href: "/guides" },
  { name: "Taxes", href: "/taxes" },
  { name: "Mileage", href: "/mileage" },
  { name: "Articles", href: "/articles" },
];

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/images/gigmiles/gigmileslogo.png"
              alt="GigMiles"
              width={44}
              height={44}
              className="rounded-xl shadow-sm"
            />

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Powered by
              </p>

              <p className="text-sm font-semibold text-blue-700">
                GigMiles
              </p>
            </div>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Independent Spark driver resource
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Spark Driver Hub
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            Updates, taxes, mileage tracking, earnings tools, and resources
            for Walmart Spark drivers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/gigmiles"
              className="rounded-full bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Track miles with GigMiles
            </a>

            <a
              href="/guides"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Browse Spark guides
            </a>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Explore by topic
            </p>

            <div className="flex flex-wrap gap-3">
              {heroCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Built for drivers who want better records
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-950">
                Mileage tracking
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep cleaner mileage records for your Spark driving.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-950">
                Tax preparation
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn what records drivers should organize before tax season.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-950">
                Driver updates
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Follow Spark-related updates, guides, and practical resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}