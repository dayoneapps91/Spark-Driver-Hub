import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Car Chargers for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best car chargers for Spark drivers, including USB-C fast chargers, compact adapters, budget picks, and high-power options for long delivery shifts.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Anker 535 Car Charger 67W",
    imageSrc: "/images/tools/phone-chargers/anker535.jpg",
    imageAlt: "Anker 535 67W 3-port USB-C car charger",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0BSVB93DK?tag=${affiliateTag}`,
    summary:
      "The best all-around car charger for Spark drivers who want reliable fast charging without buying something oversized. It gives you two USB-C ports, one USB-A port, and enough total power to keep a phone, tablet, or backup device charged during long GPS-heavy shifts.",
    pros: [
      "Strong 67W total output",
      "Two USB-C ports plus one USB-A port",
      "Reliable Anker build quality",
      "Good fit for phones, tablets, and accessories",
    ],
    cons: [
      "Costs more than basic chargers",
      "May be more power than some drivers need",
    ],
    sparkDriverNote:
      "Best first pick if you use GPS, Spark, music, messaging, and mileage tracking all day and want one charger that can handle multiple devices.",
  },
  {
    rank: 2,
    badge: "Best Value",
    title: "UGREEN 69W 3-Port USB-C Car Charger",
    imageSrc: "/images/tools/phone-chargers/ugreen69w.jpg",
    imageAlt: "UGREEN 69W 3-port USB-C car charger",
    score: "9.4/10",
    bestFor: "Value-focused drivers",
    amazonUrl: `https://www.amazon.com/dp/B094DFW7T7?tag=${affiliateTag}`,
    summary:
      "A strong value pick for drivers who want three charging ports and enough power for a phone, second device, and small accessory. It is practical for delivery work because it balances speed, ports, and price without feeling like a throwaway charger.",
    pros: [
      "Three-port setup",
      "Good power for phones and tablets",
      "Strong value for the features",
      "Useful USB-C and USB-A mix",
    ],
    cons: [
      "Not as proven as Anker long term",
      "Power sharing depends on how many devices are plugged in",
    ],
    sparkDriverNote:
      "Choose this if you want a good multi-port charger for daily Spark driving without paying premium Anker pricing.",
  },
  {
    rank: 3,
    badge: "Best Budget",
    title: "Anker 323 USB-C Car Charger 52.5W",
    imageSrc: "/images/tools/phone-chargers/anker323.jpg",
    imageAlt: "Anker 323 52.5W USB-C car charger",
    score: "9.2/10",
    bestFor: "Simple phone charging",
    amazonUrl: `https://www.amazon.com/dp/B0BPGSRYFH?tag=${affiliateTag}`,
    summary:
      "The safest budget-style pick because it still comes from a trusted charging brand. It has one USB-C port and one USB-A port, making it enough for most drivers who mainly need to keep one phone and one backup device charged.",
    pros: [
      "Reliable budget-friendly option",
      "USB-C and USB-A ports",
      "Compact daily setup",
      "Enough power for most phones",
    ],
    cons: [
      "Only two ports",
      "Less total power than the top picks",
    ],
    sparkDriverNote:
      "Best if you mostly charge your main phone and occasionally plug in a second device, but do not need a full multi-device charging hub.",
  },
  {
    rank: 4,
    badge: "Best Compact",
    title: "AINOPE 67.5W Mini Metal Car Charger",
    imageSrc: "/images/tools/phone-chargers/ainope.jpg",
    imageAlt: "AINOPE 67.5W mini metal USB-C car charger",
    score: "9.0/10",
    bestFor: "Small dashboards",
    amazonUrl: `https://www.amazon.com/dp/B08HYQLH1C?tag=${affiliateTag}`,
    summary:
      "A compact metal charger for drivers who want something small that sits cleanly in the cigarette lighter port. The mix of USB-C PD and USB-A quick charging makes it useful without adding bulk to the center console.",
    pros: [
      "Very compact design",
      "Metal body feels sturdier than cheap plastic",
      "USB-C plus USB-A setup",
      "Good power for the size",
    ],
    cons: [
      "Small design can be harder to pull out",
      "Not ideal if you need three ports",
    ],
    sparkDriverNote:
      "Good pick if your car has a tight charging area or you want a charger that almost disappears into the outlet.",
  },
  {
    rank: 5,
    badge: "Best High Power",
    title: "Spigen ArcStation Essential 113W USB-C Car Charger",
    imageSrc: "/images/tools/phone-chargers/spigen.jpg",
    imageAlt: "Spigen ArcStation Essential 113W USB-C car charger",
    score: "8.9/10",
    bestFor: "High-power setups",
    amazonUrl: `https://www.amazon.com/dp/B0FFM99G31?tag=${affiliateTag}`,
    summary:
      "A high-power option for drivers who want more charging headroom for phones, tablets, and USB-C accessories. It is more than most Spark drivers need, but it makes sense if your vehicle is also your mobile workspace.",
    pros: [
      "High total wattage",
      "Three-port charging setup",
      "Includes an E-Marker cable",
      "Useful for phones, tablets, and higher-power devices",
    ],
    cons: [
      "Overkill for simple phone-only charging",
      "Newer product with fewer long-term reviews",
    ],
    sparkDriverNote:
      "Choose this if you regularly charge multiple devices during shifts or use your car as a work setup beyond Spark deliveries.",
  },
];

function CarChargerHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Driving Essentials
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Car Chargers for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Spark driving drains your phone fast. A reliable car charger keeps
            navigation, the Spark app, music, messages, and mileage tracking
            running during long delivery shifts.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Anker 535 Car Charger
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

export default function BestCarChargersPage() {
  return (
    <BuyingGuideLayout>
      <CarChargerHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Anker 535 Car Charger
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The most balanced pick because it gives Spark drivers strong USB-C
            power, three total ports, and a trusted charging brand.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Fast USB-C charging</li>
            <li>• Enough ports for backup devices</li>
            <li>• Reliable heat management</li>
            <li>• Compact enough for daily driving</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For Spark drivers, a charger is not just convenience. If your phone
            dies, your route, offers, navigation, and records all stop working.
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
          Built around long delivery shifts, not desk charging.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Charging speed</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized chargers with enough USB-C power to recover battery
              quickly while navigation and delivery apps are still running.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Multi-device use</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Spark drivers often charge a phone, backup phone, earbuds, dash
              cam, tablet, or power bank, so useful port layout matters.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Reliability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored known charging brands, practical wattage, safer builds,
              and chargers that make sense for daily vehicle use.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
