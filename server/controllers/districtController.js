import District from "../models/District.js";
import Destination from "../models/Destination.js";
import Hotel from "../models/Hotel.js";

// ===============================
// Create District
// ===============================
export const addDistrict = async (req, res) => {
  try {
    const district = await District.create(req.body);

    res.status(201).json({
      success: true,
      message: "District added successfully",
      data: district,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get All Districts
// ===============================
export const getAllDistricts = async (req, res) => {
  try {
    const districts = await District.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: districts.length,
      data: districts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get District By ID
// ===============================
export const getDistrictById = async (req, res) => {
  try {
    const district = await District.findById(req.params.id);

    if (!district) {
      return res.status(404).json({
        success: false,
        message: "District not found",
      });
    }

    const destinations = await Destination.find({
      district: district._id,
    })
      .populate("district", "name")
      .sort({ rating: -1 });

    const hotels = await Hotel.find({
      district: district._id,
    })
      .populate("destination", "title image")
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      district,
      totalDestinations: destinations.length,
      totalHotels: hotels.length,
      destinations,
      hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get Destinations of District
// ===============================
export const getDistrictDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({
      district: req.params.id,
    })
      .populate("district", "name")
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get Hotels of District
// ===============================
export const getDistrictHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({
      district: req.params.id,
    })
      .populate("destination", "title image")
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update District
// ===============================
export const updateDistrict = async (req, res) => {
  try {
    const district = await District.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!district) {
      return res.status(404).json({
        success: false,
        message: "District not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "District updated successfully",
      data: district,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Delete District
// ===============================
export const deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByIdAndDelete(req.params.id);

    if (!district) {
      return res.status(404).json({
        success: false,
        message: "District not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "District deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};