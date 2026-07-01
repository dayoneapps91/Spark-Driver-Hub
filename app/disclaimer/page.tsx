import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer | Spark Driver Hub",
  description:
    "Disclaimer for Spark Driver Hub, including independent website status, educational content, tax information, and official source verification.",
};

const sections = [
  {
    title: "Independent resource",
    body: [
      "Spark Driver Hub is an independent resource and is not affiliated with Walmart, Spark Driver, or Walmart Spark.",
      "Any references to Spark Driver, Walmart, or other companies are for informational and educational purposes only.",
    ],
  },
  {
    title: "Not professional advice",
    body: [
      "The information on this website is for general education only. It is not legal, tax, financial, accounting, insurance, employment, or professional advice.",
      "Drivers should contact a qualified professional for advice about their specific tax, legal, insurance, or financial situation.",
    ],
  },
  {
    title: "Verify official information",
    body: [
      "Spark Driver rules, app features, requirements, offer types, policies, and support instructions can change.",
      "Always verify current information inside the official Spark Driver app, official Spark Driver website, Resource Center, support messages, and other official sources.",
    ],
  },
  {
    title: "Earnings and mileage",
    body: [
      "Any examples related to earnings, mileage, expenses, or taxes are educational examples only.",
      "Actual results vary by market, vehicle, miles driven, store wait times, driver decisions, tax situation, and platform changes.",
    ],
  },
  {
    title: "GigMiles",
    body: [
      "Spark Driver Hub may reference GigMiles as a mileage and recordkeeping tool for gig drivers. Using any app or tool does not guarantee tax deductions, earnings, account outcomes, or platform results.",
    ],
  },
  {
    title: "Contact",
    body: [
      "To report an error or request a correction, email dayoneapps91@gmail.com.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Site"
        title="Disclaimer"
        description="Important information about Spark Driver Hub, official sources, and educational content."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
