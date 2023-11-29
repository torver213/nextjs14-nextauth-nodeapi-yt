import { PostModel } from "@/models"
import { nanoid } from "nanoid"
import slugify from "slugify"

const createNewPost = async(body) => {
    try {
        const title = `${body.title}-${nanoid(5)}`
        const slug = slugify(title, {replacement: '-'})
        const result = await PostModel.create({...body, slug})
        return {isError: false, data: result, message: "success" }
    } catch (error) {
        return {isError: true, data: null, message: error.message }
        
    }
}

const getAllPosts = async() =>{
    try {
        const result = await PostModel.find({}).populate({path: "user", select: ["name", "email", "avatar", "_id"]}).lean().exec()
        const data = result?.map(post => ({...post, id: post._id?.toString(), user: {...post.user, id: post?.user?._id.toString()} }))
        return {isError: false, data, message: "success" }
    } catch (error) {
        return {isError: true, data: null, message: error.message }
    }
}

const PostService = { createNewPost, getAllPosts}

export default PostService

