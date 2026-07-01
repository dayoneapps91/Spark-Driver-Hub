export type ArticleSource = {
  label: string;
  url: string;
  note?: string;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleData = {
  slug: string;
  title: string;
  description: string;
  category:
    | "Spark Guides"
    | "Taxes"
    | "Mileage"
    | "Earnings"
    | "Expenses"
    | "Comparison";
  lastUpdated: string;
  readingTime: string;
  intro: string;
  quickAnswer?: string;
  disclaimer?: string;
  sections: {
    heading: string;
    body: string[];
    callout?: string;
  }[];
  faqs?: ArticleFaq[];
  relatedSlugs: string[];
  sources?: ArticleSource[];
};
