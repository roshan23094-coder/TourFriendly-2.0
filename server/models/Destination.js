import mongoose from "mongoose";

// ========================================
// Attraction Schema
// ========================================

const attractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  timings: {
    type: String,
    default: "",
  },
});

// ========================================
// Destination Schema
// ========================================

const destinationSchema = new mongoose.Schema(
  {
    // =========================
    // Basic Information
    // =========================

    title: {
      type: String,
      required: true,
      trim: true,
    },

    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      default: "Karnataka",
    },

    country: {
      type: String,
      default: "India",
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    gallery: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      default: "Tourist Place",
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    entryFee: {
      type: Number,
      default: 0,
    },

    bestTime: {
      type: String,
      default: "",
    },

    openingHours: {
      type: String,
      default: "",
    },

    howToReach: {
      type: String,
      default: "",
    },

    latitude: {
      type: Number,
      default: 0,
    },

    longitude: {
      type: Number,
      default: 0,
    },

    // =========================
    // Food
    // =========================

    famousFood: [
      {
        type: String,
      },
    ],

    // =========================
    // Shopping
    // =========================

    shopping: [
      {
        type: String,
      },
    ],

    // =========================
    // Attractions
    // =========================

    attractions: [attractionSchema],
  },

  {
    timestamps: true,
  }
);

// ========================================
// Export Model
// ========================================

const Destination =
  mongoose.models.Destination ||
  mongoose.model("Destination", destinationSchema);

export default Destination;