import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

import District from "../models/District.js";

dotenv.config();

// Connect Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    // Read JSON file
    const districts = JSON.parse(
      fs.readFileSync("./seed/data/districts.json", "utf-8")
    );

    // Delete old data
    await District.deleteMany();

    // Insert new data
    await District.insertMany(districts);

    console.log("✅ Districts Imported Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();