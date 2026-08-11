import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Portable Tire Inflators for Spark Drivers | Spark Driver Hub",
  description:
    "Compare portable tire inflators for Spark drivers, including cordless, 12-volt, and direct-to-battery options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "DEWALT 20V MAX DCC020IB Tire Inflator",
    imageSrc: "/images/tools/best-portable-tire-inflators/dewalt-dcc020ib.jpg",
    imageAlt: "DEWALT DCC020IB portable tire inflator",
    score: "9.6/10",
    bestFor: "Versatility and durability",
    amazonUrl: `https://www.amazon.com/dp/B07H39S9JQ?tag=${affiliateTag}`,
    summary:
      "A durable portable inflator with digital pressure setting, automatic shutoff, high-pressure and high-volume modes, and multiple power options.",
    pros: [
      "Digital gauge and auto shutoff",
      "High-pressure and high-volume modes",
      "12V vehicle power support",
      "Works with DEWALT 20V MAX batteries",
    ],
    cons: [
      "Battery sold separately on bare-tool versions",
      "Bulkier than handheld inflators",
    ],
    sparkDriverNote:
      "An excellent vehicle-focused choice, especially for drivers who already own DEWALT 20V batteries or want a robust inflator for repeated use.",
  },
  {
    rank: 2,
    badge: "Best Heavy-Duty Value",
    title: "VIAIR 88P Portable Compressor",
    imageSrc: "/images/tools/best-portable-tire-inflators/viair-88p.jpg",
    imageAlt: "VIAIR 88P portable tire compressor",
    score: "9.4/10",
    bestFor: "SUVs and larger tires",
    amazonUrl: `https://www.amazon.com/dp/B005ASY23I?tag=${affiliateTag}`,
    summary:
      "A proven 12-volt compressor that connects directly to the vehicle battery and is designed for tires up to 33 inches.",
    pros: [
      "Direct battery-clamp power",
      "Strong fit for larger tires",
      "Long reach for vehicle use",
      "Simple durable design",
    ],
    cons: [
      "Not cordless",
      "No automatic shutoff",
    ],
    sparkDriverNote:
      "A strong choice for drivers who care more about dependable tire inflation than cordless convenience or a tiny handheld form factor.",
  },
  {
    rank: 3,
    badge: "Best Compact Backup",
    title: "EPAuto 12V DC Portable Air Compressor Pump",
    imageSrc: "/images/tools/best-portable-tire-inflators/epauto.jpg",
    imageAlt: "EPAuto 12 volt portable tire inflator",
    score: "8.9/10",
    bestFor: "Simple trunk backup",
    amazonUrl: `https://www.amazon.com/dp/B01L9WSTEG?tag=${affiliateTag}`,
    summary:
      "A compact 12-volt tire inflator with a digital display, automatic shutoff, and straightforward vehicle-outlet power.",
    pros: [
      "Compact trunk-friendly size",
      "Digital pressure display",
      "Automatic shutoff",
      "Simple 12V operation",
    ],
    cons: [
      "Corded operation only",
      "Not intended for very large heavy-duty tires",
    ],
    sparkDriverNote:
      "A practical keep-it-in-the-car option for routine pressure top-offs and common passenger-vehicle tire needs.",
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
            Best Portable Tire Inflators for Spark Drivers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Handle low tire pressure without searching for a working gas-station pump with portable inflators selected for delivery vehicles and roadside use.
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
            <h2 className="mt-3 text-3xl font-black tracking-tight">DEWALT 20V MAX DCC020IB Tire Inflator</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Score</p>
                <p className="mt-2 text-2xl font-black">9.6/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Best For</p>
                <p className="mt-2 text-lg font-black">Versatility and durability</p>
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
          <h2 className="mt-3 text-2xl font-black tracking-tight">DEWALT 20V MAX DCC020IB Tire Inflator</h2>
          <p className="mt-3 leading-7 text-slate-300">A durable portable inflator with digital pressure setting, automatic shutoff, high-pressure and high-volume modes, and multiple power options.</p>
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
        <h2 className="mt-4 text-3xl font-black tracking-tight">Portable tire inflator questions</h2>
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