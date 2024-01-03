import react, { useContext, useState } from 'react'
import {Link, Navigate} from 'react-router-dom'
import './signin.css'

import { signIn } from '../../../backend-api/authenticate.js'

import {AuthenticatedContext} from '../../../context-manager/authenticated-context.jsx'

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {authenticated, setAuthenticated} = useContext(AuthenticatedContext)

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        switch(name){
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
        }
    }

    async function handleInputSubmit(e){
        e.preventDefault()
        const responseData = await signIn({userEmail : email, userPassword : password})
        if(responseData.success){
            setAuthenticated(true)
            console.log(responseData.data)
        }else{
            setAuthenticated(false)
            console.log("unable to signin")
        }
    }

    return (
        authenticated ?
        <Navigate to='/todo' /> :
        <div className='signin'>
            <form onSubmit={handleInputSubmit}>
                <input placeholder='Email' name='email' value={email} onChange={handleInputChange}/>
                <input placeholder='Password' name='password'  value={password} onChange={handleInputChange}/>
                <input type='submit' value='SignIn' />
            </form>
            <p>Don't have an account ?<span><Link to='/authenticate/signup'>SignUp</Link></span></p>
        </div>
        
    )
}

export default SignIn