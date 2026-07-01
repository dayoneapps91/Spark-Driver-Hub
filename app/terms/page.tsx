import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use | Spark Driver Hub",
  description:
    "Terms of Use for Spark Driver Hub, including educational content, acceptable use, external links, and independent website status.",
};

const sections = [
  {
    title: "Educational content only",
    body: [
      "Spark Driver Hub provides general educational content for drivers and gig workers. The content is not legal, tax, financial, insurance, employment, or professional advice.",
      "You are responsible for verifying information with official sources, qualified professionals, and the current Spark Driver app or Resource Center.",
    ],
  },
  {
    title: "Independent website",
    body: [
      "Spark Driver Hub is independent and is not affiliated with Walmart, Spark Driver, or Walmart Spark.",
      "Names, trademarks, and references to Spark Driver, Walmart, or other companies are used only for identification and educational discussion.",
    ],
  },
  {
    title: "No guarantee of earnings or outcomes",
    body: [
      "Spark Driver Hub does not guarantee earnings, account approval, tax savings, offer quality, app results, or any other driver outcome.",
      "Gig work results vary by market, time, vehicle costs, driver decisions, platform rules, and other factors outside our control.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "You agree not to misuse the website, attempt to disrupt it, copy large portions of content without permission, or use the site for unlawful purposes.",
      "You may share links to Spark Driver Hub pages, but you may not present our content as your own.",
    ],
  },
  {
    title: "External links",
    body: [
      "Spark Driver Hub may link to third-party websites, including official Spark Driver resources, Walmart pages, Google Play, government websites, and other references.",
      "We are not responsible for third-party content, policies, availability, or accuracy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Use can be sent to dayoneapps91@gmail.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Site"
        title="Terms of Use"
        description="The rules and limitations for using Spark Driver Hub."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Last updated: June 2026
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              By using Spark Driver Hub, you agree to these Terms of Use. If you do not agree, do not use this website.
            </p>
          </div>

          <div className="mt-6 space-y-6">
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
