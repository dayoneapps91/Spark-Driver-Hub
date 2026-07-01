import { getArticleBySlug, getRelatedArticles } from "../lib/articles";
import GigMilesCTA from "./GigMilesCTA";

type ArticleTemplateProps = {
  slug: string;
};

const strongGigMilesCategories = new Set([
  "Mileage",
  "Taxes",
  "Expenses",
  "Earnings",
]);

const softGigMilesSlugs = new Set([
  "spark-peak-hours",
  "spark-slow-days",
  "how-spark-offers-work",
  "spark-shopping-orders-guide",
  "spark-curbside-orders-guide",
  "spark-shopping-vs-curbside-orders",
  "spark-driver-acceptance-rate",
]);

function shouldShowStrongGigMilesCTA(category: string) {
  return strongGigMilesCategories.has(category);
}

function shouldShowSoftGigMilesCTA(slug: string) {
  return softGigMilesSlugs.has(slug);
}

function SoftGigMilesCTA() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Driver recordkeeping tip
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
        Track your own Spark data
      </h2>
      <p className="mt-3 text-base leading-8 text-slate-700">
        The best way to improve your Spark decisions is to review your own
        mileage, earnings, expenses, shifts, and notes over time. GigMiles helps
        keep those records organized without turning every delivery day into
        complicated bookkeeping.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href="/gigmiles"
          className="inline-flex justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          See how GigMiles works
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.eduardo.sparkmileagetracker"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
        >
          Download on Google Play
        </a>
      </div>
    </section>
  );
}

export default function ArticleTemplate({ slug }: ArticleTemplateProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-950">
          Article not found
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          This article is not available yet.
        </p>
      </main>
    );
  }

  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const showStrongGigMilesCTA = shouldShowStrongGigMilesCTA(article.category);
  const showSoftGigMilesCTA =
    !showStrongGigMilesCTA && shouldShowSoftGigMilesCTA(article.slug);

  return (
    <main>
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <nav className="mb-8 text-sm font-medium text-slate-500">
          <a href="/" className="hover:text-blue-700">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/articles" className="hover:text-blue-700">
            Articles
          </a>
          <span className="mx-2">/</span>
          <span>{article.category}</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          {article.category}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-700">
          {article.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
          <span>Last updated: {article.lastUpdated}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-lg leading-8 text-slate-800">{article.intro}</p>
        </div>

        {article.quickAnswer && (
          <section className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Quick answer
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-800">
              {article.quickAnswer}
            </p>
          </section>
        )}

        {article.disclaimer && (
          <section className="mt-8 rounded-3xl border border-amber-100 bg-amber-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Important note
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              {article.disclaimer}
            </p>
          </section>
        )}

        <div className="mt-12 grid gap-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                {section.heading}
              </h2>

              <div className="mt-4 grid gap-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {(showStrongGigMilesCTA || showSoftGigMilesCTA) && (
          <div className="mt-12">
            {showStrongGigMilesCTA ? <GigMilesCTA /> : <SoftGigMilesCTA />}
          </div>
        )}

        {article.sources && article.sources.length > 0 && (
          <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Sources
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              These sources were used to keep this guide grounded in official or
              primary information where possible.
            </p>
            <ul className="mt-5 grid gap-3">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                  >
                    {source.label}
                  </a>
                  {source.note && (
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {source.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-bold text-slate-950">
            Related resources
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedArticles.map((related) => (
              <a
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {related.category}
                </p>
                <h3 className="mt-2 font-bold text-slate-950">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {related.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
