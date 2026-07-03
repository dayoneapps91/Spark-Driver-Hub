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
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400" />

      <h3 className="text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 inline-flex w-fit items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition duration-200 group-hover:bg-orange-600">
        Read article
        <span className="ml-2 transition duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
