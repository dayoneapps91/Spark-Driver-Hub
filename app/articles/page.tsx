import ArticleList from "../components/ArticleList";
import PageHero from "../components/PageHero";
import GigMilesCTA from "../components/GigMilesCTA";

export default function ArticlesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Knowledge Base"
        title="Spark Driver Articles"
        description="Browse practical articles about mileage tracking, taxes, earnings, expenses, GigMiles, and staying organized as a Walmart Spark driver."
      />

      <ArticleList />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <GigMilesCTA />
      </section>
    </main>
  );
}
