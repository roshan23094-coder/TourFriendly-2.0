import Booking from "../models/Booking.js";

// ======================================
// Create Booking
// ======================================
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.body.user,
      hotel: req.body.hotel,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      guests: req.body.guests,
      rooms: req.body.rooms,
      totalPrice: req.body.totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Get User Bookings
// ======================================
export const getUserBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({
      user: req.params.userId,
    })
      .populate("hotel")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Get All Bookings (Admin)
// ======================================
export const getAllBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("hotel")
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Cancel Booking
// ======================================
export const cancelBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        bookingStatus: "Cancelled",
      },
      {
        new: true,
      }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking Cancelled Successfully",
      booking,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};