import Link from "next/link";
import GigMilesCTA from "../components/GigMilesCTA";

const updates = [
  {
    title: "Monthly Newsletter Summaries",
    label: "Newsletters",
    description:
      "Browse monthly Spark Driver newsletter summaries with practical explanations and key highlights for drivers.",
    href: "/updates/newsletters",
  },
  {
    title: "Latest Spark Platform Updates",
    label: "Platform",
    description:
      "Follow important Spark app changes, Express Shopping updates, driver reminders, and platform announcements.",
    href: "/updates/platform",
  },
  {
    title: "Tax and Mileage Reminders",
    label: "Records",
    description:
      "Important reminders about mileage tracking, expense records, and tax-season preparation.",
    href: "/taxes",
  },
  {
    title: "GigMiles Updates",
    label: "App Updates",
    description:
      "New GigMiles features, improvements, and tools for Spark drivers.",
    href: "/gigmiles",
  },
  {
    title: "Driver Resource Updates",
    label: "Resources",
    description:
      "New guides, checklists, and educational resources added to Spark Driver Hub.",
    href: "/guides",
  },
  {
    title: "Start with Mileage Tracking",
    label: "Start Here",
    description:
      "New to Spark? Learn how to track mileage, expenses, and earnings correctly from day one.",
    href: "/mileage",
  },
];

export default function UpdatesPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-slate-950 p-8 text-white shadow-[0_36px_140px_rgba(15,23,42,0.28)] md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-white/10">
                Spark Driver Updates
              </span>

              <h1 className="mt-8 max-w-3xl text-5xl font-black tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                News, reminders, and driver updates in one clean place.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Follow monthly Spark Driver newsletter summaries, platform changes,
                tax-season reminders, GigMiles updates, and new driver resources.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Best For
                </p>
                <p className="mt-3 text-3xl font-black tracking-tight">Staying ready</p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Covers
                </p>
                <p className="mt-3 text-3xl font-black tracking-tight">App + earnings</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Browse Updates
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
                Pick the update section you need.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600">
              Built for quick scanning: what changed, why it matters, and what drivers
              should pay attention to next.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update, index) => (
              <Link
                key={update.title}
                href={update.href}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[2.25rem] bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 ring-1 ring-orange-200/80">
                    {update.label}
                  </span>
                </div>

                <h3 className="relative mt-7 text-2xl font-black tracking-[-0.03em] text-slate-950">
                  {update.title}
                </h3>

                <p className="relative mt-4 flex-1 text-base leading-8 text-slate-600">
                  {update.description}
                </p>

                <div className="relative mt-8 inline-flex w-fit items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
                  Open section
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
        <GigMilesCTA />
      </section>
    </main>
  );
}
