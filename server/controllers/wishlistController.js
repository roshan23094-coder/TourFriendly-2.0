import Wishlist from "../models/Wishlist.js";

// ====================================
// Add To Wishlist
// ====================================
export const addToWishlist = async (req, res) => {
  try {
    const { user, hotel, destination } = req.body;

    if (!hotel && !destination) {
      return res.status(400).json({
        success: false,
        message: "Hotel or Destination is required",
      });
    }

    const existing = await Wishlist.findOne({
      user,
      hotel: hotel || null,
      destination: destination || null,
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Already Added To Wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user,
      hotel: hotel || null,
      destination: destination || null,
    });

    res.status(201).json({
      success: true,
      message: "Added To Wishlist",
      wishlist,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Get Wishlist
// ====================================
export const getWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.find({
      user: req.params.userId,
    })
      .populate("hotel")
      .populate("destination")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Remove Wishlist
// ====================================
export const deleteWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.findByIdAndDelete(
      req.params.id
    );

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Removed From Wishlist",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};