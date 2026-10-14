import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import GigMilesPlayButton from "../components/GigMilesPlayButton";
export const metadata: Metadata = {
  title: "GigMiles Mileage Tracker for Spark and Gig Drivers",
  description:
    "Track mileage, shifts, earnings, expenses, and work photos with GigMiles for Spark and other gig drivers. Free plan available for Android.",
};
const features = [
  { title: "Smart Mileage Tracking", text: "Start your shift, then let GigMiles track your business miles automatically. Pause or end the shift when you need to.", premium: true },
  { title: "Work Location Reminders", text: "Get a reminder to start tracking when you arrive at a saved work location.", premium: true },
  { title: "Quick Proof", text: "Capture work photos stamped with the date, time, gig, and available location or address.", premium: true },
  { title: "Driver Vault", text: "Keep shift notes, incident details, and work photos together. Sync Vault photos across signed-in devices.", premium: true },
  { title: "Expenses and receipts", text: "Record work expenses and attach receipt photos. Signed-in account sync helps keep your records available across devices.", premium: false },
  { title: "Shift records and CSV exports", text: "Review mileage, hours, earnings, and shift history. Export your records as CSV files when you need them.", premium: false },
];

const supportedApps = [
  "Spark", "DoorDash", "Uber Eats", "Uber", "Lyft", "Amazon Flex",
  "Instacart", "Roadie", "Shipt", "Grubhub", "Favor", "Custom gigs",
];

const screenshots = [
  {
    "title": "Your gig work, organized",
    "description": "Keep mileage, shifts, earnings, and expenses together.",
    "src": "/images/gigmiles/v132/01-home.png",
    "alt": "GigMiles home screen showing shift controls and quick actions."
  },
  {
    "title": "You drive. GigMiles tracks.",
    "description": "Start a shift, track miles automatically, and capture Quick Proof photos with Premium.",
    "src": "/images/gigmiles/v132/02-smart-tracking.png",
    "alt": "GigMiles active shift showing Smart Mileage Tracking and the Quick Proof button."
  },
  {
    "title": "Remember to start tracking",
    "description": "Premium reminders help you start tracking at saved work locations.",
    "src": "/images/gigmiles/v132/03-work-reminders.png",
    "alt": "GigMiles Work Location Reminders screen with saved work locations."
  },
  {
    "title": "Keep shift evidence together",
    "description": "Organize shift notes, incident details, and work photos in your Premium Driver Vault.",
    "src": "/images/gigmiles/v132/04-driver-vault.png",
    "alt": "GigMiles shift Vault showing notes, incident documentation, and photos."
  },
  {
    "title": "Keep expenses and receipts together",
    "description": "Log work costs and attach receipt photos for easier record keeping.",
    "src": "/images/gigmiles/v132/05-expenses.png",
    "alt": "GigMiles expenses screen showing expense totals and a receipt photo."
  },
  {
    "title": "See what your work earns",
    "description": "Review your mileage, work time, and earnings over time.",
    "src": "/images/gigmiles/v132/06-stats.png",
    "alt": "GigMiles statistics screen showing daily, weekly, monthly, and yearly earnings."
  },
  {
    "title": "Know your numbers each shift",
    "description": "Review miles, hours, earnings, and earnings per mile for a saved shift.",
    "src": "/images/gigmiles/v132/07-shift-details.png",
    "alt": "GigMiles shift details screen showing miles, hours, and earnings."
  },
  {
    "title": "Keep records ready for tax time",
    "description": "Review business mileage and export mileage and expense CSV files.",
    "src": "/images/gigmiles/v132/08-mileage-export.png",
    "alt": "GigMiles mileage screen showing mileage records and a CSV export button."
  }
];

const faqs = [
  { question: "What is included in the Free plan?", answer: "Free includes up to 7 shifts and 3 expenses per month, unlimited vehicles and gigs, CSV export, and automatic signed-in account sync." },
  { question: "What does Premium add?", answer: "Premium includes unlimited shifts and expenses, Smart Mileage Tracking, Work Location Reminders, Driver Vault, and Quick Proof. Check the app for current subscription pricing." },
  { question: "Does Smart Mileage Tracking start my shift automatically?", answer: "You start the shift yourself. With Smart Mileage Tracking enabled, GigMiles then tracks business miles automatically during your shift. You can pause or end it yourself. Work Location Reminders can remind you to start at a saved work location." },
  { question: "Is GigMiles only for Spark drivers?", answer: "No. GigMiles supports records for Spark, DoorDash, Uber Eats, Uber, Lyft, Amazon Flex, Instacart, Roadie, Shipt, Grubhub, Favor, and custom gigs." },
  { question: "Can I access my records on another device?", answer: "Yes. GigMiles supports automatic signed-in account sync and multiple devices, including synced expense receipt photos and Driver Vault photos." },
  { question: "What does Quick Proof put on a photo?", answer: "Quick Proof stamps work photos with the date, time, gig, and available location or address. It is included in Premium." },
];



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
                    Android app · Free plan available
                  </p>
                </div>
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl">
                Your gig work. Organized.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Track miles, shifts, earnings, expenses, and work photos in one app.
                Built for Spark drivers and useful across your other gigs, too.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GigMilesPlayButton location="hero" />
                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-black text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  View screenshots
                </a>
              </div>
              <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-3">
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
                src="/images/gigmiles/v132/feature-graphic.png"
                alt="GigMiles showing mileage tracking, expenses, and Driver Vault."
                width={1024}
                height={500}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card title="Start free. Add more when you need it.">
            <p>
              Start with up to 7 shifts and 3 expenses per month, unlimited vehicles
              and gigs, CSV export, and automatic signed-in account sync.
            </p>
            <p className="mt-5">
              Premium adds unlimited shifts and expenses, Smart Mileage Tracking,
              Work Location Reminders, Driver Vault, and Quick Proof.
            </p>
          </Card>
          <section className="relative overflow-hidden rounded-[2rem] bg-blue-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Quick fit
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
              Built for Spark. Ready for your other gigs.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Use one app to keep Spark and other gig work organized instead of
              trying to remember miles, shifts, expenses, and pay later.
            </p>
            <GigMilesPlayButton location="quick_fit" className="mt-6 w-full" />
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
            Explore the current app, from your first shift to synced receipts
            and work photos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.title}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
            >
              <div className="mt-auto bg-slate-950 p-3">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1080}
                  height={1920}
                  sizes="(min-width: 1280px) 280px, (min-width: 768px) 45vw, 90vw"
                  className="h-auto w-full rounded-2xl"
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
              src="/images/gigmiles/v132/07-shift-details.png"
              alt="GigMiles saved shift showing the gig, mileage, hours, and earnings."
              width={1080}
              height={1920}
              sizes="(min-width: 1280px) 280px, (min-width: 768px) 45vw, 90vw"
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
              Build a record-keeping habit with the Free plan. No subscription
              is needed for these features.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
              <li>✓ Up to 7 shifts per month</li>
              <li>✓ Up to 3 expenses per month</li>
              <li>✓ Unlimited vehicles and gigs</li>
              <li>✓ CSV export</li>
              <li>✓ Automatic signed-in account sync</li>
            </ul>
          </section>
          <section className="relative overflow-hidden rounded-[2rem] bg-blue-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Premium
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Track more. Keep more together.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Get unlimited tracking and tools that help you remember your miles
              and organize your work documentation. See current pricing in the app.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
              <li>✓ Unlimited shifts and expenses</li>
              <li>✓ Smart Mileage Tracking</li>
              <li>✓ Work Location Reminders</li>
              <li>✓ Driver Vault</li>
              <li>✓ Quick Proof stamped work photos</li>
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
                  Keep your mileage, shifts, earnings, and expenses together
                  with GigMiles.
                </p>
              </div>
              <GigMilesPlayButton location="footer" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
