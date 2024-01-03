import {Routes, Route, Navigate} from 'react-router-dom'
import './auth-page.css'

import SignUp from '../../containers/auth-page-cont/signup-cont/signup.jsx'
import SignIn from '../../containers/auth-page-cont/signin-cont/signin.jsx'


function AuthPage(){

    return (
        <div className='auth-page'>
            <Routes>
                <Route path='/' element={<Navigate to='/authenticate/signup' />}/>
                <Route path='/signin' Component={SignIn} />
                <Route path='/signup' Component={SignUp} />
            </Routes>
        </div>
    )
}

export default AuthPage