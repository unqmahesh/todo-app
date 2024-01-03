import bcrypt from 'bcrypt'

import userModel from "../../model/user-model.js";
import { createAuthToken } from "../../utils/auth-token.js";
import { createAuthCookie } from "../../utils/auth-cookie.js";


const signUp = async (req, res) => {

    try{

        const {userName, userEmail, userPassword} = req.body
        const existedUser = await userModel.findOne({userEmail})

        if(existedUser){
            throw new Error("USER_ALREADY_EXSITED")
        }
        //if the user doesn't exist
        else{
            //hasing password and creating user
            const hashedPassword = await bcrypt.hash(userPassword, 10)
            const createdUser = await userModel.create({userName, userEmail, userPassword : hashedPassword})

            //creating and sending authtoken through cookie
            const authToken = await createAuthToken({userId : createdUser.userId})
            createAuthCookie(res, authToken)

            //sending response
            createdUser.userPassword = "******"
            res.status(201).json({code : "SIGNUP_SUCCESS", success : true, data : createdUser})
        }
    }catch(error){
        console.error(error.message) //remove
        res.status(400).json({code : "SIGNUP_FAILED", success : false , message : error.message, data : {}})
    }
}

export default signUp