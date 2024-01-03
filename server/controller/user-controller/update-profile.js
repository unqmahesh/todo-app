import userModel from "../../model/user-model.js";
import bcrypt from 'bcrypt'

const updateUser = async(req, res) => {
    try{

        const {userName, userEmail, userPassword, userId} = req.body
        const existedUser = await userModel.findOne({userId})
        
        if(!existedUser){
            throw new Error("USER_NOT_FOUND")
        }
        else{
            let hashedPassword
            if(userPassword){
                hashedPassword = await bcrypt.hash(userPassword, 10)
            }

            const newUpdateData = {
                userName : userName || existedUser.userName,
                userEmail : userEmail || existedUser.userEmail,
                userPassword : userPassword ? hashedPassword : existedUser.userPassword
            }

                const updatedUser = await userModel.findOneAndUpdate({userId} ,{$set: newUpdateData}, {new : true})
                updatedUser.userPassword = "******"//for better security
                res.status(200).json({code : 'UPDATE_USER_SUCCESS', success : true, message : "user detailed successfully updated", data : updatedUser})
            
            }
    
    }catch(error){
        console.error(error.message)
        res.status(400).json({code : 'UPDATE_USER_FAILED', success : false, message : "failed to update user details", data : {}})  
    }

}

export default updateUser