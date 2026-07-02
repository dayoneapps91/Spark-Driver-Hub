export type ComparisonProduct = {
  rank: string;
  name: string;
  score: string;
  bestFor: string;
  amazonUrl: string;
};

type ToolComparisonTableProps = {
  products: ComparisonProduct[];
};

export default function ToolComparisonTable({
  products,
}: ToolComparisonTableProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-slate-200/60">
      <div className="border-b border-slate-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Comparison
        </h2>
        <p className="mt-2 text-slate-600">
          Compare our top recommendations at a glance.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="text-sm font-semibold text-slate-600">
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Score</th>
              <th className="px-6 py-4">Best For</th>
              <th className="px-6 py-4 text-right">View</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className="border-t border-slate-100 transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-bold text-orange-600">
                  {product.rank}
                </td>

                <td className="px-6 py-5 font-semibold text-slate-900">
                  {product.name}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                    {product.score}
                  </span>
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {product.bestFor}
                </td>

                <td className="px-6 py-5 text-right">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex rounded-xl bg-orange-500 px-4 py-2 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-600"
                  >
                    View on Amazon
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
