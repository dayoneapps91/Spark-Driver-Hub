import GigMilesCTA from "../components/GigMilesCTA";
import GuideCategories from "../components/GuideCategories";
import PageHero from "../components/PageHero";

export default function GuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Guides"
        title="Spark Driver Guides"
        description="Browse beginner-friendly guides covering mileage, taxes, earnings, expenses, vehicles, and GigMiles."
      />

      <GuideCategories />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <GigMilesCTA />
      </section>
    </main>
  );
}
