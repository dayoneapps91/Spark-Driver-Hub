"use client";

import { usePathname } from "next/navigation";
import { trackGigMilesClick } from "../lib/analytics";
import { navigationLinks } from "../lib/navigation";

const navIcons: Record<string, string> = {
  Home: "⌂",
  Updates: "↻",
  Guides: "▣",
  Tools: "✦",
  Taxes: "$",
  Mileage: "⌁",
  Articles: "☰",
  GigMiles: "◆",
};

function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-black text-white shadow-lg shadow-blue-700/20 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-blue-700/30">
            S
          </div>

          <div className="min-w-0">
            <p className="text-base font-black leading-5 tracking-tight text-slate-950">
              Spark Driver Hub
            </p>
            <p className="hidden text-xs font-semibold text-slate-500 sm:block">
              Independent Spark Driver Resource
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200/80 lg:flex">
          {navigationLinks.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2.5 transition duration-200 ${
                  active
                    ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200/70"
                    : "hover:bg-white/80 hover:text-blue-700"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/gigmiles"
            onClick={() => trackGigMilesClick("header_desktop")}
            className="hidden rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition duration-200 hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-500 hover:shadow-orange-600/20 sm:inline-flex"
          >
            Get GigMiles
          </a>

          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg font-black text-slate-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">☰</span>
              <span className="hidden group-open:inline">×</span>
            </summary>

            <div className="absolute right-0 mt-4 w-[16.5rem]hidden rounded-[2rem] border border-white/80 bg-white/95 p-3 shadow-[0_32px_100px_rgba(15,23,42,0.22)] ring-1 ring-slate-200/70 backdrop-blur-xl">
              
              {/* Compact Header */}
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 to-slate-800 px-4 py-3ite">
                <p className="text-base font-black tracking-tight">
                  Spark Driver Hub
                </p>
              </div>

              <nav className="mt-3 grid gap-1">
                {navigationLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-black transition duration-200 ${
                        active
                          ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200/80"
                          : "text-slate-800 hover:bg-slate-50 hover:text-blue-700"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black ${
                          active
                            ? "bg-orange-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {navIcons[link.name] ?? "→"}
                      </span>

                      {link.name}
                    </a>
                  );
                })}

                <a
                  href="/gigmiles"
                  onClick={() => trackGigMilesClick("header_mobile_menu")}
                  className="mt-3 flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 font-black text-white shadow-lg shadow-orange-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-400"
                >
                  Download GigMiles →
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}