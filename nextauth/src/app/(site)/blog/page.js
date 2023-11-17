'use client'
import { ArticlePage } from "@/components/pages";
import { useAuthUser } from "@/hooks";
import { getAllPosts } from "@/lib/post";
import { getErrorMessage } from "@/utils";
import { Box, CircularProgress, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import useSWR from "swr";

export default function Page() {
  const {session, isLoading: isSessionLoading, isUnAuthenticated} = useAuthUser()

  const {data: posts, isLoading, error} = useSWR(["/posts", session?.accessToken], ([url, token]) => getAllPosts(token))

  if(isLoading || isSessionLoading){
    return (<Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center", height: "100vh"}}><CircularProgress /></Box>)
  }

  if(isUnAuthenticated) return redirect("/api/auth/signin?callbackUrl=/blog")

  if(error){
     return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center", height: "100vh"}}>
          <Typography variant="h6">
            {getErrorMessage(error)}
          </Typography>
        </Box>)
  }
  return <ArticlePage posts={posts} title="Next API Client side data fetching" />
}
