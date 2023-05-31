import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import user from "../Models/userModel.js";


const protect = asyncHandler(async(req, res, next) => {
    let token

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    // Verify token
    try{
        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

         //Add user from payload
        // req.user = await user.findById(decoded.id).select('-password')
        req.user=decoded
        // console.log(decoded)
        

        next()
    }catch (error){
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')

    }
}

// Check for token
if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
}
})


export default protect;