type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100 shadow-2xl shadow-blue-950/30 backdrop-blur">
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
