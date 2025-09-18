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
const removeFromCart = async (req, res) => {

  try {
    const userId = req.user._id
    const { foodId } = req.params

    const user = await userModel.findById(userId)

    if (!user)
        return res.status(404).json({ success: false, message: "User not found" })

    // Find the index of the item in cart
    const itemIndex = user.cartData.findIndex(
      (item) => item.foodId.toString() === foodId
    )

    if (itemIndex === -1)
        return res.status(404).json({ success: false, message: "Item not found in cart" })

    // Decrease quantity by 1
    if (user.cartData[itemIndex].quantity > 1)
        user.cartData[itemIndex].quantity -= 1
    else {
        // If quantity is 1, remove the item entirely
        user.cartData.splice(itemIndex, 1)
    }

    await user.save()

    res.status(200).json({ success: true, message: "Item quantity decreased", cart: user.cartData })

  } catch (error) {
    console.error("Error updating cart:", error)
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}

// @desc Get user cart
// @route GET /api/cart
// @access Private
const getCart = async (req, res) => {
  try {
    const userId = req.user._id // comes from auth middleware

    // Fetch user and populate food details
    const user = await userModel
      .findById(userId)
      .populate("cartData.foodId") // populates foodId with actual Food document

    if (!user)
        return res.status(404).json({ success: false, message: "User not found" })

    res.status(200).json({
      success: true,
      cart: user.cartData.map(item => ({
        food: item.foodId,      // full food details
        quantity: item.quantity // quantity in cart
      }))
    })

  } catch (error) {
    console.error("Error fetching cart:", error)
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}

export { addToCart, removeFromCart, getCart }
