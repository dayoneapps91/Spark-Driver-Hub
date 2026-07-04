import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Charging Accessories for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best charging accessories for Spark drivers, including retractable car chargers, multi-port USB-C adapters, wall chargers, and cable organizers.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "LISEN Retractable Car Charger 84W",
    imageSrc: "/images/tools/charging-accessories/lisen%20retractable.jpg",
    imageAlt: "LISEN 84W retractable USB-C car charger for organized car charging",
    score: "9.6/10",
    bestFor: "Cleaner car charging",
    amazonUrl: `https://www.amazon.com/dp/B0D4215HCX?tag=${affiliateTag}`,
    summary:
      "The best overall charging accessory for Spark drivers who hate loose cables around the console. It combines a retractable USB-C cable, multiple ports, and enough power for daily phone charging in one cleaner setup.",
    pros: [
      "Retractable cable reduces clutter",
      "Multiple charging ports",
      "Good for phones and passenger devices",
      "Cleaner than loose cords everywhere",
    ],
    cons: [
      "Bulkier than a tiny adapter",
      "Retractable design may not fit every console layout",
    ],
    sparkDriverNote:
      "Best pick if your current charging setup has cables hanging over the shifter, cup holders, or passenger seat during Spark shifts.",
  },
  {
    rank: 2,
    badge: "Best Compact Charger",
    title: "Anker USB-C Car Charger 67W 3-Port",
    imageSrc: "/images/tools/charging-accessories/anker3portable.jpg",
    imageAlt: "Anker 67W three port USB-C car charger",
    score: "9.5/10",
    bestFor: "Most daily drivers",
    amazonUrl: `https://www.amazon.com/dp/B0BSVB93DK?tag=${affiliateTag}`,
    summary:
      "A compact, reliable car charger for drivers who want fast USB-C charging without adding a bulky accessory. The three-port setup is useful for a main phone, backup phone, power bank, or passenger device.",
    pros: [
      "67W total output",
      "Two USB-C ports plus USB-A",
      "Compact trusted-brand design",
      "Good daily charger upgrade",
    ],
    cons: [
      "No built-in cable",
      "You still need cable management",
    ],
    sparkDriverNote:
      "Best if you already have good cables and just need a stronger charger for Spark, GPS, mileage tracking, and music.",
  },
  {
    rank: 3,
    badge: "Best High Power",
    title: "UGREEN 130W USB-C Car Charger",
    imageSrc: "/images/tools/charging-accessories/ugreen.jpg",
    imageAlt: "UGREEN 130W USB-C car charger with multiple ports",
    score: "9.2/10",
    bestFor: "Heavy device users",
    amazonUrl: `https://www.amazon.com/dp/B0B3CSLPZR?tag=${affiliateTag}`,
    summary:
      "A high-output car charger for drivers who use more than one device or charge a tablet, laptop, power bank, or second phone. It is more power than most drivers need, but useful for a mobile-work setup.",
    pros: [
      "High 130W total output",
      "Good for multiple devices",
      "Useful for tablets and some laptops",
      "Strong USB-C charging headroom",
    ],
    cons: [
      "Overkill for simple phone-only charging",
      "Costs more than basic adapters",
    ],
    sparkDriverNote:
      "Choose this if your car is also your mobile office and you charge more than just one Spark phone during the day.",
  },
  {
    rank: 4,
    badge: "Best Wall Charger",
    title: "Anker 67W GaN 3-Port USB-C Wall Charger",
    imageSrc: "/images/tools/charging-accessories/ankerwallcharger.jpg",
    imageAlt: "Anker 67W GaN three port wall charger",
    score: "9.0/10",
    bestFor: "Home reset setup",
    amazonUrl: `https://www.amazon.com/dp/B0C4YTB56H?tag=${affiliateTag}`,
    summary:
      "A wall charger is not used while driving, but it matters before the shift. This Anker 67W charger lets you quickly reset your phone, power bank, earbuds, or tablet at home so your gear starts the day full.",
    pros: [
      "67W fast charging from the wall",
      "Three ports for multiple devices",
      "Compact GaN design",
      "Useful for nightly charging routines",
    ],
    cons: [
      "Not a car charger",
      "Requires separate cables",
    ],
    sparkDriverNote:
      "Best if you want one charging station at home so your phone and power bank are ready before your first Spark order.",
  },
  {
    rank: 5,
    badge: "Best Cable Organizer",
    title: "Adhesive Cable Clips for Car Cable Management",
    imageSrc: "/images/tools/charging-accessories/cableclips.jpg",
    imageAlt: "Adhesive cable clips for car charging cable organization",
    score: "8.8/10",
    bestFor: "Reducing cable mess",
    amazonUrl: `https://www.amazon.com/s?k=adhesive+car+cable+clips&tag=${affiliateTag}`,
    summary:
      "Small adhesive cable clips are a cheap way to stop cords from sliding into the footwell, wrapping around the shifter, or getting lost between seats. They are simple, but they make a daily car setup feel more intentional.",
    pros: [
      "Very affordable",
      "Helps route cables cleanly",
      "Good for dash and console setups",
      "Useful with any charger or cable",
    ],
    cons: [
      "Adhesive quality varies by pack",
      "Placement matters for a clean look",
    ],
    sparkDriverNote:
      "Best small upgrade if your charging cable constantly falls under the seat or gets tangled while you are working.",
  },
];

function ChargingAccessoriesHero() {
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
            Charging Accessories for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            The right charging accessories keep your car cleaner and your phone
            ready for navigation, offers, messages, music, and mileage tracking
            throughout the delivery day.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              LISEN Retractable 84W
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
                <p className="mt-2 text-lg font-black">Clean setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ChargingAccessoriesPage() {
  return (
    <BuyingGuideLayout>
      <ChargingAccessoriesHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            LISEN Retractable Car Charger
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The cleanest all-in-one charging upgrade for drivers who want less
            cable clutter without giving up fast charging convenience.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Fast enough for active phone use</li>
            <li>• Cleaner cable routing</li>
            <li>• Multiple device support</li>
            <li>• Easy daily setup and teardown</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            A good charging setup should disappear into the car. It should keep
            your phone powered without cables fighting your cup holders, mount,
            shifter, or passenger seat.
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
          Built around cleaner car charging, not random accessories.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Real usefulness</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We focused on accessories that directly solve delivery problems:
              battery drain, tangled cables, weak chargers, and messy consoles.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Charging power</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Spark drivers often run several apps at once, so we favored
              accessories that support stronger charging than basic old adapters.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Vehicle fit</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A charging accessory should improve the driving setup without
              blocking controls, crowding the console, or creating new clutter.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
          FAQ
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight">
          Charging accessory questions Spark drivers ask.
        </h2>

        <div className="mt-8 grid gap-4">
          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              What charging accessory should Spark drivers buy first?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Start with a reliable USB-C car charger and a durable cable. After
              that, cable clips or a retractable charger can make the setup
              cleaner and easier to use every day.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Are retractable car chargers worth it?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              They can be worth it if loose cables bother you. For delivery
              drivers, the main benefit is keeping the console cleaner while the
              phone stays charged during navigation and app use.
            </p>
          </details>

          <details className="group rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <summary className="cursor-pointer text-lg font-black">
              Do I need a high-watt car charger for Spark driving?
            </summary>
            <p className="mt-4 leading-7 text-slate-300">
              Not always. A strong 40W to 67W charger is enough for most phones.
              Higher-output chargers make more sense if you charge multiple
              devices, a power bank, tablet, or laptop from the car.
            </p>
          </details>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
