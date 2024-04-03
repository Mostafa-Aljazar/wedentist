import ArticlesView from "@/components/articles-view"

export default function Home({ params }: { params: { slug: string } }) {
  return <ArticlesView slug={params.slug} />
}
