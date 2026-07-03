import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Sun Protection Gear for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best sun protection gear for Spark drivers, including windshield sun shades, arm sleeves, sunglasses, sunscreen, and cooling hats.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "EcoNour Car Windshield Sunshade",
    imageSrc: "/images/tools/sun-protection/econour.jpg",
    imageAlt: "EcoNour car windshield sunshade for cars SUVs and trucks",
    score: "9.6/10",
    bestFor: "Keeping the car cooler",
    amazonUrl: `https://www.amazon.com/dp/B01KIFISX2?tag=${affiliateTag}`,
    summary:
      "The best first sun-protection buy for most Spark drivers because it helps reduce heat buildup while the car is parked between offers, pickups, and drop-offs. It is affordable, easy to store, and useful almost every sunny delivery day.",
    pros: [
      "Helps reduce parked-car heat",
      "Affordable and easy to store",
      "Useful for most vehicles",
      "Strong everyday value",
    ],
    cons: [
      "Fit depends on windshield size",
      "Must be put up and removed manually",
    ],
    sparkDriverNote:
      "Best first pick if your steering wheel, seats, phone, or dashboard get extremely hot while waiting for offers or loading groceries.",
  },
  {
    rank: 2,
    badge: "Best Arm Protection",
    title: "SHINYMOD UV Protection Cooling Arm Sleeves",
    imageSrc: "/images/tools/sun-protection/shinymod.jpg",
    imageAlt: "SHINYMOD UV protection cooling arm sleeves",
    score: "9.3/10",
    bestFor: "Driving with one arm in the sun",
    amazonUrl: `https://www.amazon.com/dp/B071LMQP97?tag=${affiliateTag}`,
    summary:
      "A practical, low-cost way to protect your arms during long daytime shifts. Cooling sleeves are especially useful for drivers who spend hours with sun hitting the same arm through the side window.",
    pros: [
      "Covers arms without constant sunscreen reapplication",
      "Lightweight and easy to keep in the car",
      "Helpful for long daytime routes",
      "Good budget add-on",
    ],
    cons: [
      "Fit can vary by arm size",
      "Some drivers may prefer sunscreen instead",
    ],
    sparkDriverNote:
      "A smart buy if your left arm gets more sun than the rest of your body during delivery shifts.",
  },
  {
    rank: 3,
    badge: "Best Budget Sunglasses",
    title: "goodr Polarized Sunglasses",
    imageSrc: "/images/tools/sun-protection/goodr.jpg",
    imageAlt: "goodr polarized sunglasses with UV protection",
    score: "9.1/10",
    bestFor: "Glare and daily driving",
    amazonUrl: `https://www.amazon.com/dp/B0GYV474Y7?tag=${affiliateTag}`,
    summary:
      "A strong everyday sunglasses pick because the lenses are polarized, the frames are lightweight, and the price is usually far lower than premium driving sunglasses. They make sense for drivers who want glare reduction without worrying too much about losing or scratching an expensive pair.",
    pros: [
      "Polarized lenses help reduce glare",
      "Lightweight fit",
      "Lower price than premium sunglasses",
      "Easy daily-use option",
    ],
    cons: [
      "Not as premium as Maui Jim or Ray-Ban",
      "Style and fit are personal",
    ],
    sparkDriverNote:
      "Choose these if you want a practical pair for bright parking lots, road glare, and daytime driving without spending premium-sunglasses money.",
  },
  {
    rank: 4,
    badge: "Best Sunscreen",
    title: "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 70",
    imageSrc: "/images/tools/sun-protection/neutrogena.jpg",
    imageAlt: "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 70",
    score: "9.0/10",
    bestFor: "Face, neck, and hands",
    amazonUrl: `https://www.amazon.com/dp/B005IHT94S?tag=${affiliateTag}`,
    summary:
      "A simple, affordable sunscreen option that is easy to keep in the car or delivery bag. It is especially useful for exposed areas like your face, neck, ears, and hands during long summer shifts.",
    pros: [
      "Affordable and easy to find",
      "Lightweight dry-touch feel",
      "Good for daily exposed areas",
      "Small enough to keep in the car",
    ],
    cons: [
      "Needs reapplication during long shifts",
      "Some drivers may prefer mineral sunscreen",
    ],
    sparkDriverNote:
      "Keep one bottle in your vehicle so you are not relying only on remembering to apply sunscreen before leaving home.",
  },
  {
    rank: 5,
    badge: "Best Sun Hat",
    title: "EINSKEY Wide Brim Sun Hat",
    imageSrc: "/images/tools/sun-protection/sunhat.jpg",
    imageAlt: "EINSKEY wide brim UPF sun hat",
    score: "8.8/10",
    bestFor: "Extra face and neck shade",
    amazonUrl: `https://www.amazon.com/dp/B0CGVFBTWD?tag=${affiliateTag}`,
    summary:
      "A useful add-on for drivers who spend time loading groceries, walking apartments, or handling outdoor drop-offs in direct sun. The wide brim gives more shade than a regular cap and can be kept in the trunk for hot days.",
    pros: [
      "Wide brim gives more coverage than a cap",
      "Adjustable chin strap",
      "Good for outdoor loading and drop-offs",
      "Affordable compared with premium outdoor hats",
    ],
    cons: [
      "Not everyone likes wearing a wide-brim hat",
      "Can feel unnecessary for very short trips",
    ],
    sparkDriverNote:
      "Best for hot markets, long apartment walks, curbside waits, and drivers who want more shade than sunglasses alone provide.",
  },
];

function SunProtectionHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Sun Protection
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Sun Protection Gear for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Long delivery days can mean heat, glare, sun exposure, and a car
            that feels like an oven between stops. These practical picks help
            protect your vehicle, your skin, and your comfort during sunny Spark
            shifts.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              EcoNour Windshield Sunshade
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
                <p className="mt-2 text-lg font-black">Hot cars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestSunProtectionGearPage() {
  return (
    <BuyingGuideLayout>
      <SunProtectionHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            EcoNour Windshield Sunshade
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The most useful first buy because it protects your parked vehicle and
            helps reduce heat before the next pickup or delivery.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Reduces heat inside the vehicle</li>
            <li>• Protects exposed skin during shifts</li>
            <li>• Cuts glare while driving</li>
            <li>• Easy to keep in the car every day</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            Sun gear is not about looking fancy. It is about staying comfortable,
            protecting your skin, reducing glare, and keeping your vehicle more
            usable during long summer delivery days.
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
          Built for real sunny delivery shifts.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Daily usefulness</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized products that solve repeated delivery-day problems:
              hot interiors, sun exposure, glare, sweating, and outdoor waits.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Value</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Most drivers do not need expensive outdoor gear. We favored items
              that are affordable enough to keep in the car and actually use.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Driver fit</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The best picks work for quick stops, apartment deliveries, hot
              parking lots, curbside waits, and long shifts in bright sun.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
