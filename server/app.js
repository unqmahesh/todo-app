import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

import indexRouter from './routes/index-router.js'

const app = express()
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const cookieSecret = process.env.COOKIE_SECRET || 'thislineisasecretforcookie'

//giving access to client origin with creadentials
app.use(cors({origin : clientOrigin, credentials : true}))

//parsing cookies and signed using cokkieSecret
app.use(cookieParser(cookieSecret))

//parsing data
app.use(express.urlencoded({extended : true}))
app.use(express.json())

//Main router
app.use('/todo/api/v1', indexRouter)

export default app