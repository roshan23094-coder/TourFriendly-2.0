import express from "express";

import {
  addHotel,
  getAllHotels,
  getHotelById,
  getTopHotels,
  updateHotel,
  deleteHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

// ==============================
// Public Routes
// ==============================

// Get all hotels
router.get("/", getAllHotels);

// Top rated hotels
router.get("/top", getTopHotels);

// Get hotel by ID
router.get("/:id", getHotelById);

// ==============================
// Admin Routes
// ==============================

// Add hotel
router.post("/", addHotel);

// Update hotel
router.put("/:id", updateHotel);

// Delete hotel
router.delete("/:id", deleteHotel);

export default router;