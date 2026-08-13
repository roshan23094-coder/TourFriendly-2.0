import api from "./api";

// ===============================
// Create Booking
// ===============================

export const createBooking = async (bookingData) => {
  const res = await api.post("/bookings", bookingData);
  return res.data;
};

// ===============================
// Get User Bookings
// ===============================

export const getUserBookings = async (userId) => {
  const res = await api.get(`/bookings/user/${userId}`);
  return res.data;
};

// ===============================
// Get All Bookings (Admin)
// ===============================

export const getAllBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
};

// ===============================
// Cancel Booking
// ===============================

export const cancelBooking = async (bookingId) => {
  const res = await api.put(`/bookings/cancel/${bookingId}`);
  return res.data;
};