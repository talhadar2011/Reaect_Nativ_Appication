// import axios from "axios";
// import * as SecureStore from "expo-secure-store";

// const API_URL = "https://your-backend-api.com/api"; // Replace with your backend URL

// export const apiClient = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Automatically attach JWT token to every request if it exists
// apiClient.interceptors.request.use(
//   async (config) => {
//     const token = await SecureStore.getItemAsync("user_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
