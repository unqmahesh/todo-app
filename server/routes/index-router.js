import express from "express";
import userRouter from "./user-router.js";
import todoRouter from "./todo-router.js";
import {verifyAuthToken} from '../utils/auth-token.js'

const indexRouter = express.Router()

//checking the health of the api
indexRouter.route('/health').get((req, res) => {res.status(200).json({message : "The api is healthy"})})

//checking if user is already authenticated so there is no need for signin or signup in frontend
indexRouter.route("/is-authenticated").get(verifyAuthToken, (req, res)=>{res.status(200).json({success : true})})

indexRouter.use('/user', userRouter)
indexRouter.use('/todo', verifyAuthToken, todoRouter)

export default indexRouter