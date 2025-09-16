import userModel from "../models/user.model.js";


//@desc Add Items To Cart
//@route POST /api/cart/add
//@access Private
const addToCart = async ( req, res ) => {}

//@desc Remove Items From Cart
//@route POST /api/cart/remove
//@access Private
const removeFromCart = async ( req, res ) => {}

//@Fetch User Cart Data
//@route GET /api/cart/get
//@access Private
const getCart = async ( req, res ) => {}

export { addToCart, removeFromCart, getCart }