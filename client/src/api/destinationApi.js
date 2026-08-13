import API from "./api";

// Get All Destinations
export const getAllDestinations = async () => {
  const response = await API.get("/destinations");
  return response.data;
};

// Get Destination By ID
export const getDestinationById = async (id) => {
  const response = await API.get(`/destinations/${id}`);
  return response.data;
};