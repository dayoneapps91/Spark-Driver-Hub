import ArticleTemplate from "../../components/ArticleTemplate";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return <ArticleTemplate slug={slug} />;
}
