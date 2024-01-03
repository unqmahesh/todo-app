import app from './app.js'
import { connectDB, disConnectDB } from './config/connectDB.js'


const PORT = process.env.PORT || 5000

const start = async () => {
    try{
        await connectDB()
        app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)})
    }catch(error){
        console.log(error.message)
    }
}

start()

process.on('SIGTERM', async ()=>{
    try{
        await disConnectDB()
    }catch(error){
        console.log(error.message)//remove
    }
})

process.on('SIGINT', async ()=>{
    try{
        await disConnectDB()
    }catch(error){
        console.log(error.message)//remove
    }
})