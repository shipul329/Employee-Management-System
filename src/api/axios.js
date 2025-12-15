import axios from "axios";

/**
 * Axios instance for API communication
 * Used across the frontend application
 */
const api = axios.create({
  baseURL: "http://localhost:8080", // Spring Boot backend
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: request interceptor
api.interceptors.request.use(
  (config) => {
    // You can attach auth tokens here later
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
