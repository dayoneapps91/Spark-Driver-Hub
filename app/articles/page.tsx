import ArticleList from "../components/ArticleList";
import GigMilesCTA from "../components/GigMilesCTA";

export default function ArticlesPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Knowledge Base
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
              Spark Driver Articles
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Browse practical articles about mileage tracking, taxes, earnings,
              expenses, GigMiles, and staying organized as a Walmart Spark
              driver.
            </p>

            <div className="mt-8 hidden gap-4 md:grid md:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Topics
                </p>
                <p className="mt-2 text-2xl font-black">Driver resources</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 text-2xl font-black">Practical help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleList />

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <GigMilesCTA />
      </section>
    </main>
  );
}
