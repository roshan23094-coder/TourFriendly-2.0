import Hotel from "../models/Hotel.js";

// ==========================================
// Add Hotel
// ==========================================
export const addHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Hotel added successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get All Hotels
// ==========================================
export const getAllHotels = async (req, res) => {
  try {
    const { district, destination, search } = req.query;

    let filter = {};

    if (district) filter.district = district;

    if (destination) filter.destination = destination;

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    const hotels = await Hotel.find(filter)
      .populate("district", "name")
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

// ==========================================
// Get Hotel By ID
// ==========================================
export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
      .populate("district", "name")
      .populate("destination", "title image");

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Top Rated Hotels
// ==========================================
export const getTopHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
      .populate("district", "name")
      .populate("destination", "title")
      .sort({ rating: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Update Hotel
// ==========================================
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hotel updated successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete Hotel
// ==========================================
export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hotel deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};