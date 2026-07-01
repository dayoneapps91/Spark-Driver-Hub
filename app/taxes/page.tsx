import ArticleCard from "../components/ArticleCard";
import GigMilesCTA from "../components/GigMilesCTA";
import PageHero from "../components/PageHero";

const taxResources = [
  {
    title: "Can Spark Drivers Deduct Gas?",
    description:
      "Understand gas, mileage deductions, vehicle expenses, and why clean records matter.",
    href: "/articles/can-spark-drivers-deduct-gas",
  },
  {
    title: "Spark Driver Tax Deductions Guide",
    description:
      "A beginner-friendly guide to common tax deduction categories Spark drivers should organize.",
    href: "/articles/spark-driver-tax-deductions",
  },
  {
    title: "Spark Driver Expense Checklist",
    description:
      "Organize fuel, maintenance, phone costs, supplies, and other driver expense records.",
    href: "/articles/spark-driver-expense-checklist",
  },
  {
    title: "Prepare for Tax Season",
    description:
      "Build a simple system before tax season instead of trying to rebuild records later.",
    href: "/articles/how-to-prepare-for-tax-season-as-a-spark-driver",
  },
  {
    title: "Mileage Log Guide",
    description:
      "Learn what a mileage log should include and why it matters for Spark drivers.",
    href: "/articles/spark-driver-mileage-log-guide",
  },
  {
    title: "Track Records with GigMiles",
    description:
      "Use GigMiles to organize mileage, expenses, earnings, shifts, and tax records.",
    href: "/gigmiles",
  },
];

export default function TaxesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Taxes"
        title="Spark Driver Tax Resources"
        description="Learn how to organize mileage, expenses, earnings, and records before tax season. These guides are educational and built for Walmart Spark drivers."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2 xl:grid-cols-3">
          {taxResources.map((resource) => (
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
