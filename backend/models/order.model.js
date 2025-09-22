import mongoose from "mongoose";

// Reused the cartItemSchema idea for order items
const orderItemSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "food", required: true },
  quantity: { type: Number, default: 1, min: 1 }
})

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    items: { type: [orderItemSchema], required: true },
    address: { type: Object, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "preparing", "delivered", "cancelled"],
      default: "pending"
    },
    payment: {
      method: { type: String, enum: ["COD", "Card"], required: true },
      status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }
    },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema)

export default orderModel
