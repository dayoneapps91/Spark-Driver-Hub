import Image from "next/image";
import Link from "next/link";
import GigMilesCTA from "./components/GigMilesCTA";
import Hero from "./components/Hero";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.eduardo.sparkmileagetracker";

const hubSections = [
  {
    title: "Spark Updates",
    description:
      "Follow practical Spark-related updates, newsletter summaries, and driver reminders.",
    href: "/updates",
  },
  {
    title: "Driver Guides",
    description:
      "Simple guides for staying organized, tracking work, and understanding Spark driving.",
    href: "/guides",
  },
  {
    title: "Driver Tools",
    description:
      "Browse practical gear recommendations for Spark drivers, including phone mounts, chargers, bags, and safety tools.",
    href: "/tools",
  },
  {
    title: "Spark Taxes",
    description:
      "Learn how to organize mileage, expenses, and records before tax season.",
    href: "/taxes",
  },
  {
    title: "Mileage Tracking",
    description:
      "Build a clean mileage tracking habit for Spark deliveries and gig work records.",
    href: "/mileage",
  },
];

const featuredArticles = [
  {
    title: "Best Mileage Tracker for Spark Drivers",
    description:
      "Learn what Spark drivers should look for in a mileage tracker and how GigMiles helps with records.",
    href: "/articles/best-mileage-tracker-for-spark-drivers",
  },
  {
    title: "Can Spark Drivers Deduct Gas?",
    description:
      "Understand the difference between gas expenses, mileage deductions, and keeping better tax records.",
    href: "/articles/can-spark-drivers-deduct-gas",
  },
  {
    title: "Spark Driver Tax Deductions Guide",
    description:
      "A beginner-friendly guide to common tax deduction categories Spark drivers should organize.",
    href: "/taxes",
  },
];

function PremiumCard({
  title,
  description,
  href,
  index,
}: {
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
        #{index + 1}
      </span>

      <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-4 text-base leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
        Open section
        <span className="ml-2 transition duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Start here
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Everything a Spark driver needs in one place
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            Use Spark Driver Hub to find updates, guides, tax help, mileage
            tracking resources, and tools built around real driver questions.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hubSections.map((item, index) => (
            <PremiumCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.22),transparent_30%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_440px]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">
                Powered by GigMiles
              </p>

              <div className="mt-5 flex items-center gap-4">
                <Image
                  src="/images/gigmiles/gigmileslogo.png"
                  alt="GigMiles app logo"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-sm"
                />

                <div>
                  <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                    Track your Spark miles before tax season.
                  </h2>

                  <p className="mt-2 text-sm font-bold text-emerald-300">
                    Free plan available for casual gig drivers.
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                GigMiles helps drivers organize mileage, shifts, earnings,
                expenses, and tax-ready records in one simple app. Use it for
                Spark, DoorDash, Uber, Instacart, Amazon Flex, medical courier
                work, and other gig apps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/gigmiles"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Learn about GigMiles
                </a>

                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-black text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Download on Google Play
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl ring-1 ring-white/15">
              <Image
                src="/images/gigmiles/gigmiles banner.png"
                alt="GigMiles app screenshots showing mileage, shift, earnings, and deductions tracking."
                width={1600}
                height={900}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Featured articles
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
              Popular Spark driver resources
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            Start with these guides, then explore the full taxes, mileage,
            updates, and articles sections.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredArticles.map((item, index) => (
            <PremiumCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <GigMilesCTA />
      </section>
    </main>
  );
}
