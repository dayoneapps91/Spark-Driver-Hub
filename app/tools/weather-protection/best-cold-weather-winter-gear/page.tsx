import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Cold Weather & Winter Gear for Spark Drivers | Spark Driver Hub",
  description:
    "Compare cold-weather and winter gear for Spark drivers, including thermal work gloves, a snow brush and ice scraper, and compact face protection.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "COOLJOB Waterproof Thermal Winter Work Gloves",
    imageSrc: "/images/tools/best-cold-weather-winter-gear/cooljob-gloves.jpg",
    imageAlt: "COOLJOB waterproof thermal winter gloves",
    score: "9.5/10",
    bestFor: "Cold-weather handling",
    amazonUrl: `https://www.amazon.com/dp/B0BXD454MT?tag=${affiliateTag}`,
    summary:
      "Microfleece-lined winter work gloves designed for warmth, water resistance, wind protection, and useful dexterity.",
    pros: ["Warm microfleece lining", "Water-resistant", "Windproof", "Good grip"],
    cons: ["Touchscreen use may vary", "Bulkier than thin gloves"],
    sparkDriverNote:
      "Best for drivers who need warm hands without losing too much handling ability.",
  },
  {
    rank: 2,
    badge: "Best Vehicle Winter Tool",
    title: "AstroAI 27-Inch Snow Brush & Ice Scraper",
    imageSrc: "/images/tools/best-cold-weather-winter-gear/astroai-scraper.jpg",
    imageAlt: "AstroAI detachable snow brush and ice scraper",
    score: "9.3/10",
    bestFor: "Frozen windshields",
    amazonUrl: `https://www.amazon.com/dp/B07V37GVY9?tag=${affiliateTag}`,
    summary:
      "A detachable 27-inch snow brush and ice scraper built for frost, ice, and snow removal.",
    pros: ["Brush and scraper in one", "Detachable", "Built for extreme cold", "Padded grip"],
    cons: ["Seasonal use only", "Takes some cargo space"],
    sparkDriverNote:
      "The most practical winter vehicle tool for clearing the car before a shift.",
  },
  {
    rank: 3,
    badge: "Best Face & Neck Protection",
    title: "AstroAI Windproof Fleece Balaclava",
    imageSrc: "/images/tools/best-cold-weather-winter-gear/astroai-balaclava.jpg",
    imageAlt: "AstroAI windproof fleece balaclava",
    score: "9.0/10",
    bestFor: "Wind and extreme cold",
    amazonUrl: `https://www.amazon.com/dp/B08GCCTZ6Q?tag=${affiliateTag}`,
    summary:
      "A stretch-fleece balaclava that can cover the face, neck, and head in cold, windy, snowy, or wet conditions.",
    pros: ["Face neck and head coverage", "Wind protection", "Multiple wearing styles", "Compact"],
    cons: ["Too warm for mild weather", "Not needed in warm climates"],
    sparkDriverNote:
      "Best as a compact extreme-cold backup for loading or roadside situations.",
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
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">Best Cold Weather & Winter Gear for Spark Drivers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">Prepare for freezing mornings, icy windshields, cold loading areas, and winter roadside problems with three products that cover hands, vehicle prep, and personal protection.</p>
        </div>
        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Top Pick</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">COOLJOB Waterproof Thermal Winter Work Gloves</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Score</p>
                <p className="mt-2 text-2xl font-black">9.5/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Best For</p>
                <p className="mt-2 text-lg font-black">Cold-weather handling</p>
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
          <h2 className="mt-3 text-2xl font-black tracking-tight">COOLJOB Waterproof Thermal Winter Work Gloves</h2>
          <p className="mt-3 leading-7 text-slate-300">Microfleece-lined winter work gloves designed for warmth, water resistance, wind protection, and useful dexterity.</p>
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