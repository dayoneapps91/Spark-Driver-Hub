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
    <main>
      <PageHero
        eyebrow="Newsletter Archive"
        title="Spark Driver Newsletter Summaries"
        description="Browse every monthly Spark Driver newsletter summary with practical explanations and key takeaways for drivers."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2">
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
