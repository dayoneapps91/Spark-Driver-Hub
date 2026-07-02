export default function AffiliateDisclosure() {
  return (
    <section
      aria-label="Affiliate disclosure"
      className="rounded-[1.75rem] bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm ring-1 ring-amber-200/60"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
          🤝
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            Affiliate Disclosure
          </p>

          <p className="mt-2 max-w-3xl leading-7 text-slate-700">
            Spark Driver Hub participates in the Amazon Associates Program. If
            you purchase through one of our links, we may earn a small
            commission at no additional cost to you. Every recommendation is
            selected based on our research and what we believe provides the most
            value for Spark drivers—not because of affiliate commissions.
          </p>
        </div>
      </div>
    </section>
  );
}
