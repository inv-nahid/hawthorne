import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import foodRouter from "./routes/food.route.js"
import userRouter from "./routes/user.route.js"
import cartRouter from "./routes/cart.route.js"
import orderRouter from "./routes/order.route.js"

// Load environment variables from .env
dotenv.config()

//app config
const app = express()
const PORT = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => res.send("API Running"))
app.get("/health", (req, res) => res.send("Server is running"))

//Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}).catch((error) => console.log(error))



