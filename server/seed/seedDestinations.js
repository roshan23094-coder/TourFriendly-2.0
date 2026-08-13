import mongoose from "mongoose";
import dotenv from "dotenv";

import District from "../models/District.js";
import Destination from "../models/Destination.js";

import destinations from "./destinations/index.js";

dotenv.config();
const seedDestinations = async () => {
  try {
    // Connect MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("=================================");
    console.log("✅ MongoDB Connected");
    console.log("=================================");

    // Delete old destinations
    await Destination.deleteMany();

    console.log("🗑 Old Destinations Deleted");

    // Get all districts
    const districts = await District.find();

    // Create a lookup map
    const districtMap = {};

    districts.forEach((district) => {
      districtMap[district.name] = district._id;
    });

    // Replace district name with ObjectId
    const formattedDestinations = destinations.map((destination) => {
      const districtId = districtMap[destination.district];

      if (!districtId) {
        console.log(`❌ District Not Found: ${destination.district}`);
      }

      return {
        ...destination,
        district: districtId,
      };
    });

    // Insert destinations
    await Destination.insertMany(formattedDestinations);

    console.log("=================================");
    console.log(
      `🎉 ${formattedDestinations.length} Destinations Added Successfully`
    );
    console.log("=================================");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDestinations();