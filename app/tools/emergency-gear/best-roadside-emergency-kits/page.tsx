import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Roadside Emergency Kits for Spark Drivers | Spark Driver Hub",
  description:
    "Compare roadside emergency kits for Spark drivers with jumper cables, warning and visibility gear, flashlights, first aid, tools, and tire support.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "First Secure 90-Piece Roadside Emergency Kit",
    imageSrc: "/images/tools/best-roadside-emergency-kits/first-secure.jpg",
    imageAlt: "First Secure 90 piece roadside emergency kit",
    score: "9.6/10",
    bestFor: "Complete roadside coverage",
    amazonUrl: `https://www.amazon.com/dp/B01C96AFWU?tag=${affiliateTag}`,
    summary:
      "A broad roadside kit combining jumper cables, an air compressor, first-aid supplies, a tow rope, warning triangle, flashlight, and vehicle emergency tools.",
    pros: [
      "Includes tire inflator",
      "Jumper cables included",
      "Visibility and first-aid gear",
      "Broad mix of roadside tools",
    ],
    cons: [
      "Larger than minimalist kits",
      "Some owners may already carry duplicate tools",
    ],
    sparkDriverNote:
      "The best fit for drivers who want one bag covering several common roadside problems instead of assembling individual items.",
  },
  {
    rank: 2,
    badge: "Best Visibility-Focused Kit",
    title: "Always Prepared 125-Piece Premium Roadside Kit",
    imageSrc: "/images/tools/best-roadside-emergency-kits/always-prepared.jpg",
    imageAlt: "Always Prepared 125 piece roadside emergency kit",
    score: "9.4/10",
    bestFor: "Visibility and first aid",
    amazonUrl: `https://www.amazon.com/dp/B01CYPMTZC?tag=${affiliateTag}`,
    summary:
      "A 125-piece kit with jumper cables, first-aid supplies, a reflective safety vest, light sticks, tools, and other roadside essentials.",
    pros: [
      "Reflective visibility gear",
      "First-aid supplies included",
      "8-gauge jumper cables",
      "Organized all-in-one bag",
    ],
    cons: [
      "No dedicated tire inflator",
      "More pieces than some drivers need",
    ],
    sparkDriverNote:
      "A particularly good match for this guide because it combines traditional roadside equipment with visibility gear for after-dark emergencies.",
  },
  {
    rank: 3,
    badge: "Best Heavy Tool Kit",
    title: "HAIPHAIK 124-Piece Car Emergency Roadside Kit",
    imageSrc: "/images/tools/best-roadside-emergency-kits/haiphaik.jpg",
    imageAlt: "HAIPHAIK 124 piece roadside car emergency kit",
    score: "9.2/10",
    bestFor: "Tools and recovery gear",
    amazonUrl: `https://www.amazon.com/dp/B07PPD6ZKV?tag=${affiliateTag}`,
    summary:
      "A substantial roadside bundle with long jumper cables, tow gear, a folding shovel, repair tools, flashlight, gloves, and other emergency supplies.",
    pros: [
      "Large 124-piece assortment",
      "Long jumper cables",
      "Tow and repair equipment",
      "Folding survival shovel",
    ],
    cons: [
      "Heavier than compact kits",
      "Less focused on medical supplies",
    ],
    sparkDriverNote:
      "Best for drivers who want more physical tools and recovery equipment rather than a lightweight essentials-only emergency bag.",
  },
  {
    rank: 4,
    badge: "Best Trusted-Brand Compact Kit",
    title: "Lifeline AAA Premium Road Kit",
    imageSrc: "/images/tools/best-roadside-emergency-kits/lifeline-aaa.jpg",
    imageAlt: "Lifeline AAA premium roadside emergency kit",
    score: "9.0/10",
    bestFor: "Compact essentials",
    amazonUrl: `https://www.amazon.com/dp/B0006MQJ0M?tag=${affiliateTag}`,
    summary:
      "A compact AAA-branded roadside kit with jumper cables, flashlight, first-aid supplies, and other core emergency items in an organized carry bag.",
    pros: [
      "AAA-branded kit",
      "Compact organized storage",
      "Jumper cables and flashlight",
      "First-aid supplies included",
    ],
    cons: [
      "Smaller tool assortment",
      "Less comprehensive than larger kits",
    ],
    sparkDriverNote:
      "A good option for Spark drivers who want recognizable roadside basics without dedicating a large section of the trunk to emergency equipment.",
  },
  {
    rank: 5,
    badge: "Best with Tire Inflator",
    title: "AUTODECO Roadside Assistance Kit with Tire Inflator",
    imageSrc: "/images/tools/best-roadside-emergency-kits/autodeco.jpg",
    imageAlt: "AUTODECO roadside emergency kit with tire inflator",
    score: "8.9/10",
    bestFor: "Tire and roadside basics",
    amazonUrl: `https://www.amazon.com/dp/B0DYJCD7VD?tag=${affiliateTag}`,
    summary:
      "A compact roadside assistance kit built around jumper cables, a portable tire inflator, and essential vehicle emergency accessories.",
    pros: [
      "Tire inflator included",
      "Jumper cables included",
      "Compact storage bag",
      "Good combination of core vehicle tools",
    ],
    cons: [
      "Newer product than long-established picks",
      "Not as extensive as 100-plus-piece kits",
    ],
    sparkDriverNote:
      "Useful if you want the emergency-kit category to cover both visibility and basic tire support without buying a separate large tool bag.",
  }
];

function GuideHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Emergency Gear
            </span>
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200 ring-1 ring-sky-300/25">
              Buying Guide
            </span>
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Roadside Emergency Kits for Spark Drivers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Prepare for unexpected roadside stops with organized emergency kits that combine visibility gear, flashlights, cables, tools, and other practical vehicle essentials.
          </p>
          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {["8 min read", "Updated August 2026", "Roadside ready", "Spark drivers", "Vehicle emergencies"].map((pill) => (
              <span key={pill} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 ring-1 ring-white/15">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-600">Top Pick</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">First Secure 90-Piece Roadside Emergency Kit</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Score</p>
                <p className="mt-2 text-2xl font-black">9.6/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Best For</p>
                <p className="mt-2 text-lg font-black">Complete roadside coverage</p>
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
      <GuideHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">Best Overall</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">First Secure 90-Piece Roadside Emergency Kit</h2>
          <p className="mt-3 leading-7 text-slate-300">A broad roadside kit combining jumper cables, an air compressor, first-aid supplies, a tow rope, warning triangle, flashlight, and vehicle emergency tools.</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-5">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">What matters most</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Reliable performance when needed</li>
            <li>• Practical vehicle storage</li>
            <li>• Straightforward operation</li>
            <li>• Useful features without unnecessary bulk</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">Driver-first note</p>
          <p className="mt-4 font-semibold leading-7">
            Emergency equipment only helps when it is accessible and ready. Keep it charged, maintained, and stored where customer orders will not bury it.
          </p>
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
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-600">How we picked</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
          Selected for real roadside use during delivery work.
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Roadside usefulness</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">We prioritized products that solve realistic vehicle problems instead of adding features that rarely matter on a delivery shift.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Ease of use</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Emergency gear should be understandable and practical when you are already dealing with a stressful roadside situation.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Vehicle storage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The picks are realistic to keep in a delivery vehicle alongside groceries, coolers, bags, and everyday driver equipment.</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">Frequently Asked Questions</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight">Roadside emergency kit questions</h2>
        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">Is this kind of emergency gear worth carrying as a Spark driver?</h3>
            <p className="mt-3 leading-7 text-slate-300">Yes. Delivery driving adds mileage, repeated stops, and long periods away from home, so compact roadside equipment can be especially useful when a vehicle problem interrupts a shift.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">Where should I keep it?</h3>
            <p className="mt-3 leading-7 text-slate-300">Store it somewhere dry and accessible, ideally in a trunk organizer, cargo-side compartment, or other location that will not be blocked by customer orders.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">Should emergency equipment be checked regularly?</h3>
            <p className="mt-3 leading-7 text-slate-300">Yes. Check batteries, charge levels, cables, hoses, lights, and kit contents periodically so the equipment is actually usable when an emergency happens.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">Does carrying emergency gear replace roadside assistance?</h3>
            <p className="mt-3 leading-7 text-slate-300">No. These products can help with common problems, but serious mechanical failures, unsafe roadside locations, damaged tires, or situations beyond your ability should still be handled by professional roadside assistance.</p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}