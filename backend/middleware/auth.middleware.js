import jwt from "jsonwebtoken"
import userModel from "../models/user.model"

const authMiddleware = async ( req, res, next) =>{
    try {
        //Get jwt token from cookie
        const token = req.cookies.jwt

        if(!token) 
            return res.status(401).json({success: false, message:"Unauthorized - No Token Provided"})

        //Get jwt secret key from environment variables
        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) 
            throw new Error("JWT_SECRET is not defined")

        //Decode the token
        const decoded = jwt.verify(token, jwtSecret)
        if(!decoded) 
            return res.status(401).json({success: false, message:"Unauthorized - Invalid Token"})

        //Find user details using decoded jwt token
        const user = await userModel.findById(decoded.id).select("-password")
        if(!user) 
            return res.status(401).json({success: false, message:"Unauthorized - User Not Found"})

        req.user = user
        next()

    } catch (error) {
        console.error("Error in protecting middleware", error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export default authMiddleware