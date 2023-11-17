import mongoose from 'mongoose';

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb database connection established")
    } catch (error) {
        console.log("Mongodb database connection error ", error.messsage)
    }
}

export default connectDb