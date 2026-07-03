import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ArticleCard({
  title,
  description,
  href,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-orange-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-80" />

      <div className="mb-5 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
        Guide
      </div>

      <h3 className="relative text-2xl font-black tracking-tight text-slate-950 transition duration-200 group-hover:text-orange-700">
        {title}
      </h3>

      <p className="relative mt-4 flex-1 text-base leading-8 text-slate-600">
        {description}
      </p>

      <div className="relative mt-8 inline-flex w-fit items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
        Read article
        <span className="ml-2 transition duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
