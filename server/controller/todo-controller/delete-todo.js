import todoModel from "../../model/todo-model.js";

const deleteTodo = async (req, res) => {
    try{

        const {todoId} = req.params
        const todoExisted = await todoModel.findOne({todoId})

        if(!todoExisted){
            throw new Error("TODO_NOT_FOUND")
        }
        else{
            const deletedTodo = await todoModel.findOneAndDelete({todoId}, {new : true})

            res.status(200).json({code : 'DELETE_TODO_SUCCESS', success : true, message : "successfully deleted todo", data : deletedTodo })
        }
    }catch(error){
        console.error(error.message)
        res.status(200).json({code : 'DELETE_TODO_FAILED', success : false, message : "failed to delete todo", data : {}})
    }
}

export default deleteTodo