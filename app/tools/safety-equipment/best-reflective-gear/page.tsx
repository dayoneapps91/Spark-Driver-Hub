import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Reflective Safety Gear for Spark Drivers | Spark Driver Hub",
  description:
    "Compare reflective safety gear for Spark drivers, including high-visibility vests, lightweight reflective gear, illuminated vests, and compact visibility accessories for nighttime deliveries.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "TICONN Class II Reflective Safety Vest",
    imageSrc: "/images/tools/best-reflective-gear/ticonn.jpg",
    imageAlt:
      "TICONN Class II high visibility reflective safety vest for delivery drivers",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0BFJ7SBZL?tag=${affiliateTag}`,
    summary:
      "A practical high-visibility mesh vest with 360-degree reflective coverage, multiple pockets, and a Class II design. It gives delivery drivers a strong combination of visibility, everyday usefulness, breathability, and easy storage in the vehicle.",
    pros: [
      "360-degree reflective coverage",
      "Breathable mesh construction",
      "Multiple utility pockets",
      "Easy to keep in the vehicle",
    ],
    cons: [
      "More workwear-style than casual reflective gear",
      "Fit can vary by size and layering",
    ],
    sparkDriverNote:
      "The strongest all-around choice for drivers who want one simple visibility item they can throw on before apartment, roadside, parking-lot, or nighttime deliveries.",
  },
  {
    rank: 2,
    badge: "Best for Work Utility",
    title: "JKSafety 9-Pocket Class 2 Reflective Safety Vest",
    imageSrc: "/images/tools/best-reflective-gear/jksafety.jpg",
    imageAlt:
      "JKSafety 9 pocket Class 2 reflective high visibility vest for delivery work",
    score: "9.4/10",
    bestFor: "Drivers who want extra pockets",
    amazonUrl: `https://www.amazon.com/dp/B01LRVX4AS?tag=${affiliateTag}`,
    summary:
      "A high-visibility Class 2 mesh vest built around utility, with reflective striping and multiple front pockets. The extra storage is useful for drivers who want quick access to keys, a small flashlight, pens, cards, or other small delivery essentials.",
    pros: [
      "Nine-pocket utility design",
      "High-visibility reflective striping",
      "Breathable mesh material",
      "Useful for roadside and delivery work",
    ],
    cons: [
      "Bulkier than minimalist reflective gear",
      "Extra pockets are unnecessary for some drivers",
    ],
    sparkDriverNote:
      "Best for drivers who prefer a traditional safety vest but want enough pocket space to make it useful beyond visibility alone.",
  },
  {
    rank: 3,
    badge: "Best Lightweight Pick",
    title: "GoxRunx Reflective Running Vest Gear",
    imageSrc: "/images/tools/best-reflective-gear/goxrunx.jpg",
    imageAlt:
      "GoxRunx lightweight reflective vest with reflective arm bands for nighttime delivery",
    score: "9.2/10",
    bestFor: "Quick nighttime deliveries",
    amazonUrl: `https://www.amazon.com/dp/B0B7J729MG?tag=${affiliateTag}`,
    summary:
      "A lightweight reflective vest designed for high visibility without the heavier feel of a work vest. Its compact design and included reflective bands make it easy to keep in the car and put on quickly when a delivery takes you into a dark neighborhood or parking area.",
    pros: [
      "Lightweight and breathable",
      "Reflective coverage around the body",
      "Reflective bands included",
      "Compact for vehicle storage",
    ],
    cons: [
      "Fewer utility features than work vests",
      "Less substantial construction",
    ],
    sparkDriverNote:
      "A good choice when you want visibility gear that takes almost no trunk space and can be worn quickly over normal clothes.",
  },
  {
    rank: 4,
    badge: "Best Illuminated Pick",
    title: "Topward LED Reflective Vest",
    imageSrc: "/images/tools/best-reflective-gear/topward.jpg",
    imageAlt:
      "Topward LED reflective vest for nighttime visibility",
    score: "9.1/10",
    bestFor: "Maximum nighttime visibility",
    amazonUrl: `https://www.amazon.com/dp/B0B67VTYC9?tag=${affiliateTag}`,
    summary:
      "An illuminated reflective vest with LED lights on the front and back plus 360-degree reflective material. Unlike passive reflective gear that depends entirely on outside light, the active lighting adds its own visibility for dark streets, long walkways, and nighttime delivery environments.",
    pros: [
      "Active illumination plus reflectivity",
      "Front and rear LED lighting",
      "Adjustable wearable design",
      "Strong option for very dark conditions",
    ],
    cons: [
      "More expensive than basic reflective vests",
      "Requires charging",
    ],
    sparkDriverNote:
      "The premium visibility choice for drivers who frequently work after dark and want something more noticeable than reflective strips alone.",
  },
  {
    rank: 5,
    badge: "Best Compact Backup",
    title: "VVS 8-Pack High Visibility Reflective Bands",
    imageSrc: "/images/tools/best-reflective-gear/vvs-bands.jpg",
    imageAlt:
      "VVS reflective arm and ankle bands for delivery driver visibility",
    score: "8.7/10",
    bestFor: "Minimal emergency visibility",
    amazonUrl: `https://www.amazon.com/dp/B0DJ3CXCKB?tag=${affiliateTag}`,
    summary:
      "A compact eight-pack of adjustable reflective bands designed for arms, wrists, ankles, or legs. They take almost no storage space and work well as backup visibility gear kept in a glove box, center console, or emergency kit.",
    pros: [
      "Eight reflective bands included",
      "Low-cost visibility upgrade",
      "Easy to keep in the vehicle",
      "Can supplement a reflective vest",
    ],
    cons: [
      "Much less visible than a full vest",
      "Best used as supplemental gear",
    ],
    sparkDriverNote:
      "Keep a set in the vehicle as backup gear or combine them with a reflective vest when you want additional visibility around moving arms and legs.",
  },
];

function ReflectiveGearHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Safety Equipment
            </span>
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200 ring-1 ring-sky-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Reflective Safety Gear for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Make yourself easier to see during nighttime deliveries, dark
            apartment walks, parking-lot stops, and roadside situations with
            practical high-visibility gear that is easy to keep in your vehicle.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "8 min read",
              "Updated August 2026",
              "Night deliveries",
              "Parking lots",
              "Apartments",
              "Roadside visibility",
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
              TICONN Class II Vest
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

export default function BestReflectiveSafetyGearPage() {
  return (
    <BuyingGuideLayout>
      <ReflectiveGearHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            TICONN Class II Reflective Vest
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            A strong balance of visibility, breathable construction, useful
            pockets, easy storage, and everyday practicality for delivery work.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Visibility from multiple directions</li>
            <li>• Comfortable fit over normal clothing</li>
            <li>• Easy on-and-off between deliveries</li>
            <li>• Compact storage inside the vehicle</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            Reflective gear helps improve visibility, but it does not replace
            situational awareness. Stay out of active traffic lanes whenever
            possible and use dedicated roadside warning equipment during vehicle
            emergencies.
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
          Visibility gear selected around real delivery-driver use.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Visibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized reflective or illuminated products designed to make
              the wearer more noticeable in low-light environments.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Delivery practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gear should be quick to put on, comfortable over everyday clothing,
              and practical for repeated stops during a delivery shift.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Vehicle storage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every recommendation can be kept inside a delivery vehicle without
              consuming the cargo space needed for customer orders and other gear.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Reflective safety gear questions
        </h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is reflective gear useful for Spark drivers?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              It can be particularly useful during evening deliveries, dark
              apartment walks, poorly lit parking areas, and roadside situations
              where being easier to see is important.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Is a reflective vest better than reflective bands?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A vest generally provides a larger visible surface area. Reflective
              bands are more compact and work well as supplemental or backup gear
              kept inside the vehicle.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Do illuminated vests replace reflective material?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Not necessarily. Active lighting produces its own visible light,
              while reflective material returns light from headlights and other
              sources. Products that combine both approaches can be useful in
              especially dark environments.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-black">
              Where should reflective gear be stored?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Keep it somewhere accessible rather than underneath customer
              orders. A seat-back pocket, door compartment, trunk organizer, or
              emergency-kit area makes it easier to grab when needed.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}