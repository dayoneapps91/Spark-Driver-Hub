import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Spark App & Platform Updates | Spark Driver Hub",
  description:
    "Short driver-friendly updates about Spark app changes, platform reminders, newsletter items, and official driver announcements.",
};

const platformUpdates = [
  {
    month: "June 2026",
    items: [
      {
        title: "Shopping offers may include up to 3 orders",
        category: "Shopping Orders",
        summary:
          "Spark's June newsletter said some drivers may start seeing shopping offers with up to three customer orders in one trip.",
        driverTakeaway:
          "These offers may reduce gaps between orders, but drivers should still review item count, payout, miles, store difficulty, apartment risk, and total time before accepting.",
      },
      {
        title: "Father's Day demand expected June 19-21",
        category: "Demand Reminder",
        summary:
          "Spark said it expected higher order volume around Father's Day from June 19 through June 21.",
        driverTakeaway:
          "Higher order volume can create more opportunities, but it does not guarantee stronger profit. Drivers should still judge each offer by real time, miles, and return distance.",
      },
      {
        title: "Confirmed customer tips reminder",
        category: "Earnings",
        summary:
          "The newsletter reminded drivers that customers can adjust tips for up to three hours after delivery and that confirmed tips appear in the Earnings tab within 24 hours.",
        driverTakeaway:
          "Drivers should remember that a tip shown on the offer card may not be final until it is confirmed.",
      },
      {
        title: "Summer animal safety reminder",
        category: "Safety",
        summary:
          "Spark reminded drivers that pets and other animals may be more active outdoors during summer deliveries.",
        driverTakeaway:
          "If an animal makes a delivery feel unsafe, drivers should contact the customer or leave the area and reach out to Driver Support.",
      },
      {
        title: "Go for the Goal sweepstakes teaser",
        category: "Driver Events",
        summary:
          "Spark teased an upcoming Go for the Goal driver sweepstakes planned for the following month.",
        driverTakeaway:
          "Drivers should wait for official Spark instructions before assuming how to enter or what the sweepstakes rules are.",
      },
    ],
  },
];

const sources = [
  {
    label: "June 2026 Spark Driver Newsletter",
    note: "Primary source for the June platform updates summarized on this page.",
  },
  {
    label: "Spark Driver Resource Center > Earnings > Earnings FAQ",
    note: "Referenced by the newsletter for more information about confirmed tips.",
  },
  {
    label: "Spark Driver App",
    note: "Referenced by the newsletter for Spark Now, offer cards, the Earnings tab, customer contact, and Driver Support.",
  },
];

export default function PlatformUpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform Updates"
        title="Spark App & Platform Updates"
        description="Short, practical updates about Spark app changes, platform reminders, order features, driver safety notes, and official announcements."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              What this page is for
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
              This page tracks Spark-related platform updates in a shorter
              format than full newsletter summaries. Each card focuses on one
              change, reminder, or announcement and explains what it may mean
              for drivers.
            </p>
          </div>

          <div className="mt-8 space-y-10">
            {platformUpdates.map((group) => (
              <section key={group.month}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                    {group.month}
                  </h2>

                  <a
                    href="/updates/june-2026"
                    className="hidden rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 sm:inline-flex"
                  >
                    Read full newsletter →
                  </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {group.items.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                        {item.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base leading-8 text-slate-700">
                        {item.summary}
                      </p>

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="font-bold text-slate-950">
                          Driver takeaway
                        </p>
                        <p className="mt-2 text-base leading-8 text-slate-700">
                          {item.driverTakeaway}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <a
                  href="/updates/june-2026"
                  className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 sm:hidden"
                >
                  Read full newsletter →
                </a>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Sources
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              These updates are summarized from official Spark Driver
              communications and app resources. This page is not an official
              Spark Driver publication.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {sources.map((source) => (
                <div
                  key={source.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="font-bold text-slate-950">{source.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {source.note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
