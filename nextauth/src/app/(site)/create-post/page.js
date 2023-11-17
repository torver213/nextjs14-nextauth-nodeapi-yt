import authOptions from "@/app/api/auth/authOptions";
import { CreatePostPage } from "@/components/pages";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session) return redirect("/api/auth/signin?callbackUrl=/create-post")
  return <CreatePostPage session={session} />
}
