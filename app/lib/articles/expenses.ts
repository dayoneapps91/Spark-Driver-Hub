import { ArticleData } from "./types";

export const expenseArticles: ArticleData[] = [
  {
    slug: "spark-driver-expense-checklist",
    title: "Spark Driver Expense Checklist",
    description:
      "A simple checklist of expense categories Spark drivers may want to organize throughout the year.",
    category: "Expenses",
    lastUpdated: "June 2026",
    readingTime: "11 min read",
    intro:
      "Spark driving creates income, but it also creates costs. Keeping expense records helps drivers understand real profit and prepare for tax season.",
    quickAnswer:
      "Spark drivers should organize mileage, vehicle costs, phone costs, supplies, tolls, parking, cleaning, and app or software costs. The record matters even if the tax treatment depends on your situation.",
    disclaimer:
      "This checklist is educational only. Keep records and ask a qualified tax professional which expenses apply to your return.",
    sections: [
      {
        heading: "Vehicle-related records",
        body: [
          "Vehicle costs are usually the largest expense category for Spark drivers. Track mileage first, then organize gas, oil changes, tires, repairs, insurance, registration, car washes, and maintenance records.",
          "Even if you use standard mileage for taxes, vehicle expense records still help you understand real profit. Standard mileage is a tax method; it does not tell you how much cash your car actually cost you.",
          "Keep receipts or digital records in a consistent place. A forgotten $18 expense may not feel important, but dozens of missed expenses add up over a full year of Spark driving.",
        ],
      },
      {
        heading: "Phone and work supplies",
        body: [
          "Spark drivers rely on a phone, charger, data connection, phone mount, bags, and sometimes other supplies. Keep records for items used for delivery work.",
          "Some costs may be mixed personal and business use, especially phone service. That means you need records and a reasonable way to separate business use.",
          "Do not assume everything is deductible just because you drive Spark. Organize first, then verify with tax guidance.",
        ],
      },
      {
        heading: "Operational expenses",
        body: [
          "Parking, tolls, delivery supplies, cleaning supplies, and similar costs may matter depending on your driving. Track them when they are connected to work.",
          "Also track software or apps used to manage your gig driving, such as mileage, bookkeeping, or recordkeeping tools.",
          "GigMiles can help keep expenses near your mileage, earnings, and shift notes so profit review is not spread across receipts, screenshots, and memory.",
        ],
      },
      {
        heading: "A simple monthly expense review",
        body: [
          "Once a month, review your gas, maintenance, supplies, phone-related costs, app subscriptions, and any other work-related records.",
          "Match expenses to your driving notes when possible. If an expense has no explanation, add a note while it is still fresh.",
          "This habit gives you cleaner records and better profit awareness. It also helps you notice when a store, zone, or order type is creating more vehicle cost than it is worth.",
        ],
        callout:
          "Warning: Normal personal spending does not become business spending just because it happened on a Spark day.",
      },
    ],
    faqs: [
      {
        question: "Should I keep every receipt?",
        answer:
          "Keep records for work-related expenses. Digital receipts, bank records, and app logs can help.",
      },
      {
        question: "Are meals deductible?",
        answer:
          "Meals are more complicated and often misunderstood. Do not assume normal meals during a shift are deductible.",
      },
      {
        question: "What is the easiest system?",
        answer:
          "Enter expenses weekly, save receipts, and review totals monthly.",
      },
      {
        question: "Should I track expenses if I use standard mileage?",
        answer:
          "Yes for profit tracking, even if some actual vehicle costs are not separately deducted.",
      },
    ],
    relatedSlugs: [
      "can-spark-drivers-deduct-gas",
      "spark-driver-tax-deductions",
      "spark-driver-earnings-tracker",
    ],
    sources: [
      {
        label: "IRS Gig Economy Tax Center",
        url: "https://www.irs.gov/businesses/gig-economy-tax-center",
        note: "IRS hub for gig workers covering records, expenses, filing, and paying taxes for gig work.",
      },
      {
        label: "IRS Publication 463: Travel, Gift, and Car Expenses",
        url: "https://www.irs.gov/forms-pubs/about-publication-463",
        note: "IRS publication covering deductible car expenses, standard mileage, actual expenses, and recordkeeping.",
      },
      {
        label: "IRS: About Schedule C",
        url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040",
        note: "IRS page for Schedule C, used to report profit or loss from a sole proprietorship.",
      },
      {
        label: "IRS: Manage taxes for your gig work",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/manage-taxes-for-your-gig-work",
        note: "IRS page explaining that gig income is taxable and that independent contractors may need to handle estimated taxes.",
      },
    ],
  },
];
