import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      default: null,
    },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wishlist", wishlistSchema);