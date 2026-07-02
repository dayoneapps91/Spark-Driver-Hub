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
    category:"SHOPPING",
    title:"Shopping offers may include up to 3 orders",
    summary:"Some shopping offers may include up to three customer orders.",
    takeaway:"Evaluate item count, miles and payout before accepting."
  },
  {
    category:"DEMAND",
    title:"Father's Day demand expected",
    summary:"Higher demand was expected around Father's Day.",
    takeaway:"More demand doesn't always mean higher profits."
  },
  {
    category:"EARNINGS",
    title:"Confirmed customer tips reminder",
    summary:"Tips can change before becoming final.",
    takeaway:"Treat estimated tips as estimates until confirmed."
  }
];

function Card({u}:{u:UpdateCard}){
 return (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{u.category}</p>
    <h3 className="mt-2 text-2xl font-bold">{u.title}</h3>
    <p className="mt-4 text-slate-700">{u.summary}</p>
    <div className="mt-6 rounded-2xl border bg-slate-50 p-4">
      <p className="font-bold">Driver takeaway</p>
      <p className="mt-2 text-slate-700">{u.takeaway}</p>
    </div>
  </div>
 )
}

export default function PlatformUpdatesPage(){
 return (
  <main>
   <PageHero
    eyebrow="Platform Updates"
    title="Spark Platform Updates"
    description="Short, practical updates about Spark app changes, platform reminders, order features, driver safety notes, and official announcements."
   />
   <section className="mx-auto max-w-7xl px-6 py-10">
    <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
      <h2 className="text-2xl font-bold">What this page is for</h2>
      <p className="mt-3 text-slate-700">This page tracks Spark-related platform updates in a shorter format than full newsletter summaries.</p>
    </div>

    <h2 className="mt-10 text-3xl font-bold">July 2026</h2>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {julyUpdates.map(u=><Card key={u.title} u={u}/>)}
    </div>

    <h2 className="mt-12 text-3xl font-bold">June 2026</h2>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {juneUpdates.map(u=><Card key={u.title} u={u}/>)}
    </div>
   </section>
  </main>
 )
}
