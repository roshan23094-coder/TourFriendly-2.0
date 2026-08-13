import User from "../models/User.js";
import District from "../models/District.js";
import Destination from "../models/Destination.js";
import Hotel from "../models/Hotel.js";
import Booking from "../models/Booking.js";
import Review from "../models/Review.js";

export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();

    const districts = await District.countDocuments();

    const destinations =
      await Destination.countDocuments();

    const hotels =
      await Hotel.countDocuments();

    const bookings =
      await Booking.countDocuments();

    const reviews =
      await Review.countDocuments();

    const recentBookings =
      await Booking.find()
        .populate("user", "name")
        .populate("hotel", "name")
        .sort({ createdAt: -1 })
        .limit(5);

    res.status(200).json({
      success: true,

      stats: {
        users,
        districts,
        destinations,
        hotels,
        bookings,
        reviews,
      },

      recentBookings,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};