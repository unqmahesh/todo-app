import userModel from "../../model/user-model.js";

const deleteUser = async (req, res) => {
    try{

        const {userId} = req.body
        const existedUser = await userModel.findOne({userId})

        if(!existedUser){
            throw new Error("USER_NOT_FOUND")
        }
        else{
            const deletedUser = await userModel.findOneAndDelete({userId}, {new : true})
            res.status(200).json({code : "DELETE_USER_SUCCESS", success : true,  message : "user account successfully deleted.", data : deletedUser})
        }
    }catch(error){
        console.error(error.message) //remove
        res.status(400).json({code : "DELETE_USER_FAILED", success : false, message : "failed to delete user account", data : {}})
    }
}

export default deleteUser