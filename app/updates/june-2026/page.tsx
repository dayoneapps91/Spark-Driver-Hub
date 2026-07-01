import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "June 2026 Spark Driver Newsletter Summary: Father's Day, Tips, Batched Orders",
  description:
    "A driver-friendly summary of the June 2026 Spark Driver newsletter, including Father's Day demand, batched shopping orders, confirmed tips, summer delivery safety, and sweepstakes updates.",
};

const sources = [
  {
    label: "June 2026 Spark Driver Newsletter",
    note: "Primary source. Email newsletter from the Spark Driver Team covering Father's Day demand, customer tips, batched shopping orders, summer animal safety, and sweepstakes information.",
  },
  {
    label: "Spark Driver Resource Center > Earnings > Earnings FAQ",
    note: "Referenced by the newsletter for more details about confirmed customer tips and earnings information inside the Spark Driver app.",
  },
  {
    label: "Spark Driver App",
    note: "Referenced by the newsletter for Spark Now, offer cards, the Earnings tab, customer contact options, and Driver Support.",
  },
];

const takeaways = [
  "Father's Day demand was expected to be higher from June 19 through June 21.",
  "Some shopping offers may include up to three orders in one trip.",
  "Customer tips can change for up to three hours after delivery.",
  "Confirmed tips appear in the Earnings tab within 24 hours.",
  "Pets and animals may be more active near drop-off areas during summer.",
  "A new driver sweepstakes was teased for the following month.",
];

const relatedArticles = [
  {
    title: "Spark Shopping Orders Guide",
    href: "/articles/spark-shopping-orders-guide",
  },
  {
    title: "Spark Driver Earnings Tracker",
    href: "/articles/spark-driver-earnings-tracker",
  },
  {
    title: "Spark Driver Pay Per Mile",
    href: "/articles/spark-driver-pay-per-mile",
  },
  {
    title: "How Spark Offers Work",
    href: "/articles/how-spark-offers-work",
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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function June2026NewsletterPage() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <a
            href="/updates"
            className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 transition hover:text-blue-800"
          >
            ← Spark Driver Updates
          </a>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Spark Driver Newsletter Summary
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-tight">
            June 2026 Spark Driver Newsletter: Father&apos;s Day Demand,
            Batched Shopping Orders, Tips, and Sweepstakes
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A driver-friendly summary of Spark Driver&apos;s June newsletter,
            including holiday demand, larger shopping batches, confirmed tips,
            summer delivery safety, and upcoming sweepstakes information.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/newsletters/june2026.png"
              alt="June 2026 Spark Driver Newsletter"
              className="w-full"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold text-slate-600">
            <span>Updated June 2026</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Newsletter Summary</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-6">
          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Quick Summary
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              The June 2026 Spark Driver newsletter focused on planning ahead
              for a busy month. The biggest updates were expected higher order
              volume around Father&apos;s Day, shopping offers with up to three
              orders in one trip, a reminder about how confirmed tips appear in
              the app, summer animal safety, and a teaser for an upcoming driver
              sweepstakes.
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="font-bold text-slate-950">Editor&apos;s note</p>
            <p className="mt-3 text-base leading-8 text-slate-700">
              This page summarizes the official Spark Driver newsletter in a
              driver-friendly way. It is not an official Spark Driver
              publication and does not reproduce the full newsletter verbatim.
              Drivers should always follow the official Spark Driver app,
              Resource Center, and support instructions for account-specific
              details.
            </p>
          </section>

          <NewsletterCard title="Father's Day Could Mean More Orders">
            <p>
              According to the June newsletter, Spark Driver expected higher
              order volume from June 19 through June 21 for Father&apos;s Day.
              Drivers interested in working during that period were encouraged
              to turn on Spark Now and watch for available offers.
            </p>

            <p>
              Higher demand can create more opportunities, but it does not
              automatically guarantee better earnings. Drivers still need to
              judge each offer by payout, distance, store wait time, delivery
              difficulty, and return miles.
            </p>
          </NewsletterCard>

          <NewsletterCard title="Batched Shopping Orders May Include Up to 3 Orders">
            <p>
              The newsletter said some drivers may start seeing shopping offers
              with up to three orders in one trip. Spark described these batched
              shopping offers as a way to complete multiple orders in one trip,
              reduce gaps between offers, and potentially increase earning
              opportunities.
            </p>

            <p>
              For drivers, the important detail is that a larger batch is not
              automatically a better order. Before accepting, it helps to think
              about item count, store layout, checkout speed, heavy items,
              apartment deliveries, customer distance, and whether the route
              keeps you near a useful zone.
            </p>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-bold text-slate-950">Driver takeaway</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Three-order shopping batches may be worth testing, but track
                your real time and miles before assuming they are more
                profitable.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="Confirmed Customer Tips Explained">
            <p>
              The newsletter reminded drivers that an offer card may include a
              customer tip. Customers can adjust their tip for up to three hours
              after delivery, so the final amount may be different from what
              appeared on the original offer.
            </p>

            <p>
              Spark also stated that confirmed tips appear in the Earnings tab
              within 24 hours and that drivers keep 100% of confirmed tips. The
              newsletter directed drivers to More &gt; Resource Center &gt;
              Earnings &gt; Earnings FAQ for more details.
            </p>
          </NewsletterCard>

          <NewsletterCard title="Summer Delivery Safety: Pets and Animals">
            <p>
              Spark&apos;s June newsletter also reminded drivers that pets and
              other animals may be more active outdoors during summer months.
              Animals may be near driveways, gates, porches, entryways, or other
              drop-off areas.
            </p>

            <p>
              If a driver feels uncomfortable approaching a location, the
              newsletter says they can contact the customer or leave the area and
              reach out to Driver Support.
            </p>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-slate-950">Safety reminder</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Do not risk an unsafe drop-off because of a loose animal. Use
                the customer contact option or Driver Support when needed.
              </p>
            </div>
          </NewsletterCard>

          <NewsletterCard title="New Driver Sweepstakes Teased">
            <p>
              The newsletter also previewed a future “Go for the Goal!”
              sweepstakes planned for the following month. Spark said drivers
              should watch for the official kickoff and instructions on how to
              enter.
            </p>

            <p>
              The newsletter also highlighted Juan, a Spark Driver app user who
              won free groceries for a year through a previous Spark Driver
              sweepstakes.
            </p>
          </NewsletterCard>

          <NewsletterCard title="What This Means for Spark Drivers">
            <ul className="space-y-4">
              <li className="rounded-2xl bg-slate-50 p-4">
                Watch for higher demand around major holidays, but still judge
                each offer by real profit.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                Treat three-order shopping batches as something to test and
                track, not automatically accept.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                Remember that tips are not final until confirmed.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                Be extra cautious around pets and animals during summer
                deliveries.
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                Watch for official sweepstakes details before assuming how to
                enter.
              </li>
            </ul>
          </NewsletterCard>

          <NewsletterCard title="Related Spark Driver Hub Guides">
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {article.title} →
                </a>
              ))}
            </div>
          </NewsletterCard>

          <NewsletterCard title="Sources">
            <p className="text-slate-600">
              This article is a driver-friendly summary based on official Spark
              Driver newsletter information and app resources referenced by that
              newsletter.
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
