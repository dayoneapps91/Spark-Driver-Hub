"use client";

import { trackGigMilesClick } from "../lib/analytics";

export default function GigMilesCTA() {
  return (
    <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Powered by GigMiles
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Track your Spark miles before tax season sneaks up on you.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            GigMiles helps drivers organize mileage, expenses, earnings, shifts,
            and tax records in one simple app.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a
            href="/gigmiles"
            onClick={() => trackGigMilesClick("cta")}
            className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            Learn about GigMiles
          </a>

          <a
            href="/mileage"
            className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
          >
            Mileage guides
          </a>
        </div>
      </div>
    </section>
  );
}