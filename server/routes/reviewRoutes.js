import express from "express";

import {
  addReview,
  getHotelReviews,
  getDestinationReviews,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

// Add Review
router.post("/", addReview);

// Hotel Reviews
router.get("/hotel/:hotelId", getHotelReviews);

// Destination Reviews
router.get("/destination/:destinationId", getDestinationReviews);

// Delete Review
router.delete("/:id", deleteReview);

export default router;