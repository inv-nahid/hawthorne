import express from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cart.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"

const cartRouter = express.Router()

//@desc Add To Cart
//@route POST /api/cart/add
//@access Private
cartRouter.post("/add", authMiddleware, addToCart)

//@desc Remove From Cart
//@route POST /api/cart/remove/:foodId
//@access Private
cartRouter.post("/remove/:foodId", authMiddleware, removeFromCart)

//@desc Get Cart
//@route GET /api/cart/get
//@access Private
cartRouter.get("/get", authMiddleware, getCart)

export default cartRouter