import API from "./api";

// Get All Hotels
export const getAllHotels = async () => {
  const response = await API.get("/hotels");
  return response.data;
};

// Get Hotel By ID
export const getHotelById = async (id) => {
  const response = await API.get(`/hotels/${id}`);
  return response.data;
};