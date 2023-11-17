import PostService from "../services/post.mjs"

export const getPostsController = async (req, res) => {
    const result = await PostService.getAllPosts()
    console.log("Node API",result)
    if(result.isError) return res.status(result.status).send(result.message)
    return res.status(result.status).json(result.data)
}

const PostController = { getPostsController }

export default PostController