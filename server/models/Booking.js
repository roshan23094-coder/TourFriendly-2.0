import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
      default: 1,
    },

    rooms: {
      type: Number,
      required: true,
      default: 1,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    bookingStatus: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Cancelled",
      ],
      default: "Pending",
    },

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Paid",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);