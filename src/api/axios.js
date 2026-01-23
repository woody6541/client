import axios from "axios";

const api = axios.create({
  baseURL: "https://server-ikbt.onrender.com",
});

export default api;
