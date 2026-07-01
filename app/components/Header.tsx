import { navigationLinks } from "../lib/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-lg font-black text-white shadow-sm">
            S
          </div>

          <div>
            <p className="text-base font-bold leading-5 text-slate-950">
              Spark Driver Hub
            </p>
            <p className="text-xs font-medium text-slate-500">
              Independent Spark Driver Resource
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/gigmiles"
            className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 sm:inline-flex"
          >
            Get GigMiles
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 bg-white text-xl font-bold text-slate-950">
              ☰
            </summary>

            <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
              <nav className="grid gap-1">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-blue-700"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/gigmiles"
                  className="mt-2 rounded-2xl bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  Download GigMiles
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
