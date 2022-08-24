import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()



const connectDB = async () => {

    try {
        const db = await mongoose.connect(process.env.URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected ${db.connection.host}`)

    } catch {
        new Error('DB not connected')
    }
}

export default connectDB