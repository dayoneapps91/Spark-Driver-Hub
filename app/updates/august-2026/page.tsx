import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "August 2026 Spark Driver Update: New Rewards Tiers, Pickup Changes & Fuel Savings",
  description:
    "August 2026 Spark Driver update covering Silver, Gold and Sapphire rewards tiers, pickup order changes, OnePay fuel savings, sweepstakes, and school traffic.",
};

const sources = [
  {
    label: "August 2026 Spark Driver communication",
    note: "Official August driver update covering the Rewards Program rollout, pickup order adjustments, OnePay fuel savings, sweepstakes wrap-up, and back-to-school traffic.",
  },
  {
    label: "Spark Driver Resource Center — Rewards Program",
    note: "Official program details for Silver, Gold, and Sapphire qualification requirements, points, Instant Rewards, End-of-Month Rewards, and progress tracking.",
  },
  {
    label: "OnePay",
    note: "Referenced for the limited-time Wednesday fuel-savings promotion and eligible gas offers.",
  },
];

const takeaways = [
  "A new Spark Driver Rewards Program is rolling out in select zones with Silver, Gold, and Sapphire tiers.",
  "Tier qualification is based on monthly points plus eligible My Metrics, including on-time arrival, completion rate, quantity found, and customer rating.",
  "Points are attached to eligible completed trips, can vary by trip, and reset at the start of each calendar month.",
  "Higher tiers can unlock offer-priority benefits, partner perks, and a Sapphire-only +10% multiplier on eligible incentives.",
  "Stores may remove orders at pickup when there is not enough usable space to keep customer orders separate and secure.",
  "Eligible drivers can earn over $1 cash back per gallon on Wednesdays through September 15 at 22,000+ participating gas stations through OnePay Rewards.",
];

const relatedArticles = [
  {
    title: "How Spark Offers Work",
    href: "/articles/how-spark-offers-work",
  },
  {
    title: "Spark Shopping Orders Guide",
    href: "/articles/spark-shopping-orders-guide",
  },
  {
    title: "Best Mileage Tracker for Spark Drivers",
    href: "/articles/best-mileage-tracker-for-spark-drivers",
  },
  {
    title: "Spark Driver Pay Per Mile",
    href: "/articles/spark-driver-pay-per-mile",
  },
];

function NewsletterCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:p-9">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

      <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function August2026NewsletterPage() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-blue-50/70 to-slate-50">
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <a
            href="/updates"
            className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-blue-700 hover:text-blue-800"
          >
            ← Spark Driver Updates
          </a>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            August 2026 Driver Update
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.05]">
            Spark Driver August 2026 Update
          </h1>

          <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-[-0.02em] text-slate-700 sm:text-3xl">
            New Rewards Tiers, Pickup Changes, Fuel Savings & Back-to-School
            Traffic
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            August brings one of the more significant Spark Driver changes of
            the summer: a new points-based Rewards Program with Silver, Gold,
            and Sapphire tiers. There are also useful updates on pickup order
            removals, fuel savings, sweepstakes notifications, and changing
            traffic patterns as schools reopen.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "🎁 Rewards Tiers",
              "📦 Pickup Changes",
              "⛽ Fuel Savings",
              "🏆 Sweepstakes",
              "🏫 School Traffic",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_24px_90px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
            <img
              src="/newsletters/augustnewsletter.png"
              alt="Spark Driver August 2026 update illustration showing a grocery pickup scene during rainy weather."
              className="w-full rounded-2xl"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold text-slate-600">
            <span>Updated August 2026</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Driver Update</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-6">
          <section className="relative overflow-hidden rounded-[2.25rem] bg-blue-50 p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 sm:p-9">
            <h2 className="text-2xl font-bold text-slate-950">
              What Drivers Should Know
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              The headline change is the new Rewards Program being introduced in
              select zones. Unlike the older two-tier structure, the new version
              uses monthly points and eligible My Metrics to determine whether a
              driver reaches Silver, Gold, or Sapphire. The same August update
              also clarifies a common pickup issue and highlights a temporary
              fuel promotion that may be valuable for eligible drivers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {takeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="rounded-2xl border border-blue-100 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                >
                  {takeaway}
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2.25rem] bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:p-9">
            <p className="font-bold text-slate-950">Independent resource note</p>

            <p className="mt-3 text-base leading-8 text-slate-700">
              Spark Driver Hub is an independent driver resource. Program
              availability, point values, rewards, and eligibility can vary by
              zone and may change, so drivers should use the Spark Driver app and
              official Resource Center for account-specific information.
            </p>
          </section>

          <NewsletterCard title="The New Spark Driver Rewards Program">
            <p>
              Spark is introducing a new Rewards Program in select zones built
              around three tiers: <strong>Silver, Gold, and Sapphire</strong>.
              Drivers earn points from eligible completed trips, while eligible
              My Metrics also factor into tier qualification.
            </p>

            <p>
              The number of points available for an eligible trip appears on the
              offer card before acceptance and can vary from trip to trip. Only
              completed eligible trips add to the monthly total. Points reset on
              the first day of each month and do not roll over.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-4 py-3 font-bold">Requirement</th>
                    <th className="px-4 py-3 font-bold">Silver</th>
                    <th className="px-4 py-3 font-bold">Gold</th>
                    <th className="px-4 py-3 font-bold">Sapphire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Points per month</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">120</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      On-Time Arrival at Pickup
                    </td>
                    <td className="px-4 py-3">93%</td>
                    <td className="px-4 py-3">95%</td>
                    <td className="px-4 py-3">96%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Completion Rate</td>
                    <td className="px-4 py-3">93%</td>
                    <td className="px-4 py-3">95%</td>
                    <td className="px-4 py-3">96%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Quantity Found</td>
                    <td className="px-4 py-3">96%</td>
                    <td className="px-4 py-3">98%</td>
                    <td className="px-4 py-3">99%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Customer Rating</td>
                    <td className="px-4 py-3">4.6</td>
                    <td className="px-4 py-3">4.8</td>
                    <td className="px-4 py-3">4.9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If Quantity Found or Customer Rating is not yet available in a
              driver&apos;s account, the unavailable metric does not prevent tier
              qualification until that metric becomes available.
            </p>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-bold text-slate-950">Where to track progress</p>

              <p className="mt-3">
                In the Spark Driver app, open <strong>More</strong> on iOS or
                <strong> Menu</strong> on Android, then select
                <strong> My Metrics and Rewards</strong>. The screen can show
                your current tier, Points This Month, progress toward higher
                tiers, eligible metrics, and unlocked rewards.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="What Silver, Gold, and Sapphire Can Unlock">
            <p>
              The new program includes both <strong>Instant Rewards</strong> and
              <strong> End-of-Month Rewards</strong>. Instant Rewards become
              available when an eligible tier is reached during the month.
              End-of-Month Rewards are based on the tier held at the end of the
              last day of the month.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-black text-slate-950">Silver</p>
                <p className="mt-3 text-sm leading-6">
                  Can include cellular discounts, tax-filing assistance, and a
                  dashcam app offer.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <p className="font-black text-slate-950">Gold</p>
                <p className="mt-3 text-sm leading-6">
                  Includes Silver-level partner rewards, may include a month of
                  Walmart+, and may allow some Round Robin offers to appear
                  before Silver and no-tier drivers.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <p className="font-black text-slate-950">Sapphire</p>
                <p className="mt-3 text-sm leading-6">
                  Includes higher-tier offer priority and a +10% multiplier on
                  eligible incentives in participating zones, in addition to
                  other available rewards.
                </p>
              </div>
            </div>

            <p>
              Offer priority is not a guarantee of receiving a specific offer or
              a certain number of offers. Spark states that Rewards tier is only
              one of several factors used when matching drivers with offers.
            </p>

            <p>
              Gold and Sapphire Instant Rewards remain available through the end
              of the calendar month once unlocked. End-of-Month Rewards and the
              following month&apos;s starting tier are determined by the tier held
              at the end of the last day of the month.
            </p>
          </NewsletterCard>

          <NewsletterCard title="Why an Order Can Be Removed at Pickup">
            <p>
              Stores may remove one or more customer orders from a trip when
              there is not enough available vehicle space to keep orders
              separated and secure during transport.
            </p>

            <p>
              This is particularly relevant on multi-order trips. The important
              issue is not simply whether every bag can physically fit somewhere
              in the vehicle; there needs to be enough usable space to prevent
              different customers&apos; orders from being mixed together or
              transported in a way that could affect order quality.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold text-slate-950">Practical takeaway</p>

              <p className="mt-3">
                Keep delivery space reasonably clear before starting a shift.
                Personal items, large coolers, tools, or other cargo can reduce
                the amount of space available for larger batched orders.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="Wednesday Fuel Savings Through September 15">
            <p>
              Eligible drivers can earn over $1 cash back per gallon on
              Wednesdays through September 15 at more than 22,000 participating
              gas stations using OnePay Rewards.
            </p>

            <p>
              The Wednesday bonus can stack with eligible gas offers already
              available in the OnePay app. Because both eligibility and available
              offers can vary, drivers should check OnePay before fueling rather
              than assuming a specific station or purchase will qualify.
            </p>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-slate-950">Temporary promotion</p>

              <p className="mt-3">
                The published end date is September 15. This is a seasonal
                savings opportunity, not a permanent Spark Driver fuel benefit.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="Go for the Goal! Sweepstakes Wrap-Up">
            <p>
              The Go for the Goal! summer sweepstakes has wrapped up, and Spark
              says it is beginning to contact winners. Drivers who participated
              should keep an eye on both email and in-app messages.
            </p>

            <p>
              Coca-Cola giveaways were also available at participating stores
              around the country during the summer as a thank-you to drivers.
            </p>
          </NewsletterCard>

          <NewsletterCard title="Back-to-School Traffic Returns">
            <p>
              As schools reopen across much of the country, drivers should expect
              more congestion around school zones, neighborhood streets, and
              common pickup and dismissal times.
            </p>

            <p>
              A route that looks short on the map can take noticeably longer
              when it crosses an active school zone. Buses, parent pickup lines,
              reduced speed limits, pedestrians, and crossing activity can all
              affect trip time.
            </p>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-bold text-slate-950">Planning ahead</p>

              <p className="mt-3">
                When evaluating an offer during school arrival or dismissal
                hours, consider whether the route crosses a busy school area.
                Extra traffic can change the real time-per-mile calculation.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="The Biggest August Takeaways">
            <ul className="space-y-4">
              <li className="rounded-2xl bg-slate-50 p-4">
                Check <strong>My Metrics and Rewards</strong> to see whether the
                new Silver, Gold, and Sapphire program is active in your zone.
              </li>

              <li className="rounded-2xl bg-slate-50 p-4">
                Pay attention to the point value shown on eligible offer cards;
                monthly points reset and do not roll over.
              </li>

              <li className="rounded-2xl bg-slate-50 p-4">
                Keep enough usable space in your vehicle for orders to remain
                separated on multi-order trips.
              </li>

              <li className="rounded-2xl bg-slate-50 p-4">
                Check OnePay on Wednesdays before September 15 if you want to
                compare available fuel offers.
              </li>

              <li className="rounded-2xl bg-slate-50 p-4">
                Build school-zone delays into your expectations when reviewing
                offers during morning and afternoon traffic.
              </li>
            </ul>
          </NewsletterCard>

          <NewsletterCard title="Related Spark Driver Hub Guides">
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base font-semibold text-slate-800 hover:bg-blue-50"
                >
                  {article.title} →
                </a>
              ))}
            </div>
          </NewsletterCard>

          <NewsletterCard title="Sources">
            <p className="text-slate-600">
              This page is based on Spark&apos;s August 2026 driver communication
              and official Spark Driver Rewards Program documentation.
            </p>

            <div className="space-y-4">
              {sources.map((source) => (
                <div
                  key={source.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="font-bold text-slate-950">{source.label}</p>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {source.note}
                  </p>
                </div>
              ))}
            </div>
          </NewsletterCard>
        </div>
      </section>
    </main>
  );
}