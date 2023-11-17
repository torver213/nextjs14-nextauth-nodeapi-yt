import mongoose from "mongoose";

const { Schema } = mongoose

const AccountSchema = new Schema({
    id: {type: Schema.ObjectId},
    provider: {type: String, default: "nextApp"},
    type: {type: String, default: "credentials"},
    providerAccountId: {type: String, default: "782389209ej"},
    access_token: {type: String, default: "ehdhjdiuuiweuie"},
    scope: {type: String, default: "all"},
    userId: {type: Schema.ObjectId, ref: "User"}
})

const AccountModel = mongoose.models.Account || mongoose.model("Account", AccountSchema)

export default AccountModel
