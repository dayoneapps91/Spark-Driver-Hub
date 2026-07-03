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
    <main>
      <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Updates
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
              Spark Driver Updates
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Follow Spark-related updates, monthly newsletter summaries,
              platform changes, driver reminders, tax-season notes, and
              GigMiles updates in one place.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Includes
                </p>
                <p className="mt-2 text-2xl font-black">Spark news</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Helpful For
                </p>
                <p className="mt-2 text-2xl font-black">Driver planning</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Browse Updates
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                Important Spark driver resources.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600">
              Use these sections to follow monthly summaries, platform changes,
              driver reminders, and resources that help you stay organized.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update, index) => (
              <Link
                key={update.title}
                href={update.href}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                    #{index + 1}
                  </span>

                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 ring-1 ring-orange-200/80">
                    {update.label}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                  {update.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {update.description}
                </p>

                <div className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
                  Open section
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <GigMilesCTA />
      </section>
    </main>
  );
}
