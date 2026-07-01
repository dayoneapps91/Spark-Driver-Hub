type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}
