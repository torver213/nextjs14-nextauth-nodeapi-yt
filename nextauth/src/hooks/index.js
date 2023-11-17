import { useSession } from "next-auth/react"

export const useAuthUser = (url = "/") => {
    const {data: session, status} = useSession()
    const isLoading = status === "loading"
    const isAuthenticated = status === "authenticated"
    const isUnAuthenticated = status === "unauthenticated"

    return { session, isLoading, isAuthenticated, isUnAuthenticated}

}