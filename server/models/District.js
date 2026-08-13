import mongoose from "mongoose";

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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

    famousFor: [
      {
        type: String,
      },
    ],

    famousFood: [
      {
        type: String,
      },
    ],

    travelTips: [
      {
        type: String,
      },
    ],

    bestTime: {
      type: String,
      default: "",
    },

    population: {
      type: String,
      default: "",
    },

    area: {
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

    rating: {
      type: Number,
      default: 4.5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("District", districtSchema);