import bcrypt from 'bcrypt'
import userModel from '../../model/user-model.js'
import {createAuthToken} from '../../utils/auth-token.js'
import {clearAuthCookie, createAuthCookie} from '../../utils/auth-cookie.js'

const signIn = async (req, res) => {

    try{

        const {userEmail, userPassword} = req.body
        const existedUser = await userModel.findOne({userEmail})

        if(!existedUser){
            throw new Error("USER_NOT_FOUND")
        }
        else{
            const hashedPassword = existedUser.userPassword
            const verifiedPassword = await bcrypt.compare(userPassword, hashedPassword)

            if (!verifiedPassword){
                throw new Error("INVALID_CREDENTIALS")
            }
            else{

                //resetting the cookie with new authentication token 
                clearAuthCookie(res)
                const authToken = await createAuthToken({userId : existedUser.userId})
                createAuthCookie(res, authToken)

                existedUser.userPassword = "******"//for security better security
                res.status(200).json({code : "SIGNIN_SUCCESS", success : true, data : existedUser, message : "successfully signed in "})
            }
        }
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : 'SIGNIN_FAILED', success : false, data : {}, message : error.message})
    }
}

export default signIn