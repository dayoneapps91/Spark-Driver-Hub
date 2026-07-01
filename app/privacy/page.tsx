import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Spark Driver Hub",
  description:
    "Privacy Policy for Spark Driver Hub, including website analytics, contact information, external links, and GigMiles references.",
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "Spark Driver Hub is an independent educational website. We may collect basic technical information through analytics tools, such as page views, browser type, device type, referring pages, and general usage patterns.",
      "If you contact us by email, we may collect the information you choose to send, such as your name, email address, message, correction request, or guide suggestion.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use information to improve the website, understand which pages are useful, respond to messages, fix errors, and improve Spark Driver Hub content.",
      "We do not sell personal information. We do not use this website to collect sensitive driver account information, Social Security numbers, tax IDs, bank details, or Spark Driver login credentials.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "Spark Driver Hub may use cookies or similar technologies through analytics or website tools. These tools help us understand traffic and improve the website.",
      "You can control cookies through your browser settings. Blocking cookies may affect some website features.",
    ],
  },
  {
    title: "GigMiles and external links",
    body: [
      "Spark Driver Hub may link to GigMiles, Google Play, Spark Driver resources, Walmart pages, government websites, and other third-party resources.",
      "External websites have their own privacy practices. We are not responsible for the privacy policies, content, or behavior of third-party websites.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "Spark Driver Hub is intended for adults and is not directed toward children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this Privacy Policy, email dayoneapps91@gmail.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Site"
        title="Privacy Policy"
        description="How Spark Driver Hub handles website information, contact messages, analytics, and external links."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Last updated: June 2026
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Spark Driver Hub is an independent resource website for Spark drivers and gig workers. This Privacy Policy explains what information may be collected when you use this website.
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
