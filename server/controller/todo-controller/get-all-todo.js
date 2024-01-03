import todoModel from "../../model/todo-model.js";

const getAllTodo = async (req, res) => {
    try{
        const {userId} = req.body

        const alltodo = await todoModel.find({userId})

        res.status(200).json({code : "GET_ALL_TODO_SUCCESS", success : true, message : "successfully fetched all todo", data : alltodo})
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : "GET_ALL_TODO_FAILED", success : false, message : "failed to fetch all todo", data : {}})
    }
}

export default getAllTodo