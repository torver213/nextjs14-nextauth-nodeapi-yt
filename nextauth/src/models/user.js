import mongoose from "mongoose";

const { Schema } = mongoose

mongoose.connect(process.env.MONGODB_URI)

mongoose.Promise = global.Promise

const UserSchema = new Schema({
    id: {type: Schema.ObjectId},
    name: String,
    email: String,
    password: String,
    role: String,
    avatar: {type: String, default: "/avatar3.png"},
    isVerifiedEmail: {type: Boolean, default: false},
    isBlocked: {type: Boolean, default: false}
}, {timestamps: true})

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)

export default UserModel