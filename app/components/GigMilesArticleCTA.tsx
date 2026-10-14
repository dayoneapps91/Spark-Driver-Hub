"use client";

import { trackGigMilesClick } from "../lib/analytics";

export default function GigMilesArticleCTA() {
  return (
    <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
      <h3 className="text-2xl font-black tracking-tight">
        See how GigMiles fits your next shift.
      </h3>
      <p className="mt-3 text-base leading-7 text-slate-300">
        Explore the app screens and compare the Free and Premium features
        before you download.
      </p>
      <a
        href="/gigmiles"
        onClick={() => trackGigMilesClick("article_mileage_tracker_inline")}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
      >
        See GigMiles features &amp; screenshots
      </a>
    </div>
  );
}
