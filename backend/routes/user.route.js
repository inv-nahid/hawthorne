import express from "express"
import { signupUser, loginUser, logoutUser, deleteUser, checkAuth } from "../controllers/user.controller.js"

const userRouter = express.Router()

//@desc: Register a new user
//@route: POST /api/user/signup
//@access: Public
userRouter.post("/signup", signupUser)


//@desc: Login user
//@route: POST /api/user/login
//@access: Public
userRouter.post("/login", loginUser)


//@desc: Logout user
//@route: POST /api/user/logout
//@access: Public
userRouter.post("/logout", logoutUser)


//@desc: Delete user
//@route: DELETE /api/user/delete
//@access: Private
userRouter.delete("/delete", deleteUser)


//@desc: checkAuth
//@route: GET /api/user/check
//@access: Private
userRouter.get("/check", checkAuth)


export default userRouter

