import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Insulated Delivery Bags for Spark Drivers | Spark Driver Hub",
  description:
    "Compare the best insulated delivery bags for Spark drivers, including large grocery totes, structured food carriers, budget multipacks, and heavy-duty options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "NZ Home PRO 3XL Insulated Food Delivery Bag",
    imageSrc: "/images/tools/insulated-bags/nzhome-pro.jpg",
    imageAlt:
      "NZ Home PRO 3XL insulated food delivery bag for groceries and hot or cold food",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B07RJ42FL1?tag=${affiliateTag}`,
    summary:
      "The strongest all-around choice for Spark drivers who want one large professional-style bag for grocery orders, restaurant pickups, and temperature-sensitive items. Its extra-thick insulation, roomy 3XL shape, and delivery-focused construction make it more practical for daily work than a basic reusable grocery tote.",
    pros: [
      "Large 3XL capacity for grocery orders",
      "Thicker commercial-style insulation",
      "Works for both hot and cold items",
      "Folds down when not in use",
    ],
    cons: [
      "Takes up more trunk space when loaded",
      "More expensive than thin grocery totes",
    ],
    sparkDriverNote:
      "Best for drivers who want one dependable main bag that can handle larger Walmart orders without immediately needing a separate cooler.",
  },
  {
    rank: 2,
    badge: "Best Structured Bag",
    title: "CIVJET 79L Insulated Food Delivery Bag with Hard Bottom",
    imageSrc: "/images/tools/insulated-bags/civjet.jpg",
    imageAlt:
      "CIVJET 79 liter insulated delivery bag with hard bottom and internal structure",
    score: "9.4/10",
    bestFor: "Keeping orders upright",
    amazonUrl: `https://www.amazon.com/dp/B09ZD7CS9R?tag=${affiliateTag}`,
    summary:
      "A very large 79-liter carrier with a hard bottom that helps reduce sagging and keeps grocery bags, containers, and fragile items more stable in the vehicle. It is especially useful for drivers who dislike soft bags collapsing around the order.",
    pros: [
      "Hard bottom improves stability",
      "Very large 79-liter capacity",
      "Useful for bulky grocery orders",
      "Helps separate food from the trunk floor",
    ],
    cons: [
      "Bulky for small vehicles",
      "May be more bag than part-time drivers need",
    ],
    sparkDriverNote:
      "Choose this when stability matters as much as insulation, especially if soft totes tip over or crush bread, produce, and prepared food during turns.",
  },
  {
    rank: 3,
    badge: "Best Everyday Value",
    title: "Homevative XL Insulated Food and Grocery Delivery Bag",
    imageSrc: "/images/tools/insulated-bags/homevative.jpg",
    imageAlt:
      "Homevative extra large insulated grocery and food delivery bag",
    score: "9.1/10",
    bestFor: "Affordable daily use",
    amazonUrl: `https://www.amazon.com/dp/B076HYJW8N?tag=${affiliateTag}`,
    summary:
      "A practical large insulated bag for drivers who want useful capacity without moving into a heavy commercial carrier. It works well for groceries, takeout containers, and everyday delivery work while remaining easier to fold and store between shifts.",
    pros: [
      "Good balance of size and price",
      "Designed for groceries and food delivery",
      "Easy to fold and store",
      "Useful for hot or cold orders",
    ],
    cons: [
      "Less structured than hard-bottom bags",
      "Not the best option for very heavy loads",
    ],
    sparkDriverNote:
      "A smart first insulated bag for newer drivers who want better food protection without paying for the largest professional option.",
  },
  {
    rank: 4,
    badge: "Best Heavy-Duty Tote Set",
    title: "VENO 2-Pack Insulated Grocery Bags",
    imageSrc: "/images/tools/insulated-bags/veno.jpg",
    imageAlt:
      "VENO two pack insulated reusable grocery bags for food delivery",
    score: "8.9/10",
    bestFor: "Separating multiple orders",
    amazonUrl: `https://www.amazon.com/dp/B07DS29MY4?tag=${affiliateTag}`,
    summary:
      "A two-bag setup that makes it easier to separate customer orders, keep hot and cold products apart, or reserve one bag for frozen groceries. The reinforced construction is more delivery-friendly than disposable or thin reusable shopping bags.",
    pros: [
      "Two bags improve order separation",
      "Reinforced construction",
      "Each bag can carry substantial grocery weight",
      "Collapsible for easier trunk storage",
    ],
    cons: [
      "Insulation is lighter than premium delivery bags",
      "Soft sides can shift when partly filled",
    ],
    sparkDriverNote:
      "Best for stacked orders because you can assign one insulated bag to each customer or keep hot and cold items separated.",
  },
  {
    rank: 5,
    badge: "Best for Cold Groceries",
    title: "Creative Green Life Jumbo Insulated Cooler Bag",
    imageSrc: "/images/tools/insulated-bags/creative-green-life.jpg",
    imageAlt:
      "Creative Green Life jumbo insulated cooler bag for groceries and delivery",
    score: "8.8/10",
    bestFor: "Frozen and refrigerated items",
    amazonUrl: `https://www.amazon.com/dp/B0DCV4JGR3?tag=${affiliateTag}`,
    summary:
      "A wide soft-sided cooler bag with thick thermal insulation and enough room for larger refrigerated or frozen grocery loads. Its broad opening makes it easy to load from shopping carts, and it is a useful middle ground between a grocery tote and a rigid cooler.",
    pros: [
      "Wide opening simplifies loading",
      "Good capacity for cold groceries",
      "Thicker insulation than basic totes",
      "Collapsible when empty",
    ],
    cons: [
      "Wide shape may not fit every trunk layout",
      "Best results require the zipper to stay closed",
    ],
    sparkDriverNote:
      "Use this for ice cream, meat, dairy, frozen food, and summer deliveries when a thin reusable bag does not provide enough temperature protection.",
  },
];

function InsulatedBagsHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Delivery Gear
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Insulated Delivery Bags for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            The right insulated bag helps protect frozen groceries, hot food,
            produce, and customer orders from El Paso heat, long apartment
            walks, and delays between pickup and delivery.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "8 min read",
              "Updated August 2026",
              "Hot food",
              "Cold groceries",
              "Large orders",
              "Stacked trips",
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              NZ Home PRO 3XL
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

export default function BestInsulatedDeliveryBagsPage() {
  return (
    <BuyingGuideLayout>
      <InsulatedBagsHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            NZ Home PRO 3XL
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best balance of capacity, insulation, foldability, and
            delivery-focused construction for regular Spark work.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Enough room for real grocery orders</li>
            <li>• Reliable zipper and reinforced handles</li>
            <li>• Easy-to-clean insulated interior</li>
            <li>• Stable enough for vehicle transport</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 leading-7 font-semibold">
            One large bag is useful, but two medium or large bags can be better
            for stacked orders because they help separate customers and prevent
            hot items from warming frozen groceries.
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
          Built around grocery delivery, not casual lunch storage.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Capacity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized bags large enough for real grocery orders instead
              of compact lunch bags that only hold a few containers.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Temperature protection</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A useful delivery bag should slow temperature changes while food
              sits in the vehicle or travels from the parking lot to the door.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Daily practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Handles, zippers, stability, cleaning, folding, and trunk space
              matter more during repeated deliveries than decorative features.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Insulated delivery bag questions
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Do Spark drivers need insulated bags?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              They are not useful for every item, but they are valuable for
              frozen food, meat, dairy, prepared meals, ice cream, and deliveries
              made during very hot weather.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is one large bag better than several smaller bags?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              One large bag handles bulky orders well, while multiple bags make
              it easier to separate customers and keep hot and cold products
              apart. Regular drivers may benefit from both setups.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Can I put loose ice inside an insulated delivery bag?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Only when the manufacturer specifically describes the bag as
              leak-resistant or suitable for loose ice. Reusable ice packs are
              usually cleaner and safer for ordinary insulated grocery bags.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              How should delivery bags be cleaned?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Remove crumbs and spills after each shift, wipe the interior with
              a damp cloth and mild cleaner, and let the bag dry fully while open
              before folding or storing it.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}