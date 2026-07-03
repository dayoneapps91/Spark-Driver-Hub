import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Car Trunk Organizers for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best car trunk organizers for Spark drivers, including collapsible, heavy-duty, cooler, and premium cargo storage options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Drive Auto Products Car Trunk Organizer",
    imageSrc: "/images/tools/best-car-trunk-organizers/driveauto.jpg",
    imageAlt: "Drive Auto Products collapsible car trunk organizer",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B071F82CYJ?tag=${affiliateTag}`,
    summary:
      "The best all-around pick for delivery drivers who want a collapsible organizer that stays put better than basic bins. The tie-down strap system, adjustable compartments, and fold-flat design make it practical for grocery orders, personal items, cleaning supplies, and everyday trunk clutter.",
    pros: [
      "Tie-down straps help reduce sliding",
      "Collapsible design saves space when empty",
      "Good balance of size, price, and usefulness",
      "Works for sedans, SUVs, and hatchbacks",
    ],
    cons: [
      "Not insulated",
      "Soft-sided design is less rigid than premium boxes",
    ],
    sparkDriverNote:
      "Best first organizer if grocery bags slide around your trunk or you want one simple place for bags, wipes, chargers, cleaning supplies, and small delivery gear.",
  },
  {
    rank: 2,
    badge: "Best Value",
    title: "FORTEM Car Trunk Organizer",
    imageSrc: "/images/tools/best-car-trunk-organizers/fortem.jpg",
    imageAlt: "FORTEM collapsible trunk organizer for cars and SUVs",
    score: "9.4/10",
    bestFor: "Value-focused drivers",
    amazonUrl: `https://www.amazon.com/dp/B01DIMTWCS?tag=${affiliateTag}`,
    summary:
      "A strong value option with reinforced panels, non-slip strips, adjustable straps, and multiple pockets. It gives Spark drivers most of what matters for daily trunk organization without jumping into premium pricing.",
    pros: [
      "Non-slip strips and straps help keep it secure",
      "Reinforced box-style design",
      "Good pocket layout",
      "Often priced competitively",
    ],
    cons: [
      "Can still feel bulky in very small trunks",
      "Not as premium-feeling as higher-end options",
    ],
    sparkDriverNote:
      "Choose this if you want a sturdy organizer for grocery bags, cleaning products, and emergency items without overpaying.",
  },
  {
    rank: 3,
    badge: "Best Heavy Duty",
    title: "TRUNKCRATEPRO Collapsible Trunk Organizer",
    imageSrc: "/images/tools/best-car-trunk-organizers/trunkcratepro.jpg",
    imageAlt: "TRUNKCRATEPRO heavy-duty collapsible trunk organizer",
    score: "9.3/10",
    bestFor: "Heavier gear and frequent use",
    amazonUrl: `https://www.amazon.com/dp/B01ECMRFTA?tag=${affiliateTag}`,
    summary:
      "A heavier-duty organizer for drivers who carry more than just a few grocery bags. The large compartments, securing straps, and non-slip bottom make it a strong fit for trunk setups that need to stay organized during long delivery days.",
    pros: [
      "Large multi-compartment layout",
      "Securing straps and non-slip bottom",
      "Good for heavier daily gear",
      "Collapses when not needed",
    ],
    cons: [
      "Costs more than basic organizers",
      "May be more organizer than some drivers need",
    ],
    sparkDriverNote:
      "Good pick if you carry a full delivery setup: bags, cooler items, towels, cleaning supplies, emergency gear, and personal items.",
  },
  {
    rank: 4,
    badge: "Best with Cooler",
    title: "K KNODEL Trunk Organizer with Insulated Cooler",
    imageSrc: "/images/tools/best-car-trunk-organizers/knodel.jpg",
    imageAlt: "K KNODEL trunk organizer with built-in insulated cooler",
    score: "9.1/10",
    bestFor: "Groceries and cold items",
    amazonUrl: `https://www.amazon.com/dp/B07SLB88NF?tag=${affiliateTag}`,
    summary:
      "A practical grocery-delivery option because it combines trunk organization with a built-in insulated cooler section. That makes it useful for drivers who want a cleaner way to separate cold items, cleaning supplies, and everyday trunk gear.",
    pros: [
      "Built-in cooler compartment",
      "Water-resistant construction",
      "Adjustable compartments",
      "Helpful for grocery delivery routines",
    ],
    cons: [
      "Cooler section takes up space",
      "Still not a replacement for full insulated delivery bags",
    ],
    sparkDriverNote:
      "Best if you want one trunk organizer that also helps separate cold items, but still use real insulated bags for longer trips or hotter days.",
  },
  {
    rank: 5,
    badge: "Best Premium",
    title: "Thule Go Box Car Trunk Organizer",
    imageSrc: "/images/tools/best-car-trunk-organizers/thulegobox.jpg",
    imageAlt: "Thule Go Box car trunk organizer",
    score: "8.9/10",
    bestFor: "Premium cargo storage",
    amazonUrl: `https://www.amazon.com/dp/B097W4WMMS?tag=${affiliateTag}`,
    summary:
      "A more premium cargo box-style organizer from a well-known gear brand. It is durable, simple, water-resistant, and easy to carry, but the price makes it a better fit for drivers who value premium build quality over maximum bargain value.",
    pros: [
      "Premium build from a known brand",
      "Water-resistant material",
      "Easy to carry and fold away",
      "Clean, simple cargo-box design",
    ],
    cons: [
      "More expensive",
      "Less compartment-heavy than delivery-focused organizers",
    ],
    sparkDriverNote:
      "Choose this if you want a cleaner, premium cargo-box style organizer and do not need lots of small pockets or dividers.",
  },
];

function TrunkOrganizerHero() {
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
            Best Car Trunk Organizers for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A good trunk organizer keeps grocery bags from sliding around,
            separates delivery gear from personal items, and makes your vehicle
            feel more controlled during busy Spark shifts.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Drive Auto Products
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

export default function BestCarTrunkOrganizersPage() {
  return (
    <BuyingGuideLayout>
      <TrunkOrganizerHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Drive Auto Products
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best starting point for most Spark drivers because it combines
            collapsible storage, adjustable compartments, and tie-down straps.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Keeps grocery bags from sliding</li>
            <li>• Collapses when trunk space is needed</li>
            <li>• Has straps or a non-slip bottom</li>
            <li>• Works with delivery bags and supplies</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For delivery work, the best organizer is not just the biggest one.
            It is the one that keeps your trunk usable, your bags upright, and
            your setup fast between stops.
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
          Built around grocery delivery, not just a clean trunk.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Stability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored organizers with straps, non-slip bottoms, or structure
              that helps reduce sliding during turns and quick stops.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Delivery usefulness</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We looked for organizers that help with grocery bags, delivery
              gear, cleaning supplies, emergency items, and everyday trunk use.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Value</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We balanced price, features, storage layout, durability, and
              whether the product makes sense for part-time and full-time
              Spark drivers.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
