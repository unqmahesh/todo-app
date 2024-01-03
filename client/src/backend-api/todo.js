import axios from 'axios'

const baseurl = 'http://localhost:5000/todo/api/v1/todo/'

const getAllTodo = async () => {
    try{
        const response = await axios.get(baseurl+'get-all-todo', {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return response.data
    }
}

const addTodo = async (data) => {
    try{
        const response = await axios.post(baseurl+'add-todo', data, {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return response.data
    }
}

const deleteTodo  = async (todoId) => {
    try{
        const response = await axios.delete(baseurl +'delete-todo/'+todoId, {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return response.data
    }
}

export {getAllTodo, addTodo, deleteTodo}