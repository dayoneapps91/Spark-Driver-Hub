import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Drink Carriers for Spark Drivers | Spark Driver Hub",
  description:
    "Compare the best drink carriers for Spark drivers, including reusable six-cup holders, insulated sets, rigid caddies, and foldable delivery options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Boczif 6-Cup Drink Carrier",
    imageSrc: "/images/tools/drink-carriers/boczif.jpg",
    imageAlt:
      "Boczif reusable six cup drink carrier for delivery drivers",
    score: "9.5/10",
    bestFor: "Most delivery drivers",
    amazonUrl: `https://www.amazon.com/dp/B0BVYCLQ2N?tag=${affiliateTag}`,
    summary:
      "A reusable six-cup carrier with individual compartments, a sturdy handle, and a fold-flat design. It provides a strong balance of cup security, portability, and compact storage for drivers who regularly transport fountain drinks, coffee, or smoothies.",
    pros: [
      "Holds up to six drinks",
      "Individual cup compartments",
      "Folds flat for storage",
      "Strong reusable handle",
    ],
    cons: [
      "Not insulated",
      "Very small cups may need extra support",
    ],
    sparkDriverNote:
      "The best all-around choice for drivers who want one dependable carrier that can replace flimsy restaurant trays and stay ready in the vehicle.",
  },
  {
    rank: 2,
    badge: "Best Insulated Set",
    title: "LEIFEOSH 6-Cup Carrier with Insulated Bag",
    imageSrc: "/images/tools/drink-carriers/leifeosh-insulated.jpg",
    imageAlt:
      "LEIFEOSH six cup drink carrier with insulated delivery bag",
    score: "9.3/10",
    bestFor: "Longer routes and hot weather",
    amazonUrl: `https://www.amazon.com/dp/B0FD3H6MWD?tag=${affiliateTag}`,
    summary:
      "A foldable six-cup holder paired with a large insulated delivery bag. The enclosed setup helps contain spills, shields drinks from direct sunlight, and gives drivers extra temperature protection during longer routes or stacked deliveries.",
    pros: [
      "Includes insulated delivery bag",
      "Holds six hot or cold drinks",
      "Helps contain spills",
      "Carrier folds for storage",
    ],
    cons: [
      "Bulkier than a carrier alone",
      "Requires opening the bag at delivery",
    ],
    sparkDriverNote:
      "Best for drivers who frequently transport milkshakes, iced drinks, coffee, or stacked orders where temperature and spill containment matter.",
  },
  {
    rank: 3,
    badge: "Best Rigid Caddy",
    title: "Rubbermaid Commercial Deluxe Carry Caddy",
    imageSrc: "/images/tools/drink-carriers/rubbermaid-caddy.jpg",
    imageAlt:
      "Rubbermaid Commercial rigid carry caddy used as a stable drink carrier",
    score: "9.1/10",
    bestFor: "Maximum structure and durability",
    amazonUrl: `https://www.amazon.com/dp/B09JW6SBYN?tag=${affiliateTag}`,
    summary:
      "A rigid commercial-grade caddy with divided compartments and a molded center handle. Although designed as an all-purpose carrier, its sturdy plastic construction makes it a durable option for drivers who prioritize stability and easy cleanup over foldability.",
    pros: [
      "Rigid commercial construction",
      "Stable divided compartments",
      "Easy to wipe clean",
      "Durable molded handle",
    ],
    cons: [
      "Does not fold flat",
      "Cup fit varies by beverage size",
    ],
    sparkDriverNote:
      "A strong choice for drivers who want a hard-sided carrier that will not collapse, absorb spills, or wear out as quickly as fabric options.",
  },
  {
    rank: 4,
    badge: "Best Multi-Pack Value",
    title: "KEILEOHO 3-Pack 6-Cup Drink Carriers",
    imageSrc: "/images/tools/drink-carriers/keileoho-3-pack.jpg",
    imageAlt:
      "KEILEOHO three pack of foldable six cup drink carriers",
    score: "8.9/10",
    bestFor: "Multiple orders and backups",
    amazonUrl: `https://www.amazon.com/dp/B0BVG4DSNL?tag=${affiliateTag}`,
    summary:
      "A three-pack of lightweight plastic carriers that each hold up to six drinks and fold flat when not in use. Keeping multiple carriers available is useful for stacked orders, large beverage pickups, or replacing a carrier after a major spill.",
    pros: [
      "Three carriers included",
      "Six-cup capacity per carrier",
      "Fold-flat plastic design",
      "Useful for stacked orders",
    ],
    cons: [
      "Less premium construction",
      "Handles can flex under heavy loads",
    ],
    sparkDriverNote:
      "Best for drivers who want inexpensive backups or enough carriers to keep separate customer orders organized during multi-stop deliveries.",
  },
  {
    rank: 5,
    badge: "Best Anti-Tilt Design",
    title: "AKAYOK 6-Cup Reusable Drink Carrier",
    imageSrc: "/images/tools/drink-carriers/akayok.jpg",
    imageAlt:
      "AKAYOK six cup reusable anti-tilt drink carrier for deliveries",
    score: "8.8/10",
    bestFor: "Mixed cup sizes",
    amazonUrl: `https://www.amazon.com/dp/B0H1D164LZ?tag=${affiliateTag}`,
    summary:
      "A foldable six-cup carrier built with individual compartments and anti-tilt inserts. Its fabric-and-plastic construction is designed to keep different hot and cold beverage cups separated while remaining easy to collapse after the delivery.",
    pros: [
      "Anti-tilt cup inserts",
      "Six individual compartments",
      "Foldable reusable design",
      "Works with hot and cold drinks",
    ],
    cons: [
      "Newer product with fewer reviews",
      "Soft exterior offers less rigidity",
    ],
    sparkDriverNote:
      "Best for mixed beverage orders where different cup sizes need individual support instead of sharing one open tray.",
  },
];

function DrinkCarriersHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Delivery Gear
            </span>
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200 ring-1 ring-sky-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Drink Carriers for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Carry fountain drinks, coffee, smoothies, and milkshakes more securely
            while reducing spills during pickup, driving, stacked orders, and
            apartment deliveries.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "8 min read",
              "Updated August 2026",
              "Fountain drinks",
              "Coffee",
              "Spill control",
              "Stacked orders",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 ring-1 ring-white/15 backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Boczif 6-Cup Carrier
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Score
                </p>
                <p className="mt-2 text-2xl font-black">9.5/10</p>
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

export default function BestDrinkCarriersPage() {
  return (
    <BuyingGuideLayout>
      <DrinkCarriersHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Boczif 6-Cup Carrier
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best mix of six-cup capacity, spill control, reusable construction,
            foldability, and everyday delivery practicality.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Secure compartments for multiple cups</li>
            <li>• Stable handle under a full load</li>
            <li>• Easy cleanup after spills</li>
            <li>• Compact storage between orders</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 leading-7 font-semibold">
            Place the carrier on a flat vehicle floor whenever possible. Keep lids
            fully seated, separate oversized cups, and avoid placing loose
            drinks directly on a passenger seat.
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
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-600">
          How we picked
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
          Chosen for real delivery routes and spill prevention.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Cup stability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized separated cup compartments, stable bases, strong handles,
              and designs that reduce tipping while entering or leaving a vehicle.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Storage and cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The best options hold several beverages in one hand while remaining
              manageable through parking lots, elevators, hallways, and stairs.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Storage and cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We considered folding size, rigid versus soft construction, spill cleanup,
              insulation, and how easily each carrier fits inside a delivery bag.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Drink carrier questions
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is a reusable drink carrier worth carrying as a Spark driver?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Yes, especially when restaurants provide weak cardboard trays or no tray
              at all. A reusable carrier offers better handles, separated cup
              compartments, and a more stable base during transportation.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Should drinks ride on the seat or the vehicle floor?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A flat vehicle floor is usually more stable than a sloped or cushioned
              seat. Secure the carrier so it cannot slide during braking, and
              keep it away from groceries that could crush the cups.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              How many cups should a delivery carrier hold?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A six-cup carrier is the most versatile size for regular delivery work.
              It handles large restaurant orders while remaining compact enough
              to store in the vehicle between trips.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Does an insulated drink bag prevent every spill?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              No. Insulation helps with temperature and contains some mess, but lids
              must still be secure and the internal carrier must remain upright.
              Careful placement and smooth driving are still essential.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}