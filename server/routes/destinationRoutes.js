import express from "express";

import {
  addDestination,
  getAllDestinations,
  getDestinationById,
  getTopDestinations,
  updateDestination,
  deleteDestination,
} from "../controllers/destinationController.js";

const router = express.Router();

// ======================================
// Public Routes
// ======================================

// Get all destinations
router.get("/", getAllDestinations);

// Top rated destinations
router.get("/top", getTopDestinations);

// Get destination by ID
router.get("/:id", getDestinationById);

// ======================================
// Admin Routes
// ======================================

// Add destination
router.post("/", addDestination);

// Update destination
router.put("/:id", updateDestination);

// Delete destination
router.delete("/:id", deleteDestination);

export default router;