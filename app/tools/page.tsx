import Link from "next/link";
import PageHero from "../components/PageHero";
import ArticleCard from "../components/ArticleCard";

const categories = [
  {
    title: "🚗 Driving Essentials",
    description:
      "Phone mounts, power banks, chargers, cables, and everyday accessories that make deliveries easier.",
    href: "/tools/driving-essentials",
  },
  {
    title: "📦 Delivery Gear",
    description:
      "Delivery bags, coolers, foldable wagons, and equipment for handling grocery orders efficiently.",
    href: "/tools/delivery-gear",
  },
  {
    title: "🚘 Car Organization",
    description:
      "Keep your vehicle clean and organized with practical storage and interior accessories.",
    href: "/tools/car-organization",
  },
  {
    title: "🛡️ Safety Equipment",
    description:
      "Dash cams, reflective gear, flashlights, and safety products every driver should consider.",
    href: "/tools/safety-equipment",
  },
  {
    title: "⚡ Emergency Gear",
    description:
      "Jump starters, tire inflators, emergency kits, and roadside essentials for unexpected situations.",
    href: "/tools/emergency-gear",
  },
  {
    title: "☀️ Sun Protection",
    description:
      "Sun sleeves, hats, sunglasses, sunscreen, and accessories to stay comfortable during hot delivery days.",
    href: "/tools/sun-protection",
  },
  {
    title: "🌧️ Cold & Rain Weather",
    description:
      "Rain gear, winter jackets, gloves, ice scrapers, and seasonal equipment for challenging weather.",
    href: "/tools/cold-rain-weather",
  },
];

export default function DriverToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHero
        eyebrow="Spark Driver Hub"
        title="Driver Tools"
        description="Discover carefully selected gear, accessories, and equipment that can help Spark drivers stay organized, protect their vehicles, and make deliveries more efficient. Every recommendation is chosen based on practicality and real-world usefulness."
      />

      <section className="mt-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Browse by Category
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Explore our growing collection of buying guides designed specifically
            for Spark drivers. Whether you're looking to improve your setup,
            stay safer on the road, or prepare for different weather conditions,
            you'll find practical recommendations here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <ArticleCard
              key={category.href}
              title={category.title}
              description={category.description}
              href={category.href}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Our Recommendation Philosophy
        </h2>

        <p className="mt-4 text-slate-700 leading-7">
          We recommend products that solve real problems for Spark drivers.
          Every guide focuses on value, durability, and practicality instead of
          simply listing the most expensive options. Our goal is to help drivers
          make informed purchasing decisions with clear explanations and honest
          recommendations.
        </p>

        <p className="mt-6 text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> Spark Driver Hub participates
          in the Amazon Associates Program and may earn a commission from
          qualifying purchases at no additional cost to you.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/guides"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Explore Spark Driver Guides
        </Link>
      </div>
    </main>
  );
}