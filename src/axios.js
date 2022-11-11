import axios from "axios";

const instance = axios.create({
  baseURL: "https://cv-builder-backend.onrender.com",
});

export default instance;