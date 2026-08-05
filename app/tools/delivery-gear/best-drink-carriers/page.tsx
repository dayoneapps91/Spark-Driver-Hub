import type { Metadata } from "next";
import BuyingGuideLayout from "../../../components/BuyingGuideLayout";

export const metadata: Metadata = {
  title: "Best Drink Carriers for Spark Drivers | Spark Driver Hub",
  description:
    "A complete guide to the best drink carriers for Spark drivers is coming soon.",
};

export default function BestDrinkCarriersPage() {
  return (
    <BuyingGuideLayout>
      <section className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)] md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
          Delivery Gear
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Best Drink Carriers for Spark Drivers
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This buying guide is currently being prepared and will be available
          soon.
        </p>
      </section>
    </BuyingGuideLayout>
  );
}