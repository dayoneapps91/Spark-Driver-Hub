import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Rain & Waterproof Delivery Gear for Spark Drivers | Spark Driver Hub",
  description:
    "Compare rain and waterproof delivery gear for Spark drivers, including a reusable rain jacket, compact emergency ponchos, and waterproof shoe covers.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Outdoor Ventures Waterproof Rain Jacket",
    imageSrc: "/images/tools/best-rain-waterproof-delivery-gear/outdoor-ventures.jpg",
    imageAlt: "Outdoor Ventures waterproof rain jacket",
    score: "9.5/10",
    bestFor: "Regular rainy shifts",
    amazonUrl: `https://www.amazon.com/dp/B0HD17PC62?tag=${affiliateTag}`,
    summary:
      "A lightweight waterproof hooded shell with breathable construction, mesh lining, underarm vents, and zippered pockets.",
    pros: ["Waterproof shell", "Breathable venting", "Zippered pockets", "Reusable"],
    cons: ["Costs more than a poncho", "Sizing matters"],
    sparkDriverNote:
      "Best for drivers who work through rain often enough to justify a real reusable jacket.",
  },
  {
    rank: 2,
    badge: "Best Compact Backup",
    title: "Hitituto Extra-Long Emergency Rain Ponchos",
    imageSrc: "/images/tools/best-rain-waterproof-delivery-gear/hitituto-ponchos.jpg",
    imageAlt: "Hitituto extra long emergency rain ponchos",
    score: "9.2/10",
    bestFor: "Glove-box rain backup",
    amazonUrl: `https://www.amazon.com/dp/B0F93L282Q?tag=${affiliateTag}`,
    summary:
      "Lightweight individually packaged ponchos that take very little storage space and are easy to keep in the vehicle.",
    pros: ["Very compact", "Individually packaged", "Easy backup", "Extra-long coverage"],
    cons: ["Less durable", "Not ideal for daily use"],
    sparkDriverNote:
      "Best as the rain gear you always keep in the car.",
  },
  {
    rank: 3,
    badge: "Best Footwear Protection",
    title: "RINJOY Reusable Waterproof Shoe Covers",
    imageSrc: "/images/tools/best-rain-waterproof-delivery-gear/rinjoy-shoe-covers.jpg",
    imageAlt: "RINJOY reusable waterproof shoe covers",
    score: "8.9/10",
    bestFor: "Wet parking lots",
    amazonUrl: `https://www.amazon.com/dp/B0FKYW9M1F?tag=${affiliateTag}`,
    summary:
      "Reusable waterproof PVC overshoes designed to protect normal footwear from rain, puddles, mud, and wet walkways.",
    pros: ["Reusable waterproof design", "Protects normal shoes", "Portable", "Anti-slip focused sole"],
    cons: ["Fit depends on shoe size", "Less comfortable than rain boots"],
    sparkDriverNote:
      "Useful for drivers who rarely need dedicated rain boots.",
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
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">Best Rain & Waterproof Delivery Gear for Spark Drivers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">Stay drier while moving groceries through wet parking lots, sidewalks, and apartment complexes with three products that cover body protection, emergency backup, and footwear.</p>
        </div>
        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Top Pick</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Outdoor Ventures Waterproof Rain Jacket</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Score</p>
                <p className="mt-2 text-2xl font-black">9.5/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Best For</p>
                <p className="mt-2 text-lg font-black">Regular rainy shifts</p>
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
          <h2 className="mt-3 text-2xl font-black tracking-tight">Outdoor Ventures Waterproof Rain Jacket</h2>
          <p className="mt-3 leading-7 text-slate-300">A lightweight waterproof hooded shell with breathable construction, mesh lining, underarm vents, and zippered pockets.</p>
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