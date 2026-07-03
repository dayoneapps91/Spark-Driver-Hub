import Link from "next/link";
import GigMilesCTA from "../components/GigMilesCTA";

const taxResources=[
{title:"Can Spark Drivers Deduct Gas?",label:"Popular",description:"Understand gas, mileage deductions, vehicle expenses, and why clean records matter.",href:"/articles/can-spark-drivers-deduct-gas"},
{title:"Spark Driver Tax Deductions Guide",label:"Guide",description:"A beginner-friendly guide to common tax deduction categories Spark drivers should organize.",href:"/articles/spark-driver-tax-deductions"},
{title:"Spark Driver Expense Checklist",label:"Checklist",description:"Organize fuel, maintenance, phone costs, supplies, and other driver expense records.",href:"/articles/spark-driver-expense-checklist"},
{title:"Prepare for Tax Season",label:"Planning",description:"Build a simple system before tax season instead of trying to rebuild records later.",href:"/articles/how-to-prepare-for-tax-season-as-a-spark-driver"},
{title:"Mileage Log Guide",label:"Mileage",description:"Learn what a mileage log should include and why it matters for Spark drivers.",href:"/articles/spark-driver-mileage-log-guide"},
{title:"Track Records with GigMiles",label:"GigMiles",description:"Use GigMiles to organize mileage, expenses, earnings, shifts, and tax records.",href:"/gigmiles"},
];

export default function TaxesPage(){
return(
<main className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
<section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12 lg:p-14">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.26),transparent_32%)]"/>
<div className="relative max-w-3xl">
<span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">Taxes</span>
<h1 className="mt-8 text-5xl font-black tracking-tight md:text-6xl">Tax Resources</h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Learn how to organize mileage, expenses, earnings, and records before tax season. These guides are educational and built for Walmart Spark drivers.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15"><p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Focus</p><p className="mt-2 text-2xl font-black">Better records</p></div>
<div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15"><p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Goal</p><p className="mt-2 text-2xl font-black">Tax ready</p></div>
</div></div></section>

<section className="mt-14">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">Browse Resources</p>
<h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Everything in one place.</h2></div>
<p className="max-w-xl text-base leading-7 text-slate-600">Simple guides to help you stay organized throughout the year.</p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
{taxResources.map((r,i)=><Link key={r.title} href={r.href} className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]">
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400"/>
<div className="flex items-center justify-between"><span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">#{i+1}</span><span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 ring-1 ring-orange-200/80">{r.label}</span></div>
<h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{r.title}</h3>
<p className="mt-4 text-base leading-8 text-slate-600">{r.description}</p>
<div className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white group-hover:bg-orange-600">Open guide<span className="ml-2">→</span></div>
</Link>)}
</div>
</section>

<section className="mx-auto max-w-5xl px-5 py-12 md:px-8"><GigMilesCTA/></section>
</main>
)}
