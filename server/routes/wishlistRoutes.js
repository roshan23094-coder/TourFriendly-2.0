import express from "express";

import {
  addToWishlist,
  getWishlist,
  deleteWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

// Add Wishlist
router.post("/", addToWishlist);

// Get Wishlist
router.get("/:userId", getWishlist);

// Delete Wishlist
router.delete("/:id", deleteWishlist);

export default router;