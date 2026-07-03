import Link from "next/link";

const guides = [
  {
    title: "Best Rain Gear for Delivery Drivers",
    eyebrow: "Rain Days",
    description: "Rain jackets, ponchos, and waterproof gear for drivers carrying groceries in wet weather.",
    href: "/tools/cold-rain-weather/best-rain-gear",
    status: "Coming Soon",
  },
  {
    title: "Best Winter Gloves for Drivers",
    eyebrow: "Cold Weather",
    description: "Gloves that balance warmth, grip, and phone use during cold delivery days.",
    href: "/tools/cold-rain-weather/best-winter-gloves",
    status: "Coming Soon",
  },
  {
    title: "Best Ice Scrapers and Snow Tools",
    eyebrow: "Vehicle Prep",
    description: "Scrapers, brushes, and small winter tools to keep your vehicle ready during cold mornings.",
    href: "/tools/cold-rain-weather/best-ice-scrapers",
    status: "Coming Soon",
  },
  {
    title: "Best Waterproof Shoes for Delivery",
    eyebrow: "Footwear",
    description: "Practical footwear options for rainy parking lots, wet walkways, and long delivery shifts.",
    href: "/tools/cold-rain-weather/best-waterproof-shoes",
    status: "Coming Soon",
  }
];

export default function ColdRainWeatherPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300">
            <Link href="/tools" className="transition hover:text-white">Tools</Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Cold & Rain Weather</span>
          </nav>

          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-white/10">
            Cold & Rain Weather
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            Cold and Rain Gear for Spark Drivers
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Rain gear, winter tools, gloves, and seasonal equipment that help drivers keep working when the weather gets difficult.
          </p>

          <div className="mt-8 hidden gap-4 md:grid md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Built For</p>
              <p className="mt-2 text-2xl font-black">Spark Drivers</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Focus</p>
              <p className="mt-2 text-2xl font-black">Weather ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">Buying Guides</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Pick the guide you need.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Practical buying guides built around real delivery-driver use, everyday value, and products that solve actual Spark driver problems.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide, index) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                  #{index + 1}
                </span>
                <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 ring-1 ring-orange-200/80">
                  {guide.status}
                </span>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-slate-400">{guide.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{guide.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{guide.description}</p>
              <div className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
                Open guide <span className="ml-2 transition duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200/70 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">Our Recommendation Philosophy</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Practical recommendations for real delivery work.</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          We recommend products that solve real problems for Spark drivers. Every guide focuses on value, durability, usefulness, and daily driver practicality instead of simply listing expensive products.
        </p>
        <p className="mt-6 text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> Spark Driver Hub participates in the Amazon Associates Program and may earn a commission from qualifying purchases at no additional cost to you.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/tools" className="font-bold text-orange-600 hover:underline">← Back to Driver Tools</Link>
      </div>
    </main>
  );
}
