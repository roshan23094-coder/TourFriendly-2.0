import Review from "../models/Review.js";

// ======================================
// Add Review
// ======================================
export const addReview = async (req, res) => {
  try {
    const {
      user,
      hotel,
      destination,
      rating,
      comment,
    } = req.body;

    // Either hotel or destination must be provided
    if (!hotel && !destination) {
      return res.status(400).json({
        success: false,
        message: "Hotel or Destination is required",
      });
    }

    const review = await Review.create({
      user,
      hotel: hotel || null,
      destination: destination || null,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Review Added Successfully",
      review,
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
// Get Hotel Reviews
// ======================================
export const getHotelReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      hotel: req.params.hotelId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    const averageRating =
      reviews.length > 0
        ? (
            reviews.reduce(
              (sum, review) => sum + review.rating,
              0
            ) / reviews.length
          ).toFixed(1)
        : 0;

    res.status(200).json({
      success: true,
      count: reviews.length,
      averageRating,
      reviews,
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
// Get Destination Reviews
// ======================================
export const getDestinationReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      destination: req.params.destinationId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    const averageRating =
      reviews.length > 0
        ? (
            reviews.reduce(
              (sum, review) => sum + review.rating,
              0
            ) / reviews.length
          ).toFixed(1)
        : 0;

    res.status(200).json({
      success: true,
      count: reviews.length,
      averageRating,
      reviews,
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
// Delete Review
// ======================================
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(
      req.params.id
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};