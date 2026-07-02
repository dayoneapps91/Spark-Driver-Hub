import ArticleCard from "../../components/ArticleCard";
import PageHero from "../../components/PageHero";

const guides = [
  {
    title: "📱 Best Phone Mounts",
    description: "Find secure phone mounts designed to keep navigation visible and stable during deliveries.",
    href: "/tools/driving-essentials/best-phone-mounts",
  },
  {
    title: "🔋 Best Power Banks",
    description: "Portable battery packs that help keep your phone charged through long delivery shifts.",
    href: "/tools/driving-essentials/best-power-banks",
  },
  {
    title: "⚡ Best Car Chargers",
    description: "Reliable fast chargers and adapters for keeping your devices powered on the road.",
    href: "/tools/driving-essentials/best-car-chargers",
  },
  {
    title: "🔌 Best USB-C Cables",
    description: "Durable charging cables that stand up to everyday driving and frequent use.",
    href: "/tools/driving-essentials/best-usb-c-cables",
  },
  {
    title: "📲 Charging Accessories",
    description: "Helpful accessories that improve charging, mounting, and daily convenience.",
    href: "/tools/driving-essentials/charging-accessories",
  },
];

export default function DrivingEssentialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHero
        eyebrow="Driver Tools"
        title="Driving Essentials"
        description="Explore practical gear that helps Spark drivers stay connected, organized, and productive throughout every delivery shift."
      />

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Buying Guides
        </h2>

        <p className="mt-3 max-w-3xl text-slate-600">
          Every guide explains what to look for before buying, highlights our
          recommended options, and helps you choose equipment that fits your
          delivery style and budget.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <ArticleCard
              key={guide.href}
              title={guide.title}
              description={guide.description}
              href={guide.href}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          More Driving Essentials Coming Soon
        </h2>

        <p className="mt-4 text-slate-700 leading-7">
          Spark Driver Hub is continuously expanding this library with new
          buying guides and practical recommendations to help delivery drivers
          build a safer, more efficient setup.
        </p>
      </section>
    </main>
  );
}
