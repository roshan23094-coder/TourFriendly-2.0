import express from "express";

import {
  createBooking,
  getUserBookings,
  getAllBookings,
  cancelBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

// ============================
// Booking Routes
// ============================

// Create Booking
router.post("/", createBooking);

// Get Logged-in User Bookings
router.get("/user/:userId", getUserBookings);

// Get All Bookings (Admin)
router.get("/", getAllBookings);

// Cancel Booking
router.put("/cancel/:id", cancelBooking);

export default router;