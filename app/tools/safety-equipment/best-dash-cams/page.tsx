import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Dash Cams for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best dash cams for Spark drivers, including front and rear cameras, compact dash cams, budget 4K options, and 3-channel protection.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "VIOFO A229 Plus Front & Rear Dash Cam",
    imageSrc: "/images/tools/dash-cams/viofoa229.jpg",
    imageAlt: "VIOFO A229 Plus front and rear dash cam",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0CKX14L34?tag=${affiliateTag}`,
    summary:
      "The strongest overall pick for delivery drivers who want dependable front and rear coverage without jumping into the most expensive premium dash cams. It gives Spark drivers a better chance of capturing what happens in front of the vehicle, behind the vehicle, and around busy pickup or drop-off areas.",
    pros: [
      "Front and rear coverage",
      "Strong video quality for the price",
      "Good fit for daily delivery work",
      "Better value than many premium systems",
    ],
    cons: [
      "Costs more than a simple front-only camera",
      "Rear camera installation takes more time",
    ],
    sparkDriverNote:
      "Best pick if you want one dash cam setup that makes sense for daily Spark work, parking lots, curbside pickups, apartment roads, and highway driving.",
  },
  {
    rank: 2,
    badge: "Best Budget Front Cam",
    title: "VIOFO A119 Mini 2 Dash Cam",
    imageSrc: "/images/tools/dash-cams/viofoa119.jpg",
    imageAlt: "VIOFO A119 Mini 2 compact dash cam",
    score: "9.3/10",
    bestFor: "Front-only protection",
    amazonUrl: `https://www.amazon.com/dp/B0C5MVB7NX?tag=${affiliateTag}`,
    summary:
      "A smart front-only option for drivers who want strong video quality without paying for a full front-and-rear kit. It is compact, practical, and easier to install than multi-camera systems.",
    pros: [
      "Excellent value",
      "Compact windshield footprint",
      "Good video quality",
      "Simpler install than dual systems",
    ],
    cons: [
      "No rear camera included",
      "Less coverage than dual-channel picks",
    ],
    sparkDriverNote:
      "Choose this if you mainly want front-road evidence and want to keep the setup simple and affordable.",
  },
  {
    rank: 3,
    badge: "Best Compact",
    title: "Garmin Dash Cam Mini 3",
    imageSrc: "/images/tools/dash-cams/garmin mini 3.jpg",
    imageAlt: "Garmin Dash Cam Mini 3 compact windshield dash cam",
    score: "9.0/10",
    bestFor: "Small clean setups",
    amazonUrl: `https://www.amazon.com/dp/B0DDM7PFLW?tag=${affiliateTag}`,
    summary:
      "A small, clean dash cam for drivers who want something discreet behind the mirror. It is not the highest-resolution pick, but it is easy to live with and keeps the windshield area uncluttered.",
    pros: [
      "Very small design",
      "Clean behind-the-mirror setup",
      "Simple daily use",
      "Trusted accessory brand",
    ],
    cons: [
      "Only 1080p recording",
      "No built-in screen",
    ],
    sparkDriverNote:
      "Good for drivers who hate bulky windshield accessories and want a dash cam that mostly disappears during the shift.",
  },
  {
    rank: 4,
    badge: "Best Budget 4K Dual",
    title: "ROVE R2-4K Dual Dash Cam",
    imageSrc: "/images/tools/dash-cams/rover24k.jpg",
    imageAlt: "ROVE R2-4K Dual front and rear dash cam",
    score: "8.9/10",
    bestFor: "Budget front and rear 4K",
    amazonUrl: `https://www.amazon.com/dp/B0D6J5B98H?tag=${affiliateTag}`,
    summary:
      "A strong value option for drivers who want front and rear coverage with a 4K-style front camera at a more accessible price. It is a practical middle ground for drivers who want more than a basic camera but do not want a high-end setup.",
    pros: [
      "Front and rear camera kit",
      "Good value for the feature set",
      "Wide-angle coverage",
      "Accessible price compared with premium kits",
    ],
    cons: [
      "Not as enthusiast-proven as VIOFO",
      "Rear camera is not as sharp as the front",
    ],
    sparkDriverNote:
      "Worth considering if you want dual-camera protection and a lower price matters more than getting the most proven enthusiast pick.",
  },
  {
    rank: 5,
    badge: "Best 3-Channel",
    title: "Vantrue N4 Pro S 3-Channel Dash Cam",
    imageSrc: "/images/tools/dash-cams/vantrue.jpg",
    imageAlt: "Vantrue N4 Pro S 3-channel dash cam with front cabin and rear cameras",
    score: "8.8/10",
    bestFor: "Front, cabin, and rear coverage",
    amazonUrl: `https://www.amazon.com/dp/B0FXX2693Y?tag=${affiliateTag}`,
    summary:
      "The best fit for drivers who want extra coverage inside the vehicle along with front and rear recording. It is more than many Spark drivers need, but it can make sense if you also rideshare, work late, park in busy areas, or want cabin footage.",
    pros: [
      "Front, interior, and rear coverage",
      "Useful for drivers who also rideshare",
      "Strong safety-focused setup",
      "Good option for busy parking lots",
    ],
    cons: [
      "More expensive",
      "More wiring and setup work",
    ],
    sparkDriverNote:
      "Choose this only if you want the extra cabin angle. For most Spark-only drivers, a good front-and-rear system is usually enough.",
  },
];

function DashCamHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Safety Equipment
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Dash Cams for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A dash cam can protect you during accidents, parking-lot issues,
            customer disputes, unsafe roads, and long delivery shifts. These
            picks focus on value, reliability, video clarity, and real-world use
            for Spark drivers.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl md:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
              VIOFO A229 Plus
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

export default function BestDashCamsPage() {
  return (
    <BuyingGuideLayout>
      <DashCamHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            VIOFO A229 Plus
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best balance of coverage, quality, value, and practicality for
            most Spark drivers who want front and rear protection.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Clear front-road footage</li>
            <li>• Rear coverage for parking lots</li>
            <li>• Reliable heat performance</li>
            <li>• Simple enough for daily use</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For Spark drivers, a dash cam is not about flashy features. It is
            about having useful footage when something happens during pickups,
            drop-offs, traffic, or parking-lot situations.
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
          Chosen for delivery work, not just spec sheets.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Coverage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Spark drivers spend time in traffic, parking lots, curbside lanes,
              apartment roads, and neighborhoods. Front and rear coverage can be
              more useful than a front-only setup.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Clarity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A dash cam should capture usable footage in daytime, nighttime,
              rain, glare, and parking-lot conditions where details matter.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Value</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored dash cams that give drivers meaningful protection
              without pushing every recommendation toward the most expensive
              option.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
