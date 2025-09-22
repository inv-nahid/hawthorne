import orderModel from "../models/order.model.js"
import userModel from "../models/user.model.js"

// @desc Place new order
// @route POST /api/order/place
// @access Private
const placeOrder = async (req, res) => {}

// @desc Get my orders
// @route GET /api/order/me
// @access Private
const getMyOrders = async (req, res) => {}

// @desc Cancel my orders
// @route GET /api/order/:id/cancel
// @access Private
const cancelOrder = async (req, res) => {}

// @desc Get all orders (Admin)
// @route GET /api/order
// @access Private/Admin
const getAllOrders = async (req, res) => {}

// @desc Update order status (Admin)
// @route PUT /api/order/:id/status
// @access Private/Admin
const updateOrderStatus = async (req, res) => {}

export { placeOrder, getMyOrders, cancelOrder, getAllOrders, updateOrderStatus}