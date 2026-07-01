import ArticleCard from "../components/ArticleCard";
import GigMilesCTA from "../components/GigMilesCTA";
import PageHero from "../components/PageHero";

const updates = [
  {
    title: "Spark Driver Newsletter Summaries",
    description:
      "Monthly Spark newsletter breakdowns will be added here with simple explanations for drivers.",
    href: "/updates/june-2026",
  },
 {
  title: "Spark Platform Updates",
  description:
    "Follow practical updates related to Spark driving, app changes, driver reminders, and record keeping.",
  href: "/updates/platform",
},
  {
    title: "Tax and Mileage Reminders",
    description:
      "Important reminders about mileage tracking, expense records, and tax-season preparation.",
    href: "/taxes",
  },
  {
    title: "GigMiles Updates",
    description:
      "New GigMiles features, improvements, and tools for Spark drivers will be shared here.",
    href: "/gigmiles",
  },
  {
    title: "Driver Resource Updates",
    description:
      "New guides, checklists, and resources added to Spark Driver Hub.",
    href: "/guides",
  },
  {
    title: "Start with Mileage Tracking",
    description:
      "If you are new here, start by learning how Spark drivers can track mileage and records.",
    href: "/mileage",
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="Spark Driver Updates"
        description="Follow Spark-related updates, newsletter summaries, driver reminders, tax-season notes, and GigMiles updates in one place."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2 xl:grid-cols-3">
          {updates.map((update) => (
            <ArticleCard
              key={update.title}
              title={update.title}
              description={update.description}
              href={update.href}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <GigMilesCTA />
      </section>
    </main>
  );
}
