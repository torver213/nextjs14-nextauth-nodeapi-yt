import { ArticlePage } from "@/components/pages";
import { getPublicPosts } from "@/lib/post";

export default async function Home() {
  const posts = await getPublicPosts()
  return <ArticlePage posts={posts} title="Next API server side data fetching" />
}
