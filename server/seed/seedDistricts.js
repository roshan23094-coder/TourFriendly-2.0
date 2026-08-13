import mongoose from "mongoose";
import dotenv from "dotenv";

import District from "../models/District.js";
import districts from "./districtData.js";

dotenv.config();

const seedDistricts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    await District.deleteMany({});
    console.log("🗑 Old Districts Deleted");

    const insertedDistricts = await District.insertMany(districts);

    console.log(`🎉 ${insertedDistricts.length} Districts Added Successfully`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:");
    console.error(error);

    process.exit(1);
  }
};

seedDistricts();