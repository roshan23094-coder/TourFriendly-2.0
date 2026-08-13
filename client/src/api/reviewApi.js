import api from "./api";

// Add Review
export const addReview = async (reviewData) => {
  const response = await api.post("/reviews", reviewData);
  return response.data;
};

// Get Reviews of a Hotel
export const getHotelReviews = async (hotelId) => {
  const response = await api.get(`/reviews/${hotelId}`);
  return response.data;
};

// Delete Review
export const deleteReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};