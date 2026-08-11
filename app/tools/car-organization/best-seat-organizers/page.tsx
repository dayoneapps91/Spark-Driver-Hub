import type { Metadata } from "next";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";
import ToolComparisonTable from "../../../components/ToolComparisonTable";
import ToolRecommendationCard from "../../../components/ToolRecommendationCard";

export const metadata: Metadata = {
  title: "Best Seat Organizers for Spark Drivers | Spark Driver Hub",
  description:
    "A practical buying guide to the best seat organizers for Spark drivers, including front-seat work organizers, seat-back storage, premium picks, and budget options.",
};

const affiliateTag = "sparkdriverhu-20";

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    title: "TIDIFY Car Front Seat Organizer",
    imageSrc: "/images/tools/best-seat-organizers/tidify.jpg",
    imageAlt: "TIDIFY front seat organizer for delivery drivers",
    score: "9.6/10",
    bestFor: "Most Spark drivers",
    amazonUrl: `https://www.amazon.com/dp/B07LFXYNR2?tag=${affiliateTag}`,
    summary:
      "The strongest all-around choice for delivery drivers who use the passenger seat as a mobile workspace. Its dedicated tablet and laptop storage, stabilizing side straps, multiple pockets, and reinforced buckles make it useful for keeping paperwork, chargers, snacks, cleaning supplies, and everyday delivery gear within reach.",
    pros: [
      "Designed for front-seat organization",
      "Dedicated laptop and tablet storage",
      "Stabilizing side straps reduce movement",
      "Multiple pockets keep small gear accessible",
    ],
    cons: [
      "Takes up most of the passenger seat",
      "More storage than minimalist drivers may need",
    ],
    sparkDriverNote:
      "Best for drivers who want the passenger seat to work like a compact delivery command center instead of becoming a pile of chargers, receipts, wipes, and personal items.",
  },
  {
    rank: 2,
    badge: "Best Premium",
    title: "Carhartt Front Seat Car Organizer",
    imageSrc: "/images/tools/best-seat-organizers/carhartt-front.jpg",
    imageAlt: "Carhartt front passenger seat organizer for delivery work",
    score: "9.4/10",
    bestFor: "Premium durability",
    amazonUrl: `https://www.amazon.com/dp/B0CZYV9BMK?tag=${affiliateTag}`,
    summary:
      "A rugged front-seat organizer made from 600-denier polyester with Carhartt Rain Defender water repellent. It is designed as a mobile-office style organizer and provides structured storage for files, folders, a laptop, notebooks, cables, and other workday essentials.",
    pros: [
      "Durable 600-denier polyester",
      "Water-repellent Rain Defender finish",
      "Useful for files, folders, and laptops",
      "Strong premium construction",
    ],
    cons: [
      "Costs more than basic organizers",
      "Bulkier than simple pocket-style options",
    ],
    sparkDriverNote:
      "A strong premium pick for full-time drivers who want something tougher and more work-focused than a basic fabric organizer.",
  },
  {
    rank: 3,
    badge: "Best Compact Front-Seat Pick",
    title: "Lusso Gear Front Seat Car Organizer",
    imageSrc: "/images/tools/best-seat-organizers/lusso-front.jpg",
    imageAlt: "Lusso Gear front seat organizer for car storage",
    score: "9.2/10",
    bestFor: "Compact everyday storage",
    amazonUrl: `https://www.amazon.com/dp/B079D3P6FJ?tag=${affiliateTag}`,
    summary:
      "A compact front-seat organizer designed to keep supplies upright and secured without turning the passenger area into a large storage station. Its universal design works well for drivers who mainly need organized access to smaller delivery essentials and personal items.",
    pros: [
      "Compact one-seat footprint",
      "Keeps supplies upright",
      "Universal fit design",
      "Easy to move or remove",
    ],
    cons: [
      "Less capacity than larger office-style organizers",
      "Not ideal for bulky gear",
    ],
    sparkDriverNote:
      "Best if you want your passenger seat organized but still prefer a simpler setup that is easy to remove when someone needs to ride with you.",
  },
  {
    rank: 4,
    badge: "Best Seat-Back Organizer",
    title: "Carhartt Universal Seat Back Organizer",
    imageSrc: "/images/tools/best-seat-organizers/carhartt-back.jpg",
    imageAlt: "Carhartt universal seat back organizer with eight cargo pockets",
    score: "9.1/10",
    bestFor: "Keeping the passenger seat free",
    amazonUrl: `https://www.amazon.com/dp/B08XZPZJH4?tag=${affiliateTag}`,
    summary:
      "A durable seat-back organizer with eight cargo pockets that keeps frequently used gear off the passenger seat and floor. Its rugged construction is especially useful for drivers who want quick-access storage without sacrificing a seating position.",
    pros: [
      "Eight cargo pockets",
      "Keeps front seating area clear",
      "Rugged Carhartt construction",
      "Useful access from the side door",
    ],
    cons: [
      "Items sit behind the seat instead of beside the driver",
      "Less convenient while actively driving",
    ],
    sparkDriverNote:
      "Choose this if you sometimes carry a passenger or simply want wipes, cables, bags, and emergency items organized without occupying the passenger seat.",
  },
  {
    rank: 5,
    badge: "Best Cabin practicality 2-Pack",
    title: "ULEEKA Backseat Organizer 2-Pack",
    imageSrc: "/images/tools/best-seat-organizers/uleeka.jpg",
    imageAlt: "ULEEKA backseat organizer two pack with multiple storage pockets",
    score: "8.9/10",
    bestFor: "Maximum pockets for the money",
    amazonUrl: `https://www.amazon.com/dp/B07NY9H3GP?tag=${affiliateTag}`,
    summary:
      "A large two-pack of seat-back organizers with multiple pockets, long adjustable straps, water-resistant 600D polyester, and a clear tablet pocket. It is more family-oriented than the top picks, but the amount of storage makes it a useful budget option for delivery supplies.",
    pros: [
      "Two organizers included",
      "Multiple storage pockets",
      "Water-resistant 600D polyester",
      "Large 24-by-16-inch coverage",
    ],
    cons: [
      "Design is more family-focused",
      "Can look cluttered when every pocket is filled",
    ],
    sparkDriverNote:
      "Best value if you want a lot of inexpensive storage behind both front seats for backup cables, wipes, towels, small bags, and other supplies.",
  },
];

function SeatOrganizerHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.28),transparent_34%)]" />
      <div className="absolute right-8 top-8 hidden h-44 w-44 rounded-full bg-white/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10">
              Car Organization
            </span>
            <span className="inline-flex rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-300/25">
              Buying Guide
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Best Seat Organizers for Spark Drivers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            A good seat organizer keeps chargers, receipts, wipes, snacks, paperwork,
            and everyday delivery gear within reach without letting the cabin
            turn into a pile of loose items during busy Spark shifts.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur md:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
              Top Pick
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              TIDIFY Front Seat Organizer
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

export default function BestSeatOrganizersPage() {
  return (
    <BuyingGuideLayout>
      <SeatOrganizerHero />

      <section className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:grid-cols-3 md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Best Overall
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            TIDIFY Front Seat Organizer
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            The best starting point for most Spark drivers because it combines
            front-seat accessibility, stable mounting, and dedicated storage
            for both small gear and larger work items.
          </p>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            What matters most
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>• Keeps daily gear within easy reach</li>
            <li>• Mounts securely without constant shifting</li>
            <li>• Separates cables, wipes, receipts, and supplies</li>
            <li>• Preserves useful cabin space</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-slate-950">
          <p className="text-sm font-black uppercase tracking-[0.16em]">
            Driver-first note
          </p>
          <p className="mt-4 font-semibold leading-7">
            For delivery work, the best seat organizer keeps important gear easy to
            reach without interfering with safe driving, seat belts, airbags,
            or normal passenger-seat use.
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
          Built around daily driver access, not just extra pockets.
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Secure fit</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We favored organizers with secure straps, reinforced mounting points, or
              structured designs that stay in place during normal driving.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Driver accessibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We looked for storage that keeps chargers, wipes, receipts, paperwork,
              snacks, and other frequently used delivery items easy to reach.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
            <h3 className="font-black text-slate-950">Cabin practicality</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We balanced storage capacity with passenger space, easy removal,
              durability, and whether the organizer makes sense for part-time
              and full-time Spark drivers.
            </p>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />
    </BuyingGuideLayout>
  );
}