import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Storage Bins for Delivery Drivers | Spark Driver Hub",
  description:
    "Compare the best storage bins for delivery drivers, including collapsible crates, heavy-duty bins, multi-bin sets, and compact trunk-friendly options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "CleverMade 46L Collapsible Storage Bin with Lid",
    imageSrc: "/images/tools/best-storage-bins/clevermade-46l.jpg",
    imageAlt: "CleverMade 46 liter collapsible storage bin with lid",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0CMJQ8T5G?tag=${affiliateTag}`,
    summary:
      "A strong all-around delivery bin because it combines a rigid 46-liter cargo box, a lid, stackable construction, built-in handles, and a collapsible design that folds down to about 2.5 inches. It is useful for separating customer orders, loose grocery bags, cleaning supplies, and everyday delivery gear without permanently taking over the trunk.",
    pros: [
      "46-liter grocery-friendly capacity",
      "Lid helps contain and stack items",
      "Folds nearly flat when empty",
      "Built-in handles make carrying easier",
    ],
    cons: [
      "Rigid sides use more space when open",
      "More expensive than basic open crates",
    ],
    sparkDriverNote:
      "Best first bin for drivers who want one sturdy container that can separate orders, stop small bags from rolling around, and collapse when trunk space is needed.",
  },
  {
    rank: 2,
    badge: "Best Heavy Duty",
    title: "BigAnt Heavy Duty Collapsible Milk Crate",
    imageSrc: "/images/tools/best-storage-bins/bigant.jpg",
    imageAlt: "BigAnt heavy duty collapsible stackable plastic milk crate",
    score: "9.4/10",
    bestFor: "Heavy groceries and supplies",
    amazonUrl: `https://www.amazon.com/dp/B0CPS4R7L3?tag=${affiliateTag}`,
    summary:
      "A tougher open-crate option designed for repeated carrying, stacking, and transport. The rigid plastic frame is useful for canned goods, bottled drinks, cleaning products, and heavier delivery supplies that can make softer organizers sag or collapse.",
    pros: [
      "Heavy-duty rigid plastic construction",
      "Collapsible and stackable",
      "Open top makes loading fast",
      "Good for heavier everyday items",
    ],
    cons: [
      "No lid for loose or weather-sensitive items",
      "Hard edges are less flexible around odd-shaped cargo",
    ],
    sparkDriverNote:
      "Choose this when strength matters more than enclosed storage, especially if you regularly move dense groceries, bottled drinks, or heavier supplies.",
  },
  {
    rank: 3,
    badge: "Best Multi-Bin Carrying practicality",
    title: "VEVOR 45L Collapsible Milk Crates 3-Pack",
    imageSrc: "/images/tools/best-storage-bins/vevor-3pack.jpg",
    imageAlt: "VEVOR 45 liter collapsible milk crates three pack",
    score: "9.2/10",
    bestFor: "Separating stacked orders",
    amazonUrl: `https://www.amazon.com/dp/B0CL9R4SMS?tag=${affiliateTag}`,
    summary:
      "A three-pack of 45-liter folding crates that gives delivery drivers enough bins to separate multiple customer orders or dedicate individual containers to groceries, cleaning supplies, and emergency gear. Each crate folds down when not needed, which keeps the system flexible between shifts.",
    pros: [
      "Three 45-liter crates included",
      "Excellent for separating customer orders",
      "Foldable and stackable design",
      "Built-in handles simplify carrying",
    ],
    cons: [
      "Three bins require trunk space when all are open",
      "Open-grid design does not contain tiny loose items",
    ],
    sparkDriverNote:
      "Best for drivers who frequently handle stacked grocery orders and want a simple visual way to keep each customer's bags separated in the vehicle.",
  },
  {
    rank: 4,
    badge: "Best Compact Crate",
    title: "CleverMade 25L Collapsible Milk Crate",
    imageSrc: "/images/tools/best-storage-bins/clevermade-25l.jpg",
    imageAlt: "CleverMade 25 liter collapsible milk crate for car storage",
    score: "9.0/10",
    bestFor: "Small trunks and daily gear",
    amazonUrl: `https://www.amazon.com/dp/B0DF7WRG3T?tag=${affiliateTag}`,
    summary:
      "A smaller 25-liter crate that supports up to 50 pounds and folds to under three inches tall. It is easier to keep permanently in a compact trunk and works well for delivery bags, wipes, chargers, towels, snacks, and smaller grocery orders.",
    pros: [
      "Compact 25-liter footprint",
      "Supports up to 50 pounds",
      "Folds to under three inches",
      "Easy to leave in the vehicle every day",
    ],
    cons: [
      "Too small for large grocery orders",
      "Open top offers no spill containment",
    ],
    sparkDriverNote:
      "A smart pick for sedan drivers or anyone who wants a permanent gear bin without sacrificing a large section of cargo space.",
  },
  {
    rank: 5,
    badge: "Best Twin-Crate Set",
    title: "Mecbellor 49L Collapsible Storage Crates 2-Pack",
    imageSrc: "/images/tools/best-storage-bins/mecbellor-2pack.jpg",
    imageAlt: "Mecbellor 49 liter collapsible storage crates two pack",
    score: "8.9/10",
    bestFor: "Two-order organization",
    amazonUrl: `https://www.amazon.com/dp/B0BT6RLDQR?tag=${affiliateTag}`,
    summary:
      "A pair of roomy 49-liter collapsible crates that fold to about 2.6 inches thick. The two-bin setup is especially practical for separating two customer orders, or keeping one crate for groceries and the other for permanent driver equipment.",
    pros: [
      "Two spacious 49-liter crates",
      "Folds to about 2.6 inches thick",
      "Useful for two-order separation",
      "Good balance of size and storage flexibility",
    ],
    cons: [
      "Less compact than a single small crate",
      "Open design does not protect contents from spills",
    ],
    sparkDriverNote:
      "Best if two bins match your normal workflow: one for the current grocery order and one for either a second customer or your own delivery supplies.",
  },
];

function StorageBinsHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Car Organization
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Storage Bins for Delivery Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Good storage bins help separate customer orders, contain loose grocery
            bags, and keep cleaning supplies, emergency gear, and everyday
            delivery equipment from spreading across the trunk.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              CleverMade 46L Bin
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Score
                </p>
                <p className="mt-2 text-2xl font-black">9.6/10</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Best For
                </p>
                <p className="mt-2 text-lg font-black">Most drivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestStorageBinsPage() {
  return (
    <BuyingGuideLayout>
      <StorageBinsHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            CleverMade 46L Bin
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best starting point for most delivery drivers because it combines
            rigid order separation, a useful lid, built-in handles, and
            collapsible storage when the bin is not needed.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Separates customer orders clearly</li>
            <li>• Collapses when cargo space is needed</li>
            <li>• Has strong handles for carrying</li>
            <li>• Fits grocery bags and driver supplies</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For delivery work, bins should organize the trunk without becoming extra
            clutter. Choose sizes you can lift comfortably and collapse or stack
            them when customer orders need the full cargo area.
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
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
          How we picked
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
          Built around order separation and flexible trunk space.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Order separation</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored bins that make it easy to keep grocery bags, customer orders,
              and permanent driver supplies separated during a busy shift.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Collapsibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized bins that fold down, stack, or otherwise give trunk space
              back when they are not actively carrying groceries or supplies.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Carrying practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We considered handles, load capacity, rigid structure, usable volume,
              and whether each bin remains practical for repeated vehicle-to-door
              movement during delivery work.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}