import api from "./api";

// Add Wishlist
export const addWishlist = async (wishlistData) => {
  const response = await api.post("/wishlist", wishlistData);
  return response.data;
};

// Get Wishlist
export const getWishlist = async (userId) => {
  const response = await api.get(`/wishlist/${userId}`);
  return response.data;
};

// Delete Wishlist
export const deleteWishlist = async (id) => {
  const response = await api.delete(`/wishlist/${id}`);
  return response.data;
};