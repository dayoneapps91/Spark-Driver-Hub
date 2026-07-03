import Link from "next/link";

const guides = [
  {
    title: "Best Car Trunk Organizers",
    eyebrow: "Live Guide",
    description:
      "Trunk organizers that keep grocery bags, delivery supplies, and everyday gear from sliding around during Spark shifts.",
    href: "/tools/car-organization/best-car-trunk-organizers",
    status: "Live",
  },
  {
    title: "Best Seat Organizers",
    eyebrow: "Coming Soon",
    description:
      "Backseat and front-seat organizers for drivers who keep supplies, cables, water, and personal items inside the cabin.",
    href: "/tools/car-organization/best-seat-organizers",
    status: "Soon",
  },
  {
    title: "Best Storage Bins for Delivery Drivers",
    eyebrow: "Coming Soon",
    description:
      "Simple bins and collapsible crates for separating grocery orders, cleaning supplies, and emergency items.",
    href: "/tools/car-organization/best-storage-bins",
    status: "Soon",
  },
  {
    title: "Best Car Trash Cans",
    eyebrow: "Coming Soon",
    description:
      "Small trash solutions that help keep receipts, wrappers, wipes, and everyday driving mess under control.",
    href: "/tools/car-organization/best-car-trash-cans",
    status: "Soon",
  },
  {
    title: "Best Cable Organizers",
    eyebrow: "Coming Soon",
    description:
      "Cable clips, pouches, and small accessories that keep chargers and cords from turning into clutter.",
    href: "/tools/car-organization/best-cable-organizers",
    status: "Soon",
  },
];

export default function CarOrganizationPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]" />

        <div className="relative max-w-3xl">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Driver Tools
            </span>

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-white/15">
              Car Organization
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
            Keep your delivery setup cleaner.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical organizers for Spark drivers who want fewer sliding bags,
            less trunk clutter, cleaner storage, and a vehicle setup that works
            better during busy delivery days.
          </p>

          <div className="mt-8 hidden gap-4 md:grid md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 text-2xl font-black">Cleaner trunk</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                First Guide
              </p>
              <p className="mt-2 text-2xl font-black">Trunk organizers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Buying Guides
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Organize your car for delivery work.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            These guides focus on practical storage products that help Spark
            drivers keep bags, supplies, cables, and emergency gear easier to manage.
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

              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                {guide.eyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                {guide.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {guide.description}
              </p>

              <div className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
                Open guide
                <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200/70 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
          Our Recommendation Philosophy
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
          Practical storage for real delivery work.
        </h2>

        <p className="mt-4 text-base leading-8 text-slate-600">
          We focus on organizers that solve everyday driver problems: sliding
          grocery bags, loose cleaning supplies, tangled cables, scattered receipts,
          and emergency gear that is hard to find when needed.
        </p>

        <p className="mt-6 text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> Spark Driver Hub participates in
          the Amazon Associates Program and may earn a commission from qualifying
          purchases at no additional cost to you.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/tools" className="font-bold text-orange-600 hover:underline">
          ← Back to Driver Tools
        </Link>
      </div>
    </main>
  );
}
