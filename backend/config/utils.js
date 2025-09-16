import jwt from "jsonwebtoken"
import dotenv from "dotenv"

// Load environment variables from .env for JWT secret token
dotenv.config()

const jwtSecret = process.env.JWT_SECRET
if (!jwtSecret)
    throw new Error("JWT_SECRET is not defined in environment variables")

// Function to generate JWT token
const generateToken = (id, res) => {
    const token = jwt.sign({ id }, jwtSecret, { expiresIn: "7d" })

    // Set token in HTTP-only cookie
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", // Set secure flag in production
        sameSite: "Strict"
    })

    return token
}

export { generateToken }