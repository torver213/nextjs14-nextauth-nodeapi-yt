import mongoose from "mongoose";

const { Schema } = mongoose

const UserSchema = new Schema({
    id: {type: Schema.Types.ObjectId},
    name: String,
    email: String,
    password: String,
    role: String,
    avatar: {type: String, default: "/avatar3.png"},
    isVerifiedEmail: {type: Boolean, default: false},
    isBlocked: {type: Boolean, default: false}
}, {timestamps: true})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel