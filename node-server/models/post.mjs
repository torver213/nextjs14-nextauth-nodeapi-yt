import mongoose from "mongoose";

const { Schema } = mongoose

const PostSchema = new Schema({
    id: {type: Schema.ObjectId},
    title: String,
    slug: String,
    description: String,
    content: String,
    photo: String,
    user: {type: Schema.ObjectId, ref: "User"}
}, {timestamps: true})

const PostModel = mongoose.model("Post", PostSchema)

export default PostModel