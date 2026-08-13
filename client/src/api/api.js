import axios from "axios";

const API = axios.create({
  baseURL: "https://tourfriendly-2-0.onrender.com/api",
});

export default API;