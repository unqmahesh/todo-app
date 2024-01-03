import mongoose from 'mongoose'
import crypto from 'crypto'


const todoSchema  = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    todoId : {
        type : String,
        required : true,
        default : ()=>crypto.randomUUID()
    },
    todoContent : {
        type : String,
        required : true
    },
    todoCategory : {
        type : String,
        default : "personal"
    },
    todoLabel : {
        type : String,
    },
    todoCreatedAt : {
        type : Date,
        required : true,
        default : () => new Date()
    },
    todoDueDate  : {
        type : Date,
    },
    todoPriority : {
        type : String,
        required : true,
        enum : ['high', 'medium', 'low']
    }
})

const todoModel = mongoose.model('Todo', todoSchema)

export default todoModel