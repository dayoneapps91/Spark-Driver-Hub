import PageHero from "../../components/PageHero";

type UpdateCard = {
  category: string;
  title: string;
  summary: string;
  takeaway: string;
};

const julyUpdates: UpdateCard[] = [
  {
    category: "EXPRESS SHOPPING",
    title: "Express Shopping orders explained",
    summary:
      "Spark introduced more information about Express Shopping orders, which are designed to be faster and simpler than regular shopping orders.",
    takeaway:
      "During busy periods you may see more Express Shopping offers. Compare payout, miles and shopping time before accepting.",
  },
  {
    category: "RESOURCE CENTER",
    title: "Resource Center redesigned",
    summary:
      "The Resource Center is being reorganized with new categories including 'New to the Platform' and 'Ready to Spark'.",
    takeaway:
      "If you're looking for help inside the app, expect some articles to move into the new categories.",
  },
  {
    category: "DEMAND",
    title: "Independence Day demand reminder",
    summary:
      "Spark expects higher order volume around the July 4th holiday weekend.",
    takeaway:
      "Turn on Spark Now early, but continue accepting orders based on profit—not just demand.",
  },
  {
    category: "SAFETY",
    title: "Summer heat reminder",
    summary:
      "Drivers were reminded to stay hydrated, use sun protection and take precautions during hot weather.",
    takeaway:
      "Keep water, sunscreen and a cooler in your vehicle during summer deliveries.",
  },
  {
    category: "COMMUNITY",
    title: "Go for the Goal sweepstakes",
    summary:
      "Spark promoted the Go for the Goal driver sweepstakes and highlighted a recent winner.",
    takeaway:
      "Sweepstakes are optional promotions and do not affect your access to delivery offers.",
  },
];

const juneUpdates: UpdateCard[] = [
  {
    category: "SHOPPING",
    title: "Shopping offers may include up to 3 orders",
    summary: "Some shopping offers may include up to three customer orders.",
    takeaway: "Evaluate item count, miles and payout before accepting.",
  },
  {
    category: "DEMAND",
    title: "Father's Day demand expected",
    summary: "Higher demand was expected around Father's Day.",
    takeaway: "More demand doesn't always mean higher profits.",
  },
  {
    category: "EARNINGS",
    title: "Confirmed customer tips reminder",
    summary: "Tips can change before becoming final.",
    takeaway: "Treat estimated tips as estimates until confirmed.",
  },
];

function Card({ update }: { update: UpdateCard }) {
  return (
    <article className="group relative overflow-hidden rounded-[2.25rem] bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(15,23,42,0.13)]">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-100 opacity-0 blur-2xl transition group-hover:opacity-100" />

      <div className="relative">
        <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700 ring-1 ring-blue-100">
          {update.category}
        </p>
        <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-slate-950">
          {update.title}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-600">{update.summary}</p>

        <div className="mt-6 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
            Driver takeaway
          </p>
          <p className="mt-3 text-base leading-7 text-slate-700">{update.takeaway}</p>
        </div>
      </div>
    </article>
  );
}

function MonthSection({ month, updates }: { month: string; updates: UpdateCard[] }) {
  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Platform Notes
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950">
            {month}
          </h2>
        </div>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        {updates.map((update) => (
          <Card key={update.title} update={update} />
        ))}
      </div>
    </section>
  );
}

export default function PlatformUpdatesPage() {
  return (
    <main className="bg-slate-50">
      <PageHero
        eyebrow="Platform Updates"
        title="Spark Platform Updates"
        description="Short, practical updates about Spark app changes, platform reminders, order features, driver safety notes, and official announcements."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-blue-100 md:p-9">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100 blur-2xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              What this page is for
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
              Fast notes for driver planning.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This page tracks Spark-related platform updates in a shorter format than full newsletter summaries.
            </p>
          </div>
        </div>

        <MonthSection month="July 2026" updates={julyUpdates} />
        <MonthSection month="June 2026" updates={juneUpdates} />
      </section>
    </main>
  );
}
