import { useState,  useContext } from 'react'
import './signup.css'
import { Link, Navigate } from 'react-router-dom'

import { signUp } from '../../../backend-api/authenticate.js'
import {AuthenticatedContext} from '../../../context-manager/authenticated-context.jsx'

function SignUp(){

    const  [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {authenticated, setAuthenticated} = useContext(AuthenticatedContext)

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        switch(name){
            case "name":
                setName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
        }
    }

    async function handleInputSubmit(e){
        e.preventDefault()
        const responseData = await signUp({userName : name, userEmail : email, userPassword : password})
        if (responseData.success){
            console.log(responseData.data)
            setAuthenticated(true)
        }else{
            console.log("Unable to signup")
            setAuthenticated(false)
        }
    }

    return (
        authenticated ?
        <Navigate to='/todo' /> :
        <div className='signup'>
            <form onSubmit={handleInputSubmit}>
                <input placeholder='Name' name="name" value={name} onChange={handleInputChange}/>
                <input placeholder='Email' name="email" value={email} onChange={handleInputChange}/>
                <input placeholder='Password' name='password' value={password} onChange={handleInputChange}/>
                <input type='submit' value='SignUp' />
            </form>
            <p>Already have an account ? <span><Link to='/authenticate/signin'>SignIn</Link></span></p>
        </div>
    )
}

export default SignUp