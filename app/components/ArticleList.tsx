import { articles } from "../lib/articles";
import ArticleCard from "./ArticleCard";

const categoryOrder = [
  "Spark Guides",
  "Taxes",
  "Mileage",
  "Earnings",
  "Expenses",
  "Comparison",
] as const;

const categoryDescriptions: Record<string, string> = {
  "Spark Guides": "Requirements, waitlist, background checks, orders, deactivation, and driver basics.",
  Taxes: "Tax basics, deductions, records, and year-round preparation.",
  Mileage: "Mileage logs, business miles, and tracking habits.",
  Earnings: "Real profit, pay per mile, and order decisions.",
  Expenses: "Common costs worth organizing throughout the year.",
  Comparison: "Compare GigMiles with other tracking tools.",
};

export default function ArticleList() {
  const categories = categoryOrder
    .map((category) => ({
      name: category,
      articles: articles.filter((article) => article.category === category),
    }))
    .filter((category) => category.articles.length > 0);

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-8 md:px-8 md:pb-12 lg:px-10">
      <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
          Browse by Topic
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-16">
        {categories.map((category) => (
          <section
            key={category.name}
            id={category.name.toLowerCase().replaceAll(" ", "-")}
            className="scroll-mt-24"
          >
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                  {category.name}
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                  {category.name}
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-slate-600">
                {categoryDescriptions[category.name]}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  description={article.description}
                  href={`/articles/${article.slug}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
