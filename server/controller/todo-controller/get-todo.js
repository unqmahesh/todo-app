import todoModel from "../../model/todo-model.js";

const getTodo = async (req, res) => {
    try{
        const {todoId} = req.params

        const existedTodo = await todoModel.findOne({todoId})

        res.status(200).json({code : 'GET_TODO_SUCCESS', success : true, message : "successfully fetched todo", data : existedTodo})
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : 'GET_TODO_FAILED', success : false, message : "failed to fetch todo", data : {}})
    }
}
export default getTodo