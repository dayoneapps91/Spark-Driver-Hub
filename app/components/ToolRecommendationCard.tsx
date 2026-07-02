type ToolRecommendationCardProps = {
  rank?: number;
  badge: string;
  title: string;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
  score?: string;
  bestFor?: string;
  pros?: string[];
  cons?: string[];
  sparkDriverNote?: string;
  amazonUrl?: string;
  ctaLabel?: string;
};

export default function ToolRecommendationCard({
  rank,
  badge,
  title,
  summary,
  imageSrc,
  imageAlt,
  score,
  bestFor,
  pros = [],
  cons = [],
  sparkDriverNote,
  amazonUrl,
  ctaLabel = "View on Amazon",
}: ToolRecommendationCardProps) {
  const productImage = imageSrc ? (
    <img
      src={imageSrc}
      alt={imageAlt || title}
      className="mx-auto aspect-square w-full max-w-[220px] object-contain transition duration-300 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-white/70 text-center text-sm font-bold text-slate-400 ring-1 ring-slate-200">
      Product image
    </div>
  );

  return (
    <article className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[260px_1fr] lg:gap-10 lg:p-10">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            {typeof rank === "number" && (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20">
                #{rank}
              </span>
            )}

            <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 ring-1 ring-orange-200/80">
              {badge}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-slate-100 p-5 ring-1 ring-slate-200/80">
            {amazonUrl && imageSrc ? (
              <a
                href={amazonUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                aria-label={`View ${title} on Amazon`}
                className="block rounded-[1.25rem] transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                {productImage}
              </a>
            ) : (
              productImage
            )}
          </div>

          {score && (
            <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Editor score
              </p>
              <p className="mt-2 text-4xl font-black tracking-tight">{score}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  {title}
                </h3>

                {bestFor && (
                  <p className="mt-3 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                    Best for: {bestFor}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {summary}
            </p>
          </div>

          {(pros.length > 0 || cons.length > 0) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {pros.length > 0 && (
                <div className="rounded-3xl bg-emerald-50/70 p-5 ring-1 ring-emerald-100">
                  <h4 className="text-sm font-black uppercase tracking-[0.16em] text-emerald-800">
                    Pros
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    {pros.map((pro) => (
                      <li key={pro} className="flex gap-3">
                        <span className="mt-0.5 font-black text-emerald-600">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cons.length > 0 && (
                <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                  <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                    Cons
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    {cons.map((con) => (
                      <li key={con} className="flex gap-3">
                        <span className="mt-0.5 font-black text-slate-400">–</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {sparkDriverNote && (
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-5 ring-1 ring-orange-100">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700">
                Spark Driver note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {sparkDriverNote}
              </p>
            </div>
          )}

          {amazonUrl && (
            <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                As an Amazon Associate, this site may earn from qualifying purchases.
              </p>

              <a
                href={amazonUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                {ctaLabel}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
