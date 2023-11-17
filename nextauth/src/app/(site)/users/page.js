import authOptions from "@/app/api/auth/authOptions";
import { UsersPage } from "@/components/pages";
import { getAllUsers } from "@/lib/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session) return redirect("/api/auth/signin?callbackUrl=/dashboard")
  const users = await getAllUsers(session?.accessToken)
console.log(users)
  return <UsersPage users={users} />


  
}
