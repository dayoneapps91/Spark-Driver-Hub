import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Windshield Sun Shades for Spark Drivers | Spark Driver Hub",
  description:
    "Compare windshield sun shades for Spark drivers, including umbrella-style and retractable options for reducing parked-car heat.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "FLORICH 2026 Windshield Sunshade Umbrella",
    imageSrc: "/images/tools/best-windshield-sun-shades/florich.jpg",
    imageAlt: "FLORICH windshield sunshade umbrella",
    score: "9.5/10",
    bestFor: "Fast daily setup",
    amazonUrl: `https://www.amazon.com/dp/B0H7BRPLQL?tag=${affiliateTag}`,
    summary:
      "A 57-by-32-inch umbrella-style windshield shade designed for broad vehicle compatibility and quick use between delivery stops.",
    pros: ["Quick umbrella setup", "57 x 32 inch coverage", "Compact storage", "Broad vehicle fit"],
    cons: ["Fit still varies", "More moving parts"],
    sparkDriverNote:
      "Best for drivers who park repeatedly and want fast deployment.",
  },
  {
    rank: 2,
    badge: "Best Retractable Pick",
    title: "CARUMBRELLA Retractable Windshield Sun Shade",
    imageSrc: "/images/tools/best-windshield-sun-shades/carumbrella.jpg",
    imageAlt: "CARUMBRELLA retractable windshield sun shade",
    score: "9.3/10",
    bestFor: "Frequent parking",
    amazonUrl: `https://www.amazon.com/dp/B0H45MLXW1?tag=${affiliateTag}`,
    summary:
      "A retractable windshield shade designed for cars, trucks, and SUVs, aimed at quick coverage without repeatedly folding a large panel.",
    pros: ["Retractable design", "Broad compatibility", "Compact storage", "Fast repeated use"],
    cons: ["Newer design", "Fit depends on windshield"],
    sparkDriverNote:
      "Good for drivers who put the shade up several times during a shift.",
  },
  {
    rank: 3,
    badge: "Best Value",
    title: "Universal 57x30 Windshield Sun Shade Umbrella",
    imageSrc: "/images/tools/best-windshield-sun-shades/universal-umbrella.jpg",
    imageAlt: "universal 57 by 30 windshield sun shade umbrella",
    score: "8.9/10",
    bestFor: "Budget heat protection",
    amazonUrl: `https://www.amazon.com/dp/B091SW994N?tag=${affiliateTag}`,
    summary:
      "A simple 57-by-30-inch umbrella-style windshield shade with reflective material and compact storage.",
    pros: ["Simple operation", "Compact storage", "Reflective heat barrier", "Budget-friendly"],
    cons: ["Less refined fit", "Universal sizing may leave gaps"],
    sparkDriverNote:
      "Best if you want a basic umbrella shade without paying for extra features.",
  }
];

function WeatherGuideHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.26),transparent_32%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">Weather Protection</span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">Buying Guide</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">Best Windshield Sun Shades for Spark Drivers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">Reduce direct windshield sun and parked-car heat buildup with three shades chosen around quick setup, compact storage, and repeated use during delivery shifts.</p>
        </div>
        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Top Pick</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">FLORICH 2026 Windshield Sunshade Umbrella</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Score</p>
                <p className="mt-2 text-2xl font-black">9.5/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Best For</p>
                <p className="mt-2 text-lg font-black">Fast daily setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <BuyingGuideLayout>
      <WeatherGuideHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">Best Overall</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">FLORICH 2026 Windshield Sunshade Umbrella</h2>
          <p className="mt-3 leading-7 text-slate-300">A 57-by-32-inch umbrella-style windshield shade designed for broad vehicle compatibility and quick use between delivery stops.</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-5">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">What matters most</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Real weather protection</li>
            <li>• Easy everyday use</li>
            <li>• Compact vehicle storage</li>
            <li>• Good value for delivery work</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-amber-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">Driver-first note</p>
          <p className="mt-4 font-semibold leading-7">Weather gear should solve a real problem without becoming extra clutter. Keep the items you actually use accessible and stored where customer orders will not bury them.</p>
        </div>
      </section>

      <section className="space-y-8">
        {products.map((product) => (
          <ToolRecommendationCard key={product.title} {...product} />
        ))}
      </section>

      <ToolComparisonTable
        products={products.map((product) => ({
          rank: `#${product.rank}`,
          name: product.title,
          score: product.score,
          bestFor: product.bestFor,
          amazonUrl: product.amazonUrl,
        }))}
      />

      <section className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200/70 md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">How we picked</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Chosen around real delivery-driver weather problems.</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Protection</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">We prioritized products that directly address the weather problem named in the guide.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Delivery practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The picks are realistic to use during repeated stops, loading, driving, and customer drop-offs.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Storage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Each option is practical to keep in a delivery vehicle without taking over cargo space.</p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}