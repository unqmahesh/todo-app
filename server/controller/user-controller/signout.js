import {clearAuthCookie} from '../../utils/auth-cookie.js'

const signOut = async (req, res)=>{
    try{
        
        clearAuthCookie(res)
        
        res.status(200).json({code : 'SIGNOUT_SUCCESS', success : true, message : "successfully signed out"})
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : 'SIGNOUT_FAILED', success : false, message : "failed to signout"})
    }
}

export default signOut