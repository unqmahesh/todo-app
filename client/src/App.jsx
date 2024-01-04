import {useContext, useEffect, useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

import AuthPage from './pages/auth-page/auth-page.jsx'
import TodoPage from './pages/todo-page/todo-page.jsx'

import { isAuthenticated } from './backend-api/authenticate.js'
import { AuthenticatedContext } from './context-manager/authenticated-context.jsx'


const App = () => {

  const {authenticated, setAuthenticated} = useContext(AuthenticatedContext)
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    async function checkAuthentication(){
        const responseData = await isAuthenticated()
        if(responseData.success){
            setAuthenticated(true)
            setLoading(false)
        }else{
            setAuthenticated(false)
            setLoading(false)
        }
    }
    checkAuthentication()
}, [])

  return (
    <>
    {loading ?
    <div className='app-loading'>Loading...</div>
    :
      <Routes>
        {authenticated ? 
        <Route path='/' element={<Navigate to='/todo' />} />
        : <Route path='/' element={<Navigate to="/authenticate" />} />}
        <Route path='/authenticate/*' Component={AuthPage} />
        <Route path='/todo' Component={TodoPage} />
    </Routes> }
    </>
  )
}

export default App