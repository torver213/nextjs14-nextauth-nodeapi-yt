import { authAxios, authNodeAxios, axiosPublic } from "@/config"
import { getErrorMessage } from "@/utils"

export const createNewPost = async(body, accessToken) => {
    try {
        authAxios.accessToken = accessToken
        const result = await authAxios.post("/posts", body)
        return {isError: false, data: result.data, message: 'Post created successfully'}
    } catch (error) {
        return {isError: true, data:null, message: getErrorMessage(error)}
    }
}

export const getPublicPosts = async() => {
    try {
        const result = await axiosPublic.get("/posts?type=public")
        return result.data
    } catch (error) {
       throw new Error(error.message)
    }
}

export const getAllPosts = async(accessToken) => {
    try {
        authAxios.accessToken = accessToken
        const result = await authAxios.get("/posts")
        return result.data
    } catch (error) {
       throw new Error(error.message)
    }
}

export const getAllNodeAPIPosts = async(accessToken) => {
    try {
        authNodeAxios.accessToken = accessToken
        const result = await authNodeAxios.get("/posts")
        return result.data
    } catch (error) {
       throw new Error(error.message)
    }
}