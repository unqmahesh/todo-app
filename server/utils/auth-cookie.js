
const cookieDomain = process.env.COOKIE_DOMAIN || 'localhost'

const createAuthCookie = (res, authToken) => {
    try{
        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getDate()+1)
        const cookieOptions = {
            httpOnly : true,
            secure : true,
            domain : cookieDomain,
            expires : expiryDate,
            path : '/'
        }
        res.cookie("authToken", authToken, cookieOptions)
    }catch(error){
        console.log(error.message) //remove
    }
}

const clearAuthCookie = (res) => {
    try{
        const cookieOptions =  {
            httpOnly : true,
            secure : true,
            domain : cookieDomain,
            path : '/'
        }
        res.clearCookie("authToken", cookieOptions)
    }catch(error){
        console.log(error.message)//remvoe
    }
}

export {createAuthCookie, clearAuthCookie}