import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      default: null,
    },

    location: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      default: "Karnataka",
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

    amenities: [
      {
        type: String,
      },
    ],

    rating: {
      type: Number,
      default: 4.5,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    latitude: Number,

    longitude: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", hotelSchema);