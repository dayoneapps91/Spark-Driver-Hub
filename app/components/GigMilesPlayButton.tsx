"use client";

import { trackGigMilesPlayClick } from "../lib/analytics";

const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.eduardo.sparkmileagetracker";

export default function GigMilesPlayButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer"
      onClick={() => trackGigMilesPlayClick(location, googlePlayUrl)}
      className={`inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400 ${className}`}>
      Get GigMiles on Google Play
    </a>
  );
}
