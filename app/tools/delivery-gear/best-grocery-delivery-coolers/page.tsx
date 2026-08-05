import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Grocery Delivery Coolers for Spark Drivers | Spark Driver Hub",
  description:
    "Compare the best grocery delivery coolers for Spark drivers, including large soft coolers, hard-liner options, budget picks, and compact cold-storage solutions.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "TOURIT 48-Can Soft Cooler Bag",
    imageSrc: "/images/tools/grocery-coolers/tourit.jpg",
    imageAlt:
      "TOURIT 48 can soft cooler bag for grocery delivery and cold food transport",
    score: "9.5/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0GRGXQDPS?tag=${affiliateTag}`,
    summary:
      "A strong all-around cooler for drivers who need enough room for frozen groceries, dairy, meat, and drinks without carrying a rigid ice chest. Its 32-liter capacity, wide opening, collapsible body, and shoulder strap make it practical for regular Spark shifts.",
    pros: [
      "Large 48-can capacity",
      "Wide opening for grocery loading",
      "Collapsible for trunk storage",
      "Useful shoulder strap and handles",
    ],
    cons: [
      "Soft sides can shift when partly filled",
      "Best performance requires ice packs",
    ],
    sparkDriverNote:
      "Best for drivers who want one roomy cooler that can handle a meaningful portion of a Walmart grocery order without taking over the entire trunk.",
  },
  {
    rank: 2,
    badge: "Best Hard-Liner Cooler",
    title: "Titan by Arctic Zone Deep Freeze 48-Can Cooler",
    imageSrc: "/images/tools/grocery-coolers/arctic-zone.jpg",
    imageAlt:
      "Titan by Arctic Zone Deep Freeze 48-can cooler for grocery delivery",
    score: "9.3/10",
    bestFor: "Fragile cold items",
    amazonUrl: `https://www.amazon.com/dp/B0H5K7J82V?tag=${affiliateTag}`,
    summary:
      "A structured cooler with a removable hardbody liner and quick-access zipperless lid. It keeps delicate cold items from being crushed and is easier to open repeatedly than a traditional zippered cooler.",
    pros: [
      "Hard liner protects fragile groceries",
      "Quick zipperless access",
      "Stable shape inside the vehicle",
      "Easy-to-clean interior",
    ],
    cons: [
      "Smaller than large grocery totes",
      "Does not collapse flat",
    ],
    sparkDriverNote:
      "A great choice for ice cream, dairy, meat, prepared food, and other items you do not want crushed by heavier grocery bags.",
  },
  {
    rank: 3,
    badge: "Best Leakproof Value",
    title: "Coleman Chiller 16-Can Soft Cooler",
    imageSrc: "/images/tools/grocery-coolers/coleman-chiller.jpg",
    imageAlt:
      "Coleman Chiller insulated soft cooler for cold groceries and delivery work",
    score: "9.0/10",
    bestFor: "Smaller cold orders",
    amazonUrl: `https://www.amazon.com/dp/B09HN19G9V?tag=${affiliateTag}`,
    summary:
      "A dependable compact cooler from a recognized outdoor brand. It uses welded seams, a removable hard liner, and insulation rated for extended cold retention, making it a practical choice for smaller frozen or refrigerated orders.",
    pros: [
      "Leakproof welded seams",
      "Removable hard plastic liner",
      "Compact and easy to carry",
      "Known brand with simple cleaning",
    ],
    cons: [
      "Too small for large grocery orders",
      "Limited space once ice packs are added",
    ],
    sparkDriverNote:
      "Best for drivers who mainly need a dedicated cold box for meat, dairy, frozen items, or one customer's most temperature-sensitive products.",
  },
  {
    rank: 4,
    badge: "Best Jumbo Grocery Cooler",
    title: "Creative Green Life Jumbo Insulated Cooler Bag",
    imageSrc: "/images/tools/grocery-coolers/creative-green-life.jpg",
    imageAlt:
      "Creative Green Life jumbo insulated grocery cooler bag",
    score: "8.9/10",
    bestFor: "Bulky grocery loads",
    amazonUrl: `https://www.amazon.com/dp/B0DCV4JGR3?tag=${affiliateTag}`,
    summary:
      "A wide, high-capacity soft cooler designed for grocery-sized loads. It offers more room than compact lunch coolers and folds down when empty, which is useful for drivers who need capacity but do not want a permanent hard cooler in the trunk.",
    pros: [
      "Large grocery-friendly shape",
      "Wide opening simplifies loading",
      "Collapsible when empty",
      "Useful for frozen and refrigerated items",
    ],
    cons: [
      "Wide footprint needs trunk space",
      "Soft construction offers less crush protection",
    ],
    sparkDriverNote:
      "Choose this when your main priority is fitting several cold grocery bags together instead of protecting a few delicate items.",
  },
  {
    rank: 5,
    badge: "Best Compact Backpack",
    title: "Coleman TranslatR 16-Can Cooler Backpack",
    imageSrc: "/images/tools/grocery-coolers/coleman-backpack.jpg",
    imageAlt:
      "Coleman TranslatR insulated cooler backpack for grocery delivery",
    score: "8.7/10",
    bestFor: "Apartments and long walks",
    amazonUrl: `https://www.amazon.com/dp/B09HMZZQSF?tag=${affiliateTag}`,
    summary:
      "A backpack-style cooler that leaves both hands free for carrying additional grocery bags. It is smaller than the top picks, but the hands-free design is useful for apartments, gated complexes, elevators, and long walks from parking areas.",
    pros: [
      "Hands-free backpack carry",
      "Leakproof welded seams",
      "Useful extra storage pockets",
      "Good for apartment deliveries",
    ],
    cons: [
      "Limited grocery capacity",
      "Not ideal for large or oddly shaped items",
    ],
    sparkDriverNote:
      "Best for drivers who regularly walk long distances and want cold items secured on their back while carrying other bags in both hands.",
  },
];

function GroceryCoolersHero() {
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
            Best Grocery Delivery Coolers for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Keep frozen food, dairy, meat, drinks, and refrigerated groceries
            protected during hot weather, long routes, stacked orders, and
            apartment deliveries.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "8 min read",
              "Updated August 2026",
              "Frozen food",
              "Dairy",
              "Summer routes",
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
              TOURIT 48-Can Cooler
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

export default function BestGroceryDeliveryCoolersPage() {
  return (
    <BuyingGuideLayout>
      <GroceryCoolersHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            TOURIT 48-Can Cooler
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best mix of usable capacity, portability, foldability, and
            cold-storage practicality for everyday Spark deliveries.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Enough room for grocery-sized loads</li>
            <li>• Leak-resistant or removable liner</li>
            <li>• Easy loading and cleaning</li>
            <li>• Stable carry handles or shoulder strap</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 leading-7 font-semibold">
            A cooler works best when it is pre-cooled and paired with reusable
            ice packs. Do not wait until food is already warming inside a hot
            vehicle before adding cold protection.
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
          Chosen for real grocery routes and hot vehicles.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Cold protection</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized insulation, secure closures, liners, and designs
              that work well with reusable ice packs during warm-weather routes.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Grocery capacity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The best options hold more than a personal lunch while remaining
              manageable enough to lift from the trunk and carry to the door.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Delivery practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We considered trunk space, stability, cleaning, carrying options,
              collapsibility, and how easily each cooler fits into stacked trips.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Grocery delivery cooler questions
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is a cooler better than an insulated delivery bag?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A cooler usually offers stronger cold protection and better leak
              control. An insulated delivery bag is often lighter, larger, and
              easier to fold. Many regular drivers benefit from having both.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Should I use loose ice or reusable ice packs?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Reusable ice packs are usually cleaner and easier for grocery
              delivery. Only use loose ice when the cooler is designed to be
              leakproof and the food packaging will not be damaged by water.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              What size cooler is best for Spark deliveries?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A medium or large soft cooler around 30 liters is a useful
              starting point for most drivers. Smaller coolers work well as a
              dedicated container for frozen and refrigerated products.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Where should I keep the cooler in my vehicle?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Keep it secured on a flat surface away from direct sunlight when
              possible. Avoid placing heavy grocery bags on top of soft coolers,
              and clean spills before storing the cooler after your shift.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}