import authOptions from "@/app/api/auth/authOptions";
import { ArticlePage } from "@/components/pages";
import { getAllNodeAPIPosts } from "@/lib/post";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions)
  if(!session) return redirect("/api/auth/signin?callbackUrl=/posts")
  const posts = await getAllNodeAPIPosts(session?.accessToken)
  console.log("Node api posts ", posts)
  return <ArticlePage posts={posts} title="External NODE API & NextJs server side data fetching" />
}
