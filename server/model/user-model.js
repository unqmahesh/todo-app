import mongoose from 'mongoose'
import crypto from 'crypto'



const userSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
        default : () => crypto.randomUUID()
    },
    userName : {
        type : String,
        required : true
    }, 
    userEmail : {
        type : String,
        required : true,
        unique : true
    },
    userPassword : {
        type : String,
        required : true,
    },
    userCreatedAt : {
        type : Date,
        default : () => new Date()
    }
}, {validateBeforeSave : true})

const userModel = mongoose.model('User', userSchema)

export default userModel
