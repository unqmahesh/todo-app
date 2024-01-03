import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dbname"

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI)
        console.log("Connected to DB")
    }catch(error){
        console.log(error.message) // remove
    }
}

const disConnectDB = async () => {
    try{
        await mongoose.disconnect()
        console.log("DisConnected to DB")
    }catch(error){
        console.log(error.message) // remove
    }
}

export {connectDB, disConnectDB}