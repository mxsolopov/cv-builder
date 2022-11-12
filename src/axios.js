import axios from "axios";

const instance = axios.create({
  // baseURL: "https://cv-builder-backend.onrender.com",
  baseURL: "http://localhost:9000",
});

export default instance;