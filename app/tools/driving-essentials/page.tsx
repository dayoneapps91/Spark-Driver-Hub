import Link from "next/link";

const guides = [
  {
    title: "Best Phone Mounts",
    eyebrow: "Most Popular",
    description:
      "Secure dashboard, windshield, vent, and MagSafe mounts built for delivery shifts, navigation, and constant stops.",
    href: "/tools/driving-essentials/best-phone-mounts",
    status: "Live",
  },
  {
    title: "Best Car Chargers",
    eyebrow: "Coming Soon",
    description:
      "Fast car chargers and adapters that keep your phone powered while running Spark, GPS, music, and messages.",
    href: "/tools/driving-essentials/best-car-chargers",
    status: "Soon",
  },
  {
    title: "Best Power Banks",
    eyebrow: "Coming Soon",
    description:
      "Portable battery packs for long delivery days, emergencies, and drivers who do not want battery anxiety.",
    href: "/tools/driving-essentials/best-power-banks",
    status: "Soon",
  },
  {
    title: "Best USB-C Cables",
    eyebrow: "Coming Soon",
    description:
      "Durable charging cables that can handle repeated plugging, unplugging, and everyday vehicle use.",
    href: "/tools/driving-essentials/best-usb-c-cables",
    status: "Soon",
  },
  {
    title: "Charging Accessories",
    eyebrow: "Coming Soon",
    description:
      "Cable organizers, extra adapters, and small accessories that make your driving setup cleaner and easier.",
    href: "/tools/driving-essentials/charging-accessories",
    status: "Soon",
  },
];

export default function DrivingEssentialsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.35),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.22),transparent_30%)]" />

        <div className="relative max-w-3xl">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Driver Tools
            </span>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-white/15">
              Driving Essentials
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
            Driving Essentials for Spark Drivers
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical gear that helps delivery drivers keep navigation visible,
            devices charged, and daily routes more organized without wasting
            money on random accessories.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Built For
              </p>
              <p className="mt-2 text-2xl font-black">Delivery days</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 text-2xl font-black">Useful gear</p>
            </div>

            <div className="rounded-3xl bg-orange-400 p-5 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.18em]">
                First Guide
              </p>
              <p className="mt-2 text-2xl font-black">Phone mounts</p>
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
              The best gear for Spark drivers.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            Each guide is built around real delivery use: stability, charging,
            vehicle setup, route comfort, and whether the product is worth buying.
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
    </main>
  );
}
