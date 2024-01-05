import axios from 'axios'


const baseurl = import.meta.env.VITE_USER_BASE_URL || 'http://localhost:5000/todo/api/v1/'

const isAuthenticated = async() => {
    try{
        const response = await axios.get(baseurl+'is-authenticated', {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return {success : false}
    }
}

const signIn = async (data) => {
    try{
        const response = await axios.post(baseurl+'user/signin' , data , {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return {success : false}
    }
}

const signUp = async (data) => {
    try{
        const response = await axios.post(baseurl+'user/signup', data, {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return {success : false}
    }
}

const signOut = async () => {
    try{
        const response = await axios.get(baseurl+'user/signout', {withCredentials : true})
        return response.data
    }catch(error){
        console.log(error.message)
        return {success : false}
    }
}

export {isAuthenticated, signIn, signUp, signOut}