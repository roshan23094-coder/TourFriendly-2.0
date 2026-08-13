import mongoose from "mongoose";
import dotenv from "dotenv";

import District from "../models/District.js";
import Destination from "../models/Destination.js";
import Hotel from "../models/Hotel.js";

import hotels from "./hotels/index.js";

dotenv.config();

const seedHotels = async () => {
  try {
    // Connect MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("=================================");
    console.log("✅ MongoDB Connected");
    console.log("=================================");

    // Delete existing hotels
    await Hotel.deleteMany();

    console.log("🗑 Old Hotels Deleted");

    // Fetch districts
    const districts = await District.find();

    const districtMap = {};

    districts.forEach((district) => {
      districtMap[district.name] = district._id;
    });

    // Fetch destinations
    const destinations = await Destination.find();

    const destinationMap = {};

    destinations.forEach((destination) => {
      destinationMap[destination.title] = destination._id;
    });

    // Convert names to ObjectIds
    const formattedHotels = hotels.map((hotel) => {
      const districtId = districtMap[hotel.district];
      const destinationId = destinationMap[hotel.destination];

      if (!districtId) {
        console.log(`❌ District Not Found: ${hotel.district}`);
      }

      if (!destinationId) {
        console.log(`⚠ Destination Not Found: ${hotel.destination}`);
      }

      return {
        ...hotel,
        district: districtId,
        destination: destinationId || null,
      };
    });

    // Insert Hotels
    await Hotel.insertMany(formattedHotels);

    console.log("=================================");
    console.log(`🎉 ${formattedHotels.length} Hotels Added Successfully`);
    console.log("=================================");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedHotels();