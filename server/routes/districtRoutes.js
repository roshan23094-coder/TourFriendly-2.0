import express from "express";

import {
  addDistrict,
  getAllDistricts,
  getDistrictById,
  getDistrictDestinations,
  getDistrictHotels,
  updateDistrict,
  deleteDistrict,
} from "../controllers/districtController.js";

const router = express.Router();

// ===================================
// Public Routes
// ===================================

// Get all districts
router.get("/", getAllDistricts);

// Get district details
router.get("/:id", getDistrictById);

// Get all destinations of a district
router.get("/:id/destinations", getDistrictDestinations);

// Get all hotels of a district
router.get("/:id/hotels", getDistrictHotels);

// ===================================
// Admin Routes
// ===================================

// Add district
router.post("/", addDistrict);

// Update district
router.put("/:id", updateDistrict);

// Delete district
router.delete("/:id", deleteDistrict);

export default router;