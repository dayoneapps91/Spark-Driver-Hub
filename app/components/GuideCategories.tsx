const guideSections = [
  {
    title: "Getting Started",
    description: "Start here if you are new, applying, or trying to understand Spark basics.",
    links: [
      { label: "Walmart Spark Driver Requirements", href: "/articles/spark-driver-requirements" },
      { label: "Walmart Spark Driver Waitlist Explained", href: "/articles/spark-driver-waitlist" },
      { label: "Spark Driver Background Check Guide", href: "/articles/spark-background-check" },
    ],
  },
  {
    title: "Working Orders",
    description: "Understand common order types and delivery situations before they cost you time.",
    links: [
      { label: "Spark Shopping Orders Explained", href: "/articles/spark-shopping-orders-guide" },
      { label: "Spark Curbside Orders Explained", href: "/articles/spark-curbside-orders-guide" },
      { label: "Returning Spark Orders", href: "/articles/spark-returning-orders-guide" },
      { label: "Spark Alcohol Deliveries Guide", href: "/articles/spark-alcohol-deliveries" },
      { label: "Apartment Delivery Tips for Spark Drivers", href: "/articles/spark-apartment-deliveries" },
    ],
  },
  {
    title: "Account Health",
    description: "Guides for protecting your account, ratings, and appeal records.",
    links: [
      { label: "Spark Driver Customer Rating Explained", href: "/articles/spark-driver-customer-rating" },
      { label: "Spark Driver Acceptance Rate Explained", href: "/articles/spark-driver-acceptance-rate" },
      { label: "Spark Driver Deactivation Guide", href: "/articles/spark-driver-deactivation" },
      { label: "How to Appeal a Spark Deactivation", href: "/articles/how-to-appeal-spark-deactivation" },
    ],
  },
  {
    title: "Mileage & Taxes",
    description: "Keep cleaner records before tax season instead of rebuilding everything later.",
    links: [
      { label: "Best Mileage Tracker for Spark Drivers", href: "/articles/best-mileage-tracker-for-spark-drivers" },
      { label: "How Spark Drivers Track Mileage", href: "/articles/how-spark-drivers-track-mileage" },
      { label: "How to File Spark Driver Taxes", href: "/articles/how-to-file-spark-driver-taxes" },
      { label: "What Records Should Spark Drivers Keep?", href: "/articles/what-records-should-spark-drivers-keep" },
    ],
  },
  {
    title: "Earnings & Profit",
    description: "Go beyond gross pay and understand the miles, time, and costs behind each shift.",
    links: [
      { label: "Spark Driver Earnings Tracker", href: "/articles/spark-driver-earnings-tracker" },
      { label: "Spark Driver Pay Per Mile", href: "/articles/spark-driver-pay-per-mile" },
      { label: "Best Times to Drive for Spark", href: "/articles/best-times-to-drive-for-spark" },
      { label: "Peak Hours for Spark Drivers", href: "/articles/spark-peak-hours" },
      { label: "Slow Days for Spark Drivers", href: "/articles/spark-slow-days" },
      { label: "How Spark Offers Work", href: "/articles/how-spark-offers-work" },
      { label: "How to Increase Spark Driver Earnings", href: "/articles/how-to-increase-spark-driver-earnings" },
    ],
  },
];

export default function GuideCategories() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {guideSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{link.label}</span>
                    <span className="text-blue-700 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}