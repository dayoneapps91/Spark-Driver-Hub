import { navigationLinks } from "../lib/navigation";

const popularResources = [
  {
    name: "Best Mileage Tracker for Spark Drivers",
    href: "/articles/best-mileage-tracker-for-spark-drivers",
  },
  {
    name: "Can Spark Drivers Deduct Gas?",
    href: "/articles/can-spark-drivers-deduct-gas",
  },
  {
    name: "Spark Driver Tax Deductions",
    href: "/taxes",
  },
  {
    name: "Spark Mileage Tracking",
    href: "/mileage",
  },
  {
    name: "Spark Driver Articles",
    href: "/articles",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms of Use",
    href: "/terms",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-lg font-black text-white shadow-sm">
                S
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  Spark Driver Hub
                </p>
                <p className="text-sm text-slate-500">
                  by GigMiles
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              The independent resource hub for Walmart Spark drivers, focused on
              mileage tracking, taxes, expenses, earnings, updates, and better
              record keeping.
            </p>

            <a
              href="/gigmiles"
              className="mt-5 inline-flex rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800"
            >
              Download GigMiles
            </a>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-950">
              Navigation
            </h2>

            <nav className="mt-4 grid gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-950">
              Popular Resources
            </h2>

            <nav className="mt-4 grid gap-3">
              {popularResources.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-950">
              Site
            </h2>

            <nav className="mt-4 grid gap-3">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 sm:mt-10">
          <p className="text-sm leading-7 text-slate-500">
            © 2026 Spark Driver Hub. Spark Driver Hub is an independent resource
            and is not affiliated with Walmart, Spark Driver, or Walmart Spark.
          </p>
        </div>
      </div>
    </footer>
  );
}
