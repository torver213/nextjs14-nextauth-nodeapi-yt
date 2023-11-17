import PostModel from "../models/post.mjs"
import UserModel from "../models/user.mjs"

const getAllPosts = async() =>{
    try {
        const result = await PostModel.find({}).populate({path: "user", select: ["name", "email", "avatar", "_id"], model: UserModel}).lean().exec()
        const data = result?.map(post => ({...post, id: post._id?.toString(), user: {...post.user, id: post?.user?._id.toString()} }))
        return {isError: false, data, message: "success", status: 200 }
    } catch (error) {
        return {isError: false, data: null, message: error.message, status: 500 }
    }
}

const PostService = { getAllPosts}

export default PostService