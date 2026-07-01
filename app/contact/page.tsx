import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Spark Driver Hub",
  description:
    "Contact Spark Driver Hub for corrections, guide suggestions, GigMiles questions, and website feedback.",
};

const contactCards = [
  {
    title: "Report an error",
    text: "Found outdated information, a typo, a broken link, or something that needs a correction? Send the page link and a short explanation.",
  },
  {
    title: "Suggest a guide",
    text: "Have a Spark Driver question that should become a guide? Send the topic and what drivers usually ask about it.",
  },
  {
    title: "GigMiles questions",
    text: "For GigMiles feedback, questions, or app-related suggestions, include your device type and a short description of the issue or idea.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact Spark Driver Hub"
        description="Send corrections, guide ideas, GigMiles feedback, or website questions."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Email
            </h2>
            <p className="mt-4 text-lg font-bold text-blue-700">
              dayoneapps91@gmail.com
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
              Use this email for website corrections, guide suggestions, GigMiles feedback, or general Spark Driver Hub questions.
            </p>
          </section>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <section
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  {card.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {card.text}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Response time
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              This is a small independent project, so response times may vary. Most messages are reviewed as soon as possible.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
