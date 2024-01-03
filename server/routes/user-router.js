import express from 'express'
import signUp from '../controller/user-controller/signup.js'
import signIn from '../controller/user-controller/signin.js'
import signOut from '../controller/user-controller/signout.js'
import updateUser from '../controller/user-controller/update-profile.js'
import {verifyAuthToken} from '../utils/auth-token.js'
import deleteUser from '../controller/user-controller/delete-account.js'

const userRouter = express .Router()

userRouter.route('/signup').post(signUp)
userRouter.route('/signin').post(signIn)
userRouter.route('/signout').get(verifyAuthToken, signOut)
userRouter.route('/update-profile').patch(verifyAuthToken, updateUser)
userRouter.route('/delete-user').delete(verifyAuthToken, deleteUser)

export default userRouter