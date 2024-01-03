import todoModel from "../../model/todo-model.js";

const addTodo = async (req, res) => {
    try{

        const {userId, todoContent, todoPriority, todoDueDate, todoCategory, todoLabel } = req.body
        
        const todoData = {userId,
                     todoContent,
                     todoPriority, 
                     todoDueDate : todoDueDate || null,
                     todoCategory : todoCategory || "personal",
                    todoLabel : todoLabel || null }

        const addedTodo = await todoModel.create(todoData)

        res.status(200).json({code : "ADD_TODO_SUCCESS", success : true, message : 'todo successfully added', data : addedTodo})
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : "ADD_TODO_FAILED", success : false, message : 'failed to add todo', data : {}})
    }
}


export default addTodo