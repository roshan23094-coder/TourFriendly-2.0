import api from "./api";

// =========================
// Get All Districts
// =========================
export const getAllDistricts = async () => {
  const res = await api.get("/districts");
  return res.data;
};

// =========================
// Get District By ID
// =========================
export const getDistrictById = async (id) => {
  const res = await api.get(`/districts/${id}`);
  return res.data;
};

// =========================
// Add District
// =========================
export const addDistrict = async (district) => {
  const res = await api.post("/districts", district);
  return res.data;
};

// =========================
// Update District
// =========================
export const updateDistrict = async (id, district) => {
  const res = await api.put(`/districts/${id}`, district);
  return res.data;
};

// =========================
// Delete District
// =========================
export const deleteDistrict = async (id) => {
  const res = await api.delete(`/districts/${id}`);
  return res.data;
};