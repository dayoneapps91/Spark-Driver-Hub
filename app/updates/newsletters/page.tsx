import ArticleCard from "../../components/ArticleCard";
import PageHero from "../../components/PageHero";

const newsletters = [
  {
    title: "July 2026 Spark Driver Newsletter Summary",
    description:
      "Express Shopping updates, Resource Center changes, Independence Day demand, summer safety, and more.",
    href: "/updates/july-2026",
  },
  {
    title: "June 2026 Spark Driver Newsletter Summary",
    description:
      "Father's Day demand, batched shopping orders, confirmed tips, summer delivery safety, and sweepstakes.",
    href: "/updates/june-2026",
  },
];

export default function NewsletterArchivePage() {
  return (
    <main className="bg-slate-50">
      <PageHero
        eyebrow="Newsletter Archive"
        title="Spark Driver Newsletter Summaries"
        description="Browse monthly Spark Driver newsletter summaries with practical explanations, driver takeaways, and quick notes about what changed."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Monthly Digest
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950">
              Latest summaries
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Each summary turns the official newsletter into practical notes drivers can scan fast.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {newsletters.map((newsletter) => (
            <ArticleCard
              key={newsletter.href}
              title={newsletter.title}
              description={newsletter.description}
              href={newsletter.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
