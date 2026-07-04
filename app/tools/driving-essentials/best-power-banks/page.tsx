import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Power Banks for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best power banks for Spark drivers, including compact battery packs, fast USB-C chargers, high-capacity options, and backup power for long delivery shifts.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "Anker Zolo Power Bank 20,000mAh 30W",
    imageSrc: "/images/tools/best-power-banks/ankerzolo.jpg",
    imageAlt: "Anker Zolo 20,000mAh 30W power bank with built-in USB-C cable",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0CZ9LH53B?tag=${affiliateTag}`,
    summary:
      "The best overall power bank for Spark drivers because it balances capacity, fast USB-C charging, and convenience. The built-in USB-C cable is useful when you forget a cable, and 20,000mAh gives most drivers enough backup power for long shifts.",
    pros: [
      "Large 20,000mAh capacity",
      "30W USB-C fast charging",
      "Built-in USB-C cable",
      "Great balance of size, power, and price",
    ],
    cons: [
      "Bulkier than smaller 10,000mAh packs",
      "Not meant for serious laptop charging",
    ],
    sparkDriverNote:
      "Best first pick if your phone drains fast from Spark, navigation, mileage tracking, music, messages, and screen brightness during long delivery days.",
  },
  {
    rank: 2,
    badge: "Best Compact",
    title: "Anker Nano Power Bank 10,000mAh 30W",
    imageSrc: "/images/tools/best-power-banks/ankernano.jpg",
    imageAlt: "Anker Nano 10,000mAh 30W portable power bank",
    score: "9.4/10",
    bestFor: "Drivers who want less bulk",
    amazonUrl: `https://www.amazon.com/dp/B0C9CJKCH3?tag=${affiliateTag}`,
    summary:
      "A compact premium pick for drivers who want backup power without carrying a large brick. It is easier to keep in a console, small bag, or glove box while still giving strong 30W USB-C charging for phones and smaller devices.",
    pros: [
      "Compact 10,000mAh size",
      "30W USB-C charging",
      "Built-in USB-C cable",
      "Easy to keep in the car daily",
    ],
    cons: [
      "Less capacity than 20,000mAh options",
      "Costs more than basic small power banks",
    ],
    sparkDriverNote:
      "Choose this if you mostly need emergency phone power during Spark shifts and want something small enough to carry every day.",
  },
  {
    rank: 3,
    badge: "Best Value",
    title: "INIU 10,000mAh 22.5W Power Bank",
    imageSrc: "/images/tools/best-power-banks/iniu.jpg",
    imageAlt: "INIU 10,000mAh 22.5W USB-C portable charger",
    score: "9.2/10",
    bestFor: "Budget backup power",
    amazonUrl: `https://www.amazon.com/dp/B09176JCKZ?tag=${affiliateTag}`,
    summary:
      "A strong value option for drivers who want a small emergency battery without spending premium-brand money. It is not the most powerful pick here, but it is practical for topping off a phone when the car charger is not enough.",
    pros: [
      "Good price for daily backup power",
      "Small enough for console storage",
      "USB-C support",
      "Useful for emergency phone charging",
    ],
    cons: [
      "Lower capacity than 20,000mAh picks",
      "Not ideal for tablets or multiple devices",
    ],
    sparkDriverNote:
      "Best for drivers who already have a good car charger but want a cheap backup battery in case the phone gets low during a shift.",
  },
  {
    rank: 4,
    badge: "Best High Power",
    title: "UGREEN Nexode 25,000mAh 165W Power Bank",
    imageSrc: "/images/tools/best-power-banks/ugreen.jpg",
    imageAlt: "UGREEN Nexode 25,000mAh 165W power bank with built-in USB-C cables",
    score: "9.1/10",
    bestFor: "Heavy device users",
    amazonUrl: `https://www.amazon.com/dp/B0DSPX4RQ5?tag=${affiliateTag}`,
    summary:
      "A high-power battery pack for drivers who use more than just one phone. It is overkill for simple Spark driving, but it makes sense if your car is also your mobile workspace and you charge phones, tablets, laptops, or other USB-C devices.",
    pros: [
      "Huge 25,000mAh capacity",
      "Very high 165W total output",
      "Built-in USB-C cables",
      "Useful for phones, tablets, and laptops",
    ],
    cons: [
      "More expensive than basic phone power banks",
      "Bigger and heavier than most drivers need",
    ],
    sparkDriverNote:
      "Choose this only if you run multiple devices or want serious backup power for long days, travel, or mobile work beyond Spark deliveries.",
  },
  {
    rank: 5,
    badge: "Best Laptop Capable",
    title: "Baseus 100W Power Bank 20,000mAh",
    imageSrc: "/images/tools/best-power-banks/baseus.jpg",
    imageAlt: "Baseus 100W 20,000mAh portable laptop power bank",
    score: "8.9/10",
    bestFor: "Mobile work setups",
    amazonUrl: `https://www.amazon.com/dp/B0GGH5YC94?tag=${affiliateTag}`,
    summary:
      "A strong high-output option for drivers who want a battery pack that can handle more than phone charging. It is useful if you work from your car between deliveries, carry a tablet or laptop, or want extra charging headroom.",
    pros: [
      "100W USB-C output",
      "20,000mAh capacity",
      "Built-in USB-C cables",
      "Good for phones, tablets, and some laptops",
    ],
    cons: [
      "More power than most Spark drivers need",
      "Larger than compact emergency batteries",
    ],
    sparkDriverNote:
      "Best if you use your vehicle as a mobile office and want a power bank that can handle work devices, not just your Spark phone.",
  },
];

function PowerBankHero() {
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
            Best Power Banks for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A dead phone can stop your entire delivery day. A good power bank
            gives Spark drivers backup power when the car charger is not enough,
            the outlet fails, or the shift runs longer than expected.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Anker Zolo 20,000mAh
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

export default function BestPowerBanksPage() {
  return (
    <BuyingGuideLayout>
      <PowerBankHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Anker Zolo Power Bank
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best balance of capacity, fast charging, built-in cable
            convenience, and everyday usefulness for Spark drivers.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Enough capacity for long shifts</li>
            <li>• USB-C fast charging</li>
            <li>• Easy storage in the vehicle</li>
            <li>• Reliable backup power</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For Spark drivers, a power bank is not a luxury. It is a backup plan
            for navigation, offers, mileage tracking, and communication.
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
          Built around delivery shifts, not travel hype.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Capacity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We prioritized 10,000mAh to 25,000mAh options because Spark
              drivers need real backup power without carrying unnecessary bulk.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Charging speed</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              USB-C fast charging matters because delivery drivers often need to
              recover battery quickly while still using navigation and apps.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Daily convenience</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Built-in cables, compact shape, and reliable brands matter more
              than flashy specs when the product lives in your car every day.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
          FAQ
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Power bank questions Spark drivers ask.
        </h2>

        <div className="mt-8 grid gap-4">
          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              What size power bank is best for Spark drivers?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              A 10,000mAh power bank is enough for emergency backup. A 20,000mAh
              power bank is better for long shifts, heavy GPS use, and drivers
              who want more than one recharge available.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Do I still need a power bank if I already have a car charger?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Yes, it can still help. A power bank is useful if your car outlet
              fails, your charger overheats, your cable breaks, or you need to
              charge outside the vehicle during a long delivery day.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Is 20,000mAh too big for delivery driving?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Not for many drivers. It is larger than a pocket-sized battery,
              but it gives better peace of mind if you work long shifts or run
              multiple apps all day.
            </p>
          </details>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
