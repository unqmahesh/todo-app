import todoModel from "../../model/todo-model.js";

const updateTodo = async (req, res) => {
    try{
        const {todoId} = req.params
        const existedTodo =  await todoModel.findOne({todoId})
        
        if(!existedTodo){
            throw new Error("TODO_NOT_FOUND")
        }

        const {todoContent, todoLabel, todoDueDate, todoCategory, todoPriority} = req.body
        
        const updateData = {
            todoContent : todoContent || existedTodo.todoContent,
            todoLabel : todoLabel || existedTodo.todoLabel,
            todoDueDate : todoDueDate || existedTodo.todoDueDate,
            todoCategory : todoCategory || existedTodo.todoCategory,
            todoPriority : todoPriority || existedTodo.todoCategory
        }

        const updatedTodo = await todoModel.findOneAndUpdate({todoId}, updateData, {new : true})

        res.status(200).json({code : "UPDATE_TODO_SUCCESS", success : true, message : "successfully updated the todo", data : updatedTodo })
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : "UPDATE_TODO_FAILED", success : false, message : "failed to update todo", data : {}})
    }
}

export default updateTodo