import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "food", required: true },
  quantity: { type: Number, default: 1, min: 1 }
})

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: [cartItemSchema],
    isAdmin: { type: Boolean, default: false }
  },
  { minimize: false, timestamps: true }
)

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
