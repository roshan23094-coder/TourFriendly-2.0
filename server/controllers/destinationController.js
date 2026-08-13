import Destination from "../models/Destination.js";
import Hotel from "../models/Hotel.js";

// ==========================================
// Add Destination
// ==========================================
export const addDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json({
      success: true,
      message: "Destination added successfully",
      data: destination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get All Destinations
// ==========================================
export const getAllDestinations = async (req, res) => {
  try {
    const { district, category, search } = req.query;

    let filter = {};

    if (district) filter.district = district;

    if (category) filter.category = category;

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const destinations = await Destination.find(filter)
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

// ==========================================
// Get Destination By ID
// ==========================================
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id)
      .populate("district", "name");

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    const hotels = await Hotel.find({
      destination: destination._id,
    }).sort({ rating: -1 });

    res.status(200).json({
      success: true,
      destination,
      totalHotels: hotels.length,
      hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get Top Rated Destinations
// ==========================================
export const getTopDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find()
      .populate("district", "name")
      .sort({ rating: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      data: destinations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Update Destination
// ==========================================
export const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Destination updated successfully",
      data: destination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete Destination
// ==========================================
export const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Destination deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};