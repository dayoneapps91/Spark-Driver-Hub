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
    <section className="mx-auto w-full max-w-7xl px-5 pb-8 md:px-8 md:pb-12 lg:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Browse Guides
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Practical help for every part of Spark driving.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-slate-600">
          Start with the section that matches what you are trying to understand,
          then open the full guide for step-by-step help.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {guideSections.map((section, index) => (
          <div
            key={section.title}
            className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)] sm:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                #{index + 1}
              </span>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  {section.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group/link flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 ring-1 ring-slate-200/80 transition duration-200 hover:bg-orange-50 hover:text-orange-700 hover:ring-orange-200"
                >
                  <span>{link.label}</span>
                  <span className="text-orange-600 transition duration-200 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
