import authOptions from "@/app/api/auth/authOptions";
import { ProfilePage } from "@/components/pages";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session) return redirect("/api/auth/signin?callbackUrl=/dashboard")
  return <ProfilePage session={session} />
}
