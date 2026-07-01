import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import GigMilesCTA from "./components/GigMilesCTA";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";

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

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <SectionTitle
          eyebrow="Start here"
          title="Everything a Spark driver needs in one place"
          description="Use Spark Driver Hub to find updates, guides, tax help, mileage tracking resources, and tools built around real driver questions."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hubSections.map((item) => (
            <ArticleCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_440px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
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
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Track your Spark miles before tax season.
                </h2>
                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  Free plan available for casual gig drivers.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              GigMiles helps drivers organize mileage, shifts, earnings,
              expenses, and tax-ready records in one simple app. Use it for
              Spark, DoorDash, Uber, Instacart, Amazon Flex, medical courier
              work, and other gig apps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/gigmiles"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800"
              >
                Learn about GigMiles
              </a>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Download on Google Play
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-3 shadow-sm">
            <Image
              src="/images/gigmiles/gigmiles banner.png"
              alt="GigMiles app screenshots showing mileage, shift, earnings, and deductions tracking."
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
          <SectionTitle
            eyebrow="Featured articles"
            title="Popular Spark driver resources"
            description="Start with these guides, then explore the full taxes, mileage, updates, and articles sections."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((item) => (
              <ArticleCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <GigMilesCTA />
      </section>
    </main>
  );
}
