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
    <a
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <p className="mt-4 font-medium text-blue-700">
        Read article →
      </p>
    </a>
  );
}