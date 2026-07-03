import Link from "next/link";
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
    <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.22)] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.24),transparent_32%)]" />
      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-200">
          Driver recordkeeping tip
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
          Track your own Spark data
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
          The best way to improve your Spark decisions is to review your own
          mileage, earnings, expenses, shifts, and notes over time. GigMiles helps
          keep those records organized without turning every delivery day into
          complicated bookkeeping.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/gigmiles"
            className="inline-flex justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-600"
          >
            See how GigMiles works
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.eduardo.sparkmileagetracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
          >
            Download on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ArticleTemplate({ slug }: ArticleTemplateProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black text-slate-950">
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
    <main className="bg-slate-50">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-orange-400 via-amber-300 to-blue-500" />

      <article>
        <header className="relative isolate overflow-hidden bg-slate-950">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.30),transparent_34%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]" />

          <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16 lg:py-20">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <Link href="/articles" className="transition hover:text-white">
                Articles
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{article.category}</span>
            </nav>

            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100 backdrop-blur">
              {article.category}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
              {article.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur">
                Updated {article.lastUpdated}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur">
                {article.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
            <div className="min-w-0">
              <section className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:p-8">
                <p className="text-lg leading-8 text-slate-800 sm:text-xl sm:leading-9">
                  {article.intro}
                </p>
              </section>

              {article.quickAnswer && (
                <section className="mt-8 rounded-[2rem] bg-emerald-50 p-6 shadow-[0_18px_60px_rgba(6,95,70,0.08)] ring-1 ring-emerald-100 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                    Quick answer
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-800">
                    {article.quickAnswer}
                  </p>
                </section>
              )}

              {article.disclaimer && (
                <section className="mt-8 rounded-[2rem] bg-amber-50 p-6 shadow-[0_18px_60px_rgba(146,64,14,0.08)] ring-1 ring-amber-100 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">
                    Important note
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {article.disclaimer}
                  </p>
                </section>
              )}

              <div className="mt-12 grid gap-12">
                {article.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    className="rounded-[2rem] bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8"
                  >
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                        {index + 1}
                      </div>
                      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="grid gap-5">
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
                <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                    Research
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    Sources
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    These sources were used to keep this guide grounded in official or
                    primary information where possible.
                  </p>
                  <ul className="mt-6 grid gap-4">
                    {article.sources.map((source) => (
                      <li
                        key={source.url}
                        className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70"
                      >
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-black text-blue-700 transition hover:text-orange-600"
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
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[2rem] bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                  In this guide
                </p>
                <div className="mt-4 grid gap-3">
                  {article.sections.slice(0, 6).map((section) => (
                    <p
                      key={section.heading}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold leading-6 text-slate-700"
                    >
                      {section.heading}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                Keep reading
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Related resources
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="group rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                  {related.category}
                </p>
                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950 group-hover:text-orange-700">
                  {related.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
