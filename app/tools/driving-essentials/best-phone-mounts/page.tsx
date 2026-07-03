import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Phone Mounts for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best phone mounts for Spark drivers, including dashboard, windshield, vent, MagSafe, and heavy-duty options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "iOttie Easy One Touch Signature Dash & Windshield Mount",
    imageSrc: "/images/tools/phone-mounts/ottie1.jpg",
    imageAlt: "iOttie Easy One Touch phone mount for car dashboard or windshield",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B0875RKTQF?tag=${affiliateTag}`,
    summary:
      "The best all-around pick for drivers who want a stable dashboard or windshield mount that works with both iPhone and Android devices. The one-touch locking system, telescopic arm, and adjustable foot make it simple enough for daily delivery use without feeling cheap.",
    pros: [
      "Strong dashboard or windshield setup",
      "Works with most phones and cases",
      "Telescopic arm helps with visibility",
      "No MagSafe case required",
    ],
    cons: [
      "Larger than simple vent mounts",
      "Adhesive/suction placement matters",
    ],
    sparkDriverNote:
      "Best pick if you use GPS all day and want the phone high enough to glance at safely without blocking your windshield view.",
  },
  {
    rank: 2,
    badge: "Best Heavy Duty",
    title: "VANMASS Dashboard, Windshield & Vent Phone Mount",
    imageSrc: "/images/tools/phone-mounts/vanmass1.jpg",
    imageAlt: "VANMASS heavy-duty phone mount for dashboard windshield or vent",
    score: "9.4/10",
    bestFor: "Rough roads and heavier phones",
    amazonUrl: `https://www.amazon.com/dp/B09CMV7YVJ?tag=${affiliateTag}`,
    summary:
      "A stronger, more rugged option for drivers who deal with rough apartment roads, potholes, long shifts, and heavier phones. It gives you multiple mounting options, which makes it easier to adapt to different vehicles.",
    pros: [
      "Very sturdy feel",
      "Multiple mounting options",
      "Good for larger phones",
      "Strong value for delivery work",
    ],
    cons: ["Bulkier design", "May feel overbuilt for small cars"],
    sparkDriverNote:
      "This is the practical pick if your current mount shakes, falls, or struggles with a larger phone like a Pro Max, Galaxy Ultra, or thick case.",
  },
  {
    rank: 3,
    badge: "Best MagSafe Value",
    title: "ESR HaloLock MagSafe Car Mount",
    imageSrc: "/images/tools/phone-mounts/halolock1.jpg",
    imageAlt: "ESR HaloLock MagSafe car phone mount",
    score: "9.1/10",
    bestFor: "iPhone drivers with MagSafe cases",
    amazonUrl: `https://www.amazon.com/dp/B0B38P9TF8?tag=${affiliateTag}`,
    summary:
      "A clean magnetic mount for iPhone drivers who want fast one-handed placement. It is simple, compact, and less bulky than cradle-style mounts, but it works best when paired with a strong MagSafe-compatible case.",
    pros: [
      "Fast one-handed magnetic placement",
      "Clean low-profile design",
      "Great for MagSafe users",
      "Simple to move between routes",
    ],
    cons: ["Not ideal without MagSafe", "Magnetic strength depends on case quality"],
    sparkDriverNote:
      "Good for drivers who constantly get in and out of the car and want to snap the phone on quickly between pickups and drop-offs.",
  },
  {
    rank: 4,
    badge: "Best Fast Charging",
    title: "Anker Prime MagSafe Car Mount Charger",
    imageSrc: "/images/tools/phone-mounts/anker1.jpg",
    imageAlt: "Anker Prime MagSafe car mount charger",
    score: "9.0/10",
    bestFor: "Drivers who need charging all shift",
    amazonUrl: `https://www.amazon.com/dp/B0F48CYG21?tag=${affiliateTag}`,
    summary:
      "A premium charging mount for drivers who use navigation, music, messaging, and delivery apps heavily during long shifts. It costs more, but it solves the battery-drain problem better than a basic holder.",
    pros: [
      "Fast wireless charging support",
      "Premium build quality",
      "Helpful for long delivery days",
      "Good fit for newer iPhones",
    ],
    cons: ["More expensive", "Best value only if you need charging"],
    sparkDriverNote:
      "Choose this if your battery dies during Spark blocks or you hate managing a cable every time you start driving.",
  },
  {
    rank: 5,
    badge: "Best Budget Vent Mount",
    title: "Belkin Universal Car Vent Mount",
    imageSrc: "/images/tools/phone-mounts/belkin1.jpg",
    imageAlt: "Belkin universal car vent phone mount",
    score: "8.7/10",
    bestFor: "Simple low-cost setup",
    amazonUrl: `https://www.amazon.com/dp/B01N7VARIG?tag=${affiliateTag}`,
    summary:
      "A simple, affordable vent mount from a known brand. It is not as heavy-duty as the top picks, but it can work well for drivers who want a small, clean mount without sticking anything to the dashboard or windshield.",
    pros: [
      "Affordable",
      "Compact design",
      "Known accessory brand",
      "No adhesive needed",
    ],
    cons: [
      "Vent mounts depend on your car vents",
      "Less stable than dash or windshield mounts",
    ],
    sparkDriverNote:
      "Best for part-time drivers or anyone who wants a quick setup, but avoid it if your vents are weak, loose, vertical, or oddly shaped.",
  },
];

function PhoneMountHero() {
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
            Best Phone Mounts for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A phone mount is one of the few delivery tools that can make every
            single order easier. The right one keeps navigation visible, reduces
            distractions, and helps your car feel more organized during long
            Spark shifts.
          </p>

          <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {[
              "7 min read",
              "Updated July 2026",
              "Dashboard",
              "Vent",
              "MagSafe",
              "Wireless charging",
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
              iOttie Easy One Touch
            </h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              Stable, flexible, and practical for daily Spark driving with most
              phones and cases.
            </p>

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

export default function BestPhoneMountsPage() {
  return (
    <BuyingGuideLayout>
      <PhoneMountHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            iOttie Easy One Touch
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The most balanced pick for daily Spark driving because it works with
            most phones, most cases, and most delivery setups.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Stable enough for bumpy roads</li>
            <li>• Easy one-handed phone placement</li>
            <li>• Does not block safe visibility</li>
            <li>• Works during long GPS-heavy shifts</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 leading-7 font-semibold">
            For Spark drivers, the best mount is not always the fanciest one.
            The winner is the one that stays secure, keeps the screen readable,
            and does not slow you down between stops.
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
          Built around real delivery-driver use, not desk reviews.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Stability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A Spark driver needs a mount that can handle potholes, speed
              bumps, apartments, parking lots, and constant movement.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Speed</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The best mounts make it easy to place, remove, and glance at your
              phone without turning every stop into extra friction.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Compatibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored mounts that work across common phones, cases, vehicle
              layouts, and real-world delivery routines.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}
