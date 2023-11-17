import { authAxios } from "@/config"

export const getAllUsers = async(accessToken) => {
    try {
        authAxios.accessToken = accessToken
        const result = await authAxios.get("/users")
        return result.data
    } catch (error) {
       throw new Error(error.message)
    }
}