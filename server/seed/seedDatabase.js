import dotenv from "dotenv";
import mongoose from "mongoose";

import District from "../models/District.js";
import Destination from "../models/Destination.js";
import Hotel from "../models/Hotel.js";

import districts from "./districtData.js";
import destinations from "./destinations/index.js";
import hotels from "./hotels/index.js";

dotenv.config();

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

const seedDatabase = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    // ========================================
    // DELETE OLD DATA
    // ========================================

    console.log("🗑 Deleting old data...");

    await Hotel.deleteMany({});
    await Destination.deleteMany({});
    await District.deleteMany({});

    console.log("✅ Old data deleted.");

    // ========================================
    // INSERT DISTRICTS
    // ========================================

    console.log("🏙️ Inserting districts...");

    const insertedDistricts =
      await District.insertMany(districts);

    console.log(
      `✅ Inserted ${insertedDistricts.length} districts`
    );

    // ========================================
    // DISTRICT MAP
    // ========================================

    const districtMap = {};

    insertedDistricts.forEach((district) => {
      districtMap[district.name] = district._id;
    });

    // ========================================
    // PREPARE DESTINATIONS
    // ========================================

    console.log("📍 Preparing destinations...");

    const destinationData = destinations.map(
      (destination) => {

        const districtId =
          districtMap[destination.district];

        // ----------------------------------------
        // FIX IMAGE
        // ----------------------------------------

        let image = destination.image;

        if (
          !image ||
          typeof image !== "string" ||
          image.trim() === ""
        ) {
          image = DEFAULT_IMAGE;
        }

        // ----------------------------------------
        // FIX ATTRACTIONS
        // ----------------------------------------

        let attractions = [];

        if (Array.isArray(destination.attractions)) {

          attractions =
            destination.attractions.map(
              (attraction) => {

                // Already an object
                if (
                  typeof attraction === "object" &&
                  attraction !== null
                ) {
                  return {
                    name: attraction.name || "",
                    description:
                      attraction.description || "",
                    image:
                      attraction.image || "",
                    timings:
                      attraction.timings || "",
                  };
                }

                // String → object
                return {
                  name: String(attraction),
                  description: "",
                  image: "",
                  timings: "",
                };
              }
            );
        }

        // ----------------------------------------
        // RETURN CLEAN DESTINATION
        // ----------------------------------------

        return {
          ...destination,

          district: districtId,

          image: image,

          attractions: attractions,
        };
      }
    );

    // ========================================
    // INSERT DESTINATIONS
    // ========================================

    console.log("📍 Inserting destinations...");

    const insertedDestinations =
      await Destination.insertMany(
        destinationData
      );

    console.log(
      `✅ Inserted ${insertedDestinations.length} destinations`
    );

    // ========================================
    // DESTINATION MAP
    // ========================================

    const destinationMap = {};

    insertedDestinations.forEach(
      (destination) => {
        destinationMap[destination.title] =
          destination._id;
      }
    );

    // ========================================
    // PREPARE HOTELS
    // ========================================

    console.log("🏨 Preparing hotels...");

    const hotelData = hotels.map((hotel) => {

      const districtId =
        districtMap[hotel.district];

      const destinationId =
        hotel.destination
          ? destinationMap[hotel.destination]
          : null;

      return {
        ...hotel,
        district: districtId,
        destination: destinationId,
      };
    });

    // ========================================
    // INSERT HOTELS
    // ========================================

    console.log("🏨 Inserting hotels...");

    const insertedHotels =
      await Hotel.insertMany(hotelData);

    console.log(
      `✅ Inserted ${insertedHotels.length} hotels`
    );

    // ========================================
    // SUCCESS
    // ========================================

    console.log("");
    console.log("========================================");
    console.log("🎉 DATABASE SEEDED SUCCESSFULLY");
    console.log("========================================");
    console.log(
      `🏙️ Districts: ${insertedDistricts.length}`
    );
    console.log(
      `📍 Destinations: ${insertedDestinations.length}`
    );
    console.log(
      `🏨 Hotels: ${insertedHotels.length}`
    );
    console.log("========================================");

    await mongoose.connection.close();

    process.exit(0);

  } catch (error) {

    console.error("");
    console.error("❌ SEED ERROR");
    console.error("========================================");
    console.error(error);
    console.error("========================================");

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedDatabase();