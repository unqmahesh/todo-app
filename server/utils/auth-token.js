import jwt from 'jsonwebtoken'


const authTokenSecret = process.env.AUTH_TOKEN_SECRET || 'thislineshouldbeauthtokensecret'

const createAuthToken = async (payload) => {
    try{
        const authToken = jwt.sign(payload, authTokenSecret, {expiresIn : '1d'})
        return authToken
    }catch(error){
        console.log(error.message) //remove
    }
}


//use this as middleware
const verifyAuthToken = async (req, res, next) => {
    try{
        const {authToken} = req.cookies
        const payload = jwt.verify(authToken, authTokenSecret)
        req.body.userId = payload.userId
        next()
    }catch(error){
        console.log(error.message) //remove
        res.status(400).json({code : "UNAUTHORIZED", success : false, data : []})
    }
}

export {createAuthToken, verifyAuthToken}