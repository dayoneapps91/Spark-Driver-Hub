import ArticleCard from "../components/ArticleCard";
import GigMilesCTA from "../components/GigMilesCTA";
import PageHero from "../components/PageHero";

const updates = [
  {
    title: "📬 Monthly Newsletter Summaries",
    description:
      "Browse monthly Spark Driver newsletter summaries with practical explanations and key highlights for drivers.",
    href: "/updates/newsletters",
  },
  {
    title: "⚡ Latest Spark Platform Updates",
    description:
      "Follow important Spark app changes, Express Shopping updates, driver reminders, and platform announcements.",
    href: "/updates/platform",
  },
  {
    title: "📋 Tax and Mileage Reminders",
    description:
      "Important reminders about mileage tracking, expense records, and tax-season preparation.",
    href: "/taxes",
  },
  {
    title: "🚗 GigMiles Updates",
    description:
      "New GigMiles features, improvements, and tools for Spark drivers.",
    href: "/gigmiles",
  },
  {
    title: "📚 Driver Resource Updates",
    description:
      "New guides, checklists, and educational resources added to Spark Driver Hub.",
    href: "/guides",
  },
  {
    title: "📍 Start with Mileage Tracking",
    description:
      "New to Spark? Learn how to track mileage, expenses, and earnings correctly from day one.",
    href: "/mileage",
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="Spark Driver Updates"
        description="Follow Spark-related updates, monthly newsletter summaries, platform changes, driver reminders, tax-season notes, and GigMiles updates in one place."
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