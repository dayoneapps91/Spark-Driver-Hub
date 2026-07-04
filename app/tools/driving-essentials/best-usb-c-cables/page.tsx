import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best USB-C Cables for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best USB-C cables for Spark drivers, including durable fast-charging cords, short car cables, long backup cables, and value multipacks.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Anker USB-C to USB-C Cable 100W 2-Pack",
    imageSrc: "/images/tools/best-usb-c-cables/anker%20100w%202pack.jpg",
    imageAlt: "Anker 100W USB-C to USB-C cable two pack",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B09LCJPZ1P?tag=${affiliateTag}`,
    summary:
      "The best overall USB-C cable pick for Spark drivers because it gives you two reliable 6-foot cables, strong 100W charging support, and enough length for dashboard, console, and passenger-side setups without feeling messy.",
    pros: [
      "Useful 2-pack for car and backup",
      "100W USB-C fast charging support",
      "6-foot length works in most vehicles",
      "Trusted accessory brand",
    ],
    cons: [
      "Not for video output",
      "Longer than some drivers need near the dash",
    ],
    sparkDriverNote:
      "Best first pick if you want one cable plugged into the car charger and one spare in the glove box before a long Spark shift.",
  },
  {
    rank: 2,
    badge: "Most Durable",
    title: "Anker Prime USB-C Cable 240W 6 ft",
    imageSrc: "/images/tools/best-usb-c-cables/anker%20prime.jpg",
    imageAlt: "Anker Prime 240W braided USB-C cable",
    score: "9.5/10",
    bestFor: "Drivers who are rough on cables",
    amazonUrl: `https://www.amazon.com/dp/B0D4Z9RPT8?tag=${affiliateTag}`,
    summary:
      "A premium cable for drivers who constantly plug, unplug, bend, toss, and route cables around the center console. It is more cable than most phones need, but the durability and high power rating make it a strong long-term pick.",
    pros: [
      "Very high 240W charging support",
      "Premium braided design",
      "Great for phones, tablets, and laptops",
      "Built for heavy daily use",
    ],
    cons: [
      "Costs more than basic cables",
      "Overkill if you only need simple phone charging",
    ],
    sparkDriverNote:
      "Choose this if cheap cables keep fraying, disconnecting, or failing inside your car after a few weeks of delivery use.",
  },
  {
    rank: 3,
    badge: "Best Value",
    title: "INIU USB-C to USB-C Cable 100W 2-Pack",
    imageSrc: "/images/tools/best-usb-c-cables/iniu2pack%206.6ft.jpg",
    imageAlt: "INIU 100W USB-C to USB-C braided charging cable two pack",
    score: "9.2/10",
    bestFor: "Budget backup cables",
    amazonUrl: `https://www.amazon.com/dp/B08J2HXYPH?tag=${affiliateTag}`,
    summary:
      "A strong value option for drivers who want extra USB-C cables without spending premium-brand money. The 6.6-foot length is convenient for routing around the console, passenger seat, or charging a backup phone.",
    pros: [
      "Good value 2-pack",
      "100W charging support",
      "Braided cable build",
      "Helpful 6.6-foot length",
    ],
    cons: [
      "Less premium feel than Anker",
      "Long cable can create clutter if unmanaged",
    ],
    sparkDriverNote:
      "Best if you want spare cables in the car, bag, and house so a broken cable never stops your delivery day.",
  },
  {
    rank: 4,
    badge: "Best Short Cable",
    title: "INIU Short USB-C Cable 100W 1 ft 2-Pack",
    imageSrc: "/images/tools/best-usb-c-cables/iniu%20short%20usb.jpg",
    imageAlt: "INIU short 1 foot USB-C cable two pack",
    score: "9.0/10",
    bestFor: "Clean console setups",
    amazonUrl: `https://www.amazon.com/dp/B0D8QBHZSW?tag=${affiliateTag}`,
    summary:
      "A short cable is perfect when your phone mount, charger, and console are close together. It helps reduce dangling cords, keeps the dash cleaner, and works well with MagSafe chargers, battery packs, or compact car charging setups.",
    pros: [
      "Keeps the dashboard cleaner",
      "100W charging support",
      "Great for power banks and mounts",
      "Useful 2-pack",
    ],
    cons: [
      "Too short for passenger-side charging",
      "Not ideal if your outlet is far from the mount",
    ],
    sparkDriverNote:
      "Best if your current cable hangs across the shifter, cup holders, or steering area and makes your car feel messy.",
  },
  {
    rank: 5,
    badge: "Best Long Cable",
    title: "Anker USB-C to USB-C Cable 100W 10 ft",
    imageSrc: "/images/tools/best-usb-c-cables/anker%20long%2010ft.jpg",
    imageAlt: "Anker 10 foot 100W USB-C to USB-C cable",
    score: "8.9/10",
    bestFor: "Extra reach",
    amazonUrl: `https://www.amazon.com/dp/B08PVPTNZL?tag=${affiliateTag}`,
    summary:
      "A long cable makes sense if your outlet is far from your phone mount, you charge a tablet, or passengers need power. It is not the cleanest everyday setup, but it is useful to keep as a backup cable in the vehicle.",
    pros: [
      "Long 10-foot reach",
      "100W charging support",
      "Good backup for awkward vehicle layouts",
      "Works for tablets and larger devices",
    ],
    cons: [
      "Can clutter the car if left loose",
      "Not needed for most simple dash setups",
    ],
    sparkDriverNote:
      "Best as a backup cable for unusual outlet locations, rear-seat charging, or days when your normal cable is not enough.",
  },
];

function UsbCableHero() {
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
            Best USB-C Cables for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A cheap cable can ruin a delivery shift when your phone stops
            charging during navigation. These USB-C cables are practical picks
            for fast charging, repeated plugging, and cleaner car setups.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Anker 100W 2-Pack
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

export default function BestUsbCCablesPage() {
  return (
    <BuyingGuideLayout>
      <UsbCableHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Anker USB-C 100W 2-Pack
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The most practical balance of durability, fast charging, length,
            brand trust, and backup value for daily Spark driving.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• USB-C fast charging support</li>
            <li>• Durable braided or reinforced build</li>
            <li>• Right length for your vehicle</li>
            <li>• Backup cable ready in the car</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For Spark drivers, one good cable is not enough. Keep one daily cable
            plugged in and one backup cable stored before the shift starts.
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
          Built around daily cable abuse inside a delivery car.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Durability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Delivery drivers plug, unplug, bend, and move cables all day, so
              we favored reinforced and braided options over cheap thin cords.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Charging speed</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized USB-C cables with strong wattage support so phones,
              tablets, and power banks can charge quickly with the right adapter.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Car setup</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Cable length matters. Short cables keep the dash clean, while
              longer cables help when outlets and mounts are far apart.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
          FAQ
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          USB-C cable questions Spark drivers ask.
        </h2>

        <div className="mt-8 grid gap-4">
          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              What USB-C cable length is best for Spark drivers?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Six feet is the safest all-around length for most cars. A 1-foot
              cable is better for clean console setups, while a 10-foot cable is
              useful as a backup when the outlet is far from the phone mount.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Do Spark drivers need a 100W or 240W USB-C cable?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Most phones do not need that much power, but higher-rated cables
              are useful because they work with fast chargers, power banks,
              tablets, and laptops. They also tend to be better built.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Should I keep a spare cable in my car?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Yes. A spare USB-C cable is cheap insurance for delivery drivers.
              If your main cable breaks or stops charging, your phone, GPS,
              offers, and mileage tracking can keep running.
            </p>
          </details>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
