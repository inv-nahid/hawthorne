import userModel from "../models/user.model.js";


//@desc Add Items To Cart
//@route POST /api/cart/add
//@access Private
const addToCart = async ( req, res ) => {

  try {
    const userId = req.user._id; // comes from auth middleware
    const { foodId, quantity } = req.body

    if (!foodId) {
      return res.status(400).json({ success: false, message: "Food ID is required" })
    }

    const user = await userModel.findById(userId)

    // Check if food already in cart
    const itemIndex = user.cartData.findIndex(
      (item) => item.foodId.toString() === foodId
    )

    if (itemIndex > -1)
      // If item exists, update quantity
      user.cartData[itemIndex].quantity += quantity || 1
    else
      // Else, push new item
      user.cartData.push({ foodId, quantity: quantity || 1 })

    // Save updated cart of user to database
    await user.save();

    res.status(200).json({ success: true, message: "Item added to cart", cart: user.cartData })

  } catch (error) {
    console.error("Error adding to cart:", error)
    res.status(500).json({ success: false, message: "Server error" })
  }
}

//@desc Remove Items From Cart
//@route POST /api/cart/remove
//@access Private
const removeFromCart = async ( req, res ) => {}

//@Fetch User Cart Data
//@route GET /api/cart/get
//@access Private
const getCart = async ( req, res ) => {}

export { addToCart, removeFromCart, getCart }