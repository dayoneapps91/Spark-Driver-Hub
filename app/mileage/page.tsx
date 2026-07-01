import ArticleCard from "../components/ArticleCard";
import GigMilesCTA from "../components/GigMilesCTA";
import PageHero from "../components/PageHero";

const mileageResources = [
  {
    title: "Best Mileage Tracker for Spark Drivers",
    description:
      "Learn what Spark drivers should look for in a mileage tracker and how GigMiles helps organize records.",
    href: "/articles/best-mileage-tracker-for-spark-drivers",
  },
  {
    title: "How Spark Drivers Track Mileage",
    description:
      "A practical guide to tracking miles for Spark deliveries, tax records, and real profit calculations.",
    href: "/articles/how-spark-drivers-track-mileage",
  },
  {
    title: "Spark Driver Mileage Log Guide",
    description:
      "Learn what a mileage log should include and why clean mileage records matter for Spark drivers.",
    href: "/articles/spark-driver-mileage-log-guide",
  },
  {
    title: "Can Spark Drivers Deduct Gas?",
    description:
      "Understand gas, mileage deductions, vehicle expenses, and keeping better tax records.",
    href: "/articles/can-spark-drivers-deduct-gas",
  },
  {
    title: "Spark Driver Expense Checklist",
    description:
      "Organize fuel, maintenance, repairs, phone costs, and other driver expense records.",
    href: "/articles/spark-driver-expense-checklist",
  },
  {
    title: "Track Miles with GigMiles",
    description:
      "Use GigMiles to organize mileage, expenses, earnings, shifts, and tax records in one place.",
    href: "/gigmiles",
  },
];

export default function MileagePage() {
  return (
    <main>
      <PageHero
        eyebrow="Mileage"
        title="Spark Driver Mileage Tracking"
        description="Mileage is one of the most important records for Walmart Spark drivers. Learn how to track miles, organize logs, and prepare better records throughout the year."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2 xl:grid-cols-3">
          {mileageResources.map((resource) => (
            <ArticleCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              href={resource.href}
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
