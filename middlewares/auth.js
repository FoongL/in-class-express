const { JWT_SALT } = process.env
const jwt = require('jsonwebtoken')

const tokenAuth = () => async (req, res, next) => {
    const authToken = req.header('Authorization').replace('Bearer ', '')
    console.log('auth Token:', authToken)
    try{
        const verifyToken = jwt.verify(authToken, JWT_SALT)  
        console.log('Verified Token', verifyToken)
        next()
    } catch(err){
        return res.status(403).json({err})
    }
}

module.exports = tokenAuth