import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { exec } from "child_process";

// =======================
// Routes
// =======================

import authRoutes from "./routes/authRoutes.js";
import districtRoutes from "./routes/districtRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

// =======================
// Middlewares
// =======================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =======================
// Database Connection
// =======================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("=================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log("=================================");
  })
  .catch((err) => {
    console.error("=================================");
    console.error("❌ MongoDB Connection Error");
    console.error(err);
    console.error("=================================");
  });

// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 TourFriendly API Running Successfully",
  });
});

// =======================
// TEMPORARY DATABASE SEED ROUTE
// =======================
// IMPORTANT:
// This route is protected with SEED_KEY.
// We will remove this route after
// the production database is seeded.
// =======================

app.get("/api/seed-database", (req, res) => {
  const providedKey = req.query.key;

  if (
    !process.env.SEED_KEY ||
    providedKey !== process.env.SEED_KEY
  ) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized",
    });
  }

  console.log("=================================");
  console.log("🌱 Production database seed started");
  console.log("=================================");

  exec("npm run seed", (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Seed process failed");
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Database seed failed",
        error: error.message,
      });
    }

    if (stderr) {
      console.error(stderr);
    }

    console.log(stdout);

    console.log("=================================");
    console.log("🎉 Production database seeded");
    console.log("=================================");

    return res.status(200).json({
      success: true,
      message: "🎉 Production database seeded successfully",
      output: stdout,
    });
  });
});

// =======================
// API Routes
// =======================

// Authentication
app.use("/api/auth", authRoutes);

// Districts
app.use("/api/districts", districtRoutes);

// Destinations
app.use("/api/destinations", destinationRoutes);

// Hotels
app.use("/api/hotels", hotelRoutes);

// Bookings
app.use("/api/bookings", bookingRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// Reviews
app.use("/api/reviews", reviewRoutes);

// Wishlist
app.use("/api/wishlist", wishlistRoutes);

// =======================
// 404 Route
// =======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// =======================
// Global Error Handler
// =======================

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// =======================
// Start Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log("🌍 TourFriendly Backend Started");
  console.log("=================================");
});