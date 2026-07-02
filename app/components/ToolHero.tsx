type ToolHeroProps = {
  category: string;
  title: string;
  description: string;
  readingTime?: string;
  lastUpdated?: string;
};

export default function ToolHero({
  category,
  title,
  description,
  readingTime,
  lastUpdated,
}: ToolHeroProps) {
  return (
    <section className="w-full max-w-5xl mx-auto pt-12 pb-16 px-4 md:px-0">
      {/* Category Badges */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex rounded-full bg-slate-950 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
          Driver Tools
        </span>

        <span className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 ring-1 ring-slate-200">
          {category}
        </span>
      </div>

      {/* Main Title - Matches premium bold headers in image_94cc48.png */}
      <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl leading-[1.1]">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
        {description}
      </p>

      {/* Info Cards - Styled identically to your Editor Score block */}
      {(readingTime || lastUpdated) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {readingTime && (
            <div className="rounded-2xl bg-slate-950 px-6 py-3.5 text-white shadow-xl shadow-slate-950/10 transition-transform hover:-translate-y-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Reading Time
              </p>
              <p className="mt-0.5 text-lg font-black tracking-wide">{readingTime}</p>
            </div>
          )}

          {lastUpdated && (
            <div className="rounded-2xl bg-slate-950 px-6 py-3.5 text-white shadow-xl shadow-slate-950/10 transition-transform hover:-translate-y-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Last Updated
              </p>
              <p className="mt-0.5 text-lg font-black tracking-wide">{lastUpdated}</p>
            </div>
          )}
        </div>
      )}

      {/* Premium Divider Line matching the lower half of image_94cc48.png */}
      <hr className="mt-14 border-slate-200" />
    </section>
  );
}