import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.eduardo.sparkmileagetracker";

export const metadata: Metadata = {
  title: "GigMiles Mileage Tracker for Spark and Gig Drivers",
  description:
    "GigMiles helps Spark, DoorDash, Uber, Instacart, Amazon Flex, and other gig drivers track mileage, shifts, earnings, expenses, and tax-ready records.",
};

const features = [
  {
    title: "Mileage tracking",
    text: "Track business miles for Spark and other gig work so your records are easier to review later.",
  },
  {
    title: "Shift history",
    text: "Save work sessions, miles, hours, breaks, earnings, and notes in one organized history.",
  },
  {
    title: "Expense tracking",
    text: "Record fuel, maintenance, supplies, and other driving expenses throughout the year.",
  },
  {
    title: "Earnings stats",
    text: "Review daily, weekly, monthly, and yearly totals so you can understand real driving results.",
  },
  {
    title: "Multi-gig support",
    text: "Use GigMiles for Spark, DoorDash, Uber, Instacart, Amazon Flex, medical courier work, and more.",
  },
  {
    title: "Tax-season records",
    text: "Keep mileage, earnings, expenses, and shift records organized before tax season arrives.",
  },
];

const supportedApps = [
  "Walmart Spark",
  "DoorDash",
  "Uber",
  "Uber Eats",
  "Instacart",
  "Amazon Flex",
  "Medical Courier",
  "Multi-app drivers",
];

const screenshots = [
  {
    title: "Track every mile",
    description:
      "Start a shift, pause for breaks, and save business mileage for each work session.",
    src: "/images/gigmiles/screen 1.png",
    alt: "GigMiles shift screen showing mileage and work time tracking.",
  },
  {
    title: "Review every shift",
    description:
      "See mileage, earnings, work hours, and shift history by week.",
    src: "/images/gigmiles/gigmileshistoryscreen.png",
    alt: "GigMiles history screen showing weekly shifts, earnings, miles, and hours.",
  },
  {
    title: "Built for every gig",
    description:
      "Filter history by gig app so Spark, DoorDash, Uber, Instacart, and other work stays organized.",
    src: "/images/gigmiles/multi gig histroy screen  2.png",
    alt: "GigMiles multi-gig history screen showing supported gig app filters.",
  },
  {
    title: "Review mileage records",
    description:
      "Review mileage history and saved driving records when you need them.",
    src: "/images/gigmiles/MILEAGE SCREEN.png",
    alt: "GigMiles mileage screen showing mileage history and saved records.",
  },
];

const faqs = [
  {
    question: "Is GigMiles free?",
    answer:
      "GigMiles can be used for free, which makes it useful for casual gig drivers who want to start organizing mileage, shifts, earnings, and expenses without paying first.",
  },
  {
    question: "Who is GigMiles for?",
    answer:
      "GigMiles is built for gig workers, including Walmart Spark drivers, DoorDash drivers, Uber drivers, Instacart shoppers, Amazon Flex drivers, medical couriers, and multi-app drivers.",
  },
  {
    question: "Can I track expenses?",
    answer:
      "Yes. GigMiles includes expense tracking for common driving costs like fuel, maintenance, supplies, and other work-related expenses.",
  },
  {
    question: "Can I track more than Spark?",
    answer:
      "Yes. GigMiles can be used for multiple gig apps, so you can keep different driving work organized in one place.",
  },
  {
    question: "Is GigMiles useful for tax season?",
    answer:
      "Yes. The goal is to help drivers keep cleaner mileage, shift, earnings, and expense records throughout the year instead of rebuilding everything later.",
  },
];

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-blue-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 ${className}`}
    >
      Get GigMiles on Google Play
    </a>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}

export default function GigMilesPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.24),transparent_32%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_460px]">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
                GigMiles
              </span>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/images/gigmiles/gigmileslogo.png"
                  alt="GigMiles app logo"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-lg shadow-slate-950/20"
                  priority
                />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                    Mileage tracker for gig drivers
                  </p>
                  <p className="mt-1 text-sm font-black text-emerald-300">
                    Free plan available for casual drivers
                  </p>
                </div>
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl">
                Mileage tracking made simple for gig drivers.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                GigMiles helps drivers track mileage, expenses, earnings, work
                hours, shifts, deductions, and tax-ready records in one simple app.
                Use it for Spark, DoorDash, Uber, Instacart, Amazon Flex, medical
                courier work, and other gig apps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AppStoreButton className="bg-white text-slate-950 hover:bg-orange-400" />
                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-black text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  View screenshots
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Mileage", "Earnings", "Expenses"].map((label) => (
                  <div
                    key={label}
                    className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15"
                  >
                    <p className="text-sm font-black text-white">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {label === "Mileage"
                        ? "Track business miles by shift."
                        : label === "Earnings"
                          ? "Review pay, hours, and totals."
                          : "Save driving costs year-round."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-3 shadow-2xl ring-1 ring-white/15">
              <Image
                src="/images/gigmiles/gigmiles banner.png"
                alt="GigMiles app banner showing mileage, shift, earnings, and deductions screens."
                width={1600}
                height={900}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card title="Free for casual gig drivers">
            <p>
              GigMiles is useful even if you only drive part-time or casually.
              You can start organizing mileage, shifts, earnings, and expenses
              without committing to a paid tool right away.
            </p>
            <p className="mt-5">
              If you drive more often or want more room to grow, Premium is
              available for drivers who need expanded tracking and long-term
              record keeping.
            </p>
          </Card>

          <section className="relative overflow-hidden rounded-[2rem] bg-blue-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Quick fit
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
              Good for Spark. Useful for every gig.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Use one app to keep Spark and other gig work organized instead of
              trying to remember miles, shifts, expenses, and pay later.
            </p>
            <AppStoreButton className="mt-6 w-full" />
          </section>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 sm:py-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Track the records that matter after every shift.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              GigMiles is designed for drivers who want simple records without a
              complicated setup.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-[2rem] bg-slate-50 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
                <h3 className="text-lg font-black text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="screenshots"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 sm:py-16 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            App screenshots
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            See how GigMiles keeps driving records organized.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use GigMiles to track shifts, mileage, breaks, earnings, expenses,
            and multi-app driving history.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
            >
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-950">
                  {screenshot.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {screenshot.description}
                </p>
              </div>

              <div className="flex h-96 items-center justify-center bg-slate-950 p-4 sm:h-[32rem] xl:h-80">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1200}
                  height={1800}
                  className="max-h-full w-auto max-w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 sm:py-16 lg:grid-cols-[1fr_420px] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Multi-app friendly
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Built for Spark drivers and multi-app workers.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Many drivers do more than one app. GigMiles helps you keep those
              shifts organized so Spark, DoorDash, Uber, Instacart, Amazon Flex,
              and other work do not blur together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {supportedApps.map((app) => (
                <span
                  key={app}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-800 ring-1 ring-blue-100"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="flex h-96 items-center justify-center overflow-hidden rounded-[2rem] bg-slate-950 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 sm:h-[32rem] lg:h-96">
            <Image
              src="/images/gigmiles/multi gig histroy screen  2.png"
              alt="GigMiles multi-app history filter showing Spark, DoorDash, Uber, Amazon Flex, Instacart, and medical courier options."
              width={1200}
              height={1800}
              className="max-h-full w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Free
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Start without paying.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The free version is a strong starting point for casual gig drivers
              who want to organize basic mileage, earnings, expenses, and shift
              records.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
              <li>✓ Useful for casual or part-time drivers</li>
              <li>✓ Start tracking mileage and shifts</li>
              <li>✓ Organize expenses and earnings</li>
              <li>✓ Upgrade only when you need more</li>
            </ul>
          </section>

          <section className="relative overflow-hidden rounded-[2rem] bg-blue-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Premium
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Grow when your driving grows.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Premium is for drivers who want expanded tracking and cleaner
              long-term records as their gig work becomes more active.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
              <li>✓ Better for frequent gig drivers</li>
              <li>✓ More room for long-term history</li>
              <li>✓ Helps keep records organized year-round</li>
              <li>✓ Built for drivers who track consistently</li>
            </ul>
          </section>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 sm:py-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[2rem] bg-slate-50 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70"
              >
                <h3 className="text-lg font-black text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.24),transparent_32%)]" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
              Download GigMiles
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Ready to organize your driving records?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Start tracking mileage, shifts, earnings, expenses, and
                  tax-ready records with GigMiles.
                </p>
              </div>
              <AppStoreButton className="bg-blue-600 hover:bg-blue-500" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
