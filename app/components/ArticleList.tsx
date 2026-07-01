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
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-20 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:mb-24 sm:p-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-blue-700 sm:text-left">
            Browse by topic
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name.toLowerCase().replaceAll(" ", "-")}`}
                className="w-[calc(50%-0.375rem)] rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:w-auto sm:px-5 sm:py-2"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {categories.map((category) => (
            <section
              key={category.name}
              id={category.name.toLowerCase().replaceAll(" ", "-")}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm sm:p-7"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  {category.name}
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
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
      </div>
    </section>
  );
}
