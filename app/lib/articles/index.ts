import { comparisonArticles } from "./comparison";
import { earningsArticles } from "./earnings";
import { expenseArticles } from "./expenses";
import { mileageArticles } from "./mileage";
import { sparkGuideArticles } from "./sparkGuides";
import { taxArticles } from "./taxes";
import { ArticleData } from "./types";

export const articles: ArticleData[] = [
  ...sparkGuideArticles,
  ...taxArticles,
  ...mileageArticles,
  ...earningsArticles,
  ...expenseArticles,
  ...comparisonArticles,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleData => Boolean(article));
}

export type { ArticleData, ArticleFaq, ArticleSource } from "./types";
