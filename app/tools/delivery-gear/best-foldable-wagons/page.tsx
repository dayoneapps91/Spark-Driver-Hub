import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Foldable Wagons for Spark Drivers | Spark Driver Hub",
  description:
    "Compare the best foldable wagons for Spark drivers, including heavy-duty grocery wagons, large-capacity carts, brake-equipped options, and compact trunk-friendly picks.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "MacSports XL Heavy Duty Collapsible Wagon",
    imageSrc: "/images/tools/foldable-wagons/macsports-xl.jpg",
    imageAlt:
      "MacSports XL heavy duty collapsible wagon for grocery and Spark deliveries",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B089Q4369D?tag=${affiliateTag}`,
    summary:
      "A roomy, heavy-duty wagon with a 300-pound rated frame, deep cargo bed, all-terrain wheels, and a collapsible design. It gives regular delivery drivers enough space for large grocery loads while still folding down for vehicle storage between orders.",
    pros: [
      "300-pound rated capacity",
      "Large grocery-friendly cargo area",
      "All-terrain wheels",
      "Folds for trunk storage",
    ],
    cons: [
      "Heavier than compact wagons",
      "Uses more folded trunk space",
    ],
    sparkDriverNote:
      "The strongest all-around choice for drivers who regularly handle apartments, long walkways, elevators, or several heavy grocery bags in one trip.",
  },
  {
    rank: 2,
    badge: "Best Large Capacity",
    title: "Sekey 220L Collapsible Foldable Wagon",
    imageSrc: "/images/tools/foldable-wagons/sekey-220l.jpg",
    imageAlt:
      "Sekey 220 liter collapsible wagon with all-terrain wheels for grocery delivery",
    score: "9.4/10",
    bestFor: "Large grocery orders",
    amazonUrl: `https://www.amazon.com/dp/B0DPZ7J2YC?tag=${affiliateTag}`,
    summary:
      "A deep 220-liter wagon with a 330-pound rated metal frame and large all-terrain wheels. Its enlarged cargo bed is especially useful when several grocery bags, water packs, and bulky household products need to move together.",
    pros: [
      "Very large 220-liter capacity",
      "330-pound rated frame",
      "Deep cargo area",
      "Large all-terrain wheels",
    ],
    cons: [
      "Bulky when fully loaded",
      "More wagon than small orders require",
    ],
    sparkDriverNote:
      "Best when capacity matters more than compactness, especially for high-item-count orders, water cases, and customers far from the parking area.",
  },
  {
    rank: 3,
    badge: "Best Heavy-Duty Value",
    title: "Navatiee 165L Collapsible Folding Wagon",
    imageSrc: "/images/tools/foldable-wagons/navatiee-165l.jpg",
    imageAlt:
      "Navatiee 165 liter collapsible folding wagon for grocery shopping and delivery",
    score: "9.2/10",
    bestFor: "Heavy everyday loads",
    amazonUrl: `https://www.amazon.com/dp/B0B1WJXPHR?tag=${affiliateTag}`,
    summary:
      "A 165-liter heavy-duty wagon rated for up to 330 pounds. It offers a useful middle ground between oversized cargo wagons and smaller utility carts, with enough room for substantial grocery loads without becoming unnecessarily massive.",
    pros: [
      "165-liter cargo capacity",
      "330-pound rated load",
      "Good balance of size and strength",
      "360-degree rotating front wheels",
    ],
    cons: [
      "Still requires meaningful trunk room",
      "Soft sides need balanced loading",
    ],
    sparkDriverNote:
      "A practical pick for drivers who want more strength than a basic wagon but do not need the largest possible cargo bed.",
  },
  {
    rank: 4,
    badge: "Best with Brakes",
    title: "PORTAL 200L Collapsible Folding Wagon",
    imageSrc: "/images/tools/foldable-wagons/portal-200l.jpg",
    imageAlt:
      "PORTAL 200 liter collapsible folding wagon with brakes and adjustable handle",
    score: "9.0/10",
    bestFor: "Slopes and uneven parking",
    amazonUrl: `https://www.amazon.com/dp/B086P84Y6H?tag=${affiliateTag}`,
    summary:
      "A spacious 200-liter wagon with large wheels, brakes, an adjustable telescoping handle, a side pocket, and cup holders. The braking wheels add useful control when loading near ramps, sloped sidewalks, or uneven apartment parking areas.",
    pros: [
      "Wheels with brakes",
      "Large 200-liter capacity",
      "Adjustable telescoping handle",
      "Side pocket and cup holders",
    ],
    cons: [
      "Large wheels add folded bulk",
      "Not the lightest option",
    ],
    sparkDriverNote:
      "Choose this when wheel control and stability matter, particularly around apartment ramps, inclined sidewalks, and uneven delivery paths.",
  },
  {
    rank: 5,
    badge: "Best Compact Pick",
    title: "MacSports Heavy Duty Collapsible Utility Wagon",
    imageSrc: "/images/tools/foldable-wagons/macsports-compact.jpg",
    imageAlt:
      "MacSports compact heavy duty collapsible utility wagon for grocery delivery",
    score: "8.8/10",
    bestFor: "Smaller trunks",
    amazonUrl: `https://www.amazon.com/dp/B0079P1KH6?tag=${affiliateTag}`,
    summary:
      "A proven compact-folding wagon that collapses to about eight inches thick and includes a carry cover. Its cargo area is smaller than the XL options, but it is easier to store beside coolers and customer orders in a crowded vehicle.",
    pros: [
      "Folds to about eight inches thick",
      "Carry cover included",
      "Established utility-wagon design",
      "Better fit for crowded trunks",
    ],
    cons: [
      "Less capacity than oversized wagons",
      "Smaller wheels than all-terrain picks",
    ],
    sparkDriverNote:
      "Best for drivers who want dependable wagon utility without permanently sacrificing a large section of their cargo area.",
  },
];

function FoldableWagonsHero() {
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
            Best Foldable Wagons for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Move heavy grocery bags, cases of water, apartment orders, and bulky
            household items with fewer trips between your vehicle and the
            customer&apos;s door.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "8 min read",
              "Updated August 2026",
              "Apartments",
              "Heavy orders",
              "Water cases",
              "Long walkways",
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
              MacSports XL Heavy Duty
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

export default function BestFoldableWagonsPage() {
  return (
    <BuyingGuideLayout>
      <FoldableWagonsHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            MacSports XL Heavy Duty
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The strongest mix of capacity, load rating, dependable construction,
            all-terrain movement, and foldable storage for regular deliveries.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Enough cargo room for grocery bags</li>
            <li>• Stable frame under heavy loads</li>
            <li>• Wheels that handle sidewalks and ramps</li>
            <li>• Compact folding for vehicle storage</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 leading-7 font-semibold">
            Load heavy items low and centered. Keep fragile bags on top, secure
            loose items before crossing curbs, and never exceed the
            manufacturer&apos;s listed weight capacity.
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
          Selected for real grocery deliveries, not just outdoor recreation.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Usable capacity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized cargo beds that can hold multiple grocery bags,
              cases of drinks, paper products, and other bulky delivery items.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Delivery movement</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Wheel size, steering, handle adjustment, brakes, and stability
              matter when crossing parking lots, sidewalks, ramps, and elevators.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Vehicle storage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every pick folds down because a delivery wagon must share trunk
              space with customer orders, coolers, bags, and other driver gear.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Foldable wagon questions
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is a foldable wagon worth carrying as a Spark driver?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              It can be extremely useful for apartment complexes, hotels,
              offices, retirement communities, long driveways, and any order
              with water cases or many heavy grocery bags.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              What wagon capacity is best for grocery delivery?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A medium or large wagon generally provides the best balance. Very
              small carts save trunk space, while larger 165-liter to 220-liter
              wagons reduce the number of trips required for major orders.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Are all-terrain wheels necessary?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              They are helpful but not always required. Larger wheels perform
              better over sidewalk cracks, gravel, grass, curbs, and rough
              apartment paths. Smaller wheels are usually easier to store.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              How should groceries be loaded into a wagon?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Place water, canned goods, and other heavy products low and near
              the center. Keep bread, eggs, chips, produce, and other fragile
              groceries on top and separated from shifting heavy items.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}