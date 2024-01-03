import { createContext, useState } from 'react'

const AuthenticatedContext = createContext()

function AuthenticatedContextprovider({children}){

    const [authenticated, setAuthenticated] = useState(false)

    return (
        <AuthenticatedContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </AuthenticatedContext.Provider>
    )
}

export {AuthenticatedContext, AuthenticatedContextprovider}